'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const PANELS = [
  {
    id: 'tenant-rep',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    ghost: 'Tenant Rep',
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
    ghost: 'Investment Sales',
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

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75" />

      {/* Upper hero text — visible above the panels */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pb-64 z-10 pointer-events-none">
        <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          Industrial CRE Specialist · Greater Atlanta
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-center leading-tight">
          {"Atlanta's Industrial"}
          <br />
          <span className="text-gold">Real Estate Expert</span>
        </h1>
      </div>

      {/* 3 panels — anchored to the bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex border-t border-white/15 z-20">
        {PANELS.map((panel, i) => {
          const isActive = i === active
          return (
            <button
              key={panel.id}
              onClick={() => handlePanelClick(i)}
              className={`
                relative flex-1 flex flex-col justify-between
                px-6 lg:px-10 pt-6 pb-5
                border-r border-white/10 last:border-r-0
                cursor-pointer text-left transition-all duration-500
                ${isActive ? 'bg-black/55 backdrop-blur-sm' : 'bg-black/30 hover:bg-black/45'}
              `}
            >
              {/* Gold left accent on active */}
              {isActive && (
                <div className="absolute left-0 inset-y-0 w-0.5 bg-gold" />
              )}

              <div>
                {isActive ? (
                  <div className="animate-fadeIn">
                    <p className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase mb-2">
                      {panel.label}
                    </p>
                    <h2 className="text-xl lg:text-2xl font-bold italic text-white leading-snug mb-3">
                      {panel.title.split('\n').map((line, j) => (
                        <span key={j} className="block">{line}</span>
                      ))}
                    </h2>
                    <p className="text-gray-300 text-xs leading-relaxed mb-4 max-w-[220px]">
                      {panel.body}
                    </p>
                  </div>
                ) : (
                  <h2 className="text-lg lg:text-xl font-bold text-white/40 leading-snug mt-6">
                    {panel.ghost}
                  </h2>
                )}
              </div>

              {/* Bottom row: CTA + progress */}
              <div className="flex items-center justify-between mt-2">
                {isActive ? (
                  <Link
                    href={panel.href}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-white text-xs font-semibold italic hover:text-gold transition-colors group"
                  >
                    {panel.cta}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                ) : (
                  <span />
                )}

                {/* Per-panel progress bar */}
                <div
                  className="h-0.5 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: isActive ? 40 : 16, background: 'rgba(255,255,255,0.2)' }}
                >
                  {isActive && (
                    <span
                      className="block h-full bg-gold transition-none"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Phone — bottom-right above panels */}
      <a
        href="tel:7703772063"
        className="absolute bottom-[calc(var(--panel-h,180px)+16px)] right-6 text-gold text-xs font-medium hover:text-gold-300 transition-colors z-20 hidden sm:block"
      >
        (770) 377-2063
      </a>
    </section>
  )
}
