import '@/styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { OverlayProvider } from '@toss/use-overlay'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <Component {...pageProps} />
      </OverlayProvider>
    </QueryClientProvider>
  )
}
