import { Noto_Sans } from 'next/font/google'
import React from 'react'

import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center m-auto max-w-3xl w-full px-4 mb-10">
      <div className="flex flex-col justify-center items-stretch my-10 max-w-3xl w-full py-2">
        <h1
          className={classNames(
            'md:text-2xl text-xl font-bold text-dark-brown mb-2',
            NotoSans.className
          )}
        >
          상품 상태 변경
        </h1>
        <hr className="relative w-full border-1 border-beige" />

        <div className="flex flex-col justify-center items-stretch w-full mt-10 space-y-6 ">
          <p className="text-lg text-dark-brown">
            이 상품의 상태는
            <span className="font-semibold text-xl text-dark-brown mx-4">
              사용중
            </span>
            입니다.
          </p>
          <StatePComponent string={'상품의 상태를 변경할 수 있습니다.'} />
        </div>
        <div className="flex flex-col justify-center items-center w-full space-y-8 my-6">
          <StateButtonComponent
            state={'재구매했어요!'}
            stateComment={`상품의 상태가 '사용중' 으로 변경되며, 주기가 새롭게 시작됩니다. `}
          />
          <StateButtonComponent
            state={'아직 남았어요!'}
            stateComment={`상품의 상태가 ‘사용중'으로 변경됩니다. `}
          />
          <StateButtonComponent
            state={'구매 쉴래요!'}
            stateComment={`상품의 상태가 ‘사용중지’로 변경됩니다. `}
          />
        </div>
      </div>
    </div>
  )
}
interface StateButtonComponentProps {
  state: React.ReactNode
  stateComment: React.ReactNode
}

interface StateH3ComponentProps {
  string: React.ReactNode
}

interface StatePComponentProps {
  string: React.ReactNode
}

const StateButtonComponent = ({
  state,
  stateComment,
}: StateButtonComponentProps) => {
  return (
    <button
      className={classNames(
        'flex flex-col justify-center space-x-0 item-start border text-left border-beige shadow-mobile h-24 w-full px-6',
        'md:flex-row md:justify-start md:space-x-8 md:items-center md:shadow-desktop md:px-10'
      )}
    >
      <StateH3Component string={state} />
      <StatePComponent string={stateComment} />
    </button>
  )
}

const StateH3Component = ({ string }: StateH3ComponentProps) => {
  return <h3 className="text-xl font-bold text-dark-brown ">{string}</h3>
}

const StatePComponent = ({ string }: StatePComponentProps) => {
  return <p className=" text-light-brown">{string}</p>
}
