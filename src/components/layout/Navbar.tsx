import type { FC } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinkBase =
  'text-sm font-medium text-brand-800 transition-colors duration-150 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-concrete'

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-20 border-b border-brand-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          onClick={closeMenu}
        >
          <span className="inline-block h-8 w-8 rounded bg-brand-600" aria-hidden="true" />
          <span className="text-base font-semibold text-brand-900">Skyline Builders</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <NavLink to="/" className={navLinkBase} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={navLinkBase} onClick={closeMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkBase} onClick={closeMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkBase} onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkBase} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-800 hover:bg-concrete focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 rounded bg-brand-800 transition-transform duration-200 ease-in-out-soft ${
                isOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute inset-x-0 top-1.5 h-0.5 rounded bg-brand-800 transition-opacity duration-150 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 rounded bg-brand-800 transition-transform duration-200 ease-in-out-soft ${
                isOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <nav aria-label="Main" className="border-t border-brand-100 bg-white md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
            <li>
              <NavLink
                to="/"
                className={navLinkBase}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={navLinkBase}
                onClick={closeMenu}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={navLinkBase}
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={navLinkBase}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={navLinkBase}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
