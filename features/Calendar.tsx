import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  getDate,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import { chunk } from 'lodash-es'
import { useState } from 'react'

export default function Calendar() {
  const [nowDate, setNowDate] = useState(new Date())
  const calandarDays = getCalendarDays(nowDate)
  console.log(calandarDays)

  return <div>Calendar</div>
}

const getCalendarDays = (nowDate: Date) => {
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
