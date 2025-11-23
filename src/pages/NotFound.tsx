import type { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-concrete text-steel">
      <section className="px-4 text-center">
        <h1 className="text-5xl font-semibold text-brand-800">404</h1>
        <p className="mt-4 text-base text-brand-700">This page is under construction or does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-transform duration-150 ease-in-out-soft hover:-translate-y-0.5 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-concrete"
        >
          Back to home
        </Link>
      </section>
    </main>
  )
}

export default NotFound
