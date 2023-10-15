import { Noto_Sans } from 'next/font/google'
import { forwardRef, type InputHTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/features/common/components/Button'
import DatePickerField from '@/features/common/components/DatepickerField'
import Input from '@/features/common/components/Input'
import InputLabel from '@/features/common/components/InputLabel'
import Navbar from '@/features/common/components/Navbar'
import { classNames } from '@/features/common/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

export default function Page() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    watch,
  } = useForm<{
    login_id: string
    email: string
    password: string
    password_check: string
    name: string
    gender_cd: '1' | '2'
    family_num: number
    birthday: Date
  }>({
    mode: 'onChange',
    defaultValues: {
      gender_cd: '1',
    },
  })

  const isMan = watch().gender_cd === '1'

  const onSubmit = () => {}

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
                  <Button className="w-28">중복확인</Button>
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
                  <Button className="w-28">인증하기</Button>
                </div>
              </InputLabel>
              <InputLabel label="비밀번호" required>
                <Input
                  {...register('password', {
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        '비밀번호는 영문과 숫자를 조합한 8자리 이상이어야 합니다.',
                    },
                    required: '비밀번호는 필수 입력입니다.',
                  })}
                  errorMessage={errors.password?.message}
                  type="password"
                  placeholder="***********"
                ></Input>
              </InputLabel>
              <InputLabel label="비밀번호 확인" required>
                <Input
                  {...register('password_check', {
                    required: '비밀번호 확인은 필수 입력입니다.',
                    validate: {
                      value: (passwordCheck) =>
                        passwordCheck === watch().password ||
                        '비밀번호와 일치하지 않습니다.',
                    },
                  })}
                  errorMessage={errors.password_check?.message}
                  type="password"
                  placeholder="***********"
                ></Input>
              </InputLabel>
              <InputLabel label="이름" required>
                <Input
                  {...register('name', {
                    required: '이름은 필수 입력입니다.',
                  })}
                  errorMessage={errors.name?.message}
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
                  errorMessage={errors.family_num?.message}
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
