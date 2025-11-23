import type { FC } from 'react'
import { useMemo, useState } from 'react'
import type { ProjectCategory } from '../data/projects'
import { projects } from '../data/projects'

const FILTERS: (ProjectCategory | 'All')[] = ['All', 'Commercial', 'Residential', 'Industrial']

const PAGE_SIZE = 4

const Projects: FC = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>('All')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const filtered = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter],
  )

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleFilterChange = (value: (typeof FILTERS)[number]) => {
    setActiveFilter(value)
    setVisibleCount(PAGE_SIZE)
  }

  const handleLoadMore = () => {
    setIsLoadingMore(true)
    window.setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, filtered.length))
      setIsLoadingMore(false)
    }, 600)
  }

  return (
    <main className="bg-concrete text-steel">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pt-14">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Portfolio</p>
            <h1 className="mt-1 text-2xl font-semibold text-brand-900 sm:text-3xl">Built projects</h1>
            <p className="mt-2 max-w-xl text-sm text-brand-700">
              Explore a cross-section of recent commercial, residential, and industrial work delivered by Skyline
              Builders.
            </p>
          </div>
        </header>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterChange(filter)}
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-150 ease-in-out-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-concrete ${isActive ? 'border-brand-600 bg-brand-600 text-white shadow-sm' : 'border-brand-100 bg-white/80 text-brand-700 hover:border-brand-300 hover:bg-white'}`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white/90 shadow-sm ring-1 ring-brand-100 transition-transform duration-150 ease-in-out-soft hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative">
                <div className="aspect-[4/3] w-full bg-gradient-to-tr from-brand-700 via-brand-500 to-accent/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent opacity-80" />
                <div className="absolute left-3 top-3 inline-flex rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
                  {project.category}
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  <dl className="flex gap-4 px-3 pb-3 text-[11px] text-white">
                    <div>
                      <dt className="text-[10px] uppercase tracking-wide text-brand-100">Storeys</dt>
                      <dd className="font-semibold">{project.storeys}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-wide text-brand-100">Area</dt>
                      <dd className="font-semibold">{project.areaSqFt.toLocaleString()} sq ft</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-wide text-brand-100">Duration</dt>
                      <dd className="font-semibold">{project.durationMonths} months</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">{project.location}</p>
                  <h2 className="mt-1 text-sm font-semibold text-brand-900">{project.name}</h2>
                  <p className="mt-2 text-xs text-brand-700">{project.summary}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-xs font-semibold text-brand-700 hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    View details
                    <span className="ml-1 text-base transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </a>
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-medium text-brand-700">
                    In portfolio
                  </span>
                </div>
              </div>
            </article>
          ))}

          {isLoadingMore && (
            <div className="col-span-full grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse overflow-hidden rounded-2xl bg-white/80 shadow-sm ring-1 ring-brand-100"
                >
                  <div className="aspect-[4/3] w-full bg-brand-100/60" />
                  <div className="space-y-2 p-4">
                    <div className="h-3 w-24 rounded bg-brand-100" />
                    <div className="h-4 w-40 rounded bg-brand-100" />
                    <div className="h-3 w-full rounded bg-brand-100" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-sm text-brand-600">No projects found in this category yet.</p>
        )}

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-800 shadow-sm ring-1 ring-brand-200 transition-transform duration-150 ease-in-out-soft hover:-translate-y-0.5 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-concrete disabled:cursor-not-allowed disabled:opacity-70"
           >
              {isLoadingMore ? 'Loading more projects…' : 'Load more projects'}
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default Projects
