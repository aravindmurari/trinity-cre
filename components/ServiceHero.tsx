'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const PANELS = [
  {
    id: 'tenant-rep',
    ghost: 'Tenant\nRep',
    label: 'WE KNOW',
    title: 'Tenant\nRepresentation',
    body: 'Finding the right industrial space for your business. We negotiate leases on your behalf — no conflict of interest, ever.',
    cta: 'Explore services',
    href: '/services#tenant-rep',
  },
  {
    id: 'industrial',
    ghost: 'Industrial',
    label: 'WE KNOW',
    title: 'Industrial',
    body: "Atlanta's industrial market moves fast. Warehouse, distribution, flex — we bring local expertise and data-driven strategy to every deal.",
    cta: 'View listings',
    href: '/listings',
  },
  {
    id: 'investment',
    ghost: 'Investment\nSales',
    label: 'WE KNOW',
    title: 'Investment\nSales',
    body: 'Acquire and divest industrial assets at maximum value. We connect qualified capital with the right Greater Atlanta opportunities.',
    cta: 'Learn more',
    href: '/services#investment-sales',
  },
]

export default function ServiceHero() {
  const [active, setActive] = useState(1)
  const [progress, setProgress] = useState(0)

  const INTERVAL = 5000

  const advance = useCallback(() => {
    setActive((p) => (p + 1) % PANELS.length)
    setProgress(0)
  }, [])

  // Auto-rotate
  useEffect(() => {
    const tick = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { advance(); return 0 }
        return p + (100 / (INTERVAL / 100))
      })
    }, 100)
    return () => clearInterval(tick)
  }, [advance])

  function handlePanelClick(i: number) {
    setActive(i)
    setProgress(0)
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/*
        Background: Replace this gradient with a real industrial property photo.
        e.g. style={{ backgroundImage: "url('/hero-photo.jpg')" }}
      */}
      <div
        className="absolute inset-0 bg-navy-900"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 30% 60%, rgba(255,255,255,0.03) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.02) 0%, transparent 50%)',
        }}
      />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* 3-panel columns */}
      <div className="relative flex-1 flex">
        {PANELS.map((panel, i) => {
          const isActive = i === active
          return (
            <button
              key={panel.id}
              onClick={() => handlePanelClick(i)}
              className={`
                relative flex-1 flex flex-col justify-center px-8 lg:px-12 py-20
                border-r border-white/10 last:border-r-0
                transition-all duration-700 ease-in-out cursor-pointer text-left
                ${!isActive ? 'hover:bg-white/[0.03]' : ''}
              `}
            >
              {/* Active overlay */}
              {isActive && (
                <div className="absolute inset-0 bg-navy-800/70 backdrop-blur-sm transition-opacity duration-700" />
              )}

              {/* Left accent bar on active */}
              {isActive && (
                <div className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-gold" />
              )}

              <div className="relative z-10">
                {isActive ? (
                  /* Active panel: full content */
                  <div className="animate-fadeIn">
                    <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                      {panel.label}
                    </p>
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold italic text-white leading-tight mb-5">
                      {panel.title.split('\n').map((line, j) => (
                        <span key={j} className="block">{line}</span>
                      ))}
                    </h2>
                    <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-xs">
                      {panel.body}
                    </p>
                    <Link
                      href={panel.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-white text-sm font-semibold italic hover:text-gold transition-colors group"
                    >
                      {panel.cta}
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                ) : (
                  /* Ghost panel: just the title */
                  <h2 className="text-3xl lg:text-4xl font-bold text-white/40 leading-tight">
                    {panel.ghost.split('\n').map((line, j) => (
                      <span key={j} className="block">{line}</span>
                    ))}
                  </h2>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Bottom bar: progress dots + phone */}
      <div className="relative flex items-center justify-between px-8 lg:px-12 py-5 border-t border-white/10">
        <div className="flex items-center gap-3">
          {PANELS.map((_, i) => (
            <button
              key={i}
              onClick={() => handlePanelClick(i)}
              className="relative h-0.5 cursor-pointer overflow-hidden rounded-full transition-all duration-300"
              style={{ width: i === active ? 40 : 16, background: 'rgba(255,255,255,0.2)' }}
              aria-label={`Go to panel ${i + 1}`}
            >
              {i === active && (
                <span
                  className="absolute inset-y-0 left-0 bg-gold transition-none"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
        <a href="tel:7703772063" className="text-gold text-sm font-medium hover:text-gold-300 transition-colors hidden sm:block">
          (770) 377-2063
        </a>
      </div>
    </section>
  )
}
