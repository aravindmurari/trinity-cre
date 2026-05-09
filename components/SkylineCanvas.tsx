'use client'

import { useEffect, useRef } from 'react'

const THEME_COLORS: Record<string, [number, number, number]> = {
  verdant:  [201, 168,  76],
  midnight: [201, 168,  76],
  onyx:     [ 16, 185, 129],
}

function getColor(): [number, number, number] {
  const theme = document.documentElement.getAttribute('data-theme') ?? 'verdant'
  return THEME_COLORS[theme] ?? THEME_COLORS.verdant
}

const WIN_W  = 4
const WIN_H  = 5
const WIN_GX = 7
const WIN_GY = 8
const WIN_PX = 7
const WIN_PB = 5

interface Win {
  col: number
  floor: number
  brightness: number
  target: number
  timer: number
}

interface Building {
  x: number
  y: number
  w: number
  h: number
  cols: number
  floors: number
  windows: Win[]
}

function generateSkyline(cw: number, ch: number): Building[] {
  const out: Building[] = []
  let x = 0
  const cx = cw / 2

  while (x < cw + 80) {
    const bw   = Math.floor(Math.random() * 55 + 32)
    const mid  = x + bw / 2
    const dist = Math.abs(mid - cx) / (cx + 1)
    const maxH = ch * 0.58 * (1 - dist * 0.42)
    const bh   = Math.floor(Math.random() * maxH * 0.55 + maxH * 0.45)

    const cols   = Math.max(1, Math.floor((bw - WIN_PX * 2 + WIN_GX) / (WIN_W + WIN_GX)))
    const floors = Math.max(1, Math.floor((bh - WIN_PB) / (WIN_H + WIN_GY)))

    const windows: Win[] = []
    for (let f = 0; f < floors; f++) {
      for (let c = 0; c < cols; c++) {
        const lit = Math.random() > 0.42
        windows.push({
          col: c, floor: f,
          brightness: lit ? Math.random() * 0.5 + 0.4 : 0,
          target: lit ? 1 : 0,
          timer: Math.floor(Math.random() * 500 + 150),
        })
      }
    }

    out.push({ x, y: ch - bh, w: bw, h: bh, cols, floors, windows })
    x += bw + Math.floor(Math.random() * 4 + 1)
  }

  return out
}

export default function SkylineCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let buildings: Building[] = []
    let animId: number
    let cw = 0, ch = 0
    let color = getColor()

    function resize() {
      cw = canvas!.offsetWidth
      ch = canvas!.offsetHeight
      canvas!.width = cw
      canvas!.height = ch
      buildings = generateSkyline(cw, ch)
    }

    function update() {
      for (const b of buildings) {
        for (const win of b.windows) {
          win.timer--
          if (win.timer <= 0) {
            win.target = win.target === 0 ? 1 : 0
            win.timer = win.target === 1
              ? Math.floor(Math.random() * 800 + 400)
              : Math.floor(Math.random() * 400 + 100)
          }
          win.brightness += (win.target - win.brightness) * 0.025
        }
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, cw, ch)
      const [r, g, b] = color

      for (const bldg of buildings) {
        ctx!.fillStyle = 'rgba(255,255,255,0.035)'
        ctx!.fillRect(bldg.x, bldg.y, bldg.w, bldg.h)
        ctx!.fillStyle = 'rgba(255,255,255,0.06)'
        ctx!.fillRect(bldg.x, bldg.y, bldg.w, 1)

        for (const win of bldg.windows) {
          if (win.brightness < 0.015) continue
          const wx = bldg.x + WIN_PX + win.col * (WIN_W + WIN_GX)
          const wy = bldg.y + bldg.h - WIN_PB - (win.floor + 1) * (WIN_H + WIN_GY)
          ctx!.fillStyle = `rgba(${r},${g},${b},${win.brightness * 0.82})`
          ctx!.fillRect(wx, wy, WIN_W, WIN_H)
        }
      }

      const grd = ctx!.createLinearGradient(0, ch * 0.75, 0, ch)
      grd.addColorStop(0, 'transparent')
      grd.addColorStop(1, `rgba(${r},${g},${b},0.04)`)
      ctx!.fillStyle = grd
      ctx!.fillRect(0, ch * 0.75, cw, ch * 0.25)
    }

    function loop() { update(); draw(); animId = requestAnimationFrame(loop) }

    const observer = new MutationObserver(() => { color = getColor() })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    window.addEventListener('resize', resize)

    resize()
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}
