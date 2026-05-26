import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Industrial CRE services: tenant representation, buyer representation, investment sales, and market analysis in Greater Atlanta.',
}

const services = [
  {
    id: 'industrial',
    label: 'INDUSTRIAL',
    title: 'Industrial',
    subtitle: 'Warehouse, distribution, and flex space across Greater Atlanta.',
    description:
      "Atlanta's industrial market moves fast. Whether you're a business searching for the right space or an owner looking to lease your asset, we bring local expertise, real relationships, and data-driven strategy to every deal.",
    tenantIncludes: [
      'Market survey and property shortlisting',
      'Site tours and evaluation criteria',
      'LOI drafting and lease negotiation',
      'Timeline and move-in coordination',
    ],
    landlordIncludes: [
      'Pricing and positioning strategy',
      'Targeted tenant outreach and marketing',
      'Offer management and negotiation',
      'Lease execution support',
    ],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
  },
  {
    id: 'office-space',
    label: 'OFFICE SPACE',
    title: 'Office Space',
    subtitle: 'Finding the right office environment for your team and your brand.',
    description:
      'Office space decisions shape how your team works and how clients perceive your business. We represent both tenants seeking the right fit and owners maximizing occupancy -- with no conflict of interest on either side.',
    tenantIncludes: [
      'Needs assessment and space planning',
      'Market survey and shortlisting',
      'LOI and lease negotiation',
      'Move-in coordination',
    ],
    landlordIncludes: [
      'Market pricing and vacancy analysis',
      'Tenant prospecting and outreach',
      'Offer and lease negotiation',
      'Occupancy and retention strategy',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
  },
  {
    id: 'investment-sales',
    label: 'INVESTMENT SALES',
    title: 'Investment Sales',
    subtitle: 'Acquire and divest commercial assets at maximum value.',
    description:
      'Investment decisions require a precise understanding of market fundamentals, cap rates, and structural due diligence. We guide buyers and sellers through every step -- from sourcing and valuation to contract negotiation and closing.',
    tenantIncludes: [
      'Investment criteria definition',
      'On- and off-market deal sourcing',
      'Cap rate and return analysis',
      'Due diligence coordination',
    ],
    landlordIncludes: [
      'Valuation and market pricing',
      'Offering memorandum preparation',
      'Targeted buyer outreach',
      'Offer management and closing',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">What We Do</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Commercial real estate advisory for tenants, landlords, buyers, and sellers throughout Greater Atlanta.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-navy-800 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderTop: '2px solid var(--color-gold)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Photo */}
                <div className="relative" style={{ minHeight: 260 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'var(--hero-img-filter)' }}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0" style={{ background: 'var(--hero-tint)' }} />

                  {/* Label overlay */}
                  <div className="absolute bottom-6 left-6">
                    <p style={{
                      color: 'var(--color-gold)',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}>
                      {svc.label}
                    </p>
                    <h2 style={{
                      fontFamily: 'var(--font-playfair)',
                      color: '#ffffff',
                      fontSize: '28px',
                      fontWeight: 600,
                      lineHeight: 1.1,
                      margin: 0,
                    }}>
                      {svc.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-10">
                  <p style={{ color: 'rgba(212,192,138,0.8)', fontSize: '14px', marginBottom: '12px' }}>
                    {svc.subtitle}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
                    {svc.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {/* Tenants / Buyers */}
                    <div>
                      <p style={{
                        color: 'rgba(255,255,255,0.35)',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}>
                        {svc.id === 'investment-sales' ? 'For Buyers' : 'For Tenants'}
                      </p>
                      <ul className="space-y-2">
                        {svc.tenantIncludes.map((item) => (
                          <li key={item} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', display: 'flex', gap: '8px' }}>
                            <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Landlords / Sellers */}
                    <div>
                      <p style={{
                        color: 'rgba(255,255,255,0.35)',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}>
                        {svc.id === 'investment-sales' ? 'For Sellers' : 'For Landlords'}
                      </p>
                      <ul className="space-y-2">
                        {svc.landlordIncludes.map((item) => (
                          <li key={item} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', display: 'flex', gap: '8px' }}>
                            <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: 'var(--color-gold)' }}
                  >
                    Discuss Your Needs →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-navy-800 py-16 px-4 sm:px-6 lg:px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 style={{
            fontFamily: 'var(--font-playfair)',
            color: '#ffffff',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 600,
            marginBottom: '12px',
          }}>
            Not Sure Where to Start?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: '32px', maxWidth: 480, margin: '0 auto 32px' }}>
            A 15-minute call is usually enough to figure out the right approach for your situation.
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
