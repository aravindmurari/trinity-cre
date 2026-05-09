export interface Insight {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export const insights: Insight[] = [
  {
    slug: 'atlanta-industrial-market-q2-2026',
    title: 'Atlanta Industrial Market Q2 2026 Overview',
    excerpt:
      "Vacancy rates in Atlanta's industrial sector held at 4.8% through Q1 2026 despite record new supply coming online. Here's what tenants and investors should watch heading into the second half of the year.",
    date: 'May 5, 2026',
    readTime: '4 min read',
    category: 'Market Report',
  },
  {
    slug: 'what-tenants-should-know-atlanta-industrial-supply',
    title: "What Industrial Tenants Should Know About Atlanta's Supply Pipeline",
    excerpt:
      'Over 18 million square feet of industrial space is under construction in the Atlanta metro. For tenants, that means more options -- but also more complexity in evaluating which projects will actually deliver on time.',
    date: 'April 22, 2026',
    readTime: '5 min read',
    category: 'Tenant Insights',
  },
]
