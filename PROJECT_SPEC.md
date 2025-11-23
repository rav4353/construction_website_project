# Construction Marketing Site – Project Specification

## 1. Project Summary
Create a modern, highly graphical, animated static website for a construction company.

- **Audience**: Decision makers at construction firms, architects, property owners.
- **Positioning**: Premium, B2B-focused brand (commercial & residential construction).
- **Tone**: Confident, professional, modern, trustworthy.
- **Visual Style**:
  - Bold hero illustrations (isometric/flat vector construction scenes).
  - Material textures (concrete, steel), subtle gradients.
  - Strong typographic hierarchy and clear CTAs.

The site is static (no CMS) but must be production-ready and cleanly coded.

---

## 2. Tech Stack & Constraints (Required)

- **Framework**: React (functional components, default exports).
- **Language**: TypeScript (strict). Types for page props & core components.
- **Styling**: Tailwind CSS only (no other CSS frameworks).
- **Build Target**: Static site, Vite + React + TypeScript (Vite is preferred).
- **Config**:
  - `tailwind.config.js` with design tokens (colors, spacing, fonts, motion tokens).
  - Minimal PostCSS setup as needed.
- **Accessibility**:
  - Semantic HTML, WCAG AA.
  - Keyboard navigable with visible focus states (Tailwind `ring` usage).
  - `alt` text for all images and icons, ARIA where necessary.
- **Performance**:
  - Primary graphics as SVG illustrations.
  - Lazy-load offscreen images.
  - Keep JS bundle lean; prefer CSS transitions and simple hooks over heavy animation libs.
- **Build Target Requirements**:
  - Must build and run locally via `npm run dev`, `npm run build` (Vite).

---

## 3. Core Pages & UX Requirements

Each page should feel **graphical, animated**, and **premium**.

### 3.1 Home / Landing

- **Hero Section**
  - Large, animated isometric construction site illustration (cranes, buildings, workers).
  - Headline, subhead, and primary CTAs:
    - `Get a Quote`
    - `Our Projects`
  - Optional light parallax on hero illustration (respect `prefers-reduced-motion`).

- **Animated Stats Strip**
  - Animated counters (on scroll/in view):
    - Projects completed
    - Years in business
    - Active crews

- **Services Overview**
  - Service cards:
    - Hover micro-interactions (lift, shadow, icon transition).
    - Icons as SVGs.

- **Featured Projects Carousel**
  - A few highlighted projects.
  - Image + project title + brief summary.
  - Animated reveal on slide change.

- **Footer**
  - Contact details.
  - Quick links.
  - Social icons (SVG) with hover states.

### 3.2 Projects / Portfolio

- **Filterable Gallery**
  - Grid of project cards.
  - Filter chips for project type (e.g., Commercial, Residential, Industrial).
  - Filters animate in/out and visually indicate active state.

- **Project Cards**
  - Thumbnail image.
  - Project type.
  - Short summary.
  - Hover state reveals quick stats + `View details` CTA.

- **Pagination / Loading**
  - Simple pagination or infinite scroll.
  - Animated loading state (skeletons or spinner with brand styling).

### 3.3 Project Detail

- **Hero Gallery**
  - Large project hero image carousel.
  - Lightbox mode optional but preferred.

- **Project Timeline / Phases**
  - Animated steps: Planning → Construction → Finishing.
  - Progress indicators with smooth transitions.

- **Key Metrics**
  - Cards for: budget range, duration, location, key stakeholders.
  - Animated entrance / counters where appropriate.

- **Download CTA**
  - Button to download a PDF or case study summary.

- **SEO / Social**
  - Per-project meta title, description.
  - Open Graph tags with image, title, description.

### 3.4 Services

- **Service Sections**
  - Each service has:
    - Illustration (SVG, vector).
    - Short description.
    - Small motion on scroll/hover (slide-in, icon animation).

- **Service Tiers**
  - Comparison table or accordion (tiers or packages).
  - Animated open/close behavior.

- **Contact CTA**
  - Fixed (desktop) CTA strip on side or bottom: `Discuss Your Project`.
  - Slide-in / reveal animation.

### 3.5 About / Company

- **Company Story**
  - Brief narrative with imagery.

