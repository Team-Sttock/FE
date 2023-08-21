import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav className="w-[100vw] min-w-[1440px] h-20 flex justify-between items-center px-[100px] pl-[10%] bg-white border border-ivory">
        <Logo />
        <Menu />
        <Buttons />
      </nav>
    </>
  )
}

const Logo = () => {
  return (
    <div className="h-[50px] mr-[50px] ml-[30px]">
      <Link href="/">
        <img src="/main/sttock_logo_icon.svg " alt="로고" />
      </Link>
    </div>
  )
}
const Menu = () => {
  return (
    <div className="flex gap-[100px] justify-start items-center mt-4 ">
      <Link
        href="/thisweek"
        className="whitespace-pre-wrap text-dark-brown hover:text-light-brown "
      >
        이번 주 구매
      </Link>

      <Link
        href="/calendar"
        className="whitespace-pre-wrap text-dark-brown hover:text-light-brown  "
      >
        스똑캘린더
      </Link>

      <Link
        href="/itemlist"
        className="whitespace-pre-wrap text-dark-brown hover:text-light-brown  "
      >
        항목별 보기
      </Link>
    </div>
  )
}
const Buttons = () => {
  return (
    <div className="flex gap-[8px] items-center">
      <div className="mt-5">
        <button className="w-[23px] h-[23]px ml-10 ">
          <img src="main/add_Item_icon.svg" alt="추가버튼" />
        </button>
      </div>
      <Link href="/mypage" className="w-[23px] h-[23]px ml-5 mt-3.5">
        <img src="main/my_page_icon.svg" alt="마이페이지버튼" />
      </Link>
    </div>
  )
}
