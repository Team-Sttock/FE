import { Noto_Sans } from 'next/font/google'
import { type PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/features/common/components/Button'
import DatePickerField from '@/features/common/components/DatepickerField'
import DropdownField from '@/features/common/components/DropdownField'
import Input from '@/features/common/components/Input'
import InputLabel from '@/features/common/components/InputLabel'
import Navbar from '@/features/common/components/Navbar'
import { classNames } from '@/features/common/utils/classNames'

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
    purchaseNumber: number
    numberOfUser: number
    expectedDays: number
    expectationDate: string
    expirationDate: string
  }>({
    mode: 'onChange',
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
      <div className="flex flex-col items-center justify-center m-auto max-w-3xl w-full px-4 mb-10">
        <div className="flex flex-col justify-center items-stretch my-10 max-w-3xl w-full py-2">
          <div className="flex justify-start items-center space-x-4 w-full mb-2 ">
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
        </div>

        <main className="pb-16">
          <p className="text-right text-sm text-dark-brown">
            * 는 필수 입력입니다.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="flex flex-col items-center justify-center w-full space-y-4 mt-4 max-w-3xl m-auto "
          >
            <FieldForm>
              <InputLabel
                label="상품명"
                required
                errorMessage={errors.product?.message}
              >
                <DropdownField
                  {...register('product', {
                    required: '상품명은 필수 입력입니다',
                  })}
                  label="product"
                  name="product"
                  control={control}
                  options={productsOptions}
                  className=""
                />
              </InputLabel>
            </FieldForm>

            <FieldForm>
              <InputLabel label="카테고리" required>
                <InputReadOnly
                  value={watchProduct ? watchProduct.category : ''}
                  readOnly
                />
              </InputLabel>
            </FieldForm>

            <FieldForm>
              <InputLabel
                label="상품 별칭"
                errorMessage={errors.productNickname?.message}
              >
                <Input {...register('productNickname', {})} />
              </InputLabel>
            </FieldForm>

            <FieldForm>
              <InputLabel
                label="구매일자"
                required
                errorMessage={errors.purchaseDate?.message}
              >
                <DatePickerField
                  {...register('purchaseDate', {
                    required: '구매일자는 필수 입력입니다',
                  })}
                  name="purchaseDate"
                  control={control}
                />
              </InputLabel>
            </FieldForm>

            <FieldForm>
              <InputLabel
                label="구매용량"
                required
                errorMessage={errors.purchaseCapacity?.message}
              >
                <Input
                  placeholder="숫자만 입력"
                  {...register('purchaseCapacity', {
                    required: '구매용량은 필수 입력입니다',
                  })}
                />
              </InputLabel>
            </FieldForm>

            <FieldForm>
              <InputLabel
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
              </InputLabel>
            </FieldForm>

            <FieldForm>
              <InputLabel
                label="사용인원"
                required
                errorMessage={errors.numberOfUser?.message}
              >
                <Input
                  type="number"
                  placeholder="숫자만 입력"
                  {...register('numberOfUser', {
                    required: '사용인원은 필수 입력입니다',
                  })}
                />
              </InputLabel>
            </FieldForm>
            <FieldForm>
              <InputLabel
                label="예상사용일수"
                errorMessage={errors.expectedDays?.message}
              >
                <Input {...register('expectedDays', {})} />
                <Button
                  onClick={() => {
                    console.log('click')
                  }}
                  className="w-28"
                >
                  직접입력
                </Button>
              </InputLabel>
            </FieldForm>
            <FieldForm>
              <InputLabel
                label="예상소진일"
                errorMessage={errors.expectationDate?.message}
              >
                <DatePickerField
                  {...register('expectationDate', {})}
                  name="expectationDate"
                  control={control}
                />
              </InputLabel>
            </FieldForm>

            <FieldForm>
              <InputLabel
                label="유통기한"
                errorMessage={errors.expirationDate?.message}
              >
                <DatePickerField
                  {...register('expirationDate', {})}
                  name="expirationDate"
                  control={control}
                />
              </InputLabel>
            </FieldForm>
          </form>
        </main>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-[80%] space-y-4 mt-4 max-w-xl m-auto sm:space-y-0 sm:space-x-20 ">
        <Button className="w-full h-12 sm:w-40">추가완료</Button>
        <Button className="w-full h-12 sm:w-40">임시저장</Button>
      </div>
    </>
  )
}

interface InputReadOnlyProps {
  value: any
  errorMessage?: string
  readOnly?: boolean
}
function InputReadOnly({
  value,
  errorMessage,
  readOnly,
}: PropsWithChildren<InputReadOnlyProps>) {
  return (
    <div
      className={classNames(
        'relative w-full h-fit border border-beige ',
        'focus-within:outline focus-within:outline-1 focus-within:outline-light-brown'
      )}
    >
      <input
        className={classNames(
          'w-full h-10 p-3 border-none outline-none text-md text-dark-brown',
          'placeholder:text-beige'
        )}
        readOnly={readOnly}
        value={value}
      />

      <p className="text-red-500 text-sm font-sans pt-0.5"> {errorMessage}</p>
    </div>
  )
}

interface FieldFormProps {
  children: any
}

function FieldForm({ children }: PropsWithChildren<FieldFormProps>) {
  return <div className={classNames('flex w-full')}>{children}</div>
}
