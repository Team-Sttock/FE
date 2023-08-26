import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useState } from 'react'

interface MenuProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav>
      <div className="w-screen flex flex-wrap items-center md:items-baseline py-3 p-3 m-auto gap-2 justify-between border border-ivory">
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Logo />
        <Buttons />
      </div>
    </nav>
  )
}

const Logo = () => {
  return (
    <div className="md:pl-20 flex justify-center  md:w-auto md:order-2">
      <Link href="/">
        <img src="/main/sttock_logo_icon.svg " alt="로고" />
      </Link>
    </div>
  )
}

const Menu = ({ isMenuOpen, toggleMenu }: MenuProps) => {
  return (
    <>
      <div className="md:hidden md:w-full md:order-1">
        <button onClick={toggleMenu} className="p-2">
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>
      <div className="md:w-auto md:order-3">
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:px-5 px-10 gap-14 text-sm lg:text-lg text-dark-brown`}
        >
          <li className="hover:text-light-brown">
            <Link href="/this-week">이번 주 구매</Link>
          </li>
          <li className="hover:text-light-brown">
            <Link href="/calendar">스똑캘린더</Link>
          </li>
          <li className="hover:text-light-brown">
            <Link href="/my-page">마이 페이지</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

const Buttons = () => {
  return (
    <div className=" flex justify-center p-2 md:pr-20 gap-6 md:w-auto md:order-4   ">
      <button>
        <img src="main/add_Item_icon.svg" alt="추가버튼" />
      </button>
      <Link href="/mypage">
        <img src="main/my_page_icon.svg" alt="마이페이지버튼" />
      </Link>
    </div>
  )
}
