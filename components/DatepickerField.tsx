import 'react-datepicker/dist/react-datepicker.css'

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { getMonth, getYear } from 'date-fns'
import ko from 'date-fns/locale/ko'
import { range } from 'lodash-es'
import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { type Control, Controller, type RegisterOptions } from 'react-hook-form'

import { classNames } from '../utils/classNames'

interface DatePickerFieldProps {
  control: Control<any>
  name: string
  placeholder?: string
  rules?: Omit<
    RegisterOptions<any, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
}

registerLocale('ko', ko)

const YEARS = Array.from(
  { length: getYear(new Date()) + 1 - 1900 },
  (_, i) => getYear(new Date()) - i
)
const MONTHS = range(0, 12)

// eslint-disable-next-line react/display-name
export default function DatePickerField({
  control,
  name,
  placeholder,
  rules,
}: DatePickerFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value, ref } }) => (
        <DatePicker
          ref={ref}
          selected={value}
          onChange={(data: any) => {
            onChange(data)
          }}
          dateFormat="yyyy년 MM월 dd일"
          dateFormatCalendar="yyyy년 MM월"
          locale="ko"
          placeholderText={placeholder ?? '날짜를 선택해주세요'}
          className="flex items-center justify-center p-3 w-full h-10 border-beige border outline-none text-md text-dark-brown focus:outline-none placeholder:text-beige placeholder:text-sm"
          popperClassName="w-full max-w-xs relative"
          wrapperClassName="w-full"
          calendarContainer={({ children }) => {
            return (
              <div
                className={classNames(
                  'relative inline-block w-full border border-light-brown bg-white'
                )}
              >
                {children}
              </div>
            )
          }}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="px-6 py-2 flex items-center justify-between">
              <button
                type="button"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <ArrowLeftIcon className="w-6 h-6 text-dark-brown" />
              </button>
              <div>
                <select
                  value={getMonth(date)}
                  className="bg-transparent text-dark-brown font-bold"
                  onChange={({ target: { value } }) => {
                    changeMonth(+value)
                  }}
                >
                  {MONTHS.map((option) => (
                    <option key={option} value={option}>
                      {option + 1}
                    </option>
                  ))}
                </select>
                <select
                  value={getYear(date)}
                  className="bg-transparent text-dark-brown font-bold"
                  onChange={({ target: { value } }) => {
                    changeYear(+value)
                  }}
                >
                  {YEARS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={increaseMonth}
                className={''}
                disabled={nextMonthButtonDisabled}
              >
                <ArrowRightIcon className="w-6 h-6 text-dark-brown" />
              </button>
            </div>
          )}
        />
      )}
    />
  )
}
