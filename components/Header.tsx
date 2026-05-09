'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/listings', label: 'Listings' },
  { href: '/insights', label: 'Market Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-navy-800 sticky top-0 z-50 border-b border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
              <span className="text-navy-800 font-bold text-sm">T</span>
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight">Trinity CRE Group</div>
              <div className="text-gold text-xs leading-tight">Burke Doggett</div>
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
              className="bg-gold text-navy-800 text-sm font-semibold px-4 py-2 rounded hover:bg-gold-300 transition-colors"
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
                className="bg-gold text-navy-800 text-sm font-semibold px-4 py-2 rounded text-center"
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
