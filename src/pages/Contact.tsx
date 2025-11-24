import type { FC } from 'react'
import QuoteForm from '../components/contact/QuoteForm'

const Contact: FC = () => {
  return (
    <main className="bg-concrete text-steel">
      {/* Mobile floating CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-brand-100 bg-white/95 px-4 py-2 text-xs text-brand-800 shadow-[0_-4px_12px_rgba(15,23,42,0.08)] sm:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="font-semibold text-brand-900">Talk to our team</span>
            <span className="text-[11px] text-brand-600">Call or email, or submit the form above.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <a
              href="tel:+11234567890"
              className="inline-flex items-center justify-center rounded-md bg-brand-600 px-2 py-1 text-[11px] font-semibold text-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Call
            </a>
            <a
              href="mailto:hello@skylinebuilders.com"
              className="inline-flex items-center justify-center rounded-md bg-concrete px-2 py-1 text-[11px] font-semibold text-brand-800 ring-1 ring-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:pt-14 animate-fade-up-soft">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Contact</p>
          <h1 className="mt-1 text-2xl font-semibold text-brand-900 sm:text-3xl">Tell us about your next project</h1>
          <p className="mt-2 text-sm text-brand-700">
            Share a few details and we&apos;ll respond with a tailored proposal, usually within one business day.
          </p>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr,1.4fr]">
          {/* Animated form */}
          <section aria-label="Project details form">
            <QuoteForm />
          </section>

          {/* Location map */}
          <aside aria-label="Office location" className="space-y-4 text-xs text-brand-800">
            <div className="rounded-2xl bg-white/95 p-4 shadow-sm ring-1 ring-brand-100">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Office</p>
              <p className="mt-1 text-sm font-semibold text-brand-900">Skyline Builders</p>
              <p className="mt-1 text-[11px] text-brand-700">
                1200 Skyline Way
                <br />
                Business District
                <br />
                City, State ZIP
              </p>
              <p className="mt-2 text-[11px] text-brand-700">
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:hello@skylinebuilders.com"
                  className="text-brand-700 underline-offset-4 hover:text-brand-900 hover:underline"
                >
                  hello@skylinebuilders.com
                </a>
                <br />
                <span className="font-semibold">Phone:</span>{' '}
                <a
                  href="tel:+11234567890"
                  className="text-brand-700 underline-offset-4 hover:text-brand-900 hover:underline"
                >
                  +1 (123) 456-7890
                </a>
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white/95 p-3 shadow-sm ring-1 ring-brand-100">
              <p className="px-1 text-[11px] font-semibold uppercase tracking-wide text-brand-600">Location map</p>
              <div className="mt-2 overflow-hidden rounded-xl bg-concrete">
                <iframe
                  title="Skyline Builders office on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509401!2d144.95592831531687!3d-37.81720997975183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSkyline%20Builders!5e0!3m2!1sen!2s!4v0000000000000"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full border-0"
                />
              </div>
              <p className="mt-2 px-1 text-[11px] text-brand-700">
                Five minutes from the central transit hub with on-site visitor parking.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Contact
