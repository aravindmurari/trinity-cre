import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { insights } from '@/data/insights'
import type { InsightBlock } from '@/data/insights'
import ContactForm from '@/components/ContactForm'

export async function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const insight = insights.find((i) => i.slug === slug)
  if (!insight) return {}
  return {
    title: insight.title,
    description: insight.excerpt,
  }
}

function renderBlock(block: InsightBlock, index: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={index}
          className="text-xl font-bold text-navy-800 mt-10 mb-4"
        >
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p key={index} className="text-gray-600 leading-relaxed mb-5" style={{ fontSize: 16 }}>
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul key={index} className="mb-5 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600" style={{ fontSize: 16 }}>
              <span className="text-gold mt-1 flex-shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote
          key={index}
          className="my-8 pl-5 border-l-2 border-gold"
        >
          <p className="text-navy-800 font-medium leading-relaxed italic" style={{ fontSize: 17 }}>
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      )
  }
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const insight = insights.find((i) => i.slug === slug)
  if (!insight) notFound()

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 pt-32 pb-0 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gold text-xs font-medium mb-8 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Trinity Brief
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold/20 text-gold">
              {insight.category}
            </span>
            <span className="text-gray-500 text-xs">{insight.date}</span>
            <span className="text-gray-600 text-xs">&bull;</span>
            <span className="text-gray-500 text-xs">{insight.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-6">
            {insight.title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            {insight.excerpt}
          </p>
        </div>

        {/* Cover image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-t-2xl overflow-hidden" style={{ height: 400 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Body content */}
            <div className="lg:col-span-8">
              {insight.body.map((block, i) => renderBlock(block, i))}

              {/* Author card */}
              <div
                className="mt-14 p-6 rounded-xl flex gap-5 items-center"
                style={{ background: 'rgba(10,25,55,0.04)', border: '1px solid rgba(10,25,55,0.08)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex-shrink-0 overflow-hidden"
                  style={{ background: 'rgba(10,25,55,0.12)' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                    alt="Burke Doggett"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-bold text-navy-800 text-sm">Burke Doggett</p>
                  <p className="text-gray-500 text-xs mt-0.5">Commercial Real Estate Specialist, Trinity CRE &bull; KW Commercial</p>
                  <p className="text-gray-400 text-xs mt-1">Peachtree Corners, GA &bull; (770) 377-2063</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <div
                  className="rounded-xl p-6 mb-6"
                  style={{ background: 'rgba(10,25,55,0.04)', border: '1px solid rgba(10,25,55,0.08)' }}
                >
                  <p className="text-gold text-[10px] font-bold tracking-widest uppercase mb-2">
                    Questions?
                  </p>
                  <p className="text-navy-800 font-semibold text-sm mb-3 leading-snug">
                    Talk to Burke about your situation.
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    A 15-minute call is usually enough to figure out the right approach.
                  </p>
                  <a
                    href="tel:7703772063"
                    className="block text-center bg-gold text-navy-800 font-semibold text-sm px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    (770) 377-2063
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">
                    More Articles
                  </p>
                  <div className="space-y-4">
                    {insights
                      .filter((i) => i.slug !== insight.slug)
                      .slice(0, 3)
                      .map((related) => (
                        <Link
                          key={related.slug}
                          href={`/insights/${related.slug}`}
                          className="flex gap-3 group"
                        >
                          <div className="w-16 h-14 rounded-lg overflow-hidden flex-shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-navy-800 text-xs font-semibold leading-snug group-hover:text-gold transition-colors line-clamp-2">
                              {related.title}
                            </p>
                            <p className="text-gray-400 text-[11px] mt-1">{related.date}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-gold text-[10px] font-bold tracking-widest uppercase mb-3">Get in Touch</p>
              <h2 className="text-2xl font-bold text-navy-800 leading-snug mb-3">
                Ready to Talk?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Whether you are evaluating space, a deal, or just have a question about the Atlanta market -- reach out.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:7703772063"
                  className="inline-flex items-center gap-2 text-navy-800 font-semibold text-sm border border-gray-200 px-4 py-2.5 rounded-lg hover:border-navy-800/40 hover:bg-white transition-colors"
                >
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (770) 377-2063
                </a>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm variant="light" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
