import { useForm } from 'react-hook-form'

import Input from '@/common/components/Input'

export default function Page() {
  const {
    register,
    formState: { errors },
  } = useForm<{
    email: string
    password: string
  }>({
    mode: 'onChange',
  })

  console.log(errors.email)

  return (
    <div className="w-80 m-auto pt-20">
      <Input
        {...register('email', {
          minLength: { value: 3, message: 'id는 최소 세글자 이상입니다.' },
        })}
        errorMessage={errors.email?.message}
        placeholder="아이디를 입력하세요."
      ></Input>
    </div>
  )
}
