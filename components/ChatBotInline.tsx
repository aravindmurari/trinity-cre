'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface Step {
  message: string
  options?: Array<{ label: string; next: string }>
  final?: 'contact' | 'listings' | 'phone'
}

const STEPS: Record<string, Step> = {
  start: {
    message: "Hi there! I'm Trinity CRE's virtual assistant. How can I help you today?",
    options: [
      { label: 'Find space to lease',  next: 'lease_1'  },
      { label: 'Buy a property',       next: 'buy_1'    },
      { label: 'Explore investments',  next: 'invest_1' },
      { label: 'Talk to someone',      next: 'direct'   },
    ],
  },
  lease_1: {
    message: 'What size space are you looking for?',
    options: [
      { label: 'Under 10,000 SF',    next: 'lease_2' },
      { label: '10,000 – 50,000 SF', next: 'lease_2' },
      { label: '50,000 – 100,000 SF',next: 'lease_2' },
      { label: '100,000+ SF',        next: 'lease_2' },
    ],
  },
  lease_2: {
    message: 'Which area of Atlanta are you targeting?',
    options: [
      { label: 'North — Gwinnett / I-985',     next: 'lease_3' },
      { label: 'Northwest — Cobb / Kennesaw',  next: 'lease_3' },
      { label: 'South — Airport / Clayton',    next: 'lease_3' },
      { label: 'I-285 Perimeter',              next: 'lease_3' },
      { label: 'Not sure yet',                 next: 'lease_3' },
    ],
  },
  lease_3: {
    message: "We have active listings across Atlanta's industrial submarkets. Would you like to connect with a specialist or browse listings?",
    options: [
      { label: 'Connect with a specialist', next: 'end_contact'  },
      { label: 'View current listings',     next: 'end_listings' },
    ],
  },
  buy_1: {
    message: 'Are you buying for your own business or as an investment?',
    options: [
      { label: 'For my business',    next: 'buy_2'    },
      { label: 'Investment property', next: 'invest_1' },
    ],
  },
  buy_2: {
    message: 'What property size are you targeting?',
    options: [
      { label: 'Under 25,000 SF',    next: 'buy_3' },
      { label: '25,000 – 75,000 SF', next: 'buy_3' },
      { label: '75,000+ SF',         next: 'buy_3' },
    ],
  },
  buy_3: {
    message: 'Trinity CRE specializes in industrial acquisitions across Greater Atlanta. We can help you identify and negotiate the right property.',
    options: [
      { label: 'Talk to a specialist',     next: 'end_contact'  },
      { label: 'See available properties', next: 'end_listings' },
    ],
  },
  invest_1: {
    message: 'What is your target investment range?',
    options: [
      { label: 'Under $2M',  next: 'invest_2' },
      { label: '$2M – $5M',  next: 'invest_2' },
      { label: '$5M – $10M', next: 'invest_2' },
      { label: '$10M+',      next: 'invest_2' },
    ],
  },
  invest_2: {
    message: 'What type of opportunity interests you?',
    options: [
      { label: 'NNN / Single-tenant', next: 'invest_3' },
      { label: 'Multi-tenant',        next: 'invest_3' },
      { label: 'Value-add',           next: 'invest_3' },
      { label: 'Open to all',         next: 'invest_3' },
    ],
  },
  invest_3: {
    message: 'Trinity CRE has deep experience in Atlanta industrial investment sales. Let us help you source and underwrite the right deal.',
    options: [
      { label: 'Talk to an advisor',       next: 'end_contact'  },
      { label: 'View investment listings', next: 'end_listings' },
    ],
  },
  direct: {
    message: 'The fastest ways to reach our team:',
    options: [
      { label: 'Call (770) 377-2063', next: 'end_phone'   },
      { label: 'Send a message',      next: 'end_contact' },
    ],
  },
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
