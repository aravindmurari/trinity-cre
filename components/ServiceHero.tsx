'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const PANELS = [
  {
    id: 'tenant-rep',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    ghost: 'Tenant\nRep',
    label: 'WE KNOW',
    title: 'Tenant\nRepresentation',
    body: 'Finding the right industrial space for your business. We negotiate leases on your behalf — no conflict of interest, ever.',
    cta: 'Explore services',
    href: '/services#tenant-rep',
  },
  {
    id: 'industrial',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80',
    ghost: 'Industrial',
    label: 'WE KNOW',
    title: 'Industrial',
    body: "Atlanta's industrial market moves fast. Warehouse, distribution, flex — we bring local expertise and data-driven strategy to every deal.",
    cta: 'View listings',
    href: '/listings',
  },
  {
    id: 'investment',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80',
    ghost: 'Investment\nSales',
    label: 'WE KNOW',
    title: 'Investment\nSales',
    body: 'Acquire and divest industrial assets at maximum value. We connect qualified capital with the right Greater Atlanta opportunities.',
    cta: 'Learn more',
    href: '/services#investment-sales',
  },
]

const INTERVAL = 5000

export default function ServiceHero() {
  const [active, setActive] = useState(1)
  const [progress, setProgress] = useState(0)

  const advance = useCallback(() => {
    setActive((p) => (p + 1) % PANELS.length)
    setProgress(0)
  }, [])

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
    <section className="relative h-[82vh] min-h-[540px] flex flex-col overflow-hidden">

      {/* Background images — crossfade on active change */}
      {PANELS.map((panel, i) => (
        <div
          key={panel.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={panel.image}
            alt=""
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      ))}

      {/* Dark overlay so text is always readable */}
      <div className="absolute inset-0 bg-navy-900/70" />

      {/* 3-panel columns */}
      <div className="relative flex-1 flex">
        {PANELS.map((panel, i) => {
          const isActive = i === active
          return (
            <button
              key={panel.id}
              onClick={() => handlePanelClick(i)}
              className={`
                relative flex-1 flex flex-col justify-center px-7 lg:px-10 py-12
                border-r border-white/10 last:border-r-0
                transition-all duration-700 ease-in-out cursor-pointer text-left
                ${!isActive ? 'hover:bg-white/[0.04]' : ''}
              `}
            >
              {/* Active panel darkening + blur */}
              {isActive && (
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-700" />
              )}

              {/* Left gold accent bar */}
              {isActive && (
                <div className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-gold" />
              )}

              <div className="relative z-10">
                {isActive ? (
                  <div className="animate-fadeIn">
                    <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                      {panel.label}
                    </p>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold italic text-white leading-tight mb-4">
                      {panel.title.split('\n').map((line, j) => (
                        <span key={j} className="block">{line}</span>
                      ))}
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
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
                  <h2 className="text-2xl lg:text-3xl font-bold text-white/35 leading-tight">
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

      {/* Bottom bar */}
      <div className="relative flex items-center justify-between px-7 lg:px-10 py-4 border-t border-white/10">
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
