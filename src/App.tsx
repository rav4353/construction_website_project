import type { FC, PropsWithChildren } from 'react'
import { HashRouter, Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'
import PreConstructionPlanning from './pages/PreConstructionPlanning'
import GeneralContracting from './pages/GeneralContracting'
import DesignBuildDelivery from './pages/DesignBuildDelivery'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-concrete text-steel">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-brand-800 focus:shadow"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <footer className="border-t border-brand-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-brand-700 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-brand-900">Skyline Builders</p>
            <p className="mt-1 text-xs text-brand-600">Premium commercial & residential construction.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@skylinebuilders.com"
              className="hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Contact
            </a>
            <Link
              to="/faq"
              className="hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              FAQ
            </Link>
            <Link
              to="/privacy"
              className="hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const App: FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/pre-construction-planning" element={<PreConstructionPlanning />} />
          <Route path="/services/general-contracting" element={<GeneralContracting />} />
          <Route path="/services/design-build-delivery" element={<DesignBuildDelivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
