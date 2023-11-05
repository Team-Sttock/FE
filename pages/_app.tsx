import '@/styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import { userClient } from '@/apis'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  const [isAuth, setIsAuth] = useState<'Pending' | 'Success' | 'Failuer'>(
    'Pending'
  )

  useEffect(() => {
    void (async () => {
      try {
        await userClient.get('/me')
        setIsAuth('Success')
      } catch (err) {
        if (!['/login', '/', '/user/join'].includes(location.pathname)) {
          location.replace('/login')
        }
        setIsAuth('Failuer')
      }
    })()
  }, [])

  if (isAuth === 'Pending') {
    return null
  }

  console.log(isAuth)

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar isAuth={isAuth === 'Success'} />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