- **Team Section**
  - Illustrated avatars (SVG) for team members.
  - Hover animations (subtle scale/tilt or border change).

- **Values + Timeline**
  - Values grid with icons.
  - Company timeline with animated milestones.

- **Certifications & Awards**
  - Carousel or strip of certification logos/awards.

### 3.6 Contact / Get a Quote

- **Animated Contact Form**
  - Fields appear sequentially (staggered animation on mount or scroll).
  - Inline validation with clear error messages.

- **Map Section**
  - Lightweight SVG map or simple embedded map styling.
  - Reveal on scroll.

- **Floating CTA (Mobile)**
  - Sticky bottom bar with key CTAs:
    - `Call`
    - `Email`
    - `Get a Quote`

### 3.7 404 & Legal Pages

- **404 Page**
  - Friendly illustration related to construction (e.g., “Under Construction” sign).
  - Subtle animation.
  - Link back to Home and key sections.

- **Legal Pages**
  - Privacy Policy.
  - Terms of Service.
  - Static content, structured with headings and lists.

---

## 4. Design & Animation System

- **Illustrations**
  - Prefer inline SVG React components for full control with Tailwind + CSS.
  - Isometric or flat vector style.

- **Micro-animations**
  - Hover lifts: `translate-y-[-4px]`, `scale-105` or similar.
  - Reveal on scroll: opacity + translateY transitions using Intersection Observer.
  - Animated counters for stats.
  - Skeleton loaders for cards & images where helpful.

- **Timing & Easing Tokens**
  - Durations:
    - 150ms (micro-interactions)
    - 300ms (default transitions)
    - 500ms (card reveals)
    - 800ms (hero / complex intro)
  - Easing:
    - `cubic-bezier(0.22, 1, 0.36, 1)` for entrances.
    - Linear for rotations or continuous animations.

- **Motion Preferences**
  - Respect `prefers-reduced-motion`:
    - Disable auto-moving animations (e.g., parallax, continuous loops).
    - Use simple fades instead of large movement.

- **Animation Libraries**
  - Prefer CSS transitions and simple JS.
  - If a complex timeline is necessary, allow optional **Framer Motion** with clear rationale and minimal usage.

---

## 5. UX & Accessibility

- **Keyboard Navigation**
  - All interactive elements must be reachable via keyboard.
  - Visible focus styles using Tailwind `ring` utilities.

- **Semantics & ARIA**
  - Use semantic HTML5 landmarks (`header`, `main`, `footer`, `nav`, etc.).
  - ARIA attributes only when semantic elements aren’t sufficient.

- **Color Contrast**
  - Minimum AA contrast: 4.5:1 for body text.

- **Skip Links**
  - `Skip to content` link visible on focus.

---

## 6. SEO & Metadata

- Per-page metadata:
  - `<title>` and `<meta name="description">`.
  - Open Graph tags: `og:title`, `og:description`, `og:image`, `og:type`, `og:url`.
- Project detail pages:
  - Specific OG image, title, and description.
- Bonus:
  - JSON-LD structured data for a local construction business (schema.org).

---

## 7. Assets & Placeholders

**Required Assets & Suggested Formats**

- **Hero Illustrations**
  - Isometric construction site.
  - Format: SVG as inline React components.

- **Service Icons**
  - Construction-related SVG icons (e.g., crane, blueprint, helmet, toolbox).

- **Project Photos**
  - Format: JPG/WEBP.
  - Aspect ratios:
    - Hero: 16:9.
    - Gallery: 4:3.

- **Company Logo**
  - SVG (monochrome + full-color variants).

- **Team Avatars**
  - Illustrated SVG avatars (simple flat style).

- **Example Placeholder Filenames**
  - `assets/svg/hero-construction-site.svg`
  - `assets/svg/icon-crane.svg`
  - `assets/svg/icon-blueprint.svg`
  - `assets/svg/icon-helmet.svg`
  - `assets/images/project-highrise-01.webp` (16:9)
  - `assets/images/project-residential-01.webp` (4:3)
  - `assets/images/project-industrial-01.webp` (4:3)

---

## 8. Layout & Responsive Behavior

- **Desktop (≥1280px)**
  - Multi-column sections.
  - Hero: text and CTAs one side, large illustration on the other.

