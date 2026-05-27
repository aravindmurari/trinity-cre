'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface Step {
  message: string
  options?: Array<{ label: string; next: string }>
  final?: 'contact' | 'listings' | 'phone'
}

const STEPS: Record<string, Step> = {

  // ── Entry ──────────────────────────────────────────────────────────────────
  start: {
    message: "Hi there! I'm Trinity CRE's virtual assistant. How can I help you today?",
    options: [
      { label: 'Find space for my business',        next: 'need_space'   },
      { label: 'I have a property to list or sell', next: 'own_property' },
      { label: 'Explore investment opportunities',  next: 'invest_1'     },
      { label: 'Talk to someone directly',          next: 'direct'       },
    ],
  },

  // ── Tenant paths ───────────────────────────────────────────────────────────
  need_space: {
    message: 'What type of space are you looking for?',
    options: [
      { label: 'Industrial / warehouse / flex', next: 'ind_size' },
      { label: 'Office space',                  next: 'off_size' },
    ],
  },

  ind_size: {
    message: 'What size space do you need?',
    options: [
      { label: 'Under 10,000 SF',     next: 'ind_area' },
      { label: '10,000 – 50,000 SF',  next: 'ind_area' },
      { label: '50,000 – 150,000 SF', next: 'ind_area' },
      { label: '150,000+ SF',         next: 'ind_area' },
    ],
  },
  ind_area: {
    message: 'Which Atlanta submarket are you targeting?',
    options: [
      { label: 'North — Gwinnett / I-985',    next: 'ind_cta' },
      { label: 'Northwest — Cobb / Kennesaw', next: 'ind_cta' },
      { label: 'South — Airport / Clayton',   next: 'ind_cta' },
      { label: 'I-20 East or West',           next: 'ind_cta' },
      { label: 'Not sure yet',                next: 'ind_cta' },
    ],
  },
  ind_cta: {
    message: "We have active listings and off-market options across Atlanta's industrial submarkets. Ready to connect?",
    options: [
      { label: 'Talk to a specialist',    next: 'end_contact'  },
      { label: 'Browse current listings', next: 'end_listings' },
    ],
  },

  off_size: {
    message: 'How much office space are you looking for?',
    options: [
      { label: 'Under 2,500 SF',    next: 'off_area' },
      { label: '2,500 – 7,500 SF',  next: 'off_area' },
      { label: '7,500 – 20,000 SF', next: 'off_area' },
      { label: '20,000+ SF',        next: 'off_area' },
    ],
  },
  off_area: {
    message: 'Which area of Greater Atlanta?',
    options: [
      { label: 'Gwinnett / Peachtree Corners',   next: 'off_cta' },
      { label: 'North Fulton / Alpharetta',      next: 'off_cta' },
      { label: 'Cobb / Marietta',                next: 'off_cta' },
      { label: 'Midtown / Buckhead / Perimeter', next: 'off_cta' },
      { label: 'Not sure yet',                   next: 'off_cta' },
    ],
  },
  off_cta: {
    message: "We represent tenants finding the right office environment and negotiate lease terms that protect your business long-term.",
    options: [
      { label: 'Talk to a specialist',    next: 'end_contact'  },
      { label: 'Browse current listings', next: 'end_listings' },
    ],
  },

  // ── Landlord / seller paths ────────────────────────────────────────────────
  own_property: {
    message: 'Are you looking to lease your property to a tenant, or sell it?',
    options: [
      { label: 'Lease it — find tenants', next: 'landlord_type' },
      { label: 'Sell it',                 next: 'seller_type'   },
    ],
  },

  landlord_type: {
    message: 'What type of property do you have?',
    options: [
      { label: 'Industrial / warehouse / flex', next: 'landlord_cta' },
      { label: 'Office space',                  next: 'landlord_cta' },
    ],
  },
  landlord_cta: {
    message: "We handle pricing, marketing, tenant outreach, and lease execution — from first showing to signed lease.",
    options: [
      { label: 'Discuss my property', next: 'end_contact' },
      { label: 'Call (770) 377-2063', next: 'end_phone'   },
    ],
  },

  seller_type: {
    message: 'What type of property?',
    options: [
      { label: 'Industrial / warehouse', next: 'seller_cta' },
      { label: 'Office',                 next: 'seller_cta' },
      { label: 'Other commercial',       next: 'seller_cta' },
    ],
  },
  seller_cta: {
    message: "We'll price, position, and market to the right buyer pool — investor or owner-user — to get you the best outcome.",
    options: [
      { label: 'Get a market valuation', next: 'end_contact' },
      { label: 'Call (770) 377-2063',    next: 'end_phone'   },
    ],
  },

  // ── Investment paths ───────────────────────────────────────────────────────
  invest_1: {
    message: 'Are you looking to acquire or divest a commercial property?',
    options: [
      { label: 'Acquire an investment property', next: 'invest_buy_range' },
      { label: 'Sell / divest a property',       next: 'invest_sell_cta' },
    ],
  },

  invest_buy_range: {
    message: 'What is your target investment range?',
    options: [
      { label: 'Under $2M',  next: 'invest_buy_cta' },
      { label: '$2M – $5M',  next: 'invest_buy_cta' },
      { label: '$5M – $10M', next: 'invest_buy_cta' },
      { label: '$10M+',      next: 'invest_buy_cta' },
    ],
  },
  invest_buy_cta: {
    message: "We source on- and off-market deals, run the underwriting, and guide you through due diligence and closing.",
    options: [
      { label: 'Talk to an advisor',        next: 'end_contact'  },
      { label: 'View available properties', next: 'end_listings' },
    ],
  },

  invest_sell_cta: {
    message: "Timing, pricing, and targeting the right buyer are what drive your outcome. Let's talk about your asset.",
    options: [
      { label: 'Get a market valuation', next: 'end_contact' },
      { label: 'Call (770) 377-2063',    next: 'end_phone'   },
    ],
  },

  // ── Direct contact ─────────────────────────────────────────────────────────
  direct: {
    message: 'The fastest ways to reach our team:',
    options: [
      { label: 'Call (770) 377-2063', next: 'end_phone'   },
      { label: 'Send a message',      next: 'end_contact' },
    ],
  },

  // ── Terminal steps ─────────────────────────────────────────────────────────
  end_contact: {
    message: 'Our team typically responds within one business day. Click below to send your message.',
    final: 'contact',
  },
  end_listings: {
    message: 'Here are our current available properties across the Atlanta metro.',
    final: 'listings',
  },
  end_phone: {
    message: "Give us a call — we're happy to chat about your needs.",
    final: 'phone',
  },
}

