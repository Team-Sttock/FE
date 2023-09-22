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
  name: '주방세제',
  nickname: '승연이의 주방세제 ',
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
      <div className="flex flex-col items-center justify-center m-auto max-w-3xl w-2/3 min-w-[80%]">
        <div className="flex flex-col justify-center items-stretch my-10 max-w-3xl w-full p-2">
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

        <div className=" border border-beige flex sm:flex-row flex-col items-cetenr w-[90%] justify-around max-w-3xl m-auto px-4 py-6 lg:px-10 ">
          <div className="relative flex flex-row justify-center items-center sm:px-2 sm:mb-0 mb-4 m-auto">
            <img
              src="/icons/kitchen-icon.svg"
              alt="icon"
              className="w-10 h-10 md:w-12 md:h-12 lg:mr-8 mr-3"
            />
            <p className="text-dark-brown text-sm sm:text-md md:text-xl font-bold whitespace-nowrap">
              {data.name}
            </p>
            <span className="text-dark-brown md:pl-3 text-sm s sm:text-md overflow-hidden whitespace-nowrap overflow-ellipsis px-2">
              {data.nickname}
            </span>
          </div>

          <div className="relative flex flex-row items-center sm:space-x-1 m-auto">
            <div className="w-20 sm:w-32 md:w-60 h-3 bg-beige rounded-full mr-2 ">
              <div className="w-[20%] h-3 bg-light-brown rounded-full"></div>
            </div>

            <span className="text-light-brown sm:text-md text-sm mr-2">
              {data.remain}
            </span>
            <p className="text-dark-brown sm:text-md text-sm whitespace-nowrap">
              남음
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-10 mb-8 sm:mb-10 mx-10  ">
          <div className="justify-center flex flex-wrap sm:flex-row">
            <div className="relative flex-row flex mx-2 sm:mr-10 sm:mb-0 mb-4">
              <p className="text-dark-brown md:text-md text-sm font-bold">
                재고 정보
              </p>
            </div>
            <div className="flex flex-col justify-between items-stretch text-dark-brown sm:text-md text-sm sm:space-y-4">
              <p>
                전체
                <span className="text-light-brown inline"> {data.amount} </span>
                의 예상 소진일은
                <span className="text-light-brown inline mx-1">
                  {data.expectionDate}
                </span>
                입니다.
              </p>
              <br />
              <p>
                카테고리 :
                <span className="text-light-brown inline ml-1">
                  {data.category}
                </span>
              </p>
              <br />
              <p>
                구매일 :
                <span className="text-light-brown inline ml-1 md:mr-4 mr-1">
                  {data.purchaseDate}
                </span>
                <span className="text-light-brown inline">{pastDays}</span>일
                경과
              </p>
              <br />
              <p>
                유통기한 :
                <span className="text-light-brown inline ml-1">
                  {data.expirationDate}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-7 md:space-y-0 mt-10 mb-20 max-w-3xl m-auto">
          <Button className="w-28 h-8 p-1 sm:m-auto ">상태변경하기</Button>
          <Button className="w-28 h-8 p-1 sm:m-auto ">수정하기</Button>
          <Button className="w-28 h-8 p-1 sm:m-auto ">삭제하기</Button>
        </div>
      </div>
      <footer className="h-[300px] bg-ivory">푸터</footer>
    </>
  )
}
