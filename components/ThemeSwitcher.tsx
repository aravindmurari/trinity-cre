'use client'

import { useEffect, useState } from 'react'

const THEMES = [
  {
    id: 'verdant',
    label: 'Verdant',
    bg: '#0A311E',
    accent: '#C9A84C',
    description: 'Forest green + gold',
  },
  {
    id: 'midnight',
    label: 'Midnight',
    bg: '#0F1B2D',
    accent: '#C9A84C',
    description: 'Navy + gold',
  },
  {
    id: 'onyx',
    label: 'Onyx',
    bg: '#081A12',
    accent: '#10B981',
    description: 'Charcoal + emerald',
  },
]

export default function ThemeSwitcher() {
  const [current, setCurrent] = useState('verdant')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('trinity-theme') ?? 'verdant'
    setCurrent(saved)
  }, [])

  function applyTheme(id: string) {
    if (id === 'verdant') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', id)
    }
    localStorage.setItem('trinity-theme', id)
    setCurrent(id)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Theme panel */}
      {open && (
        <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200/80 p-4 w-56">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Choose Theme
          </p>
          <div className="flex flex-col gap-2">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => applyTheme(theme.id)}
                className={`flex items-center gap-3 w-full rounded-xl p-2.5 transition-all cursor-pointer text-left ${
                  current === theme.id
                    ? 'bg-gray-100 ring-1 ring-gray-300'
                    : 'hover:bg-gray-50'
                }`}
              >
                {/* Two-tone swatch */}
                <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <div className="h-1/2 w-full" style={{ background: theme.bg }} />
                  <div className="h-1/2 w-full" style={{ background: theme.accent }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight">{theme.label}</p>
                  <p className="text-xs text-gray-400 leading-tight">{theme.description}</p>
                </div>
                {current === theme.id && (
                  <svg className="w-4 h-4 text-gray-500 ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
        style={{
          background: THEMES.find((t) => t.id === current)?.bg ?? '#0A311E',
          border: `2px solid ${THEMES.find((t) => t.id === current)?.accent ?? '#C9A84C'}`,
        }}
        aria-label="Switch theme"
      >
        <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>
    </div>
  )
}
