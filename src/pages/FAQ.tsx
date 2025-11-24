import type { FC } from 'react'
import { useState } from 'react'

const FAQ: FC = () => {
  const faqs = [
    {
      id: 'projects',
      question: 'What types of projects does Skyline Builders take on?',
      short:
        'We deliver commercial, residential, and light industrial work—from interiors to ground-up builds.',
      answer:
        'We work across commercial, residential, and light industrial projects. That includes office interiors, retail fit-outs, multi-residential towers, logistics facilities, and campus-style developments. If you share your sector and approximate size, we can quickly confirm whether it is a fit.',
    },
    {
      id: 'region',
      question: 'Do you only work in one region?',
      short: 'Our primary focus is the surrounding metropolitan region, with select projects further afield.',
      answer:
        'Our core focus is the surrounding metropolitan region where our field teams and trade partners are strongest. For long-term clients, we occasionally deliver projects in other cities. If you have a location in mind, share the address or region and we can confirm availability.',
    },
    {
      id: 'timing',
      question: 'How early should we involve you in a project?',
      short: 'Involving us during pre-construction helps refine budgets, phasing, and logistics.',
      answer:
        'The earlier the better. When we are involved during pre-construction, we can validate budgets, test phasing scenarios, and flag constructability or logistics issues before major commitments are made. Many clients ask us to support feasibility studies, early pricing, and scheduling long before drawings are final.',
    },
    {
      id: 'design-build',
      question: 'Do you provide design-build services?',
      short: 'Yes, we offer design-build as well as traditional delivery models.',
      answer:
        'Yes. We provide design-build delivery alongside more traditional contracting models. We can partner with your existing architects and engineers or propose design partners from our network. Together, we focus on aligning design intent, cost, schedule, and constructability from the start.',
    },
    {
      id: 'quote',
      question: 'How do we get a quote?',
      short: 'Share a brief project summary and we will respond with a tailored proposal.',
      answer:
        'The fastest way to get a quote is to share a short project summary using the quote form on the Home or Contact page. Include the location, approximate size, intended use, and any key dates. Our team will follow up with clarifying questions and then prepare a tailored proposal or budget range.',
    },
  ] as const

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = faqs.find((item) => item.id === selectedId) ?? null

  return (
    <main className="bg-concrete text-steel">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:pt-14 animate-fade-up-soft">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">FAQ</p>
          <h1 className="mt-1 text-2xl font-semibold text-brand-900 sm:text-3xl">Frequently asked questions</h1>
          <p className="mt-2 text-sm text-brand-700">
            Quick answers to common questions about how we work. Select a question to see more detail, or reach out to
            our team directly.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.6fr,1.4fr]">
          <div className="space-y-4 text-xs text-brand-800 sm:text-sm">
            {faqs.map((item) => {
              const isActive = item.id === selectedId
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(isActive ? null : item.id)}
                  className={`group w-full rounded-2xl bg-white/95 p-4 text-left shadow-sm ring-1 transition-colors duration-150 ${
                    isActive ? 'ring-brand-500 bg-brand-50/60' : 'ring-brand-100 hover:bg-white'
                  }`}
                >
                  <h2 className="flex items-start justify-between gap-3 text-sm font-semibold text-brand-900 sm:text-base">
                    <span>{item.question}</span>
                    <span
                      className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold transition-colors ${
                        isActive ? 'bg-brand-600 text-white' : 'bg-concrete text-brand-700'
                      }`}
                      aria-hidden="true"
                    >
                      {isActive ? '−' : '+'}
                    </span>
                  </h2>
                  <p className="mt-2 text-[11px] text-brand-700 sm:text-xs">{item.short}</p>
                </button>
              )
            })}
          </div>

          <aside className="space-y-3 rounded-2xl bg-white/95 p-4 text-xs text-brand-800 shadow-sm ring-1 ring-brand-100">
            {selected ? (
              <>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Answer</p>
                <h2 className="mt-1 text-sm font-semibold text-brand-900 sm:text-base">{selected.question}</h2>
                <p className="mt-2 text-[11px] text-brand-700 sm:text-xs">{selected.answer}</p>
              </>
            ) : (
              <>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Still have questions?</p>
                <p className="text-[11px] text-brand-700">
                  Share a brief summary of your project or question and our team will respond with more detail, usually
                  within one business day.
                </p>
                <p className="text-[11px] text-brand-700">
                  You can use the quote form on the Home page or the Contact page if you are ready to discuss a specific
                  opportunity.
                </p>
              </>
            )}
          </aside>
        </div>
      </section>
    </main>
  )
}

export default FAQ
