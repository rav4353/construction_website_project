import type { FC } from 'react'
import { Link } from 'react-router-dom'

const PreConstructionPlanning: FC = () => {
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
              Pre-construction
            </span>
          </div>
        </div>

        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Pre-construction &amp; planning</p>
          <h1 className="mt-1 text-2xl font-semibold text-brand-900 sm:text-3xl">Plan your project with confidence</h1>
          <p className="mt-3 text-sm text-brand-700 sm:text-base">
            Get clarity on scope, cost, and risk before you commit capital. We help you pressure-test ideas, align
            stakeholders, and build a realistic delivery plan.
          </p>
        </header>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.6fr,1.4fr]">
          <article className="space-y-6 text-sm text-brand-800">
            <section>
              <h2 className="text-sm font-semibold text-brand-900 sm:text-base">What we focus on</h2>
              <ul className="mt-2 space-y-1 text-xs text-brand-700 sm:text-sm">
                <li>• Feasibility studies, test fits, and early site concepts.</li>
                <li>• Cost planning, value engineering, and budget alignment.</li>
                <li>• Constructability reviews to uncover risk early.</li>
                <li>• Phasing and logistics that keep neighbors and operations in mind.</li>
              </ul>
            </section>

            <section className="pt-4 border-t border-dashed border-brand-100">
              <h2 className="text-sm font-semibold text-brand-900 sm:text-base">Typical deliverables</h2>
              <ul className="mt-2 space-y-1 text-xs text-brand-700 sm:text-sm">
                <li>• High-level schedules and milestone maps.</li>
                <li>• Order-of-magnitude and detailed cost opinions.</li>
                <li>• Risk registers and mitigation strategies.</li>
                <li>• Clear go/no-go recommendations for decision makers.</li>
              </ul>
            </section>

            <section className="pt-4 border-t border-dashed border-brand-100">
              <h2 className="text-sm font-semibold text-brand-900 sm:text-base">Ideal for</h2>
              <p className="mt-2 text-xs text-brand-700 sm:text-sm">
                Owners and developers who want to de-risk a site or concept before engaging full design and construction
                teams.
              </p>
            </section>
          </article>

          <aside className="space-y-4 rounded-2xl bg-white/90 p-4 text-xs text-brand-800 shadow-sm ring-1 ring-brand-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Next step</p>
            <p className="text-[11px] text-brand-700">
              Share a rough scope, target budget, and timeline. We&apos;ll respond with a high-level pre-construction
              roadmap within one business day.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-600 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm transition-transform duration-150 ease-in-out-soft hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Discuss your project
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

export default PreConstructionPlanning
