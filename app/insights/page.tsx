import type { Metadata } from 'next'
import { insights } from '@/data/insights'

export const metadata: Metadata = {
  title: 'Market Insights',
  description: 'Atlanta industrial real estate market analysis and resources from Trinity CRE Group.',
}

export default function InsightsPage() {
  return (
    <>
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">Market Insights</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Atlanta Industrial Market</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Analysis, trends, and practical guidance for tenants and investors navigating Greater Atlanta&apos;s
            industrial sector.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight) => (
              <article
                key={insight.slug}
                id={insight.slug}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-40 bg-navy-800/5 flex items-center justify-center border-b border-gray-100">
                  <svg className="w-10 h-10 text-navy-800/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gold/10 text-gold-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      {insight.category}
                    </span>
                    <span className="text-gray-400 text-xs">{insight.date}</span>
                    <span className="text-gray-400 text-xs">{insight.readTime}</span>
                  </div>
                  <h2 className="font-bold text-navy-800 text-xl mb-3 leading-snug">{insight.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{insight.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-navy-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Market</h2>
            <p className="text-gray-300 mb-6">
              Get Atlanta industrial market updates delivered to your inbox. No spam -- just signal.
            </p>
            {/* Replace YOUR_FORM_ID with the Formspree form ID after signing up at formspree.io */}
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
      </section>
    </>
  )
}
