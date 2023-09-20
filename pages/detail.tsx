import { Noto_Sans } from 'next/font/google'

import Button from '@/features/common/components/Button'
import Navbar from '@/features/common/components/Navbar'
import { classNames } from '@/features/common/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})
const data = {
  icon: '/icons/kitchen-icon.svg',
  name: '주방세제',
  nickname: '승연이의 주방세제 ',
  category: '주방용품',
  expectionDate: '24.09.30',
  purchaseDate: '24.09.20',
  amount: '100L',
  remain: '39ml',
  pastDays: '10', // purchaseDate - today
  expirationDate: '2025.03.19',
}

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mx-2">
        <div className="w-2/3 flex flex-col items-center justify-center mt-10 ">
          <div className="flex flex-col w-full justify-center items-stretch mb-20">
            <h1
              className={classNames(
                'md:text-2xl text-xl font-bold text-dark-brown mb-2',
                NotoSans.className
              )}
            >
              상세보기
            </h1>
            <hr className="relative w-full border-1 border-beige" />
          </div>

          <div className="flex md:flex-row flex-col items-center justify-around border border-beige w-full h-full py-4 px-2">
            <div className="flex flex-row items-center justify-around space-x-2 m-4">
              <img
                src="/icons/kitchen-icon.svg"
                alt="icon"
                className="w-12 h-12 md:mr-10 mr-4"
              />
              <p className="text-dark-brown text-sm sm:text-md md:text-xl font-bold whitespace-nowrap">
                {data.name}
              </p>
              <span className="text-dark-brown text-[8px] sm:text-sm md:text-lg overflow-hidden whitespace-nowrap overflow-ellipsis">
                {data.nickname}
              </span>
            </div>

            <div className="relative flex flex-row items-center m-2 ">
              <div className="lg:w-60 md:w-24 w-20 h-3 bg-beige rounded-full mr-2">
                <div className="w-[20%] h-3 bg-light-brown rounded-full"></div>
              </div>

              <span className="text-light-brown md:text-md sm:text-sm text-[8px] mr-2">
                {data.remain}
              </span>
              <p className="text-dark-brown md:text-md sm:text-sm text-[8px]">
                남음
              </p>
            </div>
          </div>

          <div className="relative w-2/3 md:w-full flex md:flex-row flex-col my-10 justify-center items-stretch ">
            <div className="mr-4 mb-10">
              <p className="text-dark-brown md:text-md text-sm font-bold">
                재고 정보
              </p>
            </div>
            <div className="text-dark-brown md:text-md text-sm md:space-y-4">
              <p>
                전체
                <span className="text-light-brown inline"> {data.amount} </span>
                의 예상 소진일은
                <span className="text-light-brown inline">
                  {' '}
                  {data.expectionDate}{' '}
                </span>
                입니다.
              </p>
              <br />
              <p>
                카테고리 :
                <span className="text-light-brown inline">{data.category}</span>
              </p>
              <br />
              <p>
                구매일 :
                <span className="text-light-brown inline mr-4">
                  {' '}
                  {data.purchaseDate}{' '}
                </span>
                <span className="text-light-brown inline">
                  {' '}
                  {data.pastDays}{' '}
                </span>
                일 경과
              </p>
              <br />
              <p>
                유통기한 :
                <span className="text-light-brown inline">
                  {' '}
                  {data.expirationDate}{' '}
                </span>
              </p>
            </div>
          </div>
          <div className="relative w-full flex sm:flex-row flex-col sm:mt-4 mb-20 justify-center sm:items-stretch items-center sm:text-sm text-[13px]">
            <Button className="md:h-8 w-24 sm:m-2 mb-4"> 상태변경하기 </Button>
            <Button className="md:h-8 w-24 sm:m-2 mb-4 "> 수정하기 </Button>
            <Button className="md:h-8 w-24 sm:m-2"> 삭제하기 </Button>
          </div>
        </div>
      </div>
    </>
  )
}
