import { Noto_Sans } from 'next/font/google'

import Button from '@/features/common/components/Button'
import Navbar from '@/features/common/components/Navbar'
import { classNames } from '@/features/common/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

interface Data {
  icon: string
  name: string
  nickname: string
  category: string
  expectionDate: string
  purchaseDate: string
  amount: string
  remain: string
  expirationDate: string
}

const data: Data = {
  icon: '/icons/kitchen-icon.svg',
  name: '섬유유연제',
  nickname: '다우니 퍼퓸앤파워  ',
  category: '주방용품',
  expectionDate: '2024.09.30',
  purchaseDate: '2023.09.15',
  amount: '100L',
  remain: '39ml',
  expirationDate: '2024.09.30',
}

const purchaseDate = new Date(data.purchaseDate.replace(/\./g, '-')).getTime()
const today = new Date().getTime()
const pastDays = Math.floor(
  (today - purchaseDate) / (1000 * 60 * 60 * 24)
).toString()

export default function Page() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center m-auto max-w-3xl w-full px-4  mb-10">
        <div className="flex flex-col justify-center items-stretch my-10 max-w-3xl w-full py-2">
          <h1
            className={classNames(
              'md:text-2xl text-xl font-bold text-dark-brown mb-2',
              NotoSans.className
            )}
          >
            상세보기
          </h1>
          <hr className="relative w-full border-1 border-beige " />
        </div>

        <div className="border border-beige flex sm:flex-row flex-col items-center justify-around m-auto w-full max-w-3xl md:py-6 sm:px-0 px-4 py-4 min-w-fit-content">
          <div className="relative flex flex-row justify-center items-center m-auto mb-4 sm:mb-0">
            <img
              src="/icons/kitchen-icon.svg"
              alt="icon"
              className="w-10 h-10 md:w-12 md:h-12 lg:mr-8 mr-3"
            />
            <p className="text-dark-brown text-lg font-bold whitespace-nowrap mr-2">
              {data.name}
            </p>
            <span className="text-dark-brown text-base overflow-hidden overflow-ellipsis mx-2">
              {data.nickname}
            </span>
          </div>

          <div className="relative flex flex-wrap items-center sm:space-x-1 m-auto">
            <div className="w-20 sm:w-32 md:w-52 h-3 bg-ivory rounded-full mr-2 ">
              <div className="w-[20%] h-3 bg-light-brown rounded-full"></div>
            </div>

            <span className="text-light-brown  mr-2">{data.remain}</span>
            <p className="text-dark-brown">남음</p>
          </div>
        </div>

        <div className="flex justify-center w-[80%] mt-10 mb-8 flex-col sm:flex-row sm:mb-10">
          <h3 className="text-dark-brown md:text-base text-xl font-bold mb-8 text-center sm:mr-10">
            재고 정보
          </h3>
          <div className="flex flex-col text-dark-brown text-base space-y-4  sm:mt-0">
            <p>
              전체 용량:
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg ">
                {data.amount}
              </span>
            </p>

            <p>
              예상 소진일:
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg">
                {data.expectionDate}
              </span>
            </p>

            <p>
              카테고리 :
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg">
                {data.category}
              </span>
            </p>

            <p>
              구매일 :
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg">
                {data.purchaseDate}
              </span>
            </p>
            <p>
              경과일 :
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg">
                {pastDays}
              </span>
              일 경과
            </p>

            <p>
              유통기한 :
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg">
                {data.expirationDate}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-[80%] space-y-4 sm:space-y-0 sm:space-x-8 mt-4 max-w-xl m-auto">
          <Button className="w-full sm:w-40 h-12">수정하기</Button>
          <Button className="w-full sm:w-40 h-12">삭제하기</Button>
          <Button className="w-full sm:w-40 h-12">상태변경하기</Button>
        </div>
      </div>
      <footer className="h-[300px] bg-ivory">푸터</footer>
    </>
  )
}
