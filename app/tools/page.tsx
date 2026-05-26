import type { Metadata } from 'next'
import ToolsClient from '@/components/ToolsClient'

export const metadata: Metadata = {
  title: 'Industrial Space Tools',
  description: 'Free calculators for Atlanta industrial tenants and investors. Estimate lease costs, space needs, and investment returns.',
}

export default function ToolsPage() {
  return (
    <>
      <section className="bg-navy-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Free Resources</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Industrial Space Tools</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Estimate lease costs, find your ideal space size, and evaluate investment returns — built for the Atlanta industrial market.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ToolsClient />
        </div>
      </section>
    </>
  )
}
