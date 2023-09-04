import { useState } from 'react'

import Calendar from '@/features/products/components/Calendar'

export default function Page() {
  const [nowDate, setNowDate] = useState(new Date())

  return (
    <div className="w-[600px]">
      <Calendar nowDate={nowDate} setNowDate={setNowDate}></Calendar>
    </div>
  )
}
