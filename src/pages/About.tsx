import type { FC } from 'react'
import { useEffect, useState } from 'react'

interface TeamMember {
  name: string
  role: string
  focus: string
  bio?: string
}

const TEAM: TeamMember[] = [
  {
    name: 'Asha Rao',
    role: 'Managing Director',
    focus: 'Strategic partnerships and risk oversight.',
    bio: 'Asha oversees client relationships, risk frameworks, and major project approvals across the portfolio.',
  },
  {
    name: 'Daniel Ortiz',
    role: 'Director of Construction',
    focus: 'Field operations and safety leadership.',
    bio: 'Daniel leads site operations, trade coordination, and implementation of Skyline\'s safety program.',
  },
  {
    name: 'Leena Patel',
    role: 'Head of Pre-construction',
    focus: 'Early-stage planning and cost intelligence.',
    bio: 'Leena partners with owners and designers to shape scope, budgets, and phasing strategies.',
  },
]

interface TimelineItem {
  year: string
  title: string
  description: string
}

const TIMELINE: TimelineItem[] = [
  {
    year: '2008',
    title: 'Skyline Builders founded',
    description: 'Started with specialized commercial interiors projects.',
  },
  {
    year: '2014',
    title: 'Expanded into residential towers',
    description: 'Delivered first ground-up high-rise for a repeat client.',
  },
  {
    year: '2019',
    title: 'Industrial & logistics practice',
    description: 'Formed a dedicated team for logistics, warehousing, and aviation work.',
  },
  {
    year: '2024',
    title: 'Integrated digital delivery',
    description: 'Rolled out standardized digital reporting and site documentation across all projects.',
  },
]

const AWARDS = [
  {
    name: 'Regional Contractor of the Year',
    org: 'Construction Excellence Awards',
    year: '2023',
  },
  {
    name: 'Safety Leadership Award',
    org: 'National Builders Association',
    year: '2022',
  },
  {
    name: 'Design-Build Collaboration Award',
    org: 'Urban Design Council',
    year: '2021',
  },
]

