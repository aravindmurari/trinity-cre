'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const GREEN_THEMES = new Set(['forest', 'grove'])

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/buysell', label: 'Buy / Sell' },
  { href: '/listings', label: 'Listings' },
  { href: '/insights', label: 'Trinity Brief' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const [isGreenTheme, setIsGreenTheme] = useState(false)

  useEffect(() => {
    const check = () => {
      const t = localStorage.getItem('trinity-theme') ?? 'grove'
      setIsGreenTheme(GREEN_THEMES.has(t))
    }
    check()
    window.addEventListener('themechange', check)
    return () => window.removeEventListener('themechange', check)
  }, [])

  return (
    <footer className="bg-navy-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex flex-col items-start gap-2 mb-4 w-fit">
              {isGreenTheme ? (
                <Image
                  src="/trinity-cre/logo-tcre.png"
                  alt="Trinity CRE Group"
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <Image
                  src="/trinity-cre/logo-tcre-white.png"
                  alt="Trinity CRE Group"
                  width={140}
                  height={56}
                  className="h-11 w-auto object-contain"
                />
              )}
              <div className="h-1 w-full bg-gold rounded-full" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Atlanta's industrial CRE specialists. Tenant representation, buyer representation,
              and investment sales across the Greater Atlanta metro — backed by 38 years of
              market expertise and trusted client relationships.
            </p>
            <p className="text-xs leading-relaxed">
              KW Commercial / Keller Williams Realty Chattahoochee North
              <br />
              3930 E. Jones Bridge Road, #100, Peachtree Corners, GA 30092
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:7703772063" className="hover:text-white transition-colors">
                (770) 377-2063
              </a>
              <a href="mailto:burkedoggett@kw.com" className="hover:text-white transition-colors">
                burkedoggett@kw.com
              </a>
              <a
                href="https://linkedin.com/in/burke-doggett/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs">
          <p>&copy; {new Date().getFullYear()} Trinity CRE Group. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <p>Trinity CRE Group. KW Commercial is a licensed real estate brokerage.</p>
            <p>
              Website by{' '}
              <a
                href="https://kepram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-300 transition-colors"
              >
                Kepram LLC
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
