export interface Listing {
  slug: string
  title: string
  type: 'For Sale' | 'For Lease'
  address: string
  city: string
  state: string
  sqft: number
  price?: string
  leaseRate?: string
  description: string
  features: string[]
  propertyType: string
  status: 'Available' | 'Under Contract' | 'Sold'
  image: string
}

export const listings: Listing[] = [
  {
    slug: 'norcross-warehouse',
    title: 'Industrial Warehouse - Norcross',
    type: 'For Lease',
    address: '5842 Peachtree Industrial Blvd',
    city: 'Norcross',
    state: 'GA',
    sqft: 48000,
    leaseRate: '$6.50/SF NNN',
    description:
      'Class B industrial warehouse with excellent I-285 access. 30-foot clear heights, six dock-high doors, and ample trailer parking. Ideal for distribution or light manufacturing operations in a well-established industrial corridor.',
    features: [
      "30' clear heights",
      '6 dock-high doors',
      '2 drive-in doors',
      'ESFR sprinkler system',
      '3,200 SF office',
      '120 trailer parking spaces',
      'I-285 access (2 miles)',
    ],
    propertyType: 'Warehouse / Distribution',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
  },
  {
    slug: 'marietta-distribution-center',
    title: 'Distribution Center - Marietta',
    type: 'For Sale',
    address: '1200 Windy Hill Road',
    city: 'Marietta',
    state: 'GA',
    sqft: 120000,
    price: '$14,200,000',
    description:
      "Premier Class A distribution center in Marietta's established industrial corridor. Recently renovated and fully leased with a strong NNN tenant. Excellent investment opportunity with stable cash flow and a 6.1% cap rate.",
    features: [
      "36' clear heights",
      '24 dock-high doors',
      '4 drive-in doors',
      'ESFR sprinkler system',
      '8,500 SF office buildout',
      'Fully leased (NNN)',
      '6.1% cap rate',
    ],
    propertyType: 'Distribution Center',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80',
  },
  {
    slug: 'peachtree-corners-flex',
    title: 'Flex Industrial Space - Peachtree Corners',
    type: 'For Lease',
    address: '3900 Holcomb Bridge Road',
    city: 'Peachtree Corners',
    state: 'GA',
    sqft: 12500,
    leaseRate: '$9.25/SF NNN',
    description:
      'Versatile flex industrial space in a Peachtree Corners business park. High-end office buildout with a warehouse component. Ideal for technology, light manufacturing, or professional services operations with storage or lab needs.',
    features: [
      "18' clear heights",
      '1 dock-high door',
      '1 drive-in door',
      '4,200 SF executive office',
      '8,300 SF warehouse',
      'Fiber connectivity',
      'Building signage opportunity',
    ],
    propertyType: 'Flex / R&D',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
  },
]
