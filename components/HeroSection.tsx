'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import HeroCanvas from './HeroCanvas'
import SkylineCanvas from './SkylineCanvas'
import ServiceHero from './ServiceHero'

type AnimationType = 'particles' | 'skyline' | 'panels'

export default function HeroSection() {
  const [animation, setAnimation] = useState<AnimationType>('panels')

  useEffect(() => {
    const saved = localStorage.getItem('trinity-animation') as AnimationType | null
    if (saved) setAnimation(saved)

    const handler = (e: Event) => setAnimation((e as CustomEvent<AnimationType>).detail)
    window.addEventListener('animationchange', handler)
    return () => window.removeEventListener('animationchange', handler)
  }, [])

  // Service panels layout is self-contained
  if (animation === 'panels') return <ServiceHero />

  // Canvas-based hero layout
  return (
    <section className="relative min-h-screen flex items-center bg-navy-800 overflow-hidden">
      {animation === 'skyline' ? <SkylineCanvas /> : <HeroCanvas />}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-800/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-navy-700/60 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(82, 183, 136, 0.9)' }} />
            <span className="text-green-300 text-xs font-medium tracking-wide uppercase">
              Industrial CRE Specialist - Greater Atlanta
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {"Atlanta's Industrial"}
            <br />
            <span className="text-gold">Real Estate Expert</span>
          </h1>

          <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
            Helping tenants, buyers, and investors navigate Greater Atlanta&apos;s industrial market with
            data-driven strategy and 38 years of Trinity CRE expertise behind every deal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/listings"
              className="bg-gold text-navy-800 font-semibold px-8 py-4 rounded-xl text-center hover:bg-gold-300 transition-colors"
            >
              View Listings
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-center hover:border-white/60 hover:bg-white/5 transition-colors backdrop-blur-sm"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
