import type { FC } from 'react'

const Privacy: FC = () => {
  return (
    <main className="bg-concrete text-steel">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:pt-14">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Legal</p>
          <h1 className="mt-1 text-2xl font-semibold text-brand-900 sm:text-3xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-brand-700">
            This policy explains how Skyline Builders handles information shared with us online.
          </p>
        </header>

        <div className="mt-8 space-y-6 text-xs text-brand-800 sm:text-sm">
          <section>
            <h2 className="text-sm font-semibold text-brand-900 sm:text-base">Information you provide</h2>
            <p className="mt-2 text-brand-700">
              When you submit a quote request or contact form, we collect the details you share so that we can respond to
              your enquiry and prepare proposals.
            </p>
          </section>

          <section className="pt-4 border-t border-dashed border-brand-100">
            <h2 className="text-sm font-semibold text-brand-900 sm:text-base">How we use your information</h2>
            <p className="mt-2 text-brand-700">
              We use contact details to respond to you, qualify potential projects, and maintain basic records of past
              enquiries. We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="pt-4 border-t border-dashed border-brand-100">
            <h2 className="text-sm font-semibold text-brand-900 sm:text-base">Sharing with partners</h2>
            <p className="mt-2 text-brand-700">
              For active opportunities, we may share limited project information with design or trade partners where it is
              necessary to develop proposals, always with appropriate discretion.
            </p>
          </section>

          <section className="pt-4 border-t border-dashed border-brand-100">
            <h2 className="text-sm font-semibold text-brand-900 sm:text-base">Retention & contact</h2>
            <p className="mt-2 text-brand-700">
              We retain enquiry information for a reasonable period to track opportunities and relationships. If you would
              like us to update or remove your details, please contact the team using the details on the Contact page.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Privacy
