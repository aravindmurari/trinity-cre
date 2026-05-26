import Link from 'next/link'
import { listings } from '@/data/listings'
import { insights } from '@/data/insights'
import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'

export default function HomePage() {
  const featuredListings = listings.slice(0, 3)
  const recentInsights = insights.slice(0, 2)

  return (
    <>
      <HeroSection />

      {/* Stats strip */}
      <section className="bg-navy-700/80 backdrop-blur-sm border-y border-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="hidden sm:flex items-center justify-center gap-10 text-sm text-gray-300 text-center">
            <span>38 Years of Trinity CRE Legacy</span>
            <span className="text-navy-600">|</span>
            <span>Industrial Asset Class Specialist</span>
            <span className="text-navy-600">|</span>
            <span>Greater Atlanta Metro</span>
            <span className="text-navy-600">|</span>
            <span>KW Commercial</span>
          </div>
        </div>
      </section>

      {/* About Trinity CRE */}
      <section className="bg-navy-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 560 }}>

            {/* Content */}
            <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-20">
              <p className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
                About Trinity Commercial Real Estate
              </p>
              <h2 className="text-white leading-tight mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 600 }}>
                38 Years in the Market.<br />A New Kind of Expertise.
              </h2>
              <p className="text-white/55 leading-relaxed mb-10 max-w-lg" style={{ fontSize: 15 }}>
                Trinity CRE brings 38 years of Atlanta market relationships to every engagement. Burke approaches real estate the way his background in engineering and informatics taught him to approach any problem -- methodically, with the numbers in front of him, not just a handshake and a gut feeling.
              </p>
              <div className="flex gap-8 mb-10 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-gold">38</div>
                  <div className="text-[10px] text-white/35 uppercase tracking-widest mt-1.5">Years of Legacy</div>
                </div>
                <div className="border-l border-white/10 pl-8">
                  <div className="text-lg font-bold text-white leading-none">3</div>
                  <div className="text-[10px] text-white/35 uppercase tracking-widest mt-1.5">Service Areas</div>
                </div>
                <div className="border-l border-white/10 pl-8">
                  <div className="text-lg font-bold text-white leading-none">ATL</div>
                  <div className="text-[10px] text-white/35 uppercase tracking-widest mt-1.5">Metro Focus</div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gold text-navy-900 font-semibold px-6 py-3 rounded text-sm hover:opacity-90 transition-opacity self-start"
              >
                About Burke &amp; Trinity CRE →
              </Link>
            </div>

            {/* Photo with card overlay */}
            <div className="hidden lg:flex relative items-end p-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
                alt="Burke Doggett"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-900 to-transparent" />
              <div className="absolute inset-0 bg-black/20" />
              {/* Name card */}
              <div className="relative z-10 w-full" style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderTop: '2px solid var(--color-gold)',
                borderRadius: '4px',
                padding: '16px 20px',
              }}>
                <p className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Burke Doggett</p>
                <p className="text-white font-semibold text-sm">Commercial Real Estate Specialist</p>
                <p className="text-white/45 text-xs mt-1">KW Commercial · Peachtree Corners, GA</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Featured Properties</p>
              <h2 className="text-4xl font-bold text-navy-800 leading-tight">Available Now</h2>
            </div>
            <Link
              href="/listings"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 border-b border-navy-800/25 pb-0.5 hover:border-navy-800 transition-colors group"
            >
              View all listings
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <Link
                key={listing.slug}
                href={`/listings/${listing.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="h-52 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={listing.image} alt={listing.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${listing.type === 'For Sale' ? 'bg-gold text-navy-800' : 'bg-white text-navy-800'}`}>
                      {listing.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-0.5 rounded">
                      {listing.sqft.toLocaleString()} SF
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-1.5">{listing.propertyType}</p>
                  <h3 className="font-bold text-navy-800 text-base mb-1 group-hover:text-gold transition-colors leading-snug">
                    {listing.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{listing.city}, {listing.state}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm font-semibold text-navy-800">{listing.price || listing.leaseRate}</span>
                    <span className="text-gold text-xs font-semibold group-hover:translate-x-0.5 transition-transform">View &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/listings" className="text-gold font-medium text-sm">View all listings &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Trinity Brief */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Trinity Brief</p>
              <h2 className="text-4xl font-bold text-navy-800 leading-tight">Market Intelligence</h2>
            </div>
            <Link
              href="/insights"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 border-b border-navy-800/25 pb-0.5 hover:border-navy-800 transition-colors group"
            >
              Read all articles
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Editorial layout: featured (3/5) + sidebar (2/5) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {recentInsights[0] && (
              <div className="lg:col-span-3 group cursor-default">
                <div className="relative h-72 rounded-2xl overflow-hidden mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={recentInsights[0].image} alt={recentInsights[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold/90 text-navy-800 text-[11px] font-bold px-3 py-1 rounded-full">
                      {recentInsights[0].category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
                  <span>{recentInsights[0].date}</span>
                  <span>&bull;</span>
                  <span>{recentInsights[0].readTime}</span>
                </div>
                <h3 className="font-bold text-navy-800 text-xl leading-snug mb-3">{recentInsights[0].title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{recentInsights[0].excerpt}</p>
              </div>
            )}

            {recentInsights[1] && (
              <div className="lg:col-span-2 flex flex-col">
                <div className="group cursor-default bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex-1">
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={recentInsights[1].image} alt={recentInsights[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold/90 text-navy-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                        {recentInsights[1].category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2 text-xs text-gray-400">
                      <span>{recentInsights[1].date}</span>
                      <span>&bull;</span>
                      <span>{recentInsights[1].readTime}</span>
                    </div>
                    <h3 className="font-bold text-navy-800 text-base leading-snug mb-2">{recentInsights[1].title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{recentInsights[1].excerpt}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Link
                    href="/insights"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-gold transition-colors group"
                  >
                    Browse all articles
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/insights" className="text-gold font-medium text-sm">Read Trinity Brief &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white border-t border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

            {/* Left — info + direct contact */}
            <div className="lg:col-span-2">
              <p className="text-gold text-[11px] font-bold tracking-widest uppercase mb-4">Get in Touch</p>
              <h2 className="text-3xl font-bold text-navy-800 leading-snug mb-4">
                Let&apos;s Talk About Your Next Move.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Whether you are finding space, listing a property, or evaluating an investment -- reach out directly or fill out the form and we will be in touch within one business day.
              </p>
              <div className="flex flex-col gap-3 items-start">
                <a
                  href="tel:7703772063"
                  className="inline-flex items-center gap-2.5 text-navy-800 font-semibold text-sm border border-gray-200 px-5 py-3 rounded-lg hover:border-navy-800/40 hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (770) 377-2063
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-navy-800 font-semibold text-sm px-5 py-3 rounded-lg hover:bg-gold-300 transition-colors"
                >
                  Schedule a Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right — compact form */}
            <div className="lg:col-span-3">
              <ContactForm variant="light" />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
