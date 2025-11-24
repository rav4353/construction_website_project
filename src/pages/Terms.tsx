import type { FC } from 'react'

const Terms: FC = () => {
  return (
    <main className="bg-concrete text-steel">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:pt-14">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Legal</p>
          <h1 className="mt-1 text-2xl font-semibold text-brand-900 sm:text-3xl">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm text-brand-700">
            These terms outline how Skyline Builders works with clients, partners, and visitors to this site.
          </p>
        </header>

        <div className="mt-8 space-y-6 text-xs text-brand-800 sm:text-sm">
          <section>
            <h2 className="text-sm font-semibold text-brand-900 sm:text-base">Use of this website</h2>
            <p className="mt-2 text-brand-700">
              Information on this site is provided for general guidance only. Project examples, imagery, and descriptions
              are illustrative and may not reflect current conditions or availability.
            </p>
          </section>

          <section className="pt-4 border-t border-dashed border-brand-100">
            <h2 className="text-sm font-semibold text-brand-900 sm:text-base">No professional advice</h2>
            <p className="mt-2 text-brand-700">
              Content on this site does not constitute engineering, architectural, legal, or financial advice. Decisions
              about specific projects should always be made in consultation with qualified professionals and a formal
              contract.
            </p>
          </section>

          <section className="pt-4 border-t border-dashed border-brand-100">
            <h2 className="text-sm font-semibold text-brand-900 sm:text-base">Proposals and contracts</h2>
            <p className="mt-2 text-brand-700">
              Any proposal, fee, or schedule discussed through this site is indicative only until documented in a signed
              agreement between Skyline Builders and the client. If there is a conflict between this site and a contract,
              the contract governs.
            </p>
          </section>

          <section className="pt-4 border-t border-dashed border-brand-100">
            <h2 className="text-sm font-semibold text-brand-900 sm:text-base">Liability</h2>
            <p className="mt-2 text-brand-700">
              To the fullest extent permitted by law, Skyline Builders is not liable for any loss arising from reliance on
              information on this site. Your use of the site is at your own discretion and risk.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Terms
