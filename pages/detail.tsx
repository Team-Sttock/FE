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

      <div className="flex flex-col items-center justify-center m-auto max-w-3xl w-[95%] min-w-[90%]">
        <div className="flex flex-col justify-center items-stretch my-10 max-w-3xl w-[90%] py-2">
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

        <div className="border border-beige flex sm:flex-row flex-col items-center justify-around m-auto w-[90%] max-w-3xl md:py-6 sm:px-0 px-4 py-4 min-w-fit-content">
          <div className="relative flex flex-row justify-center items-center m-auto mb-4 sm:mb-0">
            <img
              src="/icons/kitchen-icon.svg"
              alt="icon"
              className="w-10 h-10 md:w-12 md:h-12 lg:mr-8 mr-3"
            />
            <p className="text-dark-brown text-lg font-bold whitespace-nowrap mr-2">
              {data.name}
            </p>
            <span className="text-dark-brown text-base overflow-hidden whitespace-nowrap overflow-ellipsis mx-2">
              {data.nickname}
            </span>
          </div>

          <div className="relative flex flex-wrap items-center sm:space-x-1 m-auto">
            <div className="w-20 sm:w-32 md:w-52 h-3 bg-ivory rounded-full mr-2 ">
              <div className="w-[20%] h-3 bg-light-brown rounded-full"></div>
            </div>

            <span className="text-light-brown  mr-2">{data.remain}</span>
            <p className="text-dark-brown  whitespace-nowrap">남음</p>
          </div>
        </div>

        <div className="flex justify-center w-[80%] mt-10 mb-8 sm:mb-10 flex-wrap sm:flex-row p-4">
          <div className="flex mx-10 sm:mb-0 mb-4 pb-4">
            <p className="text-dark-brown md:text-base text-xl font-bold">
              재고 정보
            </p>
          </div>
          <div className="flex flex-col text-dark-brown text-base sm:space-y-4 sm:mt-0">
            <p>
              전체
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg ">
                {data.amount}
              </span>
              의 예상 소진일은
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg">
                {data.expectionDate}
              </span>
              입니다.
            </p>
            <br />
            <p>
              카테고리 :
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg">
                {data.category}
              </span>
            </p>
            <br />
            <p>
              구매일 :
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg">
                {data.purchaseDate}
              </span>
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg">
                {pastDays}
              </span>
              일 경과
            </p>
            <br />
            <p>
              유통기한 :
              <span className="text-light-brown inline sm:mx-4 mx-2 text-lg">
                {data.expirationDate}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-[70%] space-y-7 sm:space-y-0 mb-10 mt-4 max-w-3xl m-auto p-4">
          <Button className="w-28 h-8 sm:m-auto font-normal">
            상태변경하기
          </Button>
          <Button className="w-28 h-8 sm:m-auto font-normal">수정하기</Button>
          <Button className="w-28 h-8 sm:m-auto font-normal">삭제하기</Button>
        </div>
      </div>
      <footer className="h-[300px] bg-ivory">푸터</footer>
    </>
  )
}