- **Tablet (768–1279px)**
  - Stack hero content; illustration above or below text.
  - Slightly reduced motion, simpler grid.

- **Mobile (<768px)**
  - Single-column layout.
  - Sticky bottom CTA bar where applicable.
  - Simplified hero (fewer decorative elements hidden).

Use Tailwind breakpoints and utility classes for all responsive behavior.

---

## 9. Code Structure & Naming

**Suggested File Structure**

```text
src/
  pages/
    Home.tsx
    Projects.tsx
    ProjectDetail.tsx
    Services.tsx
    About.tsx
    Contact.tsx
  components/
    Hero/
    Navbar/
    Footer/
    Card/
    Modal/
    Timeline/
    AnimatedCounter/
  assets/
    svg/
    images/
  data/
    projects.ts
    services.ts
    team.ts
  types/
    index.d.ts
  utils/
    useInView.ts
    format.ts
  App.tsx
  main.tsx
```

- **Components**
  - Small, typed, with JSDoc where useful.
  - Reusable pieces for hero, CTAs, cards, modals, counters, timelines.
- **Types** (`types/index.d.ts` or `types/*.ts`)
  - `Project`, `Service`, `TeamMember`, `Metric`, etc.
- **Data** (`data/*`)
  - Example data arrays for projects, services, team.

---

## 10. Performance & Testing

- **Performance**
  - Target Lighthouse mobile score: **> 90** for performance & accessibility.
  - Lazy-load images and use responsive images (`srcset`/`<picture>` as appropriate).
- **Testing**
  - Use Jest + React Testing Library.
  - Unit tests for at least:
    - `Hero` component.
    - `ProjectCard` component.
    - Contact form validation logic.

---

## 11. Acceptance Criteria

- Site installs and runs locally with:
  - `npm install`
  - `npm run dev`
  - `npm run build`
- All core pages implemented with responsive layouts and required animations.
- SEO meta tags present and configured, especially for project detail pages.
- Accessibility:
  - Keyboard navigation works across all interactive elements.
  - Color contrast meets AA.
  - All images/icons have meaningful `alt` text.
- README present with setup, build instructions, and notes on architecture + animation.
- Assets and sample data included; pages show realistic sample content.
- Figma frames or high-fidelity PNG mockups available for each core page.

---

## 12. Bonus / Nice-to-have

- Dark mode toggle (Tailwind class-based strategy).
- Light parallax effect on hero illustration.
- Animated progress bars on Project Detail (budget/time completion).
- JSON-LD structured data for local business.

---

## 13. Sample Placeholder Copy

These are short, realistic placeholder lines for key sections.

- **Home Hero**
  - Headline: `Building Landmarks That Last.`
  - Subhead: `From high-rise towers to modern residences, we deliver end-to-end construction for visionary clients.`
  - CTAs: `Get a Quote`, `View Our Projects`.

- **Services Intro**
  - Headline: `Services for Every Stage of Your Build.`
  - Subhead: `Integrated planning, design, and construction services tailored to complex projects.`

- **Projects Intro**
  - Headline: `Proven Results in Every Sector.`
  - Subhead: `Explore recent projects in commercial, residential, and industrial construction.`

- **About Intro**
  - Headline: `Engineering Confidence Since 2008.`
  - Subhead: `Our multidisciplinary team brings rigor, safety, and craft to every site.`

- **Contact Intro**
  - Headline: `Tell Us About Your Next Project.`
  - Subhead: `Share a few details and we’ll respond with a tailored proposal.`
  - CTA: `Request a Proposal`.

---

## 14. Copy Snippet for Windsurf

Copy-paste this block as a concise project description:

```text
Create a static marketing website for a construction company built with React + TypeScript + Tailwind.
The site should be a modern, highly graphical, animated, and accessible B2B experience with:
- Vite + React + TypeScript + Tailwind stack (strict typing, WCAG AA, SEO-ready).
- SVG-based hero illustrations, micro-animations, and performance-conscious design.
- Core pages: Home, Projects (list + detail), Services, About, Contact, 404, Legal.
- Reusable components (Hero, Navbar, Footer, Cards, Timeline, AnimatedCounter) and typed data models.
- Static export-ready build with sample data, tests, and responsive layouts for desktop, tablet, and mobile.
```
