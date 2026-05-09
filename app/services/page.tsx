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
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">What We Do</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Industrial CRE advisory for tenants, buyers, sellers, and investors throughout Greater Atlanta.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h2 className="text-2xl font-bold text-navy-800 mb-1">{service.title}</h2>
                  <p className="text-gold font-medium mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <h3 className="font-semibold text-navy-800 text-sm uppercase tracking-wide mb-3">
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
                    className="inline-flex items-center gap-2 bg-navy-800 text-white font-semibold px-6 py-3 rounded hover:bg-navy-700 transition-colors text-sm"
                  >
                    Discuss Your Needs
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className={`bg-navy-800/5 rounded-lg h-64 flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <span className="text-6xl font-bold text-navy-800/10">{String(index + 1).padStart(2, '0')}</span>
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
              className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded hover:border-white/60 transition-colors"
            >
              (770) 377-2063
            </a>
            <Link
              href="/contact"
              className="bg-gold text-navy-800 font-semibold px-8 py-3.5 rounded hover:bg-gold-300 transition-colors"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
