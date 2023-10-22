import { Noto_Sans } from 'next/font/google'

import Navbar from '@/features/common/components/Navbar'
import FilteringField from '@/features/products/components/FilteringField'
import Item from '@/features/products/components/Item'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

export default function Page() {
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
              항목별 보기
            </h1>
            <p className="text-dark-brown">
              우리집 생활용품의 소진량을 한눈에 확인하세요!
            </p>
          </div>
          <hr className="relative w-full border-1 border-beige" />
        </header>
        <div className="flex w-full mb-6">
          <div className="flex space-x-2 ">
            <FilteringField />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-3 w-full max-w-4xl m-auto">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </main>
    </>
  )
}
