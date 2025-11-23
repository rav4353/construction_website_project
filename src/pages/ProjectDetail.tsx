import type { FC } from 'react'
import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

type PhaseId = 'planning' | 'construction' | 'finishing'

interface Phase {
  id: PhaseId
  label: string
  description: string
}

const PHASES: Phase[] = [
  {
    id: 'planning',
    label: 'Planning',
    description: 'Pre-construction services, feasibility, and logistics strategy.',
  },
  {
    id: 'construction',
    label: 'Construction',
    description: 'Site execution, coordination of trades, and safety oversight.',
  },
  {
    id: 'finishing',
    label: 'Finishing',
    description: 'Commissioning, inspections, and turnover documentation.',
  },
]

const ProjectDetail: FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [activeSlide, setActiveSlide] = useState(0)
  const [activePhase, setActivePhase] = useState<PhaseId>('construction')

  const project = useMemo(() => projects.find((p) => p.id === id), [id])

  if (!project) {
    return (
      <main className="bg-concrete text-steel">
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Project</p>
          <h1 className="mt-1 text-2xl font-semibold text-brand-900">Project not found</h1>
          <p className="mt-3 text-sm text-brand-700">
            The requested project could not be found. It may have been moved or is not yet published.
          </p>
          <button
            type="button"
            onClick={() => navigate('/projects')}
            className="mt-6 inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-transform duration-150 ease-in-out-soft hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-concrete"
          >
            Back to projects
          </button>
        </section>
      </main>
    )
  }

  const slides = [
    {
      id: 'hero',
      label: 'Exterior',
      description: 'Street-level view highlighting the primary façade and entry sequence.',
    },
    {
      id: 'lobby',
      label: 'Interior',
      description: 'Lobby and shared spaces designed for high tenant throughput and comfort.',
    },
    {
      id: 'roof',
      label: 'Systems',
      description: 'Roof and building systems showcasing coordinated MEP and envelope work.',
    },
  ]

  const metrics = [
    {
      label: 'Estimated budget range',
      value: '$140M – $160M',
      detail: 'Inclusive of core & shell, fit-out allowances, and site work.',
    },
    {
      label: 'Schedule',
      value: `${project.durationMonths} months`,
      detail: 'From notice-to-proceed through substantial completion.',
    },
    {
      label: 'Program area',
      value: `${project.areaSqFt.toLocaleString()} sq ft`,
      detail: 'Net rentable area across all above-grade floors.',
    },
    {
      label: 'Location',
      value: project.location,
      detail: 'Coordinated with local authorities and adjacent stakeholders.',
    },
  ]

  const activePhaseIndex = PHASES.findIndex((phase) => phase.id === activePhase)

  return (
    <main className="bg-concrete text-steel">
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:pt-14">
        <button
          type="button"
          onClick={() => navigate('/projects')}
          className="inline-flex items-center text-xs font-semibold text-brand-700 hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-concrete"
        >
          <span className="mr-1 text-base">←</span> Back to projects
        </button>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-600">Project case study</p>
        <h1 className="mt-1 text-2xl font-semibold text-brand-900 sm:text-3xl">{project.name}</h1>
        <p className="mt-2 max-w-2xl text-sm text-brand-700">{project.summary}</p>
      </section>

      {/* Hero gallery */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-4 md:grid-cols-[2.2fr,1.1fr]">
          <div className="overflow-hidden rounded-2xl bg-slate-900/90">
            <div className="relative aspect-[16/9] w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-700 via-brand-500 to-accent/70" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />
              <div className="absolute inset-0 flex items-end justify-between px-4 pb-4 text-xs text-brand-50">
                <div>
                  <p className="font-semibold uppercase tracking-wide text-brand-100">{slides[activeSlide].label}</p>
                  <p className="mt-1 max-w-md text-[11px] text-brand-100/90">{slides[activeSlide].description}</p>
                </div>
                <div className="flex gap-1">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-1.5 w-6 rounded-full transition-all duration-300 ease-in-out-soft ${
                        index === activeSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Show ${slide.label} image`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col justify-between gap-4 rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-brand-100">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Project snapshot</p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-brand-800">
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-brand-600">Type</p>
                  <p className="mt-1 font-semibold">{project.category}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-brand-600">Storeys</p>
                  <p className="mt-1 font-semibold">{project.storeys}</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-brand-600">Area</p>
                  <p className="mt-1 font-semibold">{project.areaSqFt.toLocaleString()} sq ft</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-brand-600">Duration</p>
                  <p className="mt-1 font-semibold">{project.durationMonths} months</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-transform duration-150 ease-in-out-soft hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Download PDF case study
            </button>
          </aside>
        </div>
      </section>

      {/* Timeline & metrics */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-[1.6fr,1.4fr]">
          <div>
            <h2 className="text-base font-semibold text-brand-900 sm:text-lg">Delivery timeline</h2>
            <p className="mt-1 text-xs text-brand-700 sm:text-sm">
              A three-phase delivery approach reduced on-site congestion and allowed early access for key tenants.
            </p>
            <ol className="mt-5 space-y-3">
              {PHASES.map((phase, index) => {
                const isActive = phase.id === activePhase
                const isComplete = index < activePhaseIndex
                return (
                  <li key={phase.id}>
                    <button
                      type="button"
                      onClick={() => setActivePhase(phase.id)}
                      className={`flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left text-xs transition-all duration-200 ease-in-out-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-concrete ${
                        isActive
                          ? 'border-brand-600 bg-white shadow-sm'
                          : 'border-brand-100 bg-white/80 hover:border-brand-300 hover:bg-white'
                      }`}
                    >
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold ${
                          isComplete
                            ? 'bg-brand-600 text-white'
                            : isActive
                              ? 'bg-brand-100 text-brand-800'
                              : 'bg-concrete text-brand-600'
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span>
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-700">
                          {phase.label}
                        </span>
                        <span className="mt-1 block text-[11px] text-brand-700">{phase.description}</span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
            <div className="mt-4 h-1.5 w-full rounded-full bg-brand-50">
              <div
                className="h-1.5 rounded-full bg-brand-600 transition-all duration-500 ease-in-out-soft"
                style={{ width: `${((activePhaseIndex + 1) / PHASES.length) * 100}%` }}
                aria-hidden="true"
              />
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold text-brand-900 sm:text-lg">Key metrics</h2>
            <p className="mt-1 text-xs text-brand-700 sm:text-sm">
              High-level commercial metrics for quick comparison across your project pipeline.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="group rounded-2xl bg-white/90 p-4 text-xs shadow-sm ring-1 ring-brand-100 transition-transform duration-150 ease-in-out-soft hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">{metric.label}</p>
                  <p className="mt-2 text-sm font-semibold text-brand-900">{metric.value}</p>
                  <p className="mt-1 text-[11px] text-brand-700">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetail
