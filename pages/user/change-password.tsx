import { Noto_Sans } from 'next/font/google'

import Input from '@/components/Input'
import InputLabel from '@/components/InputLabel'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

export default function Page() {
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

        <div className="w-full max-w-2xl m-auto flex-col justify-center items-center space-y-4">
          <InputLabel
            label="현재 비밀번호"
            errorMessage="현재 비밀번호를 입력해주세요."
          >
            <Input
              type="password"
              name="currentPassword"
              placeholder="현재 비밀번호를 입력하세요."
            />
          </InputLabel>
          <InputLabel
            label="새 비밀번호"
            errorMessage="새 비밀번호를 입력해주세요."
          >
            <Input
              type="password"
              name="newPassword"
              placeholder="새 비밀번호를 입력하세요."
            />
          </InputLabel>
          <InputLabel
            label="비밀번호 확인"
            errorMessage="비밀번호 확인을 입력해주세요."
            required
          >
            {/* <Input
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
            ></Input> */}
          </InputLabel>
        </div>
      </main>
    </>
  )
}
