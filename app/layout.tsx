import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Trinity CRE Group | Industrial Real Estate | Atlanta',
    template: '%s | Trinity CRE Group',
  },
  description:
    'Trinity CRE Group - Industrial commercial real estate specialists serving Greater Atlanta. Tenant representation, buyer representation, and investment sales.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <head>
        {/* Restore saved theme before first paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('trinity-theme')||'midnight';if(t&&t!=='slate')document.documentElement.setAttribute('data-theme',t)}catch(e){}`,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  )
}
