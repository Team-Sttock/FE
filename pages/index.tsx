import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`text-blue-500 text-2xl uppercase ${inter.className}`}>
      Hello world
    </main>
  )
}
