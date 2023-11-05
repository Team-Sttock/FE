import { range } from 'lodash-es'
import { Noto_Sans } from 'next/font/google'
import { type PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/Button'
import ComboBox from '@/components/ComboBox'
import DatePickerField from '@/components/DatepickerField'
import Input from '@/components/Input'
import ListBox from '@/components/ListBox'
import Navbar from '@/components/Navbar'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

export default function Page() {
  interface ProductsOptionsProps {
    value: string
    label: string
    category: string
  }

  const productsOptions: ProductsOptionsProps[] = [
    { value: '물티슈', label: '물티슈', category: '생활용품' },
    { value: '샴푸', label: '샴푸', category: '욕실용품' },
  ]

  interface CapacityOptionsProps {
    value: string
    label: string
  }

  const capacityOptions: CapacityOptionsProps[] = [
    {
      value: 'ml',
      label: 'ml',
    },
    {
      value: 'L',
      label: 'L',
    },
  ]

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    control,
  } = useForm<{
    product: string
    categoryfield: string
    productNickname: string
    purchaseDate: string
    purchaseCapacity: number
    capacityUnit: string
    purchaseNumber: number
    numberOfUser: number
    expectedDays: number
    expectationDate: string
    expirationDate: string
  }>({
    mode: 'onChange',
    defaultValues: {
      numberOfUser: 2,
    },
  })

  const watchProduct: any = watch('product')

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const onError = (errors: any) => {
    console.log(errors)
  }

  return (
    <>
      <Navbar />
      <main className="m-auto max-w-3xl w-full px-3 mb-10">
        <header className="mt-10 mb-6 w-full py-2">
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
              상품 추가
            </h1>
            <p className="text-dark-brown">
              관리하고 싶은 생활용품을 추가해보세요!
            </p>
          </div>
          <hr className="relative w-full border-1 border-beige" />
        </header>

        <div className="w-full mb-4 max-w-lg m-auto">
          <p className="text-right text-sm text-dark-brown mb-5">
            * 는 필수 입력입니다.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="space-y-4"
          >
            <LabelWrapper
              label="상품명"
              required
              errorMessage={errors.product?.message}
            >
              <ComboBox
                label="상품명"
                name="product"
                control={control}
                options={productsOptions}
                placeholder="상품명을 입력하세요."
              />
            </LabelWrapper>

            <LabelWrapper label="카테고리">
              <InputReadOnly
                className=""
                value={watchProduct ? watchProduct.category : ''}
                message="상품명을 입력하면 자동으로 결정됩니다."
              />
            </LabelWrapper>

            <LabelWrapper
              label="상품별칭"
              errorMessage={errors.productNickname?.message}
            >
              <Input
                {...register('productNickname', {})}
                placeholder="상품 별칭을 입력해주세요."
              />
            </LabelWrapper>

            <LabelWrapper
              label="구매일자"
              required
              errorMessage={errors.purchaseDate?.message}
            >
              <DatePickerField
                {...register('purchaseDate', {
                  required: '구매일자는 필수 입력입니다',
                })}
                name="purchaseDate"
                placeholder="구매일자를 선택해주세요."
                control={control}
              />
            </LabelWrapper>

            <LabelWrapper
              label="구매용량"
              required
              errorMessage={errors.purchaseCapacity?.message}
            >
              <div className="flex items-center justify-center space-x-2">
                <Input
                  {...register('purchaseCapacity', {
                    required: '구매용량은 필수 입력입니다',
                  })}
                  placeholder="숫자만 입력"
                />
                <ComboBox
                  label="구매단위"
                  name="capacityUnit"
                  placeholder="용량"
                  control={control}
                  options={capacityOptions}
                  className="w-24 text-sm "
                />
              </div>
            </LabelWrapper>

            <LabelWrapper
              label="구매개수"
              required
              errorMessage={errors.purchaseNumber?.message}
            >
              <Input
                placeholder="숫자만 입력"
                {...register('purchaseNumber', {
                  required: '구매개수는 필수 입력입니다',
                })}
              />
            </LabelWrapper>

            <LabelWrapper
              label="사용인원"
              required
              errorMessage={errors.numberOfUser?.message}
            >
              <ListBox
                options={range(1, 5).map((number) => ({
                  value: number,
                  label: number.toString(),
                }))}
                control={control}
                name="numberOfUser"
              ></ListBox>
            </LabelWrapper>

            <LabelWrapper label="사용예상일수" required>
              <div className="flex space-x-1 w-full items-stretch">
                <Input
                  type="number"
                  placeholder="숫자만 입력"
                  {...register('expectedDays', {
                    required: '사용예상일수는 필수 입력입니다',
                  })}
                />
                <Button className="inline-block w-24 text-sm">직접 입력</Button>
              </div>
            </LabelWrapper>
            <LabelWrapper
              label="예상소진일"
              errorMessage={errors.expectationDate?.message}
            >
              <DatePickerField
                {...register('expectationDate', {})}
                name="expectationDate"
                control={control}
                placeholder="예상소진일을 선택해주세요."
              />
            </LabelWrapper>

            <LabelWrapper
              label="유통기한"
              errorMessage={errors.expirationDate?.message}
            >
              <DatePickerField
                {...register('expirationDate', {})}
                name="expirationDate"
                control={control}
                placeholder="유통기한을 선택해주세요."
              />
            </LabelWrapper>
          </form>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button className="w-36 sm:w-40 h-10 text-md">추가 완료</Button>
            <Button className="w-36 sm:w-40 h-10 text-md">임시 저장</Button>
          </div>
        </div>
      </main>
    </>
  )
}

interface InputReadOnlyProps {
  value: any
  message?: string
  readOnly?: boolean
  placeholder?: string
  className?: string
}
function InputReadOnly({
  value,
  message,
  className,
}: PropsWithChildren<InputReadOnlyProps>) {
  return (
    <>
      <div
        className={classNames(
          'relative w-full h-fit border border-beige ',
          className ?? ''
        )}
      >
        <input
          className={classNames(
            ' h-10 w-full p-3 border-none outline-none text-md text-dark-brown box-border',
            'text-sm bg-ivory',
            className ?? ''
          )}
          readOnly
          value={value}
        />
      </div>
      {message && (
        <p className="text-light-brown text-sm font-sans pt-0.5"> {message}</p>
      )}
    </>
  )
}

interface LabelProps {
  label: string
  required?: boolean
  errorMessage?: string
  children: any
}

function LabelWrapper({
  children,
  label,
  required,
  errorMessage,
}: PropsWithChildren<LabelProps>) {
  return (
    <div className="flex w-full">
      <p className="w-36 sm:w-56 h-fit relative top-2.5 text-sm text-dark-brown ">
        {label}
        {required && (
          <span className="text-light-brown text-base pl-0.5">*</span>
        )}
      </p>
      <div className="w-full h-fit relative">
        {children}
        {errorMessage && (
          <p className="text-red-500 text-sm font-sans mt-1">{errorMessage}</p>
        )}
      </div>
    </div>
  )
}