const About: FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedMember(null)
      }
    }
    if (selectedMember) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMember])

  return (
    <main className="bg-concrete text-steel">
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:pt-14 animate-fade-up-soft">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">About</p>
          <h1 className="mt-1 text-2xl font-semibold text-brand-900 sm:text-3xl">Engineering confidence since 2008</h1>
          <p className="mt-2 text-sm text-brand-700">
            Skyline Builders is a multidisciplinary construction partner focused on delivering technically complex,
            time-sensitive projects with a safety-first mindset.
          </p>
        </header>
      </section>

      {/* Team section */}
      <section className="mx-auto max-w-6xl px-4 pb-16 animate-fade-up-soft">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-brand-900 sm:text-lg">Leadership team</h2>
            <p className="mt-1 max-w-xl text-xs text-brand-700 sm:text-sm">
              A senior team you can reach on-site and in the boardroombringing together field experience, cost
              discipline, and stakeholder communication.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="group flex cursor-pointer flex-col items-center rounded-2xl bg-white/95 p-5 text-center shadow-sm ring-1 ring-brand-100 transition-transform duration-150 ease-in-out-soft hover:-translate-y-1 hover:shadow-md focus-within:-translate-y-1"
              onClick={() => setSelectedMember(member)}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setSelectedMember(member)
                }
              }}
            >
              <div className="relative mb-3 h-20 w-20 rounded-full bg-gradient-to-tr from-brand-700 via-brand-500 to-accent/70 shadow-md transition-transform duration-150 ease-in-out-soft group-hover:-translate-y-0.5">
                <div className="absolute inset-1 rounded-full bg-white/10" />
                <span className="absolute inset-0 flex items-center justify-center text-2xl" aria-hidden="true">
                  👷
                </span>
              </div>
              <h3 className="text-sm font-semibold text-brand-900">{member.name}</h3>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-brand-600">{member.role}</p>
              <p className="mt-2 text-[11px] text-brand-700">{member.focus}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Values + timeline */}
      <section className="mx-auto max-w-6xl px-4 pb-18 animate-fade-up-soft">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1.8fr]">
          <div>
            <h2 className="text-base font-semibold text-brand-900 sm:text-lg">How we build</h2>
            <p className="mt-1 text-xs text-brand-700 sm:text-sm">
              Our values guide decisions on every sitefrom subcontractor selection to how we communicate when the
              unexpected happens.
            </p>
            <dl className="mt-4 space-y-3 text-xs text-brand-800">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Safety first</dt>
                <dd className="mt-1 text-[11px] text-brand-700">
                  Zero tolerance for shortcuts. Every project begins with a site-specific safety plan.
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Transparent delivery</dt>
                <dd className="mt-1 text-[11px] text-brand-700">
                  Clear, regular communication with owners, tenants, and design partners.
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Craft & longevity</dt>
                <dd className="mt-1 text-[11px] text-brand-700">
                  Details that stand up to daily use and evolving tenant needs.
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-900">Milestones</h3>
            <ol className="mt-4 space-y-3">
              {TIMELINE.map((item, index) => {
                const progress = ((index + 1) / TIMELINE.length) * 100
                return (
                  <li key={item.year} className="relative rounded-2xl bg-white/95 p-4 text-xs shadow-sm ring-1 ring-brand-100">
                    <div className="flex items-baseline justify-between gap-2">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">{item.year}</p>
                        <p className="mt-1 text-sm font-semibold text-brand-900">{item.title}</p>
                      </div>
                    </div>
                    <p className="mt-1 text-[11px] text-brand-700">{item.description}</p>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-brand-50">
                      <div
                        className="h-1.5 rounded-full bg-brand-600 transition-all duration-500 ease-in-out-soft"
                        style={{ width: `${progress}%` }}
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Certifications & awards carousel */}
      <section className="mx-auto max-w-6xl px-4 pb-24 animate-fade-up-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-brand-900 sm:text-lg">Certifications & awards</h2>
            <p className="mt-1 max-w-xl text-xs text-brand-700 sm:text-sm">
              Independent recognition of our approach to safety, delivery, and design collaboration.
            </p>
          </div>
        </div>
        <div className="mt-5 overflow-hidden rounded-2xl bg-white/95 p-4 shadow-sm ring-1 ring-brand-100">
          <div className="flex gap-4 overflow-x-auto sm:overflow-x-hidden sm:animate-[slide-left_16s_linear_infinite] [animation-play-state:running] hover:[animation-play-state:paused]">
            {[...AWARDS, ...AWARDS].map((award, index) => (
              <div
                key={`${award.name}-${index}`}
                className="min-w-[220px] max-w-xs shrink-0 rounded-2xl bg-concrete px-4 py-3 text-xs text-brand-800 shadow-sm ring-1 ring-brand-100"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">{award.year}</p>
                <p className="mt-1 text-sm font-semibold text-brand-900 break-words leading-snug">{award.name}</p>
                <p className="mt-1 text-[11px] text-brand-700 break-words leading-snug">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMember && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4 py-6">
          <div className="max-w-sm rounded-2xl bg-white p-5 text-xs text-brand-800 shadow-xl ring-1 ring-brand-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="relative mt-0.5 h-12 w-12 shrink-0 rounded-full bg-gradient-to-tr from-brand-700 via-brand-500 to-accent/70 shadow-md">
                  <div className="absolute inset-1 rounded-full bg-white/10" />
                  <span className="absolute inset-0 flex items-center justify-center text-xl" aria-hidden="true">
                    👷
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Leadership profile</p>
                  <h3 className="mt-1 text-sm font-semibold text-brand-900">{selectedMember.name}</h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-brand-600">
                    {selectedMember.role}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-base text-brand-700 hover:bg-concrete focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Close profile"
              >
                ×
              </button>
            </div>
            <p className="mt-3 text-[11px] text-brand-700">{selectedMember.bio ?? selectedMember.focus}</p>
          </div>
        </div>
      )}
    </main>
  )
}

export default About
