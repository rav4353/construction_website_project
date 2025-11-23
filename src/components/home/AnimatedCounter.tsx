import { useEffect, useState } from 'react'

export interface AnimatedCounterProps {
  label: string
  value: number
  suffix?: string
  durationMs?: number
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ label, value, suffix = '', durationMs = 1200 }) => {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDisplay(value)
      return
    }

    let frame: number
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / durationMs)
      setDisplay(Math.round(progress * value))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [durationMs, value])

  return (
    <div className="rounded-lg bg-white/80 px-4 py-3 shadow-sm ring-1 ring-brand-100">
      <div className="text-2xl font-semibold text-brand-800">
        {display.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-brand-600">{label}</p>
    </div>
  )
}

export default AnimatedCounter
