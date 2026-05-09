'use client'

import { useEffect, useState } from 'react'

const THEMES = [
  { id: 'slate',    label: 'Slate',    bg: '#1E2A35', accent: '#E8A030', description: 'Steel blue + amber' },
  { id: 'midnight', label: 'Midnight', bg: '#0F1B2D', accent: '#C9A84C', description: 'Navy + gold' },
  { id: 'copper',   label: 'Copper',   bg: '#18130E', accent: '#C4774A', description: 'Charcoal + copper' },
]

const ANIMATIONS = [
  {
    id: 'particles',
    label: 'Particles',
    description: 'Floating network',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="5"  cy="12" r="1.5" fill="currentColor" />
        <circle cx="19" cy="5"  r="1.5" fill="currentColor" />
        <circle cx="19" cy="19" r="1.5" fill="currentColor" />
        <circle cx="12" cy="8"  r="1.5" fill="currentColor" />
        <path strokeLinecap="round" d="M6.2 11.3L11 8.7M13.2 8L18 5.8M13.2 8.8L18 18.2M6.5 12.8L18 18.5" />
      </svg>
    ),
  },
  {
    id: 'skyline',
    label: 'Skyline',
    description: 'City at night',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h2v11H3zM7 6h4v15H7zM13 3h4v18h-4zM19 9h2v12h-2z" />
        <rect x="8"  y="9"  width="1.2" height="1.5" fill="currentColor" stroke="none" />
        <rect x="10" y="9"  width="1.2" height="1.5" fill="currentColor" stroke="none" />
        <rect x="14" y="6"  width="1.2" height="1.5" fill="currentColor" stroke="none" />
        <rect x="16" y="6"  width="1.2" height="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'panels',
    label: 'Panels',
    description: 'Service panels',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <rect x="3" y="3" width="5" height="18" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="3" width="5" height="18" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="17" y="3" width="4" height="18" rx="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('midnight')
  const [currentAnim,  setCurrentAnim]  = useState<'particles' | 'skyline' | 'panels'>('panels')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setCurrentTheme(localStorage.getItem('trinity-theme') ?? 'midnight')
    setCurrentAnim((localStorage.getItem('trinity-animation') ?? 'panels') as 'particles' | 'skyline' | 'panels')
  }, [])

  function applyTheme(id: string) {
    if (id === 'slate') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', id)
    }
    localStorage.setItem('trinity-theme', id)
    setCurrentTheme(id)
  }

  function applyAnimation(id: 'particles' | 'skyline' | 'panels') {
    localStorage.setItem('trinity-animation', id)
    setCurrentAnim(id)
    window.dispatchEvent(new CustomEvent('animationchange', { detail: id }))
  }

  const activeTheme = THEMES.find((t) => t.id === currentTheme) ?? THEMES[0]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200/80 p-4 w-60">

          {/* Theme */}
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Color Theme</p>
          <div className="flex flex-col gap-1.5 mb-5">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => applyTheme(theme.id)}
                className={`flex items-center gap-3 w-full rounded-xl p-2.5 transition-all cursor-pointer text-left ${
                  currentTheme === theme.id ? 'bg-gray-100 ring-1 ring-gray-300' : 'hover:bg-gray-50'
                }`}
              >
                <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 shadow-sm" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <div className="h-1/2 w-full" style={{ background: theme.bg }} />
                  <div className="h-1/2 w-full" style={{ background: theme.accent }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 leading-tight">{theme.label}</p>
                  <p className="text-xs text-gray-400 leading-tight">{theme.description}</p>
                </div>
                {currentTheme === theme.id && (
                  <svg className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Animation */}
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Hero Animation</p>
          <div className="flex gap-2">
            {ANIMATIONS.map((anim) => (
              <button
                key={anim.id}
                onClick={() => applyAnimation(anim.id as 'particles' | 'skyline' | 'panels')}
                className={`flex-1 flex flex-col items-center gap-1.5 rounded-xl py-2.5 px-2 text-center transition-all cursor-pointer ${
                  currentAnim === anim.id
                    ? 'bg-gray-100 ring-1 ring-gray-300 text-gray-700'
                    : 'hover:bg-gray-50 text-gray-400'
                }`}
              >
                {anim.icon}
                <p className="text-xs font-semibold leading-tight">{anim.label}</p>
                <p className="text-xs text-gray-400 leading-none">{anim.description}</p>
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
          background: activeTheme.bg,
          border: `2px solid ${activeTheme.accent}`,
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
