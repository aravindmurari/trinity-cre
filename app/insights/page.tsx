import type { Metadata } from 'next'
import { insights } from '@/data/insights'
import InsightsClient from '@/components/InsightsClient'

export const metadata: Metadata = {
  title: 'Trinity Brief',
  description:
    'Market intelligence, investor guides, and tenant resources for Greater Atlanta industrial real estate from Trinity Commercial Real Estate.',
}

export default function InsightsPage() {
  return (
    <>
      <section className="bg-navy-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-bold text-xs tracking-widest uppercase mb-4">
            Trinity Commercial Real Estate
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Trinity Brief</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Market intelligence, investor guides, and tenant resources for Greater Atlanta&apos;s
            industrial sector.
          </p>
        </div>
      </section>
      <InsightsClient insights={insights} />
    </>
  )
}
