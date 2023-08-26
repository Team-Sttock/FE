import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface MenuProps {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current != null &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <nav>
        <div className=" bg-white w-screen flex flex-wrap p-3 justify-between items-baseline border border-ivory">
          {isMobile ? (
            <SideIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          ) : (
            <Menu />
          )}
          <Logo isMobile={isMobile} />
          <Buttons />
        </div>
      </nav>
      {isMobile && (
        <SideMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          menuRef={menuRef}
        />
      )}
    </>
  )
}

const Logo = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div className={isMobile ? 'md:order-2 px-2 pl-10 ' : 'pl-10 px-2'}>
      <Link href="/">
        <img src="/main/sttock_logo_icon.svg" alt="로고" className="px-2" />
      </Link>
    </div>
  )
}

const Menu = () => {
  return (
    <>
      <div className="md:order-3 flex justify-center ">
        <ul className="md:flex hidden gap-14 text-sm lg:text-lg text-dark-brown">
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
      </div>
    </>
  )
}

const Buttons = () => {
  return (
    <div className="flex items-center justify-between p-2 lg:pr-20 gap-6 md:order-4">
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
    <button
      onClick={toggleMenu}
      className="lg:hidden  text-dark-brown hover:text-beige"
    >
      {isMenuOpen ? (
        <XMarkIcon className="w-6 h-6 text-dark-brown hover:text-light-brown" />
      ) : (
        <Bars3Icon className="w-6 h-6 text-dark-brown hover:text-light-brown" />
      )}
    </button>
  )
}

const SideMenu = ({
  isMenuOpen,
  toggleMenu,
  menuRef,
}: MenuProps & { menuRef: any }) => {
  return (
    <div
      ref={menuRef}
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
