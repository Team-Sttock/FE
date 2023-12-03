import { Noto_Sans } from 'next/font/google'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import { classNames } from '@/utils/classNames'

const NotoSans = Noto_Sans({
  weight: ['500', '400'],
  subsets: ['latin'],
})

const userInfo = {
  name: '이승연',
  email: 'been0822@naver.com',
  loginId: 'been0822',
  birthday: '2000-08-22',
  genderCd: '2',
  familyNum: '1',
}

const getGenderLabel = (genderCd) => {
  return genderCd === '1' ? '남성' : '여성'
}

const formatBirthday = (birthday) => {
  return birthday.replace(/-/g, '.')
}

export default function Page() {
  const userInfoFields = [
    { label: '이름', value: userInfo.name },
    { label: '이메일', value: userInfo.email },
    { label: '아이디', value: userInfo.loginId },
    { label: '생년월일', value: userInfo.birthday },
    { label: '성별', value: userInfo.genderCd },
    { label: '가구원수', value: userInfo.familyNum },
  ]

  return (
    <>
      <Navbar />
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
              회원정보
            </h1>
          </div>
          <hr className="relative w-full border-1 border-beige" />
        </header>
        <div className="w-full max-w-2xl m-auto flex-col justify-center items-center space-y-4">
          <div className="w-full max-w-xl m-auto p-8 flex-col justify-center items-center border border-beige bg-ivory space-y-6  ">
            <div className="flex flex-col justify-center items-center gap-4">
              {userInfoFields.map((field, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center w-full"
                >
                  <span className="text-light-brown">{field.label}</span>
                  <span className="font-bold text-dark-brown">
                    {field.label === '성별'
                      ? getGenderLabel(userInfo.genderCd)
                      : (field.label === '생년월일' &&
                          formatBirthday(userInfo.birthday)) ||
                        field.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-xl m-auto border border-beige bg-ivory p-5">
            <Link href="/user/edit-info">
              <div className="flex justify-between w-full">
                <span className="font-bold text-dark-brown">
                  회원 정보 수정
                </span>
                <img src="/icons/arrow-move.svg" alt="arrow-move" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
