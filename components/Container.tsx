import { type PropsWithChildren, useLayoutEffect, useState } from 'react'

import { getCookie } from '@/utils/cookie'

import Navbar from './Navbar'

export default function Container({ children }: PropsWithChildren) {
  const [isAuth, setIsAuth] = useState(false)

  useLayoutEffect(() => {
    setIsAuth(getCookie('isAuth') === 'true')
  })

  return (
    <>
      <Navbar isAuth={isAuth} />
      {children}
    </>
  )
}
