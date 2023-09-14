import 'react-datepicker/dist/react-datepicker.css'

import ko from 'date-fns/locale/ko'
import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { type Control, Controller } from 'react-hook-form'

interface DatePickerFieldProps {
  control: Control<any>
}

registerLocale('ko', ko)

const DatePickerField: React.FC<DatePickerFieldProps> = ({ control }) => {
  return (
    <Controller
      name="productDate"
      control={control}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          selected={value}
          onChange={(data: any) => {
            onChange(data)
          }}
          dateFormat="yyyy년 MM월 dd일"
          dateFormatCalendar="yyyy년 MM월"
          locale="ko"
          placeholderText="날짜를 선택해주세요"
          className="flex items-center justify-center p-2 w-full h-full border-beige border outline-none text-md text-dark-brown focus:outline-none placeholder:text-beige"
        />
      )}
    />
  )
}

export default DatePickerField
