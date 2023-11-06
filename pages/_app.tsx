import '@/styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'

import Container from '@/components/Container'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </QueryClientProvider>
  )
}
