import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="w-screen flex flex-col md:items-baseline md:flex-row py-3 justify-center border border-ivory">
          <Logo />
          <Menu />
          <Buttons />
        </div>
      </nav>
    </>
  )
}

const Logo = () => {
  return (
    <div className=" md:pl-20 flex justify-center">
      <Link href="/">
        <img src="/main/sttock_logo_icon.svg " alt="로고" />
      </Link>
    </div>
  )
}
const Menu = () => {
  return (
    <div className="md:w-1/2 flex justify-center">
      <ul className="flex md:px-5 px-10 gap-14  text-sm  lg:text-lg text-dark-brown ">
        <li className=" hover:text-light-brown">
          <Link href="/this-week">이번 주 구매</Link>
        </li>
        <li className=" hover:text-light-brown">
          <Link href="/calendar">스똑캘린더</Link>
        </li>
        <li className=" hover:text-light-brown">
          <Link href="/list">항목별 보기</Link>
        </li>
      </ul>
    </div>
  )
}

const Buttons = () => {
  return (
    <div className="md:w-1/4 flex justify-center px-10 pr-20 gap-6  ">
      <button>
        <img src="main/add_Item_icon.svg" alt="추가버튼" />
      </button>
      <Link href="/mypage">
        <img src="main/my_page_icon.svg" alt="마이페이지버튼" />
      </Link>
    </div>
  )
}
