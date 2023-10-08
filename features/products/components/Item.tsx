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
    <div className="border border-beige w-[467px] h-[158px] flex flex-col justify-center items-center px-4 m-auto space-y-8">
      <div className="flex flex-row items-center justify-between space-x-12">
        <img
          src={product.categoryIcon}
          alt={product.categoryIcon}
          className="w-14 h-14"
        />
        <h3 className="text-dark-brown font-bold">{product.name}</h3>
        <GoToDetailButton />
      </div>
      <div className="flex flex-row items-center justify-between space-x-10">
        <Line
          percent={20}
          strokeColor="#9f8772"
          trailColor="#f5f0eb"
          strokeLinecap="butt"
          className="w-64 h-4 rounded-full"
        ></Line>
        <h3 className="text-dark-brown text-sm">{product.remainDays}일 남음</h3>
      </div>
    </div>
  )
}

const GoToDetailButton = () => {
  return (
    <>
      <Link href="/detail/[id]" as="/detail/1" passHref>
        <button className="flex flex-row items-center justify-center space-x-2">
          <img src="/icons/goto.svg" alt="goto" />
          <span className="text-light-brown">상세보기</span>
        </button>
      </Link>
    </>
  )
}
