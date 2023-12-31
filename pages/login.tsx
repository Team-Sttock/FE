import { isAxiosError } from 'axios'
import { Noto_Sans } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { type ServerErrorRes } from '@/apis'
import { type PostLoginProps } from '@/apis/auth'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useLogin } from '@/hooks/auth/useLogin'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

export default function Page() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PostLoginProps>({
    mode: 'onChange',
  })
  const router = useRouter()

  const { mutateAsync } = useLogin()

  const onSubmit = async (data: PostLoginProps) => {
    try {
      await mutateAsync(data)
      location.href = (router.query?.continue as string) ?? '/list'
    } catch (error) {
      if (
        isAxiosError<ServerErrorRes>(error) &&
        error.response?.data.code === 'E401002'
      ) {
        setError('root', { message: '아이디나 비밀번호가 일치하지 않습니다.' })
        return
      }
      setError('root', { message: '로그인 중 에러가 발생했습니다.' })
    }
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <Input
            {...register('login_id')}
            type="text"
            placeholder="아이디"
          ></Input>
          <Input
            {...register('password')}
            type="password"
            placeholder="비밀번호"
          ></Input>
          {errors.root?.message && (
            <div className="pt-0.5">
              <p className="text-red-500 text-sm font-sans pt-0.5">
                {errors.root?.message}
              </p>
            </div>
          )}
          <div className="py-1">
            <Button type="submit" className="h-12 w-full">
              로그인
            </Button>
          </div>
        </form>
        <section className="flex items-center justify-center py-3 space-x-2 text-dark-brown">
          <Link href="/user/find-id" className="text-sm">
            아이디 찾기
          </Link>
          <span className="inline-block w-0.5 h-4 bg-light-brown"></span>
          <Link href="/user/find-password" className="text-sm text-dark-brown">
            비밀번호 찾기
          </Link>
        </section>
        <section className="pt-3">
          <p
            className={classNames(
              'relative text-center text-dark-brown',
              'before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-0.5 before:w-[30%] before:bg-ivory',
              'after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:h-0.5 after:w-[30%] after:bg-ivory'
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
              'before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-0.5 before:w-[30%] before:bg-ivory',
              'after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after:h-0.5 after:w-[30%] after:bg-ivory'
            )}
          >
            처음 오셨나요?
          </p>
          <Link
            href="/user/join"
            className="h-12 mt-6 w-full border border-beige font-semibold flex items-center justify-center bg-ivory text-dark-brown"
          >
            회원 가입
          </Link>
        </section>
      </main>
    </div>
  )
}
