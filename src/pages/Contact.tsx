import type { FC, FormEvent } from 'react'
import { useEffect, useState } from 'react'

interface FormState {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
}

const Contact: FC = () => {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setMounted(true)
      return
    }
    const timeout = window.setTimeout(() => setMounted(true), 50)
    return () => window.clearTimeout(timeout)
  }, [])

  const validate = (state: FormState): FormErrors => {
    const nextErrors: FormErrors = {}
    if (!state.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!state.email.trim()) {
      nextErrors.email = 'Please enter an email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      nextErrors.email = 'Please enter a valid email.'
    }
    if (!state.projectType.trim()) nextErrors.projectType = 'Tell us what type of project this is.'
    if (!state.message.trim()) nextErrors.message = 'Share a few details about your project.'
    return nextErrors
  }

  const handleChange = (field: keyof FormState, value: string) => {
    const next = { ...form, [field]: value }
    setForm(next)
    if (touched[field]) {
      setErrors(validate(next))
    }
  }

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors(validate(form))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const validation = validate(form)
    setErrors(validation)
    setTouched({
      name: true,
      email: true,
      company: true,
      projectType: true,
      budget: true,
      timeline: true,
      message: true,
    })
    if (Object.keys(validation).length === 0) {
      setSubmitted(true)
    }
  }

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

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:pt-14">
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
            {submitted ? (
              <div className="rounded-2xl bg-white/95 p-5 text-sm text-brand-800 shadow-sm ring-1 ring-emerald-500/40">
                <p className="text-sm font-semibold text-emerald-700">Thank you. Your details have been received.</p>
                <p className="mt-2 text-xs text-brand-700">
                  A member of the Skyline Builders team will review your project and get in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid gap-4 rounded-2xl bg-white/95 p-5 text-xs text-brand-800 shadow-sm ring-1 ring-brand-100"
              >
                <div
                  className={`grid gap-4 sm:grid-cols-2 transition-opacity duration-500 ease-in-out-soft ${
                    mounted ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-semibold uppercase tracking-wide text-brand-600">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(event) => handleChange('name', event.target.value)}
                      onBlur={() => handleBlur('name')}
                      className="mt-1 w-full rounded-md border border-brand-200 bg-white px-3 py-2 text-xs text-brand-900 shadow-sm outline-none transition ring-brand-500 focus:border-brand-400 focus:ring-2"
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1 text-[11px] text-rose-600" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-semibold uppercase tracking-wide text-brand-600">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(event) => handleChange('email', event.target.value)}
                      onBlur={() => handleBlur('email')}
                      className="mt-1 w-full rounded-md border border-brand-200 bg-white px-3 py-2 text-xs text-brand-900 shadow-sm outline-none transition ring-brand-500 focus:border-brand-400 focus:ring-2"
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 text-[11px] text-rose-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`grid gap-4 sm:grid-cols-2 transition-opacity duration-500 ease-in-out-soft ${
                    mounted ? 'opacity-100 delay-150' : 'opacity-0'
                  }`}
                >
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-[11px] font-semibold uppercase tracking-wide text-brand-600"
                    >
                      Company (optional)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={(event) => handleChange('company', event.target.value)}
                      onBlur={() => handleBlur('company')}
                      className="mt-1 w-full rounded-md border border-brand-200 bg-white px-3 py-2 text-xs text-brand-900 shadow-sm outline-none transition ring-brand-500 focus:border-brand-400 focus:ring-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-[11px] font-semibold uppercase tracking-wide text-brand-600"
                    >
                      Project type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={(event) => handleChange('projectType', event.target.value)}
                      onBlur={() => handleBlur('projectType')}
                      className="mt-1 w-full rounded-md border border-brand-200 bg-white px-3 py-2 text-xs text-brand-900 shadow-sm outline-none transition ring-brand-500 focus:border-brand-400 focus:ring-2"
                    >
                      <option value="">Select an option</option>
                      <option value="commercial">Commercial / workplace</option>
                      <option value="residential">Residential</option>
                      <option value="industrial">Industrial / logistics</option>
                      <option value="mixed">Mixed-use / campus</option>
                    </select>
                    {touched.projectType && errors.projectType && (
                      <p className="mt-1 text-[11px] text-rose-600" role="alert">
                        {errors.projectType}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`grid gap-4 sm:grid-cols-2 transition-opacity duration-500 ease-in-out-soft ${
                    mounted ? 'opacity-100 delay-300' : 'opacity-0'
                  }`}
                >
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-[11px] font-semibold uppercase tracking-wide text-brand-600"
                    >
                      Budget range (optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={(event) => handleChange('budget', event.target.value)}
                      onBlur={() => handleBlur('budget')}
                      className="mt-1 w-full rounded-md border border-brand-200 bg-white px-3 py-2 text-xs text-brand-900 shadow-sm outline-none transition ring-brand-500 focus:border-brand-400 focus:ring-2"
                    >
                      <option value="">Select a range</option>
                      <option value="under-10m">Under $10M</option>
                      <option value="10-50m">$10M – $50M</option>
                      <option value="50-100m">$50M – $100M</option>
                      <option value="100m-plus">$100M+</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-[11px] font-semibold uppercase tracking-wide text-brand-600"
                    >
                      Ideal start date / timeline (optional)
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      placeholder="e.g. Q1 next year, ASAP, flexible"
                      value={form.timeline}
                      onChange={(event) => handleChange('timeline', event.target.value)}
                      onBlur={() => handleBlur('timeline')}
                      className="mt-1 w-full rounded-md border border-brand-200 bg-white px-3 py-2 text-xs text-brand-900 shadow-sm outline-none transition ring-brand-500 focus:border-brand-400 focus:ring-2"
                    />
                  </div>
                </div>

                <div
                  className={`transition-opacity duration-500 ease-in-out-soft ${
                    mounted ? 'opacity-100 delay-500' : 'opacity-0'
                  }`}
                >
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-semibold uppercase tracking-wide text-brand-600"
                  >
                    Project summary
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(event) => handleChange('message', event.target.value)}
                    onBlur={() => handleBlur('message')}
                    className="mt-1 w-full resize-y rounded-md border border-brand-200 bg-white px-3 py-2 text-xs text-brand-900 shadow-sm outline-none transition ring-brand-500 focus:border-brand-400 focus:ring-2"
                    placeholder="Location, approximate size, intended use, and any critical dates."
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1 text-[11px] text-rose-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 text-[11px] text-brand-600">
                  <p>We&apos;ll never share your details with third parties.</p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-transform duration-150 ease-in-out-soft hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Submit request
                  </button>
                </div>
              </form>
            )}
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
