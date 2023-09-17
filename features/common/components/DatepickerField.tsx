import 'react-datepicker/dist/react-datepicker.css'

import ko from 'date-fns/locale/ko'
import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { type Control, Controller } from 'react-hook-form'

import { classNames } from '../utils/classNames'

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
          popperClassName="w-full max-w-xs relative"
          wrapperClassName="w-full"
          calendarContainer={({ children }) => {
            console.log(children)
            return (
              <div
                className={classNames(
                  'relative inline-block w-full border border-light-brown bg-white'
                )}
              >
                <span
                  className={classNames(
                    'inline-block w-0 h-0 absolute -top-[10px] left-1/2 -translate-x-1/2',
                    'border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-light-brown'
                  )}
                ></span>
                {children}
              </div>
            )
          }}
          renderCustomHeader={(props) => {
            // console.log(props)
            return <div>헤더</div>
          }}
        />
      )}
    />
  )
}

export default DatePickerField
