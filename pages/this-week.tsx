import { Noto_Sans } from 'next/font/google'

import Navbar from '@/components/Navbar'
import FilteringField from '@/components/products/FilteringField'
import Item from '@/components/products/Item'
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
              이번 주 구매
            </h1>
            <p className="text-dark-brown">
              잊지 마세요, 이번 주에 구매하셔야 할 것으로 예측되는 상품입니다.
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
