import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Industrial CRE services: tenant representation, buyer representation, investment sales, and market analysis in Greater Atlanta.',
}

const services = [
  {
    id: 'tenant-rep',
    title: 'Tenant Representation',
    subtitle: 'Find the right space. Negotiate the best terms.',
    description:
      "Finding industrial space in Atlanta's tight market requires speed, relationships, and leverage. We represent tenants exclusively -- with no conflict of interest -- to identify available properties, structure competitive offers, and negotiate lease terms that protect your business long-term.",
    includes: [
      'Market survey and property shortlisting',
      'Site tours and evaluation criteria',
      'Letter of intent (LOI) drafting and negotiation',
      'Lease review and negotiation support',
      'Comparison analysis across competing properties',
      'Timeline and move-in coordination',
    ],
    ideal: 'Businesses seeking warehouse, distribution, manufacturing, or flex space in the Greater Atlanta metro.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    id: 'buyer-rep',
    title: 'Buyer Representation',
    subtitle: 'Acquire the right asset at the right price.',
    description:
      'Industrial acquisitions require a precise understanding of market fundamentals, cap rates, and structural due diligence. We guide buyers through every step: sourcing on- and off-market opportunities, financial analysis, due diligence coordination, and contract negotiation.',
    includes: [
      'Investment criteria definition',
      'On- and off-market deal sourcing',
      'Cap rate and cash-on-cash return analysis',
      'Letter of intent and purchase agreement negotiation',
      'Due diligence coordination',
      'Closing support',
    ],
    ideal: 'Private investors, family offices, and owner-users seeking to acquire industrial assets in Georgia.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    iconPath: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
  },
  {
    id: 'investment-sales',
    title: 'Investment Sales',
    subtitle: 'Sell at maximum value to the right buyer.',
    description:
      'Selling an industrial asset requires positioning, qualified buyer access, and negotiating leverage. We build a comprehensive marketing package, target the right buyer pool, and manage the transaction from listing to closing.',
    includes: [
      'Valuation and market pricing analysis',
      'Offering memorandum (OM) preparation',
      'Targeted buyer outreach and marketing',
      'Offer management and best-and-final negotiations',
      'Purchase agreement negotiation',
      'Closing coordination',
    ],
    ideal: 'Owners of industrial properties in the Greater Atlanta metro looking to exit at optimal value.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    id: 'market-analysis',
    title: 'Market Analysis & Site Selection',
    subtitle: 'Data-driven insight for strategic decisions.',
    description:
      "Sometimes you need market intelligence before you know what you need. We provide custom market reports, submarket analysis, and site selection support to help businesses and investors make confident decisions in Atlanta's industrial landscape.",
    includes: [
      'Submarket vacancy and absorption reports',
      'Competitive supply analysis',
      'Site selection criteria development',
      'Demographic and logistics analysis',
      'Investment market overview reports',
    ],
    ideal:
      "Companies evaluating expansion into Atlanta, investors researching submarkets, or owners benchmarking assets.",
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">What We Do</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Industrial CRE advisory for tenants, buyers, sellers, and investors throughout Greater Atlanta.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="text-3xl font-bold text-navy-800 mb-1">{service.title}</h2>
                  <p className="text-gold font-medium mb-5">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <h3 className="font-semibold text-navy-800 text-xs uppercase tracking-widest mb-3">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gold/10 border border-gold/20 rounded-lg p-4 mb-6">
                    <p className="text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1">Ideal For</p>
                    <p className="text-sm text-gray-600">{service.ideal}</p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-navy-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors text-sm"
                  >
                    Discuss Your Needs
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Visual panel */}
                <div className={`relative rounded-2xl overflow-hidden h-80 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  {/* Background image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Navy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/70 to-navy-900/85" />

                  {/* Ghost watermark number — fills top-right */}
                  <span className="absolute -top-4 -right-2 text-[11rem] font-black leading-none select-none pointer-events-none text-white/[0.06]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Bottom-left gold accent bar */}
                  <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-gold/60 via-gold/20 to-transparent" />

                  {/* Centered content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                    {/* Icon box */}
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                      </svg>
                    </div>

                    {/* Number badge with lines */}
                    <div className="flex items-center gap-3">
                      <div className="h-px w-10 bg-gold/40" />
                      <span className="text-gold text-xs font-bold tracking-[0.3em]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px w-10 bg-gold/40" />
                    </div>

                    {/* Service name */}
                    <p className="text-white/70 text-xs font-medium tracking-widest uppercase text-center px-8">
                      {service.title}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Not Sure Where to Start?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            A 15-minute call is usually enough to figure out the right approach for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7703772063"
              className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-white/60 transition-colors"
            >
              (770) 377-2063
            </a>
            <Link
              href="/contact"
              className="bg-gold text-navy-800 font-semibold px-8 py-3.5 rounded-lg hover:bg-gold-300 transition-colors"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
