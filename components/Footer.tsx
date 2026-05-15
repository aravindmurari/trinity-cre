import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/listings', label: 'Listings' },
  { href: '/insights', label: 'Market Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-navy-800 font-bold text-sm">T</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Trinity CRE Group</div>
                <div className="text-gold text-xs">Industrial CRE Specialists</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Industrial commercial real estate specialist serving the Greater Atlanta metro.
              Tenant representation, buyer representation, and investment sales.
            </p>
            <p className="text-xs leading-relaxed">
              KW Commercial / Keller Williams Realty Chattahoochee North
              <br />
              3930 E. Jones Bridge Road, #100, Peachtree Corners, GA 30092
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:7703772063" className="hover:text-white transition-colors">
                (770) 377-2063
              </a>
              <a href="mailto:burkedoggett@kw.com" className="hover:text-white transition-colors">
                burkedoggett@kw.com
              </a>
              <a
                href="https://linkedin.com/in/burke-doggett/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs">
          <p>&copy; {new Date().getFullYear()} Trinity CRE Group. All rights reserved.</p>
          <p>Burke Doggett, Commercial Realtor. KW Commercial is a licensed real estate brokerage.</p>
        </div>
      </div>
    </footer>
  )
}
