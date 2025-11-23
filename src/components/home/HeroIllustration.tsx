import type { FC } from 'react'

const HeroIllustration: FC = () => {
  return (
    <div className="relative h-72 w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent shadow-xl">
      <svg viewBox="0 0 300 220" className="h-full w-full" aria-hidden="true" role="img">
        <defs>
          <linearGradient id="craneArm" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
          </linearGradient>
        </defs>
        <rect x="-20" y="150" width="220" height="80" fill="rgba(15,23,42,0.2)" />
        <rect x="40" y="120" width="60" height="60" rx="6" fill="#e5e7eb" />
        <rect x="120" y="100" width="70" height="80" rx="6" fill="#f9fafb" />
        <rect x="210" y="130" width="60" height="50" rx="6" fill="#e5e7eb" />
        <rect x="130" y="40" width="10" height="80" fill="#e5e7eb" />
        <rect x="80" y="60" width="120" height="6" rx="3" fill="url(#craneArm)">
          <animate
            attributeName="x"
            values="76;84;76"
            dur="4s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.22 1 0.36 1;0.22 1 0.36 1"
          />
        </rect>
        <rect x="190" y="66" width="18" height="18" rx="3" fill="#f59e0b">
          <animate
            attributeName="y"
            values="60;72;60"
            dur="4s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.22 1 0.36 1;0.22 1 0.36 1"
          />
        </rect>
        <circle cx="60" cy="170" r="8" fill="#fbbf24" />
        <circle cx="95" cy="170" r="8" fill="#f97316" />
        <circle cx="130" cy="170" r="8" fill="#22c55e" />
      </svg>
    </div>
  )
}

export default HeroIllustration
