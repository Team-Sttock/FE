import { Noto_Sans } from 'next/font/google'
import { type PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/features/common/components/Button'
import Input from '@/features/common/components/Input'
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
  } = useForm<{
    login_id: string
    email: string
    password: string
    password_check: string
    name: string
    gender_cd: 1 | 2
    family_num: number
    birthday: Date
  }>({
    mode: 'onChange',
  })

  const onSubmit = () => {}

  const onError = () => {}

  return (
    <div className="w-full max-w-sm m-auto px-4">
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
            <InputLabel label="이메일" required>
              <Input
                {...register('login_id', {})}
                errorMessage={errors.login_id?.message}
                placeholder="test@example.com"
              ></Input>
            </InputLabel>
            <InputLabel label="비밀번호" required>
              <Input
                {...register('password', {})}
                errorMessage={errors.password?.message}
                type="password"
                placeholder="***********"
              ></Input>
            </InputLabel>
            <InputLabel label="비밀번호 확인" required>
              <Input
                {...register('password_check', {})}
                errorMessage={errors.password_check?.message}
                type="password"
                placeholder="***********"
              ></Input>
            </InputLabel>
            <InputLabel label="이름" required>
              <Input
                {...register('name', {})}
                errorMessage={errors.name?.message}
                placeholder="홍길동"
              ></Input>
            </InputLabel>
          </div>
          <hr className="my-4 bg-dark-brown"></hr>
          <div className="space-y-2">
            <InputLabel label="성별">
              <Input
                {...register('gender_cd', {})}
                errorMessage={errors.gender_cd?.message}
                placeholder="남자"
              ></Input>
            </InputLabel>
            <InputLabel label="가족 수">
              <Input
                {...register('family_num', {})}
                errorMessage={errors.family_num?.message}
                placeholder="4"
              ></Input>
            </InputLabel>
            <InputLabel label="생일">
              <Input
                {...register('birthday', {})}
                errorMessage={errors.family_num?.message}
                placeholder="2000.01.01"
              ></Input>
            </InputLabel>
          </div>
          <div className="mt-8">
            <Button className="h-12 w-full">회원가입</Button>
          </div>
        </form>
      </main>
    </div>
  )
}

interface InputLabelProps {
  label: string
  errorMessage?: string
  required?: boolean
}

function InputLabel({
  children,
  label,
  required,
  errorMessage,
}: PropsWithChildren<InputLabelProps>) {
  return (
    <div>
      <p className="text-sm text-dark-brown pb-1">
        {label}
        {required && (
          <span className="text-light-brown text-base pl-0.5">*</span>
        )}
      </p>
      {children}
      {errorMessage}
    </div>
  )
}
