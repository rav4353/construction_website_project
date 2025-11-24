import type { FC } from 'react'
import { Link } from 'react-router-dom'

const DesignBuildDelivery: FC = () => {
  return (
    <main className="bg-concrete text-steel">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pt-14">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-brand-900/90 px-4 py-3 text-[11px] text-brand-50 shadow-sm ring-1 ring-brand-800">
          <p className="font-semibold uppercase tracking-wide text-brand-200">Services</p>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-brand-50/90">
            <Link to="/services" className="underline-offset-4 hover:text-white hover:underline">
              All services
            </Link>
            <span className="text-brand-400">/</span>
            <span className="rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-50">
              Integrated
            </span>
          </div>
        </div>

        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Design-build delivery</p>
          <h1 className="mt-1 text-2xl font-semibold text-brand-900 sm:text-3xl">One integrated team from day one</h1>
          <p className="mt-3 text-sm text-brand-700 sm:text-base">
            A single integrated team for design and construction, so decisions are faster, coordination is tighter, and
            change orders are reduced.
          </p>
        </header>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.6fr,1.4fr]">
          <article className="space-y-6 text-sm text-brand-800">
            <section>
              <h2 className="text-sm font-semibold text-brand-900 sm:text-base">Why design-build</h2>
              <ul className="mt-2 space-y-1 text-xs text-brand-700 sm:text-sm">
                <li>• Single point of accountability for design and construction.</li>
                <li>• Early collaboration between architects, engineers, and field teams.</li>
                <li>• Fewer change orders and RFIs due to better coordination.</li>
                <li>• Faster decision-making and shorter overall timelines.</li>
              </ul>
            </section>

            <section className="pt-4 border-t border-dashed border-brand-100">
              <h2 className="text-sm font-semibold text-brand-900 sm:text-base">How we deliver</h2>
              <ul className="mt-2 space-y-1 text-xs text-brand-700 sm:text-sm">
                <li>• Integrated design workshops with key stakeholders.</li>
                <li>• Target value design to keep scope aligned with budget.</li>
                <li>• Continuous constructability and logistics input during design.</li>
                <li>• Seamless handoff from design to field teams.</li>
              </ul>
            </section>

            <section className="pt-4 border-t border-dashed border-brand-100">
              <h2 className="text-sm font-semibold text-brand-900 sm:text-base">Ideal for</h2>
              <p className="mt-2 text-xs text-brand-700 sm:text-sm">
                Complex or schedule-driven projects where collaboration, speed, and cost control are critical.
              </p>
            </section>
          </article>

          <aside className="space-y-4 rounded-2xl bg-white/90 p-4 text-xs text-brand-800 shadow-sm ring-1 ring-brand-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Explore options</p>
            <p className="text-[11px] text-brand-700">
              We can propose design-build approaches ranging from light advisory support to fully integrated partnerships
              with your design team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-600 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition-transform duration-150 ease-in-out-soft hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Talk about design-build
            </Link>
            <Link
              to="/services"
              className="block text-[11px] font-semibold text-brand-700 hover:text-brand-900"
            >
              Back to all services
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default DesignBuildDelivery
