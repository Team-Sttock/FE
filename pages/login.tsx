import { Noto_Sans } from 'next/font/google'
import Link from 'next/link'
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
    id: string
    password: string
  }>({
    mode: 'onChange',
  })

  const onSubmit = () => {}

  const onError = () => {}

  return (
    <div className="w-full max-w-sm m-auto px-4">
      <header className="pt-20 pb-10">
        <h1
          className={classNames(
            'text-center text-2xl text-dark-brown font-semibold',
            NotoSans.className
          )}
        >
          로그인
        </h1>
      </header>
      <main className="pb-10">
        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-2">
          <Input
            {...register('id', {})}
            errorMessage={errors.id?.message}
            placeholder="아이디"
          ></Input>
          <Input
            {...register('password', {})}
            errorMessage={errors.password?.message}
            placeholder="비밀번호"
          ></Input>
          <div className="py-1">
            <Button className="h-12">로그인</Button>
          </div>
        </form>
        <section className="flex items-center justify-center py-3 space-x-2 text-dark-brown">
          <Link href="/find-id" className="text-sm">
            아이디 찾기
          </Link>
          <span className="inline-block w-0.5 h-4 bg-light-brown"></span>
          <Link href="/find-password" className="text-sm text-dark-brown">
            비밀번호 찾기
          </Link>
        </section>
        <section className="pt-3">
          <p
            className={classNames(
              'relative text-center text-dark-brown',
              'before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-0.5 before:w-[30%] before:bg-light-brown',
              'after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:h-0.5 after:w-[30%] after:bg-light-brown'
            )}
          >
            SNS 로그인
          </p>
          <section className="flex items-center justify-center pt-2 space-x-6">
            <button className="w-12 h-12 p-2 rounded-md overflow-hidden bg-[rgb(249,224,0)]">
              <img
                src="/logo/kakao-no-bg.png"
                className="w-full h-full object-cover"
                alt="카카오 로고 배경 없는 버전"
              ></img>
            </button>
            <button className="w-12 h-12 p-2 rounded-md overflow-hidden bg-[rgb(30,200,0)]">
              <img
                src="/logo/naver-no-bg.png"
                className="w-full h-full object-cover"
                alt="네이버 로고 배경 없는 버전"
              ></img>
            </button>
          </section>
        </section>
        <section className="pt-6">
          <p
            className={classNames(
              'relative text-center text-dark-brown',
              'before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-0.5 before:w-[30%] before:bg-light-brown',
              'after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:h-0.5 after:w-[30%] after:bg-light-brown'
            )}
          >
            처음 오셨나요?
          </p>
          <Button className="h-12 mt-6"> 회원 가입</Button>
        </section>
      </main>
    </div>
  )
}
