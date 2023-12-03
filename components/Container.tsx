import { type PropsWithChildren, useState } from 'react'

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { getCookie } from '@/utils/cookie'

import Navbar from './Navbar'

export default function Container({ children }: PropsWithChildren) {
  const [isAuth, setIsAuth] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setIsAuth(getCookie('isAuth') === 'true')
  }, [])

  return (
    <>
      <Navbar isAuth={isAuth} />
      {children}
    </>
  )
}
