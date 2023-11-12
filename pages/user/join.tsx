import { isAxiosError } from 'axios'
import { Noto_Sans } from 'next/font/google'
import { useRouter } from 'next/router'
import { forwardRef, type InputHTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'

import { type PostSignupProps } from '@/apis/user'
import Button from '@/components/Button'
import DatePickerField from '@/components/DatepickerField'
import Input from '@/components/Input'
import InputLabel from '@/components/InputLabel'
import { useCheckCode } from '@/hooks/auth/mutations/useCheckCode'
import { useCheckLoginId } from '@/hooks/auth/mutations/useCheckLoginId'
import { useEmailCode } from '@/hooks/auth/mutations/useEmailCode'
import { useSignUp } from '@/hooks/auth/mutations/useSignUp'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

interface RegisterForm extends Omit<PostSignupProps, 'birthday' | 'gender_cd'> {
  gender_cd: '1' | '2'
  auth_number: string
  password_check: string
  birthday: Date
}

export default function Page() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    control,
    watch,
  } = useForm<RegisterForm>({
    mode: 'onChange',
    defaultValues: {
      gender_cd: '1',
      family_num: 1,
    },
  })

  const router = useRouter()

  const { login_id, email, gender_cd, auth_number, password } = watch()

  const isMan = gender_cd === '1'

  const [isValidLoginId, setIsValidLoginId] = useState(false)
  const [emailStatus, setEmailStatus] = useState<'none' | 'sended' | 'success'>(
    'none'
  )

  const { mutateAsync: checkLoginId, isPending: isCheckLoginIdPending } =
    useCheckLoginId()
  const onCheckLoginId = async () => {
    try {
      await checkLoginId({ login_id })
      setIsValidLoginId(true)
    } catch (err) {
      if (!isAxiosError(err)) {
        setError('login_id', { message: '에러가 발생했습니다.' })
        return
      }
      if (err.response?.data?.code === 'E409001') {
        setError('login_id', { message: '이미 존재하는 아이디입니다.' })
        return
      }
      setError('login_id', { message: '요청 중 에러가 발생했습니다.' })
    }
  }

  const { mutateAsync: sendEmailCode, isPending: isSendEmailPending } =
    useEmailCode()

  const onSendCode = async () => {
    try {
      setEmailStatus('none')
      await sendEmailCode({ email })
      setEmailStatus('sended')
    } catch (err) {
      if (!isAxiosError(err)) {
        setError('email', { message: '에러가 발생했습니다.' })
        return
      }
      if (err.response?.data?.code === 'E409002') {
        setError('email', { message: '이미 존재하는 이메일입니다.' })
        return
      }
      setError('email', { message: '요청 중 에러가 발생했습니다.' })
    }
  }

  const { mutateAsync: verifyEmail, isPending: isCheckCodePending } =
    useCheckCode()

  const onCheckEmail = async () => {
    try {
      if (emailStatus === 'none') {
        setError('email', {
          message: '이메일 인증번호 전송 요청이 필요합니다.',
        })
        return
      }

      await verifyEmail({ email, auth_number })
      setEmailStatus('success')
    } catch (err) {
      if (!isAxiosError(err)) {
        setError('auth_number', { message: '에러가 발생했습니다.' })
        return
      }
      if (err.response?.data?.code === 'E400001') {
        setError('auth_number', { message: '인증 번호가 일치하지 않습니다.' })
        return
      }
      setError('auth_number', { message: '요청 중 에러가 발생했습니다.' })
    }
  }

  const { mutateAsync: signUp, isPending: isSignUpPeading } = useSignUp()

  const onSubmit = async ({
    auth_number,
    password_check,
    birthday,
    gender_cd,
    ...props
  }: RegisterForm) => {
    if (emailStatus === 'none') {
      setError('email', {
        message: '이메일로 확인 코드를 받아야 합니다.',
      })
      return
    }
    if (emailStatus === 'sended') {
      setError('auth_number', {
        message: '이메일 확인 번호 인증이 완료되지 않았습니다.',
      })
      return
    }
    if (!isValidLoginId) {
      setError('login_id', {
        message: '로그인 아이디 중복 검사를 완료하지 않았습니다.',
      })
      return
    }

    try {
      await signUp({
        ...props,
        gender_cd: parseInt(gender_cd, 10),
        birthday: birthday.toISOString(),
      })
      void router.push('/login')
    } catch (err) {}
  }

  const onError = () => {}

  return (
    <>
      <div className="w-full max-w-md m-auto px-4">
        <header className="pt-20 pb-6">
          <h1
            className={classNames(
              'text-center text-2xl text-dark-brown font-semibold ',
              NotoSans.className
            )}
          >
            회원가입
          </h1>
        </header>
        <main className="pb-16">
          <p className="text-right text-sm text-dark-brown pb-1">
            * 는 필수입력입니다.
          </p>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="space-y-2">
              <InputLabel
                label="아이디"
                required
                errorMessage={errors.login_id?.message}
              >
                <div className="flex items-stretch space-x-1">
                  <Input
                    {...register('login_id', {
                      required: '아이디는 필수 입력입니다.',
                      onChange: () => {
                        setIsValidLoginId(false)
                      },
                    })}
                    placeholder="testId"
                  ></Input>
                  <Button
                    className="w-28"
                    onClick={onCheckLoginId}
                    type="button"
                    disabled={
                      login_id?.length === 0 || !!errors.login_id?.message
                    }
                    isLoading={isCheckLoginIdPending}
                  >
                    중복확인
                  </Button>
                </div>
                {isValidLoginId && (
                  <p className="pt-0.5 text-sm font-sans text-dark-brown">
                    사용 가능한 아이디 입니다.
                  </p>
                )}
              </InputLabel>
              <InputLabel
                label="이메일"
                required
                errorMessage={errors.email?.message}
              >
                <div className="flex items-stretch space-x-1">
                  <Input
                    {...register('email', {
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        message: '유효한 이메일 형식이 아닙니다.',
                      },
                      required: '이메일은 필수 입력입니다.',
                    })}
                    placeholder="test@example.com"
                  ></Input>
                  <Button
                    className="w-28"
                    onClick={onSendCode}
                    type="button"
                    disabled={email?.length === 0 || !!errors.email?.message}
                    isLoading={isSendEmailPending}
                  >
                    인증하기
                  </Button>
                </div>
              </InputLabel>
              {emailStatus === 'sended' && (
                <div>
                  <div className="flex items-stretch space-x-1">
                    <Input
                      {...register('auth_number')}
                      placeholder="********"
                    ></Input>
                    <Button
                      className="w-28"
                      onClick={onCheckEmail}
                      type="button"
                      isLoading={
                        auth_number?.length === 0 && isCheckCodePending
                      }
                    >
                      확인
                    </Button>
                  </div>
                  {(() => {
                    if (errors.auth_number?.message) {
                      return (
                        <p className="text-red-500 text-sm font-sans pt-0.5">
                          {errors.auth_number?.message}
                        </p>
                      )
                    }
                    if (emailStatus === 'sended') {
                      return (
                        <p className="pt-0.5 text-sm font-sans text-dark-brown">
                          이메일 확인 후 인증 번호를 입력해주세요.
                        </p>
                      )
                    }
                    return (
                      <p className="pt-0.5 text-sm font-sans text-dark-brown">
                        인증에 성공하셨습니다.
                      </p>
                    )
                  })()}
                </div>
              )}
              <InputLabel
                label="비밀번호"
                errorMessage={errors.password?.message}
                required
              >
                <Input
                  {...register('password', {
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/,
                      message:
                        '비밀번호는 영어, 숫자, 특수 문자를 포함하여 6자리 이상이어야 합니다.',
                    },
                    required: '비밀번호는 필수 입력입니다.',
                  })}
                  type="password"
                  placeholder="***********"
                ></Input>
              </InputLabel>
              <InputLabel
                label="비밀번호 확인"
                errorMessage={errors.password_check?.message}
                required
              >
                <Input
                  {...register('password_check', {
                    required: '비밀번호 확인은 필수 입력입니다.',
                    validate: {
                      value: (passwordCheck) =>
                        passwordCheck === password ||
                        '비밀번호와 일치하지 않습니다.',
                    },
                  })}
                  type="password"
                  placeholder="***********"
                ></Input>
              </InputLabel>
              <InputLabel
                label="이름"
                errorMessage={errors.name?.message}
                required
              >
                <Input
                  {...register('name', {
                    required: '이름은 필수 입력입니다.',
                  })}
                  placeholder="홍길동"
                ></Input>
              </InputLabel>
            </div>
            <hr className="my-4 bg-dark-brown"></hr>
            <div className="space-y-2">
              <InputLabel label="가족 수" required>
                <Input
                  {...register('family_num', {
                    required: '가족 수는 필수 입력입니다.',
                  })}
                  placeholder="4"
                ></Input>
              </InputLabel>
              <InputLabel label="성별">
                <div className="flex items-center justify-between gap-3">
                  <RadioButton
                    label="남성"
                    selected={isMan}
                    {...register('gender_cd', {})}
                    value={1}
                  ></RadioButton>
                  <RadioButton
                    label="여성"
                    selected={!isMan}
                    {...register('gender_cd', {})}
                    value={2}
                  ></RadioButton>
                </div>
              </InputLabel>
              <InputLabel label="생일">
                <DatePickerField
                  control={control}
                  name={'birthday'}
                ></DatePickerField>
              </InputLabel>
            </div>
            <div className="mt-8">
              <Button className="h-12 w-full" isLoading={isSignUpPeading}>
                회원가입
              </Button>
            </div>
          </form>
        </main>
      </div>
    </>
  )
}

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  selected: boolean
}

// eslint-disable-next-line react/display-name
const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, selected, ...props }, ref) => {
    return (
      <>
        <label
          className={classNames(
            'flex items-center justify-center w-full h-10 p-3 border cursor-pointer',
            selected
              ? 'bg-dark-brown text-ivory border-dark-brown'
              : 'bg-ivory text-dark-brown border-beige'
          )}
        >
          {label}
          <input type="radio" {...props} ref={ref} className="hidden"></input>
        </label>
      </>
    )
  }
)
