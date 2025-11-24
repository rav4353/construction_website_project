import type { FC } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/home/AnimatedCounter'
import HeroIllustration from '../components/home/HeroIllustration'
import QuoteForm from '../components/contact/QuoteForm'

const Home: FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  return (
    <div className="bg-concrete">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 lg:flex-row lg:items-center lg:pt-16">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-100">
            Trusted construction partner for commercial & residential projects
          </p>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl lg:text-5xl">
              Building landmarks
              <span className="block text-brand-600">that stand the test of time.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-brand-700 sm:text-base">
              Skyline Builders brings together engineering rigor and craftsmanship to deliver complex builds on
              schedule—without compromising safety or quality.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-150 ease-in-out-soft hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-concrete"
            >
              Get a Quote
            </button>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-brand-800 ring-1 ring-brand-200 transition-transform duration-150 ease-in-out-soft hover:-translate-y-0.5 hover:bg-white hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-concrete"
            >
              Our Projects
            </Link>
            <p className="mt-2 text-xs text-brand-600 sm:mt-0">
              Response within one business day.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <HeroIllustration />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-brand-100 sm:grid-cols-3">
          <AnimatedCounter label="Projects delivered" value={180} suffix="+" />
          <AnimatedCounter label="Years in operation" value={15} suffix="+" />
          <AnimatedCounter label="Specialist crews" value={24} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">What we do</p>
            <h2 className="mt-1 text-xl font-semibold text-brand-900 sm:text-2xl">Core services</h2>
            <p className="mt-1 text-sm text-brand-700">End-to-end delivery for complex commercial and residential builds.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-5 rounded-2xl bg-white/40 p-4 ring-1 ring-brand-100/60 md:grid-cols-3">
          {[
            {
              title: 'Pre-construction & planning',
              slug: 'pre-construction-planning',
              description: 'Feasibility studies, cost planning, and constructability reviews to de-risk your project.',
            },
            {
              title: 'General contracting',
              slug: 'general-contracting',
              description: 'Coordinated site execution with safety-first supervision and transparent reporting.',
            },
            {
              title: 'Design-build delivery',
              slug: 'design-build-delivery',
              description: 'Integrated design and construction teams for faster timelines and fewer change orders.',
            },
          ].map((service) => (
            <article
              key={service.title}
              className="group flex flex-col justify-between rounded-2xl bg-white/90 p-5 shadow-sm ring-1 ring-brand-100 transition-transform duration-150 ease-in-out-soft hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-transform duration-150 ease-in-out-soft group-hover:-translate-y-0.5">
                    <span className="text-lg" aria-hidden="true">
                      🏗️
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-brand-900">{service.title}</h3>
                </div>
                <p className="mt-3 text-xs text-brand-700 sm:text-sm">{service.description}</p>
              </div>
              <Link
                to={`/services/${service.slug}`}
                className="mt-4 inline-flex items-center text-xs font-semibold text-brand-700 transition-colors duration-150 group-hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more
                <span className="ml-1 translate-x-0 text-base transition-transform duration-150 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-brand-900 sm:text-2xl">Selected projects</h2>
            <p className="mt-1 text-sm text-brand-700">A snapshot of recent work across commercial, residential, and industrial.</p>
          </div>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-brand-100">
          <div className="grid gap-4 md:grid-cols-[2fr,1.2fr]">
            <article className="group relative overflow-hidden rounded-xl bg-concrete">
              <div className="aspect-[16/9] w-full bg-gradient-to-tr from-brand-700 via-brand-500 to-accent/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-100">Commercial · High-rise</p>
                <h3 className="mt-1 text-lg font-semibold">Downtown Skyline Tower</h3>
                <p className="mt-1 text-xs text-brand-100">
                  42-story mixed-use tower delivered with phased occupancy and zero lost-time incidents.
                </p>
              </div>
            </article>
            <div className="space-y-3 text-sm text-brand-800">
              <p>
                From constrained urban infill sites to campus-scale developments, Skyline Builders manages logistics,
                sequencing, and stakeholder coordination so your project delivers on time.
              </p>
              <ul className="space-y-1 text-xs text-brand-700">
                <li>• Phased construction strategies to keep tenants operating.</li>
                <li>• Transparent reporting with weekly progress snapshots.</li>
                <li>• Dedicated quality and safety teams on every site.</li>
              </ul>
              <Link
                to="/projects"
                className="inline-flex items-center text-xs font-semibold text-brand-700 hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                View all projects
                <span className="ml-1 text-base">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {isQuoteOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-concrete p-4 shadow-xl ring-1 ring-brand-900/10">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Get a quote</p>
                <h2 className="text-base font-semibold text-brand-900">Tell us about your project</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsQuoteOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm text-brand-600 hover:bg-white/70 hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-concrete"
                aria-label="Close quote form"
              >
                ✕
              </button>
            </div>
            <QuoteForm />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
