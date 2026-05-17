'use client'

import { useState, useEffect, useRef } from 'react'

const PASSCODE = 'TrinityCRE2026'
const STORAGE_KEY = 'trinity-demo-unlocked'

export default function PasscodeGate() {
  const [locked, setLocked] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const unlocked = sessionStorage.getItem(STORAGE_KEY)
    if (!unlocked) setLocked(true)
  }, [])

  useEffect(() => {
    if (locked) setTimeout(() => inputRef.current?.focus(), 100)
  }, [locked])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (input === PASSCODE) {
      sessionStorage.setItem(STORAGE_KEY, '1')
      setLocked(false)
    } else {
      setError(true)
      setShake(true)
      setInput('')
      setTimeout(() => setShake(false), 500)
    }
  }

  if (!locked) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#0B2212',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 360, width: '100%' }}>

        {/* Logo text */}
        <p style={{ color: '#D4C08A', fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '8px' }}>
          Trinity Commercial Real Estate
        </p>
        <h1 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, marginBottom: '6px' }}>
          Confidential Demo
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', marginBottom: '32px' }}>
          Enter the passcode to preview the site.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            ref={inputRef}
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false) }}
            placeholder="Enter passcode"
            autoComplete="off"
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: error ? '1.5px solid #ef4444' : '1.5px solid rgba(212,192,138,0.35)',
              background: 'rgba(255,255,255,0.06)',
              color: '#ffffff',
              fontSize: '15px',
              textAlign: 'center',
              outline: 'none',
              letterSpacing: '0.1em',
              animation: shake ? 'shake 0.4s ease' : 'none',
              boxSizing: 'border-box',
            }}
          />
          {error && (
            <p style={{ color: '#ef4444', fontSize: '12px', margin: '-4px 0 0' }}>
              Incorrect passcode. Please try again.
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              background: '#D4C08A',
              color: '#0B2212',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Enter
          </button>
        </form>

        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px', marginTop: '28px' }}>
          Prepared exclusively for Trinity Commercial Real Estate · Kepram
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  )
}
