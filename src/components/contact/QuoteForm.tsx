import type { FC, FormEvent } from 'react'
import { useEffect, useRef, useState } from 'react'

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

const QuoteForm: FC = () => {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)
  const timelineInputRef = useRef<HTMLInputElement | null>(null)

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

  const openTimelinePicker = () => {
    const input = timelineInputRef.current
    if (!input) return
    // Focus first for accessibility
    input.focus()
    // Use showPicker when supported so clicking anywhere in the field opens the calendar
    if (typeof (input as HTMLInputElement & { showPicker?: () => void }).showPicker === 'function') {
      ;(input as HTMLInputElement & { showPicker?: () => void }).showPicker()
    }
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

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white/95 p-5 text-sm text-brand-800 shadow-sm ring-1 ring-emerald-500/40">
        <p className="text-sm font-semibold text-emerald-700">Thank you. Your quote request has been received.</p>
        <p className="mt-2 text-xs text-brand-700">
          Our team will review your project details and follow up with a tailored quote within one business day.
        </p>
      </div>
    )
  }

  return (
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
          <label htmlFor="company" className="block text-[11px] font-semibold uppercase tracking-wide text-brand-600">
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
          <div className="relative mt-1">
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={(event) => handleChange('projectType', event.target.value)}
              onBlur={() => handleBlur('projectType')}
              className="w-full appearance-none rounded-md border border-brand-200 bg-white px-3 pr-8 py-2 text-xs text-brand-900 shadow-sm outline-none transition ring-brand-500 focus:border-brand-400 focus:ring-2"
            >
              <option value="">Select an option</option>
              <option value="commercial">Commercial / workplace</option>
              <option value="residential">Residential</option>
              <option value="industrial">Industrial / logistics</option>
              <option value="mixed">Mixed-use / campus</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-xs text-brand-600">
              ▼
            </span>
          </div>
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
          <label htmlFor="budget" className="block text-[11px] font-semibold uppercase tracking-wide text-brand-600">
            Budget range (optional)
          </label>
          <div className="relative mt-1">
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={(event) => handleChange('budget', event.target.value)}
              onBlur={() => handleBlur('budget')}
              className="w-full appearance-none rounded-md border border-brand-200 bg-white px-3 pr-8 py-2 text-xs text-brand-900 shadow-sm outline-none transition ring-brand-500 focus:border-brand-400 focus:ring-2"
            >
              <option value="">Select a range</option>
              <option value="under-10m">Under $10M</option>
              <option value="10-50m">$10M – $50M</option>
              <option value="50-100m">$50M – $100M</option>
              <option value="100m-plus">$100M+</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-xs text-brand-600">
              ▼
            </span>
          </div>
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={openTimelinePicker}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              openTimelinePicker()
            }
          }}
        >
          <label htmlFor="timeline" className="block text-[11px] font-semibold uppercase tracking-wide text-brand-600">
            Ideal start date / timeline (optional)
          </label>
          <input
            id="timeline"
            name="timeline"
            type="date"
            ref={timelineInputRef}
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
        <label htmlFor="message" className="block text-[11px] font-semibold uppercase tracking-wide text-brand-600">
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
  )
}

export default QuoteForm
