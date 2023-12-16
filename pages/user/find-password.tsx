import { isAxiosError } from 'axios'
import { Noto_Sans } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { type ServerErrorRes } from '@/apis'
import { type PostTempPasswordProps } from '@/apis/user'
import Button from '@/components/Button'
import Input from '@/components/Input'
import InputLabel from '@/components/InputLabel'
import { useTempPassword } from '@/hooks/user/useTempPassword'
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
  } = useForm<PostTempPasswordProps>({
    mode: 'onChange',
  })

  const { mutateAsync, isPending } = useTempPassword()
  const [step, setStep] = useState<'FORM' | 'RESULT'>('FORM')

  const onSubmit = async (formData: PostTempPasswordProps) => {
    try {
      await mutateAsync(formData)
      setStep('RESULT')
    } catch (error) {
      if (
        isAxiosError<ServerErrorRes>(error) &&
        (error.response?.status === 400 || error.response?.status === 404)
      ) {
        setError('root', { message: '잘못된 입력 값입니다.' })
        return
      }
      setError('root', {
        message: '임시 비밀번호 생성 도중 에러가 발생했습니다.',
      })
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
          임시 비밀번호 생성
        </h1>
        {step === 'FORM' && (
          <p className="mt-3 text-center text-dark-brown">
            이메일과 아이디를 입력하시면 <br />
            임시 비밀번호를 알려드립니다.
          </p>
        )}
      </header>
      <main className="pb-10">
        {step === 'FORM' && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <InputLabel label="아이디" errorMessage={errors.login_id?.message}>
              <Input
                {...register('login_id', {
                  required: '아이디를 입력해주세요.',
                })}
                type="text"
                placeholder="아이디"
              ></Input>
            </InputLabel>
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
                isLoading={isPending}
              >
                임시 비밀번호 전송
              </Button>
            </div>
          </form>
        )}
        {step === 'RESULT' && (
          <>
            <p className="text-center text-dark-brown">
              입력해주신 이메일로 임시 비밀번호가 전송되었어요.
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
