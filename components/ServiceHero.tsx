'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const IMAGES = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80', // office interior
  'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80',    // warehouse
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80', // aerial commercial
]

const SERVICES = [
  {
    id: 'industrial',
    label: 'INDUSTRIAL',
    title: 'Industrial',
    roles: 'Tenants · Landlords',
    href: '/listings',
  },
  {
    id: 'office',
    label: 'OFFICE SPACE',
    title: 'Office Space',
    roles: 'Tenants · Landlords',
    href: '/services',
  },
  {
    id: 'investment',
    label: 'INVESTMENT SALES',
    title: 'Investment Sales',
    roles: 'Buyers · Sellers',
    href: '/services#investment-sales',
  },
]

export default function ServiceHero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative flex flex-col sm:h-screen">

      {/* Rotating background images */}
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'var(--hero-img-filter)' }}
            draggable={false}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0" style={{ background: 'var(--hero-tint)' }} />

      {/* Headline — centered in upper area */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 text-center px-4 py-20 sm:py-0">
        <p style={{
          color: 'var(--color-gold)',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Greater Atlanta
        </p>
        <h1 style={{
          fontFamily: 'var(--font-playfair)',
          color: '#ffffff',
          fontSize: 'clamp(26px, 2.8vw, 42px)',
          fontWeight: 600,
          fontStyle: 'normal',
          letterSpacing: '0.02em',
          lineHeight: 1.15,
          margin: '0 0 16px',
        }}>
          Commercial Real Estate
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.55)',
          fontSize: '13px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          Industrial · Office Space · Investment Sales
        </p>
      </div>

      {/* Static service cards — anchored to bottom */}
      <div className="relative z-10 px-4 pb-10 sm:pb-14">
        <div
          className="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3"
          style={{ maxWidth: 900 }}
        >
          {SERVICES.map((svc) => (
            <Link
              key={svc.id}
              href={svc.href}
              className="group flex flex-col justify-between p-6 transition-colors duration-300"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderTop: '2px solid var(--color-gold)',
                borderRadius: '4px',
                minHeight: '150px',
              }}
            >
              <div>
                <p style={{
                  color: 'var(--color-gold)',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}>
                  {svc.label}
                </p>
                <h2 style={{
                  color: '#ffffff',
                  fontSize: '22px',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  lineHeight: 1.2,
                  margin: 0,
                }}>
                  {svc.title}
                </h2>
              </div>

              <div className="flex items-center justify-between mt-5">
                <span style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '11px',
                  letterSpacing: '0.04em',
                }}>
                  {svc.roles}
                </span>
                <span
                  className="text-white group-hover:text-gold transition-colors"
                  style={{ fontSize: '13px', fontWeight: 600, fontStyle: 'italic' }}
                >
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
