import 'react-datepicker/dist/react-datepicker.css'

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import { getMonth, getYear } from 'date-fns'
import ko from 'date-fns/locale/ko'
import { range } from 'lodash-es'
import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { type Control, Controller } from 'react-hook-form'

import { classNames } from '../utils/classNames'

interface DatePickerFieldProps {
  control: Control<any>
}

registerLocale('ko', ko)

const YEARS = Array.from(
  { length: getYear(new Date()) + 1 - 1900 },
  (_, i) => getYear(new Date()) - i
)
const MONTHS = range(0, 12)

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

export default DatePickerField
