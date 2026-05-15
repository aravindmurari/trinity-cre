import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Trinity CRE Group - Industrial CRE specialists at KW Commercial. Data-driven analysis combined with 38 years of expertise in the Greater Atlanta industrial market.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Burke Doggett</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Industrial CRE specialist at KW Commercial. Carrying forward the Trinity CRE legacy in Greater Atlanta.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Swap for Burke's actual headshot */}
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center md:sticky md:top-24">
              <div className="text-center text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <p className="text-sm">Headshot coming soon</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-6">A Different Kind of CRE Broker</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Most commercial real estate brokers came up through sales. Burke Doggett took a different path -- a
                  B.S. in Biological Engineering from the University of Georgia and a Master's in Healthcare Management
                  and Informatics from Kennesaw State University trained him to think analytically, evaluate data
                  critically, and solve complex problems. That rigor shows in how he approaches every transaction.
                </p>
                <p>
                  Burke specializes in industrial real estate in the Greater Atlanta metro, where the market moves fast
                  and deal terms matter. Whether you are a tenant negotiating a lease, a buyer acquiring an asset, or an
                  investor evaluating a sale-leaseback, you need a broker who understands the numbers as well as the
                  market.
                </p>
                <p>
                  Burke operates as a commercial realtor at KW Commercial / Keller Williams Realty Chattahoochee North,
                  one of Atlanta's most active commercial real estate brokerages.
                </p>
              </div>

              <div className="mt-8 bg-navy-800/5 border border-navy-800/10 rounded-lg p-6">
                <h3 className="font-bold text-navy-800 text-lg mb-3">The Trinity CRE Legacy</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trinity CRE Group has been serving the Atlanta industrial market for 38 years, built on a foundation
                  of trusted client relationships, deep market expertise, and uncompromising integrity. Burke leads the
                  firm today, continuing that same commitment to long-term partnerships that Trinity CRE has been known
                  for since its founding.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-navy-800 text-lg mb-4">Credentials</h3>
                <ul className="space-y-3">
                  {[
                    'KW Commercial / Keller Williams Realty Chattahoochee North',
                    'B.S. Biological Engineering, University of Georgia',
                    'M.S. Healthcare Management and Informatics, Kennesaw State University',
                    'Industrial Asset Class Specialist',
                    'Greater Atlanta Metro Market',
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

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-navy-800 font-semibold px-6 py-3 rounded hover:bg-gold-300 transition-colors"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
