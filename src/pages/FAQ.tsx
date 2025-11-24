import type { FC } from 'react'

const FAQ: FC = () => {
  const faqs = [
    {
      question: 'What types of projects does Skyline Builders take on?',
      answer:
        'We work across commercial, residential, and light industrial projects—from office interiors and retail fit-outs to ground-up towers and logistics facilities.',
    },
    {
      question: 'Do you only work in one region?',
      answer:
        'Our core focus is the surrounding metropolitan region, but we occasionally take on projects further afield for long-term clients. Get in touch with your location and we can advise.',
    },
    {
      question: 'How early should we involve you in a project?',
      answer:
        'The earlier the better. Involving us during pre-construction helps refine budgets, phasing, and logistics before major commitments are made.',
    },
    {
      question: 'Do you provide design-build services?',
      answer:
        'Yes. We offer design-build delivery as well as traditional contracting models. We can work with your existing design team or propose partners from our network.',
    },
    {
      question: 'How do we get a quote?',
      answer:
        'Share a brief project summary using the quote form on the Home or Contact page. We will follow up with any clarifying questions and a tailored proposal.',
    },
  ] as const

  return (
    <main className="bg-concrete text-steel">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:pt-14">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">FAQ</p>
          <h1 className="mt-1 text-2xl font-semibold text-brand-900 sm:text-3xl">Frequently asked questions</h1>
          <p className="mt-2 text-sm text-brand-700">
            Quick answers to common questions about how we work. If you do not see your question here, our team is happy
            to help directly.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.6fr,1.4fr]">
          <div className="space-y-4 text-xs text-brand-800 sm:text-sm">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl bg-white/95 p-4 shadow-sm ring-1 ring-brand-100"
              >
                <h2 className="text-sm font-semibold text-brand-900 sm:text-base">{item.question}</h2>
                <p className="mt-2 text-brand-700">{item.answer}</p>
              </article>
            ))}
          </div>

          <aside className="space-y-3 rounded-2xl bg-white/95 p-4 text-xs text-brand-800 shadow-sm ring-1 ring-brand-100">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Still have questions?</p>
            <p className="text-[11px] text-brand-700">
              Share a brief summary of your project or question and our team will respond with more detail, usually within
              one business day.
            </p>
            <p className="text-[11px] text-brand-700">
              You can use the quote form on the Home page or the Contact page if you are ready to discuss a specific
              opportunity.
            </p>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default FAQ
