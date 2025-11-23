export type ProjectCategory = 'Commercial' | 'Residential' | 'Industrial'

export interface Project {
  id: string
  name: string
  category: ProjectCategory
  location: string
  summary: string
  storeys: number
  areaSqFt: number
  durationMonths: number
}

export const projects: Project[] = [
  {
    id: 'downtown-skyline-tower',
    name: 'Downtown Skyline Tower',
    category: 'Commercial',
    location: 'Central Business District',
    summary: '42-story mixed-use tower with phased delivery for anchor tenants.',
    storeys: 42,
    areaSqFt: 650_000,
    durationMonths: 30,
  },
  {
    id: 'harbor-logistics-hub',
    name: 'Harbor Logistics Hub',
    category: 'Industrial',
    location: 'Port District',
    summary: 'High-bay distribution center with automated loading and yard space.',
    storeys: 3,
    areaSqFt: 420_000,
    durationMonths: 20,
  },
  {
    id: 'park-terrace-residences',
    name: 'Park Terrace Residences',
    category: 'Residential',
    location: 'Riverside District',
    summary: 'Amenity-rich mid-rise residential community overlooking the river.',
    storeys: 18,
    areaSqFt: 210_000,
    durationMonths: 22,
  },
  {
    id: 'innovation-campus-phase-ii',
    name: 'Innovation Campus · Phase II',
    category: 'Commercial',
    location: 'Innovation Corridor',
    summary: 'Flexible lab and office space for fast-growing technology tenants.',
    storeys: 12,
    areaSqFt: 310_000,
    durationMonths: 26,
  },
  {
    id: 'hillside-villas',
    name: 'Hillside Villas Collection',
    category: 'Residential',
    location: 'Hillside District',
    summary: 'Terraced townhomes with tiered landscaping and shared courtyards.',
    storeys: 4,
    areaSqFt: 95_000,
    durationMonths: 18,
  },
  {
    id: 'north-terminal-expansion',
    name: 'North Terminal Expansion',
    category: 'Industrial',
    location: 'Airport Zone',
    summary: 'Air cargo terminal expansion with integrated customs and security.',
    storeys: 5,
    areaSqFt: 380_000,
    durationMonths: 28,
  },
]
