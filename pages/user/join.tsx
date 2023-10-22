import { Noto_Sans } from 'next/font/google'
import { forwardRef, type InputHTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'

import { type PostSignupProps } from '@/apis/user'
import Button from '@/components/Button'
import DatePickerField from '@/components/DatepickerField'
import Input from '@/components/Input'
import InputLabel from '@/components/InputLabel'
import Navbar from '@/components/Navbar'
import { useCheckLoginId } from '@/hooks/auth/mutations/useCheckLoginId'
import { useEmailCode } from '@/hooks/auth/mutations/useEmailCode'
import { useSignUp } from '@/hooks/auth/mutations/useSignUp'
import { useVerifyEmail } from '@/hooks/auth/mutations/useVerifyEmail'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

interface RegisterForm extends Omit<PostSignupProps, 'birthday'> {
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
    },
  })

  const { login_id, email, gender_cd, auth_number, password } = watch()

  const isMan = gender_cd === '1'

  const [isSendEmail, setIsSendEmail] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidLoginId, setIsValidLoginId] = useState(false)

  const { mutateAsync: checkLoginId } = useCheckLoginId()
  const onCheckLoginId = async () => {
    try {
      await checkLoginId({ login_id })
      setIsValidLoginId(true)
    } catch (err) {
      setError('login_id', { message: '중복된 로그인 아이디입니다.' })
    }
  }

  const { mutateAsync: sendEmailCode } = useEmailCode()
  const onSendCode = async () => {
    try {
      await sendEmailCode({ email })
      setIsSendEmail(true)
    } catch (err) {
      setError('email', { message: '중복된 이메일 입니다.' })
    }
  }

  const { mutateAsync: verifyEmail } = useVerifyEmail()
  const onCheckEmail = async () => {
    try {
      await verifyEmail({ email, auth_number })
      setIsValidEmail(true)
    } catch (err) {
      setError('auth_number', { message: '유효하지 않은 인증번호입니다.' })
    }
  }

  const { mutateAsync: signUp } = useSignUp()
  const onSubmit = async (data: RegisterForm) => {
    if (!isValidEmail) {
      setError('email', { message: '이메일 인증이 완료되지 않았습니다.' })
    }
    if (!isValidLoginId) {
      setError('login_id', {
        message: '로그인 아이디 중복 검사를 완료하지 않았습니다.',
      })
    }

    try {
      await signUp({ ...data, birthday: data.birthday.toISOString() })
    } catch (err) {
      // 추후 정의
    }
  }

  const onError = () => {}

  return (
    <>
      <Navbar></Navbar>
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
                    })}
                    placeholder="testId"
                  ></Input>
                  <Button
                    className="w-28"
                    onClick={onCheckLoginId}
                    type="button"
                  >
                    중복확인
                  </Button>
                </div>
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
                  <Button className="w-28" onClick={onSendCode} type="button">
                    인증하기
                  </Button>
                </div>
              </InputLabel>
              {isSendEmail && (
                <div className="flex items-stretch space-x-1">
                  <Input
                    {...register('auth_number')}
                    placeholder="********"
                  ></Input>
                  <Button className="w-28" onClick={onCheckEmail} type="button">
                    확인
                  </Button>
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
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        '비밀번호는 영문과 숫자를 조합한 8자리 이상이어야 합니다.',
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
              <InputLabel label="가족 수">
                <Input
                  {...register('family_num', {})}
                  type="number"
                  placeholder="4"
                ></Input>
              </InputLabel>
              <InputLabel label="생일">
                <DatePickerField
                  control={control}
                  name={'birthday'}
                ></DatePickerField>
              </InputLabel>
            </div>
            <div className="mt-8">
              <Button className="h-12 w-full">회원가입</Button>
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
