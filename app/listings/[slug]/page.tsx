import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { listings } from '@/data/listings'

export async function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const listing = listings.find((l) => l.slug === slug)
  if (!listing) return {}
  return {
    title: listing.title,
    description: `${listing.type} | ${listing.sqft.toLocaleString()} SF | ${listing.city}, ${listing.state} | ${listing.price || listing.leaseRate}`,
  }
}

export default async function ListingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const listing = listings.find((l) => l.slug === slug)
  if (!listing) notFound()

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span>/</span>
            <Link href="/listings" className="hover:text-gray-700">
              Listings
            </Link>
            <span>/</span>
            <span className="text-gray-800">{listing.title}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {/* Swap for actual property photos from Burke */}
              <div className="bg-gray-100 rounded-lg h-72 flex items-center justify-center mb-6">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <p className="text-sm">Property photos coming soon</p>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        listing.type === 'For Sale' ? 'bg-gold/20 text-gold-600' : 'bg-navy-800/10 text-navy-800'
                      }`}
                    >
                      {listing.type}
                    </span>
                    <span className="text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-full">
                      {listing.status}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-navy-800">{listing.title}</h1>
                  <p className="text-gray-500 mt-1">
                    {listing.address}, {listing.city}, {listing.state}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-gray-400">{listing.type === 'For Sale' ? 'Asking Price' : 'Lease Rate'}</p>
                  <p className="text-xl font-bold text-navy-800">{listing.price || listing.leaseRate}</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="font-semibold text-navy-800 text-lg mb-3">Property Overview</h2>
                <p className="text-gray-600 leading-relaxed">{listing.description}</p>
              </div>

              <div>
                <h2 className="font-semibold text-navy-800 text-lg mb-3">Property Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {listing.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-5">
                <h3 className="font-semibold text-navy-800 mb-4">Key Details</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Property Type', value: listing.propertyType },
                    { label: 'Total SF', value: `${listing.sqft.toLocaleString()} SF` },
                    {
                      label: listing.type === 'For Sale' ? 'Asking Price' : 'Lease Rate',
                      value: (listing.price || listing.leaseRate)!,
                    },
                    { label: 'Status', value: listing.status },
                    { label: 'Location', value: `${listing.city}, ${listing.state}` },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-gray-500">{label}</span>
                      <span className="font-medium text-navy-800 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy-800 rounded-lg p-5 text-white">
                <h3 className="font-semibold mb-1">Interested in This Property?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Contact Trinity CRE to schedule a tour or request more information.
                </p>
                <a
                  href="tel:7703772063"
                  className="flex items-center gap-2 text-gold font-semibold text-sm mb-2 hover:text-gold-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (770) 377-2063
                </a>
                <a
                  href="mailto:burkedoggett@kw.com"
                  className="flex items-center gap-2 text-gray-300 text-sm mb-4 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  burkedoggett@kw.com
                </a>
                <Link
                  href={`/contact?property=${listing.slug}`}
                  className="block w-full bg-gold text-navy-800 text-sm font-semibold py-2.5 rounded text-center hover:bg-gold-300 transition-colors"
                >
                  Request Information
                </Link>
              </div>

              <div className="mt-4">
                <Link href="/listings" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to all listings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
