import { Noto_Sans } from 'next/font/google'

import Button from '@/features/common/components/Button'
import Navbar from '@/features/common/components/Navbar'
import { classNames } from '@/features/common/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full h-full items-center md:px-20 px-10">
        <div className="relative w-full p-10">
          <h1
            className={classNames(
              'md:text-2xl text-xl p-2 font-bold text-dark-brown',
              NotoSans.className
            )}
          >
            상세보기
          </h1>
          <hr className="w-full border-1 border-beige" />
        </div>

        <div className="w-full md:p-20 p-10 ">
          <div className="flex relative p-10 border border-beige justify-between items-center ">
            <img
              src="/icons/kitchen-icon.svg"
              alt="kitchen-icon"
              className="p-2"
            />
            <h3 className="p-2 lg:text-lg text-md font-bold text-dark-brown">
              주방세제
            </h3>
            <p className="p-2 lg:mr-10 lg:text-md text-sm text-dark-brown">
              승연이의 주방세제
            </p>
            <div className="w-1/3 h-4 lg:mr-6 mr-2 bg-beige rounded-full">
              <div className="h-full bg-light-brown rounded-full w-[20%]"></div>
            </div>
          </div>
        </div>

        <div className="relative w-full flex flex-row p-10 pb-20 justify-center items-center">
          <div className="flex mr-20 ">
            <p className=" text-dark-brown md:text-md text-sm ">재고 정보</p>
          </div>
          <div className="text-dark-brown md:text-md text-sm">
            <div className="p-4">
              <span> 전체 </span>
              <span> 100 L </span>
              <span> 의 예상 소진일은 </span>
              <span> 2023.03.19</span>
              <span> 입니다. </span>
              <br />
            </div>
            <div className="p-4">
              <span> 카테고리 : </span>
              <span> 주방용품 </span>
              <br />
            </div>
            <div className="p-4">
              <span> 구매일 : </span>
              <span> 21.08.30 </span>
              <span> 210 </span>
              <span> 일 경과 </span>
              <br />
            </div>
            <div className="p-4">
              <span> 유통기한 :</span>
              <span> 24.9.20 </span>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-center w-1/2 ">
          <div className="p-2">
            <Button className="h-8 w-36  ">상태변경하기</Button>
          </div>
          <div className="p-2">
            <Button className=" h-8 w-36">수정하기</Button>
          </div>
          <div className="p-2">
            <Button className=" h-8 w-36">삭제하기 </Button>
          </div>
        </div>
      </div>
    </>
  )
}
