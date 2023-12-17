import { parseISO } from 'date-fns'
import { Noto_Sans } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { type PatchUserProps } from '@/apis/user'
import Button from '@/components/Button'
import DatePickerField from '@/components/DatepickerField'
import Input from '@/components/Input'
import InputLabel from '@/components/InputLabel'
import ListBox from '@/components/ListBox'
import LoadingOverlay from '@/components/LoadingOverlay'
import { useModal } from '@/components/Modal'
import { usePatchUser } from '@/hooks/user/usePatchUser'
import { useUser } from '@/hooks/user/useUser'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

interface UpdateUserForm extends Omit<PatchUserProps, 'birthday'> {
  birthday: Date
}

const genderOptions = [
  {
    value: 1,
    label: '남성',
  },
  {
    value: 2,
    label: '여성',
  },
]

export default function Page() {
  const router = useRouter()

  const { open: successOpen } = useModal({
    title: '회원 정보 수정 성공',
    description: '회원 정보 수정이 완료되었습니다.',
  })

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UpdateUserForm>({
    mode: 'onChange',
  })

  const { data, isSuccess, isPending: isUserPending } = useUser()

  const { mutateAsync, isPending } = usePatchUser()

  useEffect(() => {
    if (!isSuccess) return
    reset({
      ...data.data,
      birthday: new Date(parseISO(data.data.birthday)),
    })
  }, [data, isSuccess, reset])

  const onSubmit = async (data: UpdateUserForm) => {
    try {
      await mutateAsync({ ...data, birthday: data.birthday.toISOString() })
      await successOpen()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {isUserPending && <LoadingOverlay />}
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
              회원정보 수정
            </h1>
          </div>
          <hr className="relative w-full border-1 border-beige" />
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-2xl m-auto flex-col justify-center items-center space-y-4"
        >
          <InputLabel
            label="이름"
            errorMessage={errors.name?.message}
            required
            row
          >
            <Input
              {...register('name', {
                required: '이름은 필수 입력입니다.',
              })}
              placeholder="홍길동"
            ></Input>
          </InputLabel>
          <InputLabel label="이메일" required row>
            <Input
              {...register('email')}
              readOnly
              placeholder="test@example.com"
            ></Input>
          </InputLabel>
          <InputLabel label="생일" row>
            <DatePickerField
              control={control}
              name={'birthday'}
            ></DatePickerField>
          </InputLabel>
          <InputLabel label="성별" row required>
            <ListBox
              name="gender_cd"
              placeholder="성별"
              control={control}
              options={genderOptions}
            />
          </InputLabel>
          <InputLabel
            errorMessage={errors.name?.message}
            label="가구원 수"
            row
            required
          >
            <Input
              {...register('family_num', {
                required: '가구원 수는 필수 입력입니다.',
              })}
              placeholder="4"
              type="number"
            ></Input>
          </InputLabel>
          <div className="pt-4 flex justify-center items-center space-x-4 w-full">
            <Button
              type="button"
              className="py-2 px-6"
              onClick={() => {
                router.back()
              }}
            >
              돌아가기
            </Button>
            <Button
              type="submit"
              className="py-2 px-6"
              isSelected
              isLoading={isPending}
            >
              변경하기
            </Button>
          </div>
        </form>
      </main>
    </>
  )
}
