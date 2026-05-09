'use client'

import { useEffect, useState } from 'react'
import HeroCanvas from './HeroCanvas'
import SkylineCanvas from './SkylineCanvas'

export default function AnimatedHero() {
  const [animation, setAnimation] = useState<'particles' | 'skyline'>('particles')

  useEffect(() => {
    const saved = localStorage.getItem('trinity-animation') as 'particles' | 'skyline' | null
    if (saved) setAnimation(saved)

    const handler = (e: Event) => {
      setAnimation((e as CustomEvent).detail)
    }
    window.addEventListener('animationchange', handler)
    return () => window.removeEventListener('animationchange', handler)
  }, [])

  return animation === 'skyline' ? <SkylineCanvas /> : <HeroCanvas />
}
