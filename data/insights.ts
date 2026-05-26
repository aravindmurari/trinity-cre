export type InsightBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string }

export interface Insight {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  body: InsightBlock[]
}

export const insights: Insight[] = [
  {
    slug: 'atlanta-industrial-market-q2-2026',
    title: 'Atlanta Industrial Market Q2 2026 Overview',
    excerpt: "Vacancy rates in Atlanta's industrial sector held at 4.8% through Q1 2026 despite record new supply coming online. Here's what tenants and investors should watch heading into the second half of the year.",
    date: 'May 5, 2026',
    readTime: '4 min read',
    category: 'Market Reports',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
    body: [
      { type: 'p', text: "Atlanta's industrial market entered 2026 in a position most major metros would envy: vacancy sitting at 4.8%, asking rents up 6% year-over-year, and absorption that continues to outpace new deliveries in the core submarkets. That headline number, though, tells only part of the story." },
      { type: 'h2', text: 'Supply Is Real -- But So Is Demand' },
      { type: 'p', text: "Over 18 million square feet of industrial product is currently under construction across the Greater Atlanta metro. That is a significant number, and it has some tenants and investors wondering whether the market is getting ahead of itself. In my view, it is not -- at least not yet. Atlanta's population continues to grow at roughly twice the national average, and the logistics demand that comes with serving a metro of 6.2 million people does not disappear. The new supply being delivered in 2026 is largely pre-leased or positioned in submarkets with demonstrated demand." },
      { type: 'h2', text: 'Where Vacancy Is Tightest' },
      { type: 'p', text: "The South Atlanta airport submarket remains the tightest in the metro, with vacancy below 3%. Proximity to Hartsfield-Jackson -- the world's busiest cargo airport -- keeps demand structurally elevated here. The I-85 Northeast corridor (Gwinnett, Hall, Barrow counties) runs close behind, particularly for mid-bay product in the 50,000-150,000 SF range, which continues to see the most tenant competition." },
      { type: 'h2', text: 'What to Watch in Q2 and Q3' },
      { type: 'ul', items: [
        'Spec deliveries in the I-20 West corridor, where several large projects are tracking for Q3 completion',
        'Asking rent movement in the I-75 North submarket, which has absorbed recent new supply better than expected',
        'Net absorption data -- if it stays positive through mid-year, the market has a genuine cushion against oversupply',
        'Activity from port-driven tenants rerouting distribution through Atlanta as Savannah volumes continue rising',
      ]},
      { type: 'p', text: "The Atlanta industrial market is not without risk -- no market is. But the fundamentals that have driven this cycle remain intact. If you are a tenant evaluating space, the best opportunities right now are in the new deliveries where landlords are still negotiating aggressively to get to stabilization. If you are an investor, the cap rate environment has settled into a range that reflects the real cost of debt -- which creates opportunity for buyers who have been sitting on the sidelines." },
      { type: 'quote', text: "Atlanta keeps earning its place at the top of the Sun Belt industrial rankings -- not because of hype, but because the logistics math here simply works." },
    ],
  },
  {
    slug: 'what-tenants-should-know-atlanta-industrial-supply',
    title: "What Industrial Tenants Should Know About Atlanta's Supply Pipeline",
    excerpt: 'Over 18 million square feet of industrial space is under construction in the Atlanta metro. For tenants, that means more options -- but also more complexity in evaluating which projects will actually deliver on time.',
    date: 'April 22, 2026',
    readTime: '5 min read',
    category: 'Tenant Resources',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
    body: [
      { type: 'p', text: "If you are a business evaluating industrial space in Atlanta right now, you have more options on paper than you did two years ago. But more options does not always mean an easier decision -- and the current supply pipeline has a few traps that tenants should understand before they start touring." },
      { type: 'h2', text: 'Not All Square Footage Is Equal' },
      { type: 'p', text: "The 18 million square feet under construction ranges dramatically in quality, location, and delivery certainty. Some projects are shovel-ready and on schedule. Others are dealing with supply chain delays, financing challenges, or permitting issues that could push delivery 6-12 months. A tenant who signs a lease expecting to move in Q3 and gets a Q1 building can find themselves in a serious operational bind." },
      { type: 'p', text: "The other variable is location. Large numbers of new deliveries are happening in outer submarkets -- Barrow County, Douglas County, Butts County -- where land is cheaper and zoning is available. If your business serves the Atlanta metro, ask hard questions about whether a 45-mile drive to the urban core works for your drivers, your customers, and your operating model." },
      { type: 'h2', text: 'Know What Is and Is Not Included' },
      { type: 'p', text: "With speculative buildings, landlords often build to a standard spec and expect tenants to customize on their own dime. Clear height, dock doors per square foot, power, HVAC coverage, and truck court dimensions all vary by project and can meaningfully affect your operating costs and efficiency. Understand exactly what you are getting before you compare options." },
      { type: 'h2', text: 'Practical Advice for Tenants Right Now' },
      { type: 'ul', items: [
        'Start your search 9-12 months before your target move-in date, not 3-4 months',
        "Ask for the developer's construction timeline and what milestones trigger the certificate of occupancy",
        'Compare total occupancy cost, not just base rent -- operating expenses in newer buildings are often lower',
        'Negotiate free rent or tenant improvement allowances to offset your buildout costs',
        'Evaluate at least one existing building alongside new construction -- move-in-ready space has real value in a tight market',
      ]},
      { type: 'p', text: "The tenants who get the best outcomes in this market are not the ones who wait for the perfect space to appear. They are the ones who engage early, define their requirements clearly, and are willing to move at the right moment. The pipeline is full, but the best opportunities still go quickly." },
    ],
  },
  {
    slug: 'case-for-atlanta-industrial-investors-2026',
    title: 'The Case for Atlanta Industrial: Why Investors Are Doubling Down',
    excerpt: 'Population growth, a diversified economy, and Southeast port connectivity make Greater Atlanta one of the most compelling industrial investment markets in the Sun Belt. Here is what the numbers say.',
    date: 'April 10, 2026',
    readTime: '6 min read',
    category: 'Investor Guides',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    body: [
      { type: 'p', text: "Every year, institutional capital publishes its shortlist of industrial markets for the year ahead. Atlanta has appeared on virtually every list for the past six years. At this point, the question is not whether Atlanta industrial is a good investment -- it clearly is. The better question is: what makes it durable, and where specifically does the opportunity sit in 2026?" },
      { type: 'h2', text: 'The Structural Case' },
      { type: 'p', text: "Atlanta sits at the intersection of every major Southeast logistics artery. I-75, I-85, I-20, and I-285 create a distribution network that reaches 80% of the US population within a two-day truck drive. The Port of Savannah -- just 250 miles away -- is the fastest-growing container port on the East Coast, and a large share of that cargo flows through Atlanta's warehouse network. Hartsfield-Jackson handles more cargo than any other Southeast airport. These are not temporary advantages. They are geographic and infrastructure facts that take decades to replicate." },
      { type: 'p', text: "Layer on top of that a metro population that has grown by over 800,000 people in the past decade, a diversified economy spanning financial services, film, tech, manufacturing, and healthcare -- and a regulatory environment that does not actively fight development. You have a market that earns its capital flows." },
      { type: 'h2', text: 'Where the Opportunity Sits in 2026' },
      { type: 'ul', items: [
        'Infill industrial inside the 285 loop: scarce supply, durable rent growth, lowest vacancy in the metro',
        'Mid-bay product (30,000-100,000 SF): most tenant demand, least new supply, strongest leasing velocity',
        'Value-add: 1990s-era functional buildings in established submarkets where rent growth justifies modest capital',
        'Sale-leaseback: owner-occupants who bought cheap a decade ago and would benefit from unlocking equity while staying in place',
      ]},
      { type: 'h2', text: 'What Investors Are Getting Wrong' },
      { type: 'p', text: "The biggest mistake I see investors make right now is chasing trophy assets at compressed cap rates in outer submarkets -- paying for location premiums where tenant demand is genuinely thinner. The institutional appetite for large new product has pushed pricing in some areas to levels that do not underwrite with today's debt costs. Mid-market product with solid fundamentals, bought with a rational business plan, still works. Overpaying for brand-new 500,000 SF boxes in far-flung counties because they look good in a pitch deck does not." },
      { type: 'p', text: "Atlanta industrial is a good long-term hold regardless of where we are in the cycle. But like any market, the return you get depends more on how you buy than what you buy." },
    ],
  },
  {
    slug: 'ecommerce-reshaping-southeast-industrial',
    title: 'How E-Commerce Growth Is Reshaping Southeast Industrial Demand',
    excerpt: 'Last-mile logistics, same-day delivery expectations, and reverse logistics are all compressing the supply chain -- and driving outsized demand for Atlanta industrial assets within 30 miles of the urban core.',
    date: 'March 28, 2026',
    readTime: '5 min read',
    category: 'Industry Commentary',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1200&q=80',
    body: [
      { type: 'p', text: "E-commerce has been the dominant story in industrial real estate for a decade. But the nature of that story is changing. The first wave was about scale -- massive fulfillment centers, million-square-foot boxes on cheap land. The current wave is about proximity. Same-day delivery expectations have pushed logistics operators to rethink where they locate, and that shift is showing up in Atlanta's industrial market in ways that matter to both tenants and investors." },
      { type: 'h2', text: 'The Last-Mile Problem' },
      { type: 'p', text: "Getting a package to your front door in under 24 hours -- or under 4 hours for some retailers -- requires a fundamentally different supply chain than traditional retail replenishment. It requires nodes inside the metro, close to population density, capable of sortation and rapid outbound routing. In Atlanta, that means infill industrial product within the 285 loop and in the I-85 corridor through Gwinnett -- not the far-exurban product that made sense when overnight was the standard." },
      { type: 'p', text: "This is driving a structural premium for well-located infill industrial that is unlikely to reverse. You simply cannot build last-mile logistics facilities in many Atlanta neighborhoods -- the land is not available, the zoning is not there, and the neighbors will fight it. What exists is scarce, and scarcity drives rent." },
      { type: 'h2', text: 'Reverse Logistics: The Underrated Driver' },
      { type: 'p', text: "One aspect of e-commerce demand that gets less attention is returns. E-commerce return rates run 20-30%, compared to 8-10% for brick-and-mortar. Every returned item has to be received, inspected, sorted, and either restocked, liquidated, or destroyed. That process requires dedicated space, and Atlanta has become a growing hub for reverse logistics operations serving the Southeast." },
      { type: 'h2', text: 'What This Means for Tenants and Owners' },
      { type: 'ul', items: [
        'If you need last-mile coverage of metro Atlanta, plan on paying a premium for infill locations -- that is not going away',
        'Clear heights of 28-32 feet and strong dock ratios matter more for e-commerce than traditional distribution',
        'Landlords with well-located infill product have real pricing power right now',
        'Suburban owners should watch carefully how last-mile demand develops -- over-building in outer markets creates genuine risk',
      ]},
      { type: 'p', text: "The e-commerce wave has not crested for industrial real estate -- it has changed shape. Proximity and flexibility are now more valuable than raw scale. Atlanta is well-positioned to capitalize on that shift, and it is a dynamic I factor into every tenant and investment recommendation I make." },
    ],
  },
  {
    slug: 'i85-corridor-market-update-2026',
    title: 'I-85 Corridor Update: Vacancy, Rent Trends, and New Deliveries',
    excerpt: "The I-85 industrial corridor from Gwinnett to Spartanburg remains one of the Southeast's most active development zones. We break down current vacancy, asking rents, and which projects are on track for 2026 delivery.",
    date: 'March 15, 2026',
    readTime: '4 min read',
    category: 'Market Reports',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    body: [
      { type: 'p', text: "The I-85 corridor stretching northeast from Atlanta through Gwinnett, Hall, and Barrow counties into the Carolinas is one of the most active industrial development zones in the Southeast. It has been for years -- and 2026 is no exception. Here is what the current data shows and what it means for tenants and investors active in this corridor." },
      { type: 'h2', text: 'Gwinnett County: Still the Core' },
      { type: 'p', text: "Gwinnett remains the tightest submarket along the corridor. Vacancy is running below 4%, and asking rents for Class A product have pushed into the $8.50-10.00/SF NNN range for newer distribution space. The county's combination of established infrastructure, labor access, and proximity to both the 285 perimeter and the outer suburbs makes it consistently the first choice for mid-size distribution operations (50,000-200,000 SF). Available options are limited and move fast." },
      { type: 'h2', text: 'Hall and Barrow: More Space, More Concessions' },
      { type: 'p', text: "Moving further northeast into Hall County (Gainesville) and Barrow County (Winder), vacancy opens up considerably -- currently in the 7-9% range -- and landlords are more willing to negotiate. Rents here run $6.00-7.50/SF NNN for comparable product. For tenants who can tolerate a longer drive to the urban core, these markets offer real value. For investors, the rent growth story here is more dependent on continued corridor absorption and less on structural scarcity." },
      { type: 'h2', text: '2026 Deliveries to Watch' },
      { type: 'ul', items: [
        'Several spec buildings in the 200,000-400,000 SF range tracking for Q2-Q3 delivery in the Braselton/Hoschton area',
        'Build-to-suit projects for manufacturing and e-commerce users under construction in the Gainesville submarket',
        'Cross-dock facilities targeting regional distribution users expected in Barrow County by year-end',
      ]},
      { type: 'h2', text: 'The Bottom Line' },
      { type: 'p', text: "If you are a tenant in the Gwinnett core, options are tight and time is your enemy. Start early, be clear about your requirements, and do not assume the space you toured last month will still be available next quarter. If you are looking at the outer markets for cost relief, it is available -- but do the full operating cost analysis first. Fuel, driver time, and labor availability all factor into whether that cheaper rent actually saves you money." },
    ],
  },
  {
    slug: 'interest-rates-cap-rates-atlanta-industrial',
    title: 'Interest Rates, Cap Rates, and What They Mean for Atlanta Industrial Values',
    excerpt: 'After two years of rate volatility, the relationship between debt costs and cap rate compression is finally stabilizing. We explain what this reset means for buyers, sellers, and long-term holders in the Atlanta market.',
    date: 'March 1, 2026',
    readTime: '7 min read',
    category: 'Industry Commentary',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80',
    body: [
      { type: 'p', text: "The past two years were disorienting for industrial real estate investors who had gotten used to a decade of falling interest rates and compressing cap rates. That era is over. Rates rose, cap rates expanded, and asset values reset. The good news: the reset appears to be largely complete in the Atlanta industrial market, and a clearer picture of where values are settling has emerged." },
      { type: 'h2', text: 'A Quick Primer on the Relationship' },
      { type: 'p', text: "Cap rates and interest rates do not move in lockstep -- but they are related. A cap rate is simply the ratio of a property's net operating income to its purchase price. When borrowing costs rise, investors need higher returns to make the numbers work, which means they pay less for the same income stream. That dynamic drove cap rate expansion from the 4-4.5% range for Atlanta industrial in 2021-2022 to the current 5.5-6.5% range for most core product." },
      { type: 'h2', text: 'Where Atlanta Industrial Values Are Today' },
      { type: 'p', text: "Class A Atlanta industrial is currently trading at cap rates in the 5.25-5.75% range for well-located, recently-constructed product with strong tenancy. Older, functional product in secondary submarkets is transacting at 6.25-7.25% or higher, depending on lease term, tenant credit, and location. The spread between core and secondary is wider than it was in 2021, which reflects the more discerning capital environment we are in." },
      { type: 'h2', text: 'What This Means for Different Stakeholders' },
      { type: 'ul', items: [
        "Buyers: Underwriting is more conservative now, but deals pencil again with current rents and realistic rent growth assumptions. Stop waiting for cap rates to return to 2021 levels.",
        "Sellers: The bid-ask gap has narrowed significantly from the 2023 stalemate. Realistic pricing gets deals done. Reaching for 2021 pricing still does not.",
        "Long-term holders: If you bought well and have low-cost fixed-rate debt, your position is strong. Rising rents on renewals offset any theoretical value haircut from cap rate expansion.",
        "Refinancing: This is the real pressure point. Assets with maturing debt need careful evaluation -- refinancing into today's rates can hurt cash-on-cash returns meaningfully.",
      ]},
      { type: 'h2', text: 'My Outlook' },
      { type: 'p', text: "I am cautiously optimistic on Atlanta industrial values through the balance of 2026. Rent growth continues to support NOI, which provides a natural offset to any further cap rate pressure. The market is not going to reprice dramatically in either direction -- we are in a period of stability after a volatile adjustment. For buyers who have been waiting, that stability is the opportunity." },
    ],
  },
  {
    slug: 'nnn-vs-gross-leases-industrial-investors',
    title: 'NNN vs. Gross Leases: A Plain-Language Guide for Industrial Investors',
    excerpt: "Net leases shift operating expenses to the tenant -- but the structure is more nuanced than it sounds. Before you close on that warehouse investment, here's what every lease clause actually means for your cash flow.",
    date: 'February 15, 2026',
    readTime: '6 min read',
    category: 'Investor Guides',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    body: [
      { type: 'p', text: "One of the first things new industrial investors learn is that NNN is good -- it means the tenant pays expenses. But the details of what that actually means, and how net leases vary in practice, are important enough that every investor should understand them before evaluating deals." },
      { type: 'h2', text: 'The Three Nets' },
      { type: 'p', text: "NNN stands for Triple Net -- meaning the tenant is responsible for three categories of operating costs beyond base rent: property taxes, building insurance, and maintenance/repairs. In a true triple-net lease, the landlord's only recurring obligation is debt service on any mortgage. This is the standard for institutional industrial real estate, and it is why large distribution facilities leased to credit tenants trade at low cap rates -- the income stream is predictable and largely expense-free for the owner." },
      { type: 'h2', text: 'Where It Gets Complicated' },
      { type: 'p', text: "Not all net leases are created equal. A Modified Gross lease may have the tenant paying taxes and insurance but the landlord retaining responsibility for roof and structure -- a meaningful difference that can cost the owner real money on an aging building. Always read the lease definition of what the tenant is actually responsible for, not just what the broker says in the marketing package." },
      { type: 'ul', items: [
        'Roof and structure: Who pays for repairs? Who pays for replacement? These are the big-ticket items that can crater returns on older product.',
        'HVAC: In industrial, HVAC coverage is often limited -- understand exactly what systems are covered and their current condition.',
        'Cap on controllable expenses: Some leases cap the annual increase in expenses passed to tenants. Know what the cap is and how it affects your projections.',
        'Lease audit rights: Most institutional tenants have the right to audit operating expenses. Make sure your records are clean.',
      ]},
      { type: 'h2', text: 'The Gross Lease Alternative' },
      { type: 'p', text: "Gross leases -- where the landlord bundles operating costs into the rent -- are less common in industrial but do exist, particularly in multi-tenant flex and office-warehouse properties. For landlords, gross leases require careful expense modeling because you absorb the volatility in taxes, insurance, and maintenance. For tenants, they provide cost predictability that smaller businesses often value." },
      { type: 'h2', text: 'The Practical Takeaway' },
      { type: 'p', text: "A true NNN lease with a creditworthy tenant and a long remaining term is as close to passive income as commercial real estate gets. But the devil is in the definitions. Before you buy, read the actual lease, understand what the tenant is and is not responsible for, and model your capital expenditure exposure based on the building's age and condition -- not the broker's optimistic proforma." },
    ],
  },
  {
    slug: 'trinity-cre-q1-2026-transactions',
    title: 'Trinity CRE Closes Multiple Transactions Across Greater Atlanta in Q1',
    excerpt: 'Trinity Commercial Real Estate represented tenants and buyers across three Greater Atlanta submarkets in Q1 2026, closing deals in Norcross, Marietta, and the I-20 West corridor. A look at what moved and why.',
    date: 'February 1, 2026',
    readTime: '2 min read',
    category: 'Company News',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80',
    body: [
      { type: 'p', text: "Q1 2026 was an active quarter for Trinity CRE across the Greater Atlanta industrial and commercial market. We represented tenants, buyers, and sellers in several transactions spanning three submarkets -- each one a different story about what is moving in this market and why." },
      { type: 'h2', text: 'Norcross: Tenant Representation' },
      { type: 'p', text: "We represented a regional distribution company in their lease of a 38,000 SF Class B warehouse in the Norcross/Peachtree Corners submarket. The tenant had been in their existing space for over a decade and faced a significant rent increase on renewal. After surveying available options and negotiating against two competing proposals, we secured a new lease at a rate 12% below the landlord's initial ask, with six months of free rent to offset relocation costs. The tenant is now in a more functional building at lower total cost." },
      { type: 'h2', text: 'Marietta: Investment Acquisition' },
      { type: 'p', text: "We represented a private investor in the acquisition of a 22,000 SF flex-industrial property in Marietta. The asset was occupied by a single tenant on a short-term lease, which created pricing uncertainty that most buyers avoided. Our analysis showed the tenant had strong renewal intent and rent was well below market. We negotiated a purchase at a going-in cap rate that reflected the lease risk, executed a lease extension post-closing, and the investor immediately recognized mark-to-market value." },
      { type: 'h2', text: 'I-20 West: Seller Representation' },
      { type: 'p', text: "We represented an owner-user in the sale of their 55,000 SF facility in the I-20 West corridor. The owner was relocating operations and wanted to convert their real estate equity into working capital. We positioned the asset toward owner-users and regional investors, ran a targeted process, and closed at pricing that reflected the building's functional quality and submarket fundamentals." },
      { type: 'p', text: "Each of these deals was different -- different asset types, different client needs, different market dynamics. That is what the Atlanta market looks like right now: active, but with more nuance than a simple headline number conveys. If you are evaluating a transaction in Greater Atlanta this year, we would be glad to talk through what we are seeing." },
    ],
  },
]
