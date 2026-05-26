import type { Metadata } from 'next'
import ListingsContent from '@/components/ListingsContent'

export const metadata: Metadata = {
  title: 'Listings',
  description: 'Available industrial properties for sale and lease in Greater Atlanta.',
}

export default function ListingsPage() {
  return (
    <>
      <section className="bg-navy-800 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">Listings</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Available Properties</h1>
          <p className="text-gray-300 text-lg">Industrial properties for sale and lease in Greater Atlanta.</p>
        </div>
      </section>
      <ListingsContent />
    </>
  )
}
