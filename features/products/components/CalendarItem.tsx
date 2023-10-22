import Link from 'next/link'

import { State, StateLabel } from '@/features/common/components/StateLabel'
export default function CalendarItem() {
  const product = {
    id: 1,
    name: '트리트먼트 / 린스',
    categoryIcon: '/icons/bath-icon.svg',
    remainDays: 3,
  }
  return (
    <div className="w-full max-w-[467px] h-fit flex items-center border border-beige py-5 px-6">
      <div className="flex flex-col justify-between items-center">
        <img
          src={product.categoryIcon}
          alt={product.categoryIcon}
          className="w-14 h-14 mr-6"
        />
      </div>
      <div className="flex-1 min-w-[140px] flex flex-col justify-between items-start gap-3">
        <h3 className="mr-3 flex-1 text-dark-brown font-bold">
          {product.name}
        </h3>
        <div className="flex-1 flex items-center  w-full">
          <span className="text-dark-brown text-center text-sm ">
            {product.remainDays}일 남음
          </span>
          <StateLabel state={State.STOP} />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <GoToDetailButton />
      </div>
    </div>
  )
}

const GoToDetailButton = () => {
  return (
    <>
      <Link href="/detail/[id]" as="/detail/1" passHref>
        <button className="flex flex-row items-center justify-center space-x-2 ">
          <img
            src="/icons/goto.svg"
            alt="goto"
            className="w-4 h-4 object-cover"
          />
          <span className="text-light-brown text-sm">상세보기</span>
        </button>
      </Link>
    </>
  )
}
