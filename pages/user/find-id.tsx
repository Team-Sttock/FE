import { isAxiosError } from 'axios'
import { Noto_Sans } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { type ServerErrorRes } from '@/apis'
import { type PostFindLoginIdProps } from '@/apis/user'
import Button from '@/components/Button'
import Input from '@/components/Input'
import InputLabel from '@/components/InputLabel'
import { useFindLoginId } from '@/hooks/auth/mutations/useFindLoginId'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<PostFindLoginIdProps>({
    mode: 'onChange',
  })

  const { mutateAsync, isPending } = useFindLoginId()
  const [step, setStep] = useState<'FORM' | 'RESULT'>('FORM')
  const [userLoginId, setUserLoginId] = useState('')

  const onSubmit = async (formData: PostFindLoginIdProps) => {
    try {
      const {
        data: { loginId },
      } = await mutateAsync(formData)

      setStep('RESULT')
      setUserLoginId(loginId)
    } catch (error) {
      if (
        isAxiosError<ServerErrorRes>(error) &&
        (error.response?.status === 400 || error.response?.status === 404)
      ) {
        setError('email', { message: '잘못된 이메일입니다.' })
        return
      }
      setError('root', { message: '아이디 찾기 도중 에러가 발생했습니다.' })
    }
  }

  return (
    <div className="w-full max-w-sm m-auto px-4">
      <header className="pt-20 pb-6">
        <h1
          className={classNames(
            'text-center text-2xl text-dark-brown font-semibold',
            NotoSans.className
          )}
        >
          이메일로 아이디 찾기
        </h1>
        {step === 'FORM' && (
          <p className="mt-3 text-center text-dark-brown">
            이메일을 입력하시면 <br />
            아이디를 알려드립니다.
          </p>
        )}
      </header>
      <main className="pb-10">
        {step === 'FORM' && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <InputLabel label="이메일" errorMessage={errors.email?.message}>
              <Input
                {...register('email', { required: '이메일을 입력해주세요.' })}
                type="text"
                placeholder="이메일"
              ></Input>
            </InputLabel>
            <div className="py-1">
              {errors.root?.message && (
                <div className="pb-2 text-center">
                  <p className="text-red-500 text-sm font-sans pt-0.5">
                    {errors.root?.message}
                  </p>
                </div>
              )}
              <Button
                type="submit"
                className="h-12 w-full"
                disabled={isPending}
              >
                아이디 찾기
              </Button>
            </div>
          </form>
        )}
        {step === 'RESULT' && (
          <>
            <p className="text-center text-dark-brown">
              회원님의 아이디는{' '}
              <span className="text-xl font-semibold">{userLoginId}</span>{' '}
              입니다!
            </p>
            <Link
              href="/login"
              className="h-12 mt-6 w-full border border-beige font-semibold flex items-center justify-center bg-ivory text-dark-brown"
            >
              로그인하기
            </Link>
          </>
        )}
      </main>
    </div>
  )
}
