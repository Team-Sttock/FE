import { Noto_Sans } from 'next/font/google'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputLabel from '@/components/InputLabel'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

interface PasswordChangeForm {
  nowPassword: string
  newPassword: string
  checkNewPassword: string
}

export default function Page() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<PasswordChangeForm>({
    mode: 'onChange',
  })

  const { newPassword } = watch()

  const onSubmit = (props: PasswordChangeForm) => {
    console.log(props)
  }

  const onError = () => {}

  return (
    <>
      <main className="m-auto max-w-5xl w-full px-4 mb-10">
        <header className="mt-10 mb-4 w-full py-2">
          <div
            className={classNames(
              'space-y-2 w-full mb-2',
              'sm:space-x-4 sm:space-y-0 sm:flex sm:justify-start sm:items-center'
            )}
          >
            <h1
              className={classNames(
                'md:text-2xl text-xl font-bold text-dark-brown',
                NotoSans.className
              )}
            >
              비밀번호 변경
            </h1>
          </div>
          <hr className="relative w-full border-1 border-beige" />
        </header>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="w-full max-w-2xl m-auto flex-col justify-center items-center space-y-4"
        >
          <InputLabel
            label="현재 비밀번호"
            errorMessage={errors.nowPassword?.message}
            required
            row
          >
            <Input
              type="password"
              placeholder="현재 비밀번호를 입력하세요."
              {...register('nowPassword', {
                required: '현재 비밀번호는 필수 입력입니다.',
              })}
            />
          </InputLabel>
          <InputLabel
            label="변경할 비밀번호"
            errorMessage={errors.newPassword?.message}
            required
            row
          >
            <Input
              type="password"
              placeholder="새 비밀번호를 입력하세요."
              {...register('newPassword', {
                required: '새 비밀번호는 필수 입력입니다.',
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/,
                  message:
                    '비밀번호는 영어, 숫자, 특수 문자를 포함하여 6자리 이상이어야 합니다.',
                },
              })}
            />
          </InputLabel>
          <InputLabel
            label="비밀번호 확인"
            errorMessage={errors.checkNewPassword?.message}
            required
            row
          >
            <Input
              {...register('checkNewPassword', {
                required: '새 비밀번호 확인은 필수 입력입니다.',
                validate: {
                  value: (passwordCheck) =>
                    passwordCheck === newPassword ||
                    '비밀번호와 일치하지 않습니다.',
                },
              })}
              type="password"
              placeholder="새 비밀번호를 다시 입력하세요."
            ></Input>
          </InputLabel>
          <div className="pt-4 flex justify-center items-center space-x-4 w-full">
            <Link href="/mypage">
              <Button type="button" className="py-2 px-6">
                마이페이지로
              </Button>
            </Link>
            <Button className="py-2 px-6" isSelected>
              변경하기
            </Button>
          </div>
        </form>
      </main>
    </>
  )
}
