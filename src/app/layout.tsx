import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

export const metadata: Metadata = {
  title: 'Billr | Earn points on all your business transactions',
  description: 'With Billr, you can ear points on all your business transactions. We provide the tools so business owners can get rewarded for every ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
