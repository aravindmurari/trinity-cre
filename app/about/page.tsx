import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Trinity Commercial Real Estate - Industrial CRE specialists at KW Commercial. Data-driven analysis combined with 38 years of expertise in the Greater Atlanta industrial market.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Trinity Commercial Real Estate</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Industrial CRE specialists at KW Commercial, serving the Greater Atlanta market with a data-driven, client-first approach.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="rounded-2xl h-96 overflow-hidden md:sticky md:top-24">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
                alt="Trinity Commercial Real Estate"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-6">A Different Kind of Industrial Brokerage</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Most commercial real estate firms came up through traditional sales. Trinity Commercial Real Estate takes a
                  different approach -- grounded in analytical rigor, data-driven decision-making, and a deep
                  understanding of the industrial asset class. That foundation shapes how we approach every
                  transaction, from initial market survey to final negotiations.
                </p>
                <p>
                  We specialize exclusively in industrial real estate across the Greater Atlanta metro, where the
                  market moves fast and deal terms matter. Whether you are a tenant negotiating a lease, a buyer
                  acquiring an asset, or an investor evaluating a sale-leaseback, you need an advisor who
                  understands the numbers as well as the market.
                </p>
                <p>
                  Trinity Commercial Real Estate operates through KW Commercial / Keller Williams Realty Chattahoochee North,
                  one of Atlanta's most active commercial real estate brokerages -- giving clients the resources
                  of a major platform with the attention of a dedicated specialty practice.
                </p>
              </div>

              <div className="mt-8 bg-navy-800/5 border border-navy-800/10 rounded-xl p-6">
                <h3 className="font-bold text-navy-800 text-base mb-3">38 Years of Trinity CRE</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trinity Commercial Real Estate has been serving the Atlanta industrial market for 38 years, built on a
                  foundation of trusted client relationships, deep market expertise, and uncompromising integrity.
                  That same commitment to long-term partnerships continues to define how we work with every client
                  today.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-navy-800 text-base mb-4">Our Credentials</h3>
                <ul className="space-y-3">
                  {[
                    'KW Commercial / Keller Williams Realty Chattahoochee North',
                    '38-Year Track Record in Atlanta Industrial CRE',
                    'Industrial Asset Class Specialist',
                    'Analytical, Data-Driven Advisory Approach',
                    'Greater Atlanta Metro Market Coverage',
                  ].map((item) => (
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
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-navy-800 font-semibold px-6 py-3 rounded-lg hover:bg-gold-300 transition-colors text-sm"
                >
                  Schedule a Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border border-navy-800/20 text-navy-800 font-semibold px-6 py-3 rounded-lg hover:border-navy-800/50 transition-colors text-sm"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
