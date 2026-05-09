import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Burke Doggett - industrial CRE specialist in Greater Atlanta.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-semibold text-sm uppercase tracking-wide mb-3">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{"Let's Talk"}</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Whether you need space, want to acquire an asset, or just want to talk market conditions -- reach out.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Send a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Get in Touch Directly</h2>

              <div className="space-y-5 mb-8">
                {[
                  {
                    label: 'Phone',
                    value: '(770) 377-2063',
                    href: 'tel:7703772063',
                    iconPath:
                      'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                  },
                  {
                    label: 'Email',
                    value: 'burkedoggett@kw.com',
                    href: 'mailto:burkedoggett@kw.com',
                    iconPath:
                      'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  },
                  {
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/burke-doggett/',
                    href: 'https://linkedin.com/in/burke-doggett/',
                    iconPath:
                      'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
                  },
                ].map(({ label, value, href, iconPath }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-navy-800/5 rounded-lg flex items-center justify-center text-navy-800 group-hover:bg-gold/10 group-hover:text-gold transition-colors flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPath} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{label}</p>
                      <p className="text-sm font-medium text-navy-800 group-hover:text-gold transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-5">
                <h3 className="font-semibold text-navy-800 text-sm mb-2">Office</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  KW Commercial / Keller Williams Realty Chattahoochee North
                  <br />
                  3930 E. Jones Bridge Road, Suite 100
                  <br />
                  Peachtree Corners, GA 30092
                  <br />
                  Office: (678) 578-2700
                </p>
              </div>

              <div className="bg-navy-800/5 border border-navy-800/10 rounded-lg p-5">
                <h3 className="font-semibold text-navy-800 text-sm mb-2">Prefer to Schedule a Call?</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Use the form or call directly -- Burke typically responds within one business day.
                </p>
                <p className="text-xs text-gray-400">Calendly scheduling link coming soon.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
