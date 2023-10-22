import { Noto_Sans } from 'next/font/google'
import { useState } from 'react'

import Navbar from '@/features/common/components/Navbar'
import Calendar from '@/features/products/components/Calendar'
import CalendarItem from '@/features/products/components/CalendarItem'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

export default function Page() {
  const [nowDate, setNowDate] = useState(new Date())

  return (
    <>
      <Navbar />
      <main className="m-auto max-w-5xl w-full px-4 mb-10">
        <header className="mt-10 mb-4 w-full py-2">
          <div
            className={classNames(
              'space-y-2 w-full mb-2',
              'sm:space-x-4 sm:space-y-0 sm:flex sm:justify-start sm:items-center'
            )}
          >
            <h1
              className={classNames(
                'md:text-2xl text-xl font-bold text-dark-brown',
                NotoSans.className
              )}
            >
              스똑 캘린더
            </h1>
            <p className="text-dark-brown">우리집 생활용품 캘린더</p>
          </div>
          <hr className="relative w-full border-1 border-beige" />
        </header>
        <div className="flex flex-col gap-5 w-full sm:flex-row">
          <div className="w-full sm:w-1/2">
            <Calendar nowDate={nowDate} setNowDate={setNowDate}></Calendar>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="flex flex-col justify-center items-stretch max-w-3xl w-full py-2">
              <ExhaustedContainer label="오늘 소진">
                <CalendarItem /> <CalendarItem />
                <CalendarItem />
              </ExhaustedContainer>
              <div>
                <ExhaustedContainer label="근일 소진">
                  {<CalendarItem />}
                </ExhaustedContainer>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

interface ExhaustedContainerProps {
  label: string
  children: React.ReactNode
}

const ExhaustedContainer = ({ children, label }: ExhaustedContainerProps) => {
  return (
    <>
      <div className="my-2">
        <span className="text-dark-brown">{label}</span>
        <hr className="relative w-full border-1 border-beige my-2 " />
        <div className="flex flex-col items-center gap-2">{children}</div>
      </div>
    </>
  )
}