interface Message {
  type: 'bot' | 'user'
  text: string
}

export default function ChatBotInline() {
  const [messages, setMessages] = useState<Message[]>([])
  const [stepKey, setStepKey]   = useState('start')
  const [typing, setTyping]     = useState(false)
  const endRef                  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages([{ type: 'bot', text: STEPS.start.message }])
    }, 600)
  }, [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  function choose(label: string, next: string) {
    const withUser: Message[] = [...messages, { type: 'user', text: label }]
    setMessages(withUser)
    const nextStep = STEPS[next]
    if (!nextStep) return
    setStepKey(next)
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages([...withUser, { type: 'bot', text: nextStep.message }])
    }, 800)
  }

  function restart() {
    setMessages([])
    setStepKey('start')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages([{ type: 'bot', text: STEPS.start.message }])
      setStepKey('start')
    }, 600)
  }

  const step   = STEPS[stepKey]
  const isFinal = !!step?.final

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-gray-50/50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
              msg.type === 'bot'
                ? 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm shadow-sm'
                : 'bg-navy-800 text-white rounded-tr-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Options */}
      {!typing && messages.length > 0 && (
        <div className="px-4 pb-4 pt-2 flex-shrink-0 flex flex-col gap-1.5 border-t border-gray-100 bg-white">
          {isFinal ? (
            <>
              {step.final === 'contact' && (
                <Link
                  href="/contact"
                  className="w-full bg-gold text-navy-800 font-semibold py-2.5 rounded-xl text-sm text-center hover:opacity-90 transition-opacity"
                >
                  Go to Contact Page
                </Link>
              )}
              {step.final === 'listings' && (
                <Link
                  href="/listings"
                  className="w-full bg-gold text-navy-800 font-semibold py-2.5 rounded-xl text-sm text-center hover:opacity-90 transition-opacity"
                >
                  View Listings
                </Link>
              )}
              {step.final === 'phone' && (
                <a
                  href="tel:7703772063"
                  className="w-full bg-gold text-navy-800 font-semibold py-2.5 rounded-xl text-sm text-center hover:opacity-90 transition-opacity"
                >
                  Call (770) 377-2063
                </a>
              )}
              <button
                onClick={restart}
                className="w-full border border-gray-200 text-gray-400 py-2 rounded-xl text-xs hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Start over
              </button>
            </>
          ) : (
            step?.options?.map((opt) => (
              <button
                key={opt.label}
                onClick={() => choose(opt.label, opt.next)}
                className="w-full text-left px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-700 hover:border-navy-800 hover:text-navy-800 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {opt.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
