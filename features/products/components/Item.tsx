import Link from 'next/link'
import { Line } from 'rc-progress'
export default function Item() {
  const product = {
    id: 1,
    name: '트리트먼트 / 린스',
    categoryIcon: '/icons/bath-icon.svg',
    remainDays: 3,
  }
  return (
    <div className="border border-beige max-w-[467px] w-full h-fit py-5 px-5 sm:px-8 space-y-6">
      <div className="flex flex-row items-center w-full">
        <img
          src={product.categoryIcon}
          alt={product.categoryIcon}
          className="w-14 h-14 mr-6"
        />
        <h3 className="mr-3 flex-1 text-dark-brown font-bold">
          {product.name}
        </h3>
        <GoToDetailButton />
      </div>
      <div className="flex flex-row items-center justify-between  w-full">
        <Line
          percent={20}
          strokeColor="#9f8772"
          trailColor="#f5f0eb"
          strokeLinecap="butt"
          className="w-full h-4 rounded-full mr-4"
        ></Line>
        <h3 className="text-dark-brown text-sm w-20 text-right">
          {product.remainDays}일 남음
        </h3>
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
