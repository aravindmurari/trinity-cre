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
    cta: 'See more',
    href: '/services#tenant-rep',
  },
  {
    id: 'industrial',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80',
    ghost: 'Industrial',
    label: 'WE KNOW',
    title: 'Industrial',
    body: "Atlanta's industrial market moves fast. Warehouse, distribution, flex — we bring local expertise and data-driven strategy to every deal.",
    cta: 'See more',
    href: '/listings',
  },
  {
    id: 'investment',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80',
    ghost: 'Investment\nSales',
    label: 'WE KNOW',
    title: 'Investment\nSales',
    body: 'Acquire and divest industrial assets at maximum value. We connect qualified capital with the right Greater Atlanta opportunities.',
    cta: 'See more',
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
    <section className="relative h-screen min-h-[600px] overflow-hidden">

      {/* Full-bleed background images — crossfade on active change */}
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

      {/* Overall dark tint */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Panel group — centered, not full width */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div
          className="flex w-full"
          style={{ maxWidth: 960, height: 440 }}
        >
          {PANELS.map((panel, i) => {
            const isActive = i === active
            return (
              <button
                key={panel.id}
                onClick={() => handlePanelClick(i)}
                className="relative flex-1 flex flex-col justify-between p-8 cursor-pointer text-left transition-all duration-500"
                style={{
                  border: '1px solid rgba(255,255,255,0.25)',
                  marginLeft: i > 0 ? -1 : 0,
                  background: isActive
                    ? 'rgba(15, 40, 55, 0.72)'
                    : 'rgba(0, 0, 0, 0.12)',
                  backdropFilter: isActive ? 'blur(6px)' : 'none',
                  zIndex: isActive ? 1 : 0,
                }}
              >
                {isActive ? (
                  /* Active: label + title + body + cta */
                  <div className="flex flex-col h-full animate-fadeIn">
                    <div>
                      <p className="text-white/70 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                        {panel.label}
                      </p>
                      <h2 className="text-3xl lg:text-4xl font-bold italic text-white leading-tight mb-4">
                        {panel.title.split('\n').map((line, j) => (
                          <span key={j} className="block">{line}</span>
                        ))}
                      </h2>
                      <p className="text-white/75 text-sm leading-relaxed max-w-[240px]">
                        {panel.body}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link
                        href={panel.href}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-white text-sm font-semibold italic hover:text-gold transition-colors group"
                      >
                        {panel.cta}
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                      {/* Progress bar */}
                      <div className="h-px w-8 bg-white/20 overflow-hidden">
                        <span
                          className="block h-full bg-gold transition-none"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Inactive: just the large ghost title */
                  <div className="flex items-start h-full">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {panel.ghost.split('\n').map((line, j) => (
                        <span key={j} className="block">{line}</span>
                      ))}
                    </h2>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Phone bottom-right */}
      <a
        href="tel:7703772063"
        className="absolute bottom-6 right-6 text-white/60 text-xs font-medium hover:text-gold transition-colors z-20 hidden sm:block"
      >
        (770) 377-2063
      </a>

    </section>
  )
}
