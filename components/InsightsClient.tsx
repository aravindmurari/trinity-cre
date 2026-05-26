'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Insight } from '@/data/insights'

const CATEGORIES = [
  'All',
  'Market Reports',
  'Investor Guides',
  'Tenant Resources',
  'Company News',
  'Industry Commentary',
]

const CATEGORY_STYLES: Record<string, string> = {
  'Market Reports': 'bg-blue-100 text-blue-700',
  'Investor Guides': 'bg-gold/15 text-gold-600',
  'Tenant Resources': 'bg-emerald-100 text-emerald-700',
  'Company News': 'bg-navy-800/10 text-navy-800',
  'Industry Commentary': 'bg-purple-100 text-purple-700',
}

export default function InsightsClient({ insights }: { insights: Insight[] }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? insights : insights.filter((i) => i.category === activeCategory)

  const [featured, ...rest] = filtered

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Category filter strip */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 py-3 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-navy-800 text-white'
                    : 'text-gray-500 hover:text-navy-800 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured article */}
        {featured && (
          <Link
            href={`/insights/${featured.slug}`}
            className="block bg-white rounded-2xl border border-gray-200 overflow-hidden mb-8 hover:shadow-lg transition-shadow duration-200 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      CATEGORY_STYLES[featured.category] ?? 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {featured.category}
                  </span>
                  <span className="text-gold text-xs font-bold tracking-widest uppercase">
                    Featured
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-navy-800 leading-snug mb-4 group-hover:text-gold transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{featured.date}</span>
                  <span>&bull;</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="mt-5 text-gold text-sm font-semibold group-hover:translate-x-0.5 transition-transform inline-block">
                  Read article &rarr;
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Article grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        CATEGORY_STYLES[insight.category] ?? 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {insight.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-navy-800 text-base leading-snug mb-2 group-hover:text-gold transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <span>{insight.date}</span>
                      <span>&bull;</span>
                      <span>{insight.readTime}</span>
                    </div>
                    <span className="text-gold font-semibold group-hover:translate-x-0.5 transition-transform">Read &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-400 text-sm">
            No articles in this category yet.
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-14 bg-navy-800 rounded-2xl p-10 text-center">
          <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">
            Stay Informed
          </p>
          <h2 className="text-2xl font-bold text-white mb-2">
            Get Trinity Brief in Your Inbox
          </h2>
          <p className="text-gray-300 mb-6 max-w-md mx-auto text-sm">
            Atlanta industrial market updates, tenant guides, and investment insights -- delivered
            when it matters.
          </p>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded text-sm bg-white text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="bg-gold text-navy-800 font-semibold px-5 py-2.5 rounded text-sm hover:bg-gold-300 transition-colors whitespace-nowrap cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
