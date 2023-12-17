import { Noto_Sans } from 'next/font/google'
import Link from 'next/link'

import { useLogout } from '@/hooks/auth/useLogout'
import { useUser } from '@/hooks/user/useUser'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

export default function Page() {
  const { data } = useUser()
  const { mutateAsync } = useLogout()

  const onLogout = async () => {
    try {
      await mutateAsync()
      location.href = '/'
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
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
              마이페이지
            </h1>
          </div>
          <hr className="relative w-full border-1 border-beige" />
        </header>
        <div className="w-full max-w-2xl m-auto flex-col justify-center items-center space-y-4">
          <div className="flex justify-between items-center border border-beige px-6 py-8 ">
            <div className="flex flex-col space-y-2 items-start justify-start ">
              <div className="flex items-center justify-center gap-1  text-dark-brown ">
                <span className="font-bold text-xl">{data?.data.name}</span>
                <span>님의 스똑</span>
              </div>
              <span className="text-light-brown">{data?.data.email}</span>
            </div>

            <Link
              href="/user/info"
              className="text-sm text-light-brown flex items-center justify-center"
            >
              <span>회원정보</span>
              <img src="/icons/arrow-move.svg" alt="arrow-move" />
            </Link>
          </div>
          <div className="bg-ivory border border-beige px-6 py-8 space-y-6">
            <Link
              href="/user/change-password"
              className="font-bold text-dark-brown flex items-center justify-between"
            >
              <span>비밀번호 변경</span>
              <img src="/icons/arrow-move.svg" alt="arrow-move" />
            </Link>
            <Link
              href="/user/edit-info"
              className="font-bold text-dark-brown flex items-center justify-between"
            >
              <span>회원정보 수정</span>
              <img src="/icons/arrow-move.svg" alt="arrow-move" />
            </Link>
            <Link
              href="/user/leave"
              className="font-bold text-dark-brown flex items-center justify-between"
            >
              <span>회원탈퇴</span>
              <img src="/icons/arrow-move.svg" alt="arrow-move" />
            </Link>
          </div>
          <div className="bg-ivory border border-beige px-6 py-8 space-y-6">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdFydOTe_kBSceYLF7gpGnYEdDEb_9Dok632fo8K0o2X53wZg/viewform"
              className="font-bold text-dark-brown flex items-center justify-between"
            >
              <span>고객센터</span>
              <img src="/icons/arrow-move.svg" alt="arrow-move" />
            </Link>
            <button
              className="w-full font-bold text-dark-brown flex items-center justify-between"
              onClick={onLogout}
            >
              <span>로그아웃</span>
              <img src="/icons/arrow-move.svg" alt="arrow-move" />
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
