import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  getDate,
  getMonth,
  getYear,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns'
import { chunk } from 'lodash-es'
import { type Dispatch, type SetStateAction, useCallback, useMemo } from 'react'

const WEEKEND = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

interface CalendarProps {
  nowDate: Date
  setNowDate: Dispatch<SetStateAction<Date>>
}

export default function Calendar({ nowDate, setNowDate }: CalendarProps) {
  const nowMonth = getMonth(nowDate)
  const nowYear = getYear(nowDate)
  const calandarDays = useMemo(
    () => getCalendarDays(nowYear, nowMonth),
    [nowMonth, nowYear]
  )

  const handlePrevMonth = useCallback(() => {
    setNowDate(endOfMonth(subMonths(nowDate, 1)))
  }, [nowDate])

  const handleNextMonth = useCallback(() => {
    setNowDate(startOfMonth(addMonths(nowDate, 1)))
  }, [nowDate])

  const handleChangeDay = useCallback((date: Date) => {
    setNowDate(date)
  }, [])

  return (
    <article className="w-full h-fit">
      <header className="w-full">
        <div className="w-full flex justify-center items-center space-x-2 py-2">
          <ChevronLeftIcon
            className="w-6 h-6 cursor-pointer text-light-brown"
            onClick={handlePrevMonth}
          ></ChevronLeftIcon>
          <p className="text-dark-brown">
            {nowYear}년 {nowMonth + 1}월
          </p>
          <ChevronRightIcon
            className="w-6 h-6 cursor-pointer text-light-brown"
            onClick={handleNextMonth}
          ></ChevronRightIcon>
        </div>
        <div className="w-full flex items-stretch">
          {WEEKEND.map((week) => (
            <span
              key={week}
              className="inline-block text-light-brown text-base flex-1 text-center py-2"
            >
              {week}
            </span>
          ))}
        </div>
        <hr />
      </header>
      <section className="w-full">
        {calandarDays.map((weeks, idx) => (
          <div key={idx} className="w-full flex items-stretch">
            {weeks.map((day) => (
              <div
                key={`${idx} ${getDate(day.date)}`}
                className={`${
                  day.inMonth ? 'text-dark-brown' : 'text-beige'
                } flex-1 py-2 text-center`}
              >
                <button
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-full cursor-pointer ${
                    day.inMonth && isToday(day.date) ? 'bg-mint' : ''
                  } ${
                    day.inMonth && isSameDay(day.date, nowDate)
                      ? 'bg-light-brown text-beige'
                      : ''
                  }`}
                  onClick={() => {
                    handleChangeDay(day.date)
                  }}
                >
                  {getDate(day.date)}
                </button>
              </div>
            ))}
          </div>
        ))}
      </section>
    </article>
  )
}

const getCalendarDays = (year: number, month: number) => {
  const firstOfMonth = new Date(year, month, 1)

  const daysInCalendar = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstOfMonth)),
    end: endOfWeek(endOfMonth(firstOfMonth)),
  }).map((date) =>
    isSameMonth(firstOfMonth, date)
      ? { inMonth: true, date }
      : { inMonth: false, date }
  )

  return chunk(daysInCalendar, 7)
}
