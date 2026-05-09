import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Trinity CRE Group | Industrial Real Estate | Atlanta',
    template: '%s | Trinity CRE Group',
  },
  description:
    'Burke Doggett - Industrial commercial real estate specialist serving Greater Atlanta. Tenant representation, buyer representation, and investment sales.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
