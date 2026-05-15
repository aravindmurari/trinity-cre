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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isGreenTheme, setIsGreenTheme] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const check = () => {
      const t = localStorage.getItem('trinity-theme') ?? 'grove'
      setIsGreenTheme(GREEN_THEMES.has(t))
    }
    check()
    window.addEventListener('themechange', check)
    return () => window.removeEventListener('themechange', check)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'backdrop-blur-md border-white/10' : 'backdrop-blur-sm border-white/10'}`}
      style={{ backgroundColor: scrolled ? 'color-mix(in srgb, var(--color-navy-800) 95%, transparent)' : 'color-mix(in srgb, var(--color-navy-800) 50%, transparent)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="flex flex-col items-start gap-2 w-fit">
              {isGreenTheme ? (
                <Image
                  src="/trinity-cre/logo-tcre.png"
                  alt="Trinity CRE"
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain"
                  priority
                />
              ) : (
                <Image
                  src="/trinity-cre/logo-tcre-white.png"
                  alt="Trinity CRE"
                  width={140}
                  height={56}
                  className="h-11 w-auto object-contain"
                  priority
                />
              )}
              <div className="h-1 w-full bg-gold rounded-full" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:7703772063" className="text-gold text-sm font-medium hover:text-gold-300 transition-colors">
              (770) 377-2063
            </a>
            <Link
              href="/contact"
              className="bg-gold text-navy-800 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gold-300 transition-colors"
            >
              Schedule a Call
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-navy-700">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white px-2 py-2 text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-navy-700 flex flex-col gap-3">
              <a href="tel:7703772063" className="text-gold text-sm font-medium px-2">
                (770) 377-2063
              </a>
              <Link
                href="/contact"
                className="bg-gold text-navy-800 text-sm font-semibold px-4 py-2 rounded-lg text-center"
                onClick={() => setMenuOpen(false)}
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
