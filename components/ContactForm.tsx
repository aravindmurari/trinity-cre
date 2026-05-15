'use client'

import { useState } from 'react'

const SERVICE_OPTIONS: Record<string, string[]> = {
  'Buy / Sell': [
    'Looking to buy a property',
    'Looking to sell a property',
  ],
  'Lease': [
    'Find industrial space to lease',
    'Renew or renegotiate a lease',
    'Sublease my current space',
  ],
  'Investment': [
    'Acquire an investment property',
    'Sell an investment property',
    'Investment portfolio advisory',
  ],
}

const ATLANTA_AREAS = [
  'Norcross / Peachtree Corners (Gwinnett)',
  'Duluth / Suwanee / Buford (I-985)',
  'Lawrenceville / Dacula (Gwinnett East)',
  'Marietta / Kennesaw / Acworth (Cobb / Cherokee)',
  'Alpharetta / Roswell (North Fulton)',
  'I-20 West (Douglasville / Lithia Springs)',
  'I-20 East (Conyers / Covington)',
  'South Atlanta / Forest Park / Conley (Clayton)',
  'Fairburn / Union City / College Park (Airport)',
  'McDonough / Stockbridge (Henry County)',
  'I-285 Perimeter',
  'Multiple areas',
  'Not sure yet',
]

interface ContactFormProps {
  variant?: 'dark' | 'light'
}

export default function ContactForm({ variant = 'dark' }: ContactFormProps) {
  const [intent, setIntent] = useState('')
  const [service, setService] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const serviceOptions = intent ? SERVICE_OPTIONS[intent] : []
  const isDark = variant === 'dark'

  const fieldClass = isDark
    ? 'w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 bg-white outline-none focus:border-gold focus:ring-1 focus:ring-gold placeholder-gray-400 transition-colors'
    : 'w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 bg-white outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 placeholder-gray-400 transition-colors'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
        setIntent('')
        setService('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`rounded-xl p-10 text-center ${isDark ? 'bg-white/5 border border-white/10' : 'bg-green-50 border border-green-100'}`}>
        <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-navy-800'}`}>We got your message</h3>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Someone from Trinity CRE will be in touch within one business day.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-xl p-6 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'}`}
    >
      {/* Intent pills */}
      <div className="mb-4">
        <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          I am looking to...
        </p>
        <div className="flex flex-wrap gap-2">
          {Object.keys(SERVICE_OPTIONS).map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { setIntent(opt); setService('') }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                intent === opt
                  ? 'bg-gold text-navy-800 border-gold'
                  : isDark
                    ? 'bg-transparent text-gray-300 border-white/30 hover:border-gold/60 hover:text-white'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-navy-800 hover:text-navy-800'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        <input type="hidden" name="intent" value={intent} />
      </div>

      {/* Conditional service options */}
      {serviceOptions.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2.5">
          {serviceOptions.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setService(opt)}
            >
              <span
                className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                  service === opt
                    ? 'border-gold bg-gold'
                    : isDark
                      ? 'border-gray-500 group-hover:border-gold/70'
                      : 'border-gray-400 group-hover:border-navy-800'
                }`}
              >
                {service === opt && <span className="w-1 h-1 rounded-full bg-navy-800" />}
              </span>
              <input type="radio" name="service" value={opt} checked={service === opt} onChange={() => setService(opt)} className="sr-only" />
              <span className={`text-xs transition-colors ${
                service === opt
                  ? isDark ? 'text-white font-medium' : 'text-navy-800 font-medium'
                  : isDark ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-500 group-hover:text-navy-800'
              }`}>
                {opt}
              </span>
            </label>
          ))}
        </div>
      )}

      {/* Area + Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <select name="area" className={fieldClass}>
          <option value="">Area of Atlanta...</option>
          {ATLANTA_AREAS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        <input type="text" name="name" required placeholder="Your name" className={fieldClass} />
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input type="tel" name="phone" placeholder="Phone number" className={fieldClass} />
        <input type="email" name="email" required placeholder="Email address" className={fieldClass} />
      </div>

      {/* Notes */}
      <div className="mb-4">
        <textarea
          name="notes"
          rows={2}
          placeholder="Additional notes (optional)"
          className={`${fieldClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-xs mb-3">Something went wrong. Please try again or call us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gold text-navy-800 font-semibold py-2.5 rounded-lg hover:bg-gold-300 transition-colors text-sm cursor-pointer disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Request'}
      </button>

      <p className={`text-center text-xs leading-relaxed mt-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        Your information is used solely to respond to your inquiry and is never shared or sold.
      </p>
    </form>
  )
}
