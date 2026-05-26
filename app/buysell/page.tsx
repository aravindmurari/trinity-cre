import type { Metadata } from 'next'
import BuySellForm from '@/components/BuySellForm'

export const metadata: Metadata = {
  title: 'Buy or Sell',
  description: 'Submit your buyer or seller profile to Trinity Commercial Real Estate. Tell us what you need and we will get to work.',
}

export default function BuySellPage() {
  return (
    <>
      <section className="bg-navy-800 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Get Started</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Buy or Sell</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Tell us what you need and we will come prepared. The more detail you share, the faster we can deliver results.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BuySellForm />
        </div>
      </section>
    </>
  )
}
