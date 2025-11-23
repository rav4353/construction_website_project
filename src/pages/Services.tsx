import type { FC } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Tier {
  id: string
  name: string
  summary: string
  idealFor: string
  highlights: string[]
}

const TIERS: Tier[] = [
  {
    id: 'core',
    name: 'Core delivery',
    summary: 'Straightforward builds with clear scope and timelines.',
    idealFor: 'Single-tenant projects with minimal phasing.',
    highlights: ['Baseline program management', 'Standard reporting cadence', 'Defined milestone inspections'],
  },
  {
    id: 'managed',
    name: 'Managed program',
    summary: 'Added coordination for multi-stakeholder sites.',
    idealFor: 'Mixed-use projects or occupied campuses.',
    highlights: [
      'Enhanced logistics and phasing plans',
      'Stakeholder communication support',
      'Change management workflows',
    ],
  },
  {
    id: 'signature',
    name: 'Signature partnership',
    summary: 'End-to-end partnership from pre-development through turnover.',
    idealFor: 'Flagship assets and multi-phase portfolios.',
    highlights: ['Dedicated executive oversight', 'Integrated design-build support', 'Custom reporting and analytics'],
  },
]

const Services: FC = () => {
  const [openTierId, setOpenTierId] = useState<string>('managed')

  return (
    <main className="relative bg-concrete text-steel">
      {/* Fixed CTA on desktop */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-30 hidden max-w-xs md:block">
        <div className="pointer-events-auto rounded-2xl bg-brand-900 px-4 py-3 text-xs text-white shadow-xl ring-1 ring-brand-700">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-200">Ready to start?</p>
          <p className="mt-1 text-[11px] text-brand-100">
            Share a brief scope and we&apos;ll respond with a tailored delivery approach within one business day.
          </p>
          <Link
            to="/contact"
            className="mt-3 inline-flex items-center justify-center rounded-md bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-900 shadow-sm transition-transform duration-150 ease-in-out-soft hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 focus-visible:ring-white"
          >
            Discuss your project
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:pt-14">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Services</p>
          <h1 className="mt-1 text-2xl font-semibold text-brand-900 sm:text-3xl">Services for every stage of your build</h1>
          <p className="mt-2 text-sm text-brand-700">
            From early feasibility to final turnover, Skyline Builders provides integrated services that keep complex
            work predictable and safe.
          </p>
        </header>
      </section>

      {/* Visual service sections */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="space-y-6">
          <div className="grid gap-6 rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-brand-100 md:grid-cols-[1.6fr,1.4fr]">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-brand-900 sm:text-lg">Pre-construction & planning</h2>
              <p className="text-xs text-brand-700 sm:text-sm">
                Early-stage services that surface risk, refine budgets, and align stakeholders before you break ground.
              </p>
              <ul className="mt-2 space-y-1 text-[11px] text-brand-700 sm:text-xs">
                <li>• Feasibility studies and test fits</li>
                <li>• Cost planning and value engineering</li>
                <li>• Constructability and logistics reviews</li>
              </ul>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="h-32 w-full max-w-sm rounded-xl bg-gradient-to-tr from-brand-700 via-brand-500 to-accent/70 shadow-lg">
                <div className="flex h-full items-center justify-around px-4 text-[11px] text-white">
                  <div className="space-y-1">
                    <p className="font-semibold">Feasibility</p>
                    <p className="text-brand-100">Scope &amp; massing</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">Budget</p>
                    <p className="text-brand-100">Cost &amp; phasing</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">Logistics</p>
                    <p className="text-brand-100">Access &amp; staging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-brand-100 md:grid-cols-[1.4fr,1.6fr]">
            <div className="relative flex items-center justify-center order-last md:order-none">
              <div className="h-32 w-full max-w-sm rounded-xl bg-gradient-to-tr from-slate-900 via-brand-800 to-brand-500 shadow-lg">
                <div className="flex h-full items-center justify-between px-4 text-[11px] text-brand-100">
                  <div className="space-y-1">
                    <p className="font-semibold">Field crews</p>
                    <p>Self-perform + trades</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">Safety</p>
                    <p>Daily checklists</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">Reporting</p>
                    <p>Site dashboards</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-brand-900 sm:text-lg">Construction & delivery</h2>
              <p className="text-xs text-brand-700 sm:text-sm">
                Site management with a safety-first culture, coordinated trades, and transparent communication.
              </p>
              <ul className="mt-2 space-y-1 text-[11px] text-brand-700 sm:text-xs">
                <li>• General contracting & construction management</li>
                <li>• Phasing strategies for occupied sites</li>
                <li>• Digital progress reporting and site documentation</li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6 rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-brand-100 md:grid-cols-[1.6fr,1.4fr]">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-brand-900 sm:text-lg">Turnover & lifecycle support</h2>
              <p className="text-xs text-brand-700 sm:text-sm">
                Support beyond ribbon-cutting so your teams can take ownership of a fully documented, safe asset.
              </p>
              <ul className="mt-2 space-y-1 text-[11px] text-brand-700 sm:text-xs">
                <li>• Commissioning and systems handover</li>
                <li>• Closeout, as-built, and O&amp;M documentation</li>
                <li>• Post-occupancy reviews and minor works</li>
              </ul>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="h-32 w-full max-w-sm rounded-xl bg-gradient-to-tr from-emerald-600 via-brand-700 to-slate-900 shadow-lg">
                <div className="flex h-full items-center justify-between px-4 text-[11px] text-emerald-50">
                  <div className="space-y-1">
                    <p className="font-semibold">Handover</p>
                    <p>Training &amp; docs</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">Performance</p>
                    <p>Warranty support</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold">Refresh</p>
                    <p>Minor works</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers accordion */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-8 md:grid-cols-[1.3fr,1.7fr]">
          <div>
            <h2 className="text-base font-semibold text-brand-900 sm:text-lg">Service tiers</h2>
            <p className="mt-1 text-xs text-brand-700 sm:text-sm">
              Choose the level of partnership that matches your portfolio, internal team, and risk appetite.
            </p>
          </div>
          <div className="space-y-3">
            {TIERS.map((tier) => {
              const isOpen = tier.id === openTierId
              return (
                <article
                  key={tier.id}
                  className={`overflow-hidden rounded-2xl border bg-white/95 text-xs shadow-sm transition-all duration-200 ease-in-out-soft ${
                    isOpen ? 'border-brand-600 shadow-md' : 'border-brand-100 hover:border-brand-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenTierId(isOpen ? '' : tier.id)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">{tier.name}</p>
                      <p className="mt-1 text-[11px] text-brand-700">{tier.summary}</p>
                    </div>
                    <span
                      className={`ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full text-base transition-transform duration-200 ${
                        isOpen ? 'bg-brand-600 text-white' : 'bg-concrete text-brand-700'
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-200 ease-in-out-soft ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden px-4 pb-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Ideal for</p>
                      <p className="mt-1 text-[11px] text-brand-700">{tier.idealFor}</p>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-brand-600">Highlights</p>
                      <ul className="mt-1 space-y-1 text-[11px] text-brand-700">
                        {tier.highlights.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
