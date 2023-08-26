import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface MenuProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setIsMenuOpen(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <nav>
        <div className="bg-white w-screen flex flex-wrap p-3 sm:px-10 justify-between items-center md:items-baseline border border-ivory">
          <div className="md:hidden flex">
            <SideIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
          <Logo />
          <Menu />
          <Buttons />
        </div>
      </nav>

      {isMenuOpen && (
        <div className="w-full h-full fixed inset-0 z-10">
          <button
            className="fixed inset-0 bg-opacity-50 z-10 bg-gray-500"
            onClick={toggleMenu}
          />
        </div>
      )}

      <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  )
}

const Logo = () => {
  return (
    <div className="flex justify-center items-center p-2 md:pl-20">
      <Link href="/">
        <img
          src="/main/sttock_logo_icon.svg"
          alt="로고"
          className="lg:w-full h-full w-[120px] "
        />
      </Link>
    </div>
  )
}

const Menu = () => {
  return (
    <>
      <ul className="md:flex hidden gap-14 text-sm lg:text-lg text-dark-brown md:pr-20 ">
        <li className="hover:text-light-brown">
          <Link href="/this-week">이번 주 구매</Link>
        </li>
        <li className="hover:text-light-brown">
          <Link href="/calendar">스똑캘린더</Link>
        </li>
        <li className="hover:text-light-brown">
          <Link href="/list">항목별 보기</Link>
        </li>
      </ul>
    </>
  )
}

const Buttons = () => {
  return (
    <div className="flex gap-6 p-2 lg:pr-20 ">
      <button>
        <img src="main/add_Item_icon.svg" alt="추가버튼" />
      </button>
      <Link href="/mypage">
        <img src="main/my_page_icon.svg" alt="마이페이지버튼" />
      </Link>
    </div>
  )
}

const SideIcon = ({ isMenuOpen, toggleMenu }: MenuProps) => {
  return (
    <div className="pr-9">
      <button
        onClick={toggleMenu}
        className="lg:hidden text-dark-brown hover:text-beige"
      >
        {isMenuOpen ? (
          <XMarkIcon className="w-6 h-6 text-dark-brown hover:text-light-brown" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-dark-brown hover:text-light-brown" />
        )}
      </button>
    </div>
  )
}

const SideMenu = ({ isMenuOpen, toggleMenu }: MenuProps) => {
  return (
    <div
      className={`fixed md:hidden p-2 inset-y-0 flex flex-col text-center bg-ivory w-1/2 z-10 transform ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <button className="flex justify-end p-2" onClick={toggleMenu}>
        <XMarkIcon className="w-8 h-8 text-dark-brown hover:text-light-brown" />
      </button>

      <ul className="text-dark-brown">
        <li className="hover:text-light-brown">
          <Link
            href="/this-week"
            className="p-2 hover:bg-beige block"
            onClick={toggleMenu}
          >
            <p>이번주 구매</p>
          </Link>
        </li>
        <li className="hover:text-light-brown">
          <Link
            href="/calendar"
            className="p-2 hover:bg-beige block"
            onClick={toggleMenu}
          >
            <p>스똑 캘린더</p>
          </Link>
        </li>
        <li className="hover:text-light-brown">
          <Link
            href="/list"
            className="p-2 hover:bg-beige block"
            onClick={toggleMenu}
          >
            <p>항목별 보기</p>
          </Link>
        </li>
        <li className="hover:text-light-brown">
          <Link
            href="/mypage"
            className="p-2 hover:bg-beige block"
            onClick={toggleMenu}
          >
            <p>마이 페이지</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
