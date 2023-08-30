import { Noto_Sans } from 'next/font/google'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

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

  const onSubmit = ({ id, password }: { id: string; password: string }) => {
    if (!id || !password) {
      alert('아이디와 비밀번호를 모두 입력해주세요.')
      return
    }

    if (id !== '사용자아이디' || password !== '사용자 비밀번호') {
      alert(
        '등록되지 않은 아이디이거나, 아이디 또는 비밀번호를 잘못 입력했습니다.'
      )
      return
    }

    alert('로그인 성공') //임시 코드
  }

  const onError = () => {
    alert('일시적인 오류로 로그인할 수 없습니다. 잠시 후 다시 시도해주세요.')
  }

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
            <button className="w-full h-12 rounded-md bg-dark-brown text-ivory">
              로그인
            </button>
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
          <button
            className="w-full h-12 rounded-md mt-3 text-dark-brown border border-light-brown
          "
          >
            회원 가입
          </button>
        </section>
      </main>
    </div>
  )
}
