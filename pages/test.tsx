import React from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/features/common/components/Button'
import DatePickerField from '@/features/common/components/DatepickerField'
import DropdownField from '@/features/common/components/DropdownField'

export default function Page() {
  const options = [
    { value: '생활용품', label: '생활용품' },
    { value: '욕실용품', label: '욕실용품' },
  ]

  const { control, handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full h-full"
    >
      <DropdownField
        label="category"
        name="product-category"
        control={control}
        options={options}
      />
      <DatePickerField control={control} />
      <Button className="mt-6 h-12 w-full" type="submit">
        submit
      </Button>
    </form>
  )
}
