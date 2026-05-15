'use client'

import { useState } from 'react'
import Link from 'next/link'
import { listings, type Listing } from '@/data/listings'

type FilterType = 'All' | 'For Sale' | 'For Lease'

export default function ListingsContent() {
  const [filter, setFilter] = useState<FilterType>('All')
  const filtered = filter === 'All' ? listings : listings.filter((l) => l.type === filter)

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          {(['All', 'For Sale', 'For Lease'] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors cursor-pointer ${
                filter === f
                  ? 'bg-navy-800 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {f}
              {f !== 'All' && (
                <span className="ml-1.5 text-xs opacity-60">({listings.filter((l) => l.type === f).length})</span>
              )}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-500">
            {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p>No listings match this filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        )}

        <div className="mt-12 bg-navy-800/5 border border-navy-800/10 rounded-lg p-6 text-center">
          <p className="text-navy-800 font-semibold mb-1">{"Don't see what you're looking for?"}</p>
          <p className="text-gray-600 text-sm mb-4">
            We have access to off-market industrial properties throughout Greater Atlanta. Get in touch to discuss your
            requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-800 text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-navy-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="h-52 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={listing.image} alt={listing.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              listing.type === 'For Sale' ? 'bg-gold text-navy-800' : 'bg-white text-navy-800'
            }`}
          >
            {listing.type}
          </span>
          {listing.status !== 'Available' && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-700">
              {listing.status}
            </span>
          )}
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-1">{listing.propertyType}</p>
        <h3 className="font-semibold text-navy-800 text-base mb-1 group-hover:text-gold transition-colors leading-snug">
          {listing.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          {listing.address}, {listing.city}, {listing.state}
        </p>
        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Size</p>
            <p className="text-sm font-semibold text-gray-700">{listing.sqft.toLocaleString()} SF</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">{listing.type === 'For Sale' ? 'Asking Price' : 'Lease Rate'}</p>
            <p className="text-sm font-semibold text-navy-800">{listing.price || listing.leaseRate}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
