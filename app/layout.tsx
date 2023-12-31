import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
// providers wrap around application & access to data
// NextThemesProvider - light/dark mode
// generally client side
// switch light to dark mode (user interaction)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
        <main className="flex flex-col items-center min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl text-sm lg:flex">
      <Link href='/'> <h2 className='text-2xl text-bold'>Pokemon Finder App</h2> </Link>
      </div>
        {children}
        </main>
        </ThemeProvider>
        </body>
    </html>
  )
}
