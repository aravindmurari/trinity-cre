import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Trinity Commercial Real Estate - 38 years in the Greater Atlanta market. Burke Doggett brings a rare analytical edge to industrial, office, and investment real estate.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Trinity Commercial Real Estate</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            38 years of Atlanta market expertise. A data-driven approach that sets us apart.
          </p>
        </div>
      </section>

      {/* Main story */}
      <section className="bg-navy-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 560 }}>

            {/* Photo */}
            <div className="relative hidden lg:flex items-end p-10" style={{ minHeight: 480 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
                alt="Burke Doggett"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy-900 to-transparent" />
              <div className="relative z-10 w-full" style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderTop: '2px solid var(--color-gold)',
                borderRadius: '4px',
                padding: '16px 20px',
              }}>
                <p style={{ color: 'var(--color-gold)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>
                  Burke Doggett
                </p>
                <p className="text-white font-semibold text-sm">Commercial Real Estate Specialist</p>
                <p className="text-white/45 text-xs mt-1">KW Commercial · Peachtree Corners, GA</p>
              </div>
            </div>

            {/* Story */}
            <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-20">
              <p style={{ color: 'var(--color-gold)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 20 }}>
                A Different Kind of Brokerage
              </p>
              <h2 className="text-white mb-6" style={{ fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 600, lineHeight: 1.2 }}>
                Built on 38 Years of Trust. Powered by a New Generation.
              </h2>
              <div className="space-y-4 text-white/55 leading-relaxed" style={{ fontSize: 15 }}>
                <p>
                  Trinity Commercial Real Estate has been a fixture in the Greater Atlanta commercial market for 38 years -- built on deep client relationships, local market knowledge, and a reputation for integrity.
                </p>
                <p>
                  Burke Doggett brings a rare perspective to CRE. With degrees in Biological Engineering from UGA and Healthcare Management and Informatics from KSU, he approaches every deal the way a scientist approaches a problem: with data, precision, and a focus on long-term outcomes over short-term wins.
                </p>
                <p>
                  The result is a brokerage that combines institutional knowledge with analytical rigor -- serving tenants, landlords, buyers, and sellers across industrial, office, and investment real estate throughout Greater Atlanta.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-navy-800 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: '38', label: 'Years of Legacy' },
              { value: '3', label: 'Service Areas' },
              { value: 'ATL', label: 'Greater Atlanta Metro' },
              { value: 'KW', label: 'Commercial Network' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-gold font-bold mb-2" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>{stat.value}</div>
                <div className="text-white/40 text-[11px] uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-navy-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p style={{ color: 'var(--color-gold)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16 }}>
            How We Work
          </p>
          <h2 className="text-white mb-12" style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600 }}>
            Both Sides of Every Deal
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: 'INDUSTRIAL',
                title: 'Industrial',
                body: 'Warehouse, distribution, and flex space across Greater Atlanta. We represent tenants finding space and landlords maximizing occupancy.',
                roles: 'Tenants · Landlords',
                href: '/services#industrial',
              },
              {
                label: 'OFFICE SPACE',
                title: 'Office Space',
                body: 'The right office shapes your team and your brand. We work with businesses finding space and owners building long-term occupancy.',
                roles: 'Tenants · Landlords',
                href: '/services#office-space',
              },
              {
                label: 'INVESTMENT SALES',
                title: 'Investment Sales',
                body: 'Acquire and divest commercial assets at maximum value. Data-driven pricing, qualified buyer access, and disciplined deal execution.',
                roles: 'Buyers · Sellers',
                href: '/services#investment-sales',
              },
            ].map((svc) => (
              <Link
                key={svc.label}
                href={svc.href}
                className="group flex flex-col justify-between p-6 transition-colors duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderTop: '2px solid var(--color-gold)',
                  borderRadius: '4px',
                  minHeight: 220,
                }}
              >
                <div>
                  <p style={{ color: 'var(--color-gold)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>
                    {svc.label}
                  </p>
                  <h3 className="text-white mb-3" style={{ fontSize: 20, fontWeight: 600 }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.7 }}>
                    {svc.body}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, letterSpacing: '0.04em' }}>{svc.roles}</span>
                  <span className="text-white group-hover:text-gold transition-colors" style={{ fontSize: 13, fontWeight: 600, fontStyle: 'italic' }}>Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-navy-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p style={{ color: 'var(--color-gold)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16 }}>
                Background
              </p>
              <h2 className="text-white mb-6" style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 600 }}>
                The Analytical Edge
              </h2>
              <p className="text-white/55 leading-relaxed mb-6" style={{ fontSize: 15 }}>
                Most brokers come up through traditional sales. Burke Doggett came through the sciences -- a path that shapes how Trinity CRE approaches every engagement. His training in systems thinking, data analysis, and evidence-based decision-making translates directly into better deal outcomes for clients.
              </p>
              <p className="text-white/55 leading-relaxed" style={{ fontSize: 15 }}>
                Operating through KW Commercial / Keller Williams Realty Chattahoochee North, Trinity CRE combines the resources of one of Atlanta's most active commercial platforms with the focus of a dedicated specialty practice.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Education', value: 'B.S. Biological Engineering, University of Georgia' },
                { label: 'Education', value: 'M.S. Healthcare Management & Informatics, KSU' },
                { label: 'Brokerage', value: 'KW Commercial / Keller Williams Realty Chattahoochee North' },
                { label: 'Specialization', value: 'Industrial, Office & Investment Real Estate' },
                { label: 'Market', value: 'Greater Atlanta Metro' },
                { label: 'Office', value: '3930 E. Jones Bridge Road, Peachtree Corners, GA' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '4px',
                  }}
                >
                  <span style={{ color: 'var(--color-gold)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', minWidth: 90, paddingTop: 2 }}>
                    {item.label}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 600 }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/45 mb-8 max-w-md mx-auto" style={{ fontSize: 15 }}>
            A 15-minute call is usually enough to figure out whether we are the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7703772063"
              className="font-semibold px-8 py-3.5 rounded transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff' }}
            >
              (770) 377-2063
            </a>
            <Link
              href="/contact"
              className="font-semibold px-8 py-3.5 rounded transition-colors"
              style={{ background: 'var(--color-gold)', color: 'var(--color-navy-800)' }}
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
