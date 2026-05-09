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

      {/* Full-bleed background images — crossfade */}
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

      {/* Subtle overall dark tint */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Left panel column — not full width */}
      <div className="absolute left-0 top-0 bottom-0 w-[340px] lg:w-[400px] flex flex-col z-20">

        {PANELS.map((panel, i) => {
          const isActive = i === active
          return (
            <button
              key={panel.id}
              onClick={() => handlePanelClick(i)}
              className="relative flex flex-col justify-center px-8 lg:px-10 border-b border-white/10 last:border-b-0 cursor-pointer text-left transition-all duration-500"
              style={{
                flex: isActive ? 3 : 1,
                background: isActive ? 'rgba(0,0,0,0.62)' : 'rgba(0,0,0,0.38)',
                backdropFilter: isActive ? 'blur(4px)' : 'blur(2px)',
              }}
            >
              {/* Top gold accent bar on active */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />
              )}

              {isActive ? (
                <div className="animate-fadeIn py-6">
                  <p className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase mb-3">
                    {panel.label}
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-bold italic text-white leading-snug mb-3">
                    {panel.title.split('\n').map((line, j) => (
                      <span key={j} className="block">{line}</span>
                    ))}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-[260px]">
                    {panel.body}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={panel.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-white text-xs font-semibold italic hover:text-gold transition-colors group"
                    >
                      {panel.cta}
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                    {/* Progress bar */}
                    <div className="h-0.5 w-10 rounded-full overflow-hidden bg-white/20">
                      <span
                        className="block h-full bg-gold transition-none"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <h2 className="text-base lg:text-lg font-bold text-white/40 py-1">
                  {panel.ghost}
                </h2>
              )}
            </button>
          )
        })}

        {/* Phone number at very bottom of panel column */}
        <div className="bg-black/50 backdrop-blur-sm px-8 lg:px-10 py-3 border-t border-white/10">
          <a href="tel:7703772063" className="text-gold text-xs font-medium hover:text-gold-300 transition-colors">
            (770) 377-2063
          </a>
        </div>
      </div>

    </section>
  )
}
