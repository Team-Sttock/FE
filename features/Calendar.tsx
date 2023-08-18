import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  getDate,
  getMonth,
  getYear,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import { chunk } from 'lodash-es'
import { useMemo, useState } from 'react'

const WEEKEND = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export default function Calendar() {
  const [nowDate, setNowDate] = useState(new Date())
  const nowDateNum = getDate(nowDate)
  const nowMonth = getMonth(nowDate)
  const nowYear = getYear(nowDate)
  const calandarDays = useMemo(
    () => getCalendarDays(nowYear, nowMonth),
    [nowMonth, nowYear]
  )

  return (
    <article className="w-full h-fit">
      <header className="w-full">
        <div className="w-full flex items-stretch">
          {WEEKEND.map((week) => (
            <span
              key={week}
              className="inline-block text-amber-800 text-base flex-1 text-center py-2"
            >
              {week}
            </span>
          ))}
        </div>
      </header>
      <section className="w-full">
        {calandarDays.map((weeks, idx) => (
          <div key={idx} className="w-full flex items-stretch">
            {weeks.map((day) => (
              <div
                key={`${idx} ${day.date}`}
                className={`${
                  day.inMonth ? 'text-gray-800' : 'text-gray-400'
                } flex-1 py-2 text-center`}
              >
                <span
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                    day.inMonth && day.date === nowDateNum ? 'bg-green-300' : ''
                  }`}
                >
                  {day.date}
                </span>
              </div>
            ))}
          </div>
        ))}
      </section>
    </article>
  )
}

const getCalendarDays = (year: number, month: number) => {
  const nowDate = new Date(year, month, 1)
  console.log(year, month, nowDate)

  const daysInCalendar = eachDayOfInterval({
    start: startOfWeek(startOfMonth(nowDate)),
    end: endOfWeek(endOfMonth(nowDate)),
  }).map((date) =>
    isSameMonth(nowDate, date)
      ? { inMonth: true, date: getDate(date) }
      : { inMonth: false, date: getDate(date) }
  )

  return chunk(daysInCalendar, 7)
}
