import Link from 'next/link'
import { listings } from '@/data/listings'
import { insights } from '@/data/insights'
import HeroSection from '@/components/HeroSection'

export default function HomePage() {
  const featuredListings = listings.slice(0, 3)
  const recentInsights = insights.slice(0, 2)

  return (
    <>
      <HeroSection />

      {/* Stats strip */}
      <section className="bg-navy-700/80 backdrop-blur-sm border-y border-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-sm text-gray-300 text-center">
            <span>38 Years of Trinity CRE Legacy</span>
            <span className="hidden sm:block text-navy-600">|</span>
            <span>Industrial Asset Class Specialist</span>
            <span className="hidden sm:block text-navy-600">|</span>
            <span>Greater Atlanta Metro</span>
            <span className="hidden sm:block text-navy-600">|</span>
            <span>KW Commercial</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-800 mb-3">How We Can Help</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Industrial real estate transactions are complex. We bring the local market knowledge and analytical rigor
              to get your deal done right.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Tenant Representation',
                description:
                  'Find the right industrial space for your business. We negotiate leases on your behalf, with no conflict of interest.',
                iconPath:
                  'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
              },
              {
                title: 'Buyer Representation',
                description:
                  'Acquire industrial assets with confidence. We identify opportunities, conduct due diligence, and negotiate favorable terms.',
                iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Investment Sales',
                description:
                  'Sell your industrial asset at maximum value. We connect sellers with qualified buyers and manage complex transactions.',
                iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-navy-800 mb-4" style={{ background: 'rgba(10, 49, 30, 0.08)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-800 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <Link href="/services" className="text-gold font-medium text-sm hover:text-gold-500 transition-colors">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20" style={{ background: 'rgba(10, 49, 30, 0.03)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-1">Featured Listings</h2>
              <p className="text-gray-600">Available industrial properties in Greater Atlanta</p>
            </div>
            <Link href="/listings" className="hidden sm:inline-flex text-gold font-medium text-sm hover:text-gold-500">
              View all listings &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <Link
                key={listing.slug}
                href={`/listings/${listing.slug}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                {/* Swap for real property photos */}
                <div className="h-48 bg-navy-700 flex items-center justify-center relative">
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        listing.type === 'For Sale' ? 'bg-gold text-navy-800' : 'bg-white text-navy-800'
                      }`}
                    >
                      {listing.type}
                    </span>
                  </div>
                  <svg className="w-12 h-12 text-navy-500 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-1">{listing.propertyType}</p>
                  <h3 className="font-semibold text-navy-800 text-base mb-1 group-hover:text-gold transition-colors">
                    {listing.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {listing.city}, {listing.state}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-sm font-medium text-gray-700">{listing.sqft.toLocaleString()} SF</span>
                    <span className="text-sm font-semibold text-navy-800">{listing.price || listing.leaseRate}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/listings" className="text-gold font-medium text-sm">
              View all listings &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Swap for Burke's headshot */}
            <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center order-2 md:order-1">
              <div className="text-center text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <p className="text-sm">Photo coming soon</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">About Trinity CRE</p>
              <h2 className="text-3xl font-bold text-navy-800 mb-4">
                Data-Driven. Locally Rooted. Industrially Focused.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Burke brings an analytical edge to commercial real estate - a background in biological engineering and
                healthcare informatics means he approaches every deal with precision, not just intuition.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Burke leads Trinity CRE Group, combining 38 years of trusted client relationships and deep Atlanta
                industrial market expertise with a rigorous, data-driven approach to every deal.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-navy-800 text-white font-semibold px-6 py-3 rounded-xl hover:bg-navy-700 transition-colors"
              >
                About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-1">Market Insights</h2>
              <p className="text-gray-600">Atlanta industrial market analysis and tenant resources</p>
            </div>
            <Link href="/insights" className="hidden sm:inline-flex text-gold font-medium text-sm hover:text-gold-500">
              All insights &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentInsights.map((insight) => (
              <div
                key={insight.slug}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gold/10 text-gold-600 text-xs font-medium px-2.5 py-1 rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-gray-400 text-xs">{insight.date}</span>
                </div>
                <h3 className="font-semibold text-navy-800 text-lg mb-2 leading-snug">{insight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{insight.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-navy-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Find Your Next Industrial Space?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Whether you are a tenant, buyer, or investor, let us start with a conversation about what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7703772063"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/60 hover:bg-white/5 transition-colors"
            >
              (770) 377-2063
            </a>
            <Link
              href="/contact"
              className="bg-gold text-navy-800 font-semibold px-8 py-4 rounded-xl hover:bg-gold-300 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
