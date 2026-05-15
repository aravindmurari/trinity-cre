'use client'

import { useState } from 'react'

const ATLANTA_AREAS = [
  'Norcross / Peachtree Corners (Gwinnett)',
  'Duluth / Suwanee / Buford (I-985)',
  'Lawrenceville / Dacula (Gwinnett East)',
  'Marietta / Kennesaw / Acworth (Cobb / Cherokee)',
  'Alpharetta / Roswell (North Fulton)',
  'I-20 West (Douglasville / Lithia Springs)',
  'I-20 East (Conyers / Covington)',
  'South Atlanta / Forest Park / Conley (Clayton)',
  'Fairburn / Union City / College Park (Airport)',
  'McDonough / Stockbridge (Henry County)',
  'I-285 Perimeter',
]

const inputClass = 'w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 bg-white outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 placeholder-gray-400 transition-colors'
const selectClass = inputClass
const labelClass = 'block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5 pt-2">
      <div className="h-px flex-1 bg-gray-100" />
      <p className="text-[10px] font-bold text-gold uppercase tracking-[0.25em] flex-shrink-0">{children}</p>
      <div className="h-px flex-1 bg-gray-100" />
    </div>
  )
}

function BuyerForm({ onSuccess }: { onSuccess: () => void }) {
  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [areas, setAreas] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  function toggleItem(list: string[], item: string, setter: (v: string[]) => void) {
    setter(list.includes(item) ? list.filter((x) => x !== item) : [...list, item])
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('form_type', 'Buyer Intake')
    data.append('property_types', propertyTypes.join(', '))
    data.append('preferred_areas', areas.join(', '))
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) { onSuccess() } else { setStatus('error') }
    } catch { setStatus('error') }
  }

  const checkboxClass = (active: boolean) =>
    `cursor-pointer px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
      active ? 'bg-navy-800 text-white border-navy-800' : 'bg-white text-gray-600 border-gray-200 hover:border-navy-800'
    }`

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact */}
      <div>
        <SectionHeading>Contact Information</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className={labelClass}>First Name *</label><input name="first_name" type="text" required className={inputClass} /></div>
          <div><label className={labelClass}>Last Name *</label><input name="last_name" type="text" required className={inputClass} /></div>
          <div><label className={labelClass}>Company Name</label><input name="company" type="text" className={inputClass} /></div>
          <div><label className={labelClass}>Title / Role</label><input name="title" type="text" className={inputClass} /></div>
          <div><label className={labelClass}>Phone *</label><input name="phone" type="tel" required className={inputClass} /></div>
          <div><label className={labelClass}>Email *</label><input name="email" type="email" required className={inputClass} /></div>
        </div>
      </div>

      {/* What you need */}
      <div>
        <SectionHeading>What You're Looking For</SectionHeading>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Property Type (select all that apply)</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {['Warehouse / Distribution', 'Flex / R&D', 'Manufacturing', 'Cold Storage / Food Grade', 'Other'].map((t) => (
                <button key={t} type="button" onClick={() => toggleItem(propertyTypes, t, setPropertyTypes)} className={checkboxClass(propertyTypes.includes(t))}>{t}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Intended Use *</label>
              <select name="intended_use" required className={selectClass}>
                <option value="">Select...</option>
                <option>Owner-User</option>
                <option>Investment / Lease</option>
                <option>1031 Exchange</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Budget / Price Range</label>
              <select name="price_range" className={selectClass}>
                <option value="">Select...</option>
                <option>Under $2M</option>
                <option>$2M – $5M</option>
                <option>$5M – $10M</option>
                <option>$10M – $25M</option>
                <option>$25M+</option>
                <option>Prefer not to say</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Min Size (SF)</label>
              <select name="min_sf" className={selectClass}>
                <option value="">Select...</option>
                <option>Under 5,000 SF</option>
                <option>5,000 – 15,000 SF</option>
                <option>15,000 – 50,000 SF</option>
                <option>50,000 – 100,000 SF</option>
                <option>100,000 – 250,000 SF</option>
                <option>250,000 SF+</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Max Size (SF)</label>
              <select name="max_sf" className={selectClass}>
                <option value="">Select...</option>
                <option>Under 5,000 SF</option>
                <option>5,000 – 15,000 SF</option>
                <option>15,000 – 50,000 SF</option>
                <option>50,000 – 100,000 SF</option>
                <option>100,000 – 250,000 SF</option>
                <option>250,000 SF+</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <SectionHeading>Location Preferences</SectionHeading>
        <label className={labelClass}>Preferred Atlanta Submarkets (select all that apply)</label>
        <div className="flex flex-wrap gap-2 mt-1">
          {ATLANTA_AREAS.map((a) => (
            <button key={a} type="button" onClick={() => toggleItem(areas, a, setAreas)} className={checkboxClass(areas.includes(a))}>{a}</button>
          ))}
        </div>
      </div>

      {/* Property Requirements */}
      <div>
        <SectionHeading>Property Requirements</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Minimum Clear Height</label>
            <select name="clear_height" className={selectClass}>
              <option value="">Any</option>
              <option>16' or higher</option>
              <option>18' or higher</option>
              <option>24' or higher</option>
              <option>28' or higher</option>
              <option>32' or higher</option>
              <option>36' or higher</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Min Dock-High Doors</label>
            <select name="dock_doors" className={selectClass}>
              <option value="">Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>4+</option>
              <option>8+</option>
              <option>12+</option>
              <option>20+</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Drive-In Doors</label>
            <select name="drive_in" className={selectClass}>
              <option value="">Any / Flexible</option>
              <option>Required</option>
              <option>Not needed</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>ESFR Sprinklers</label>
            <select name="esfr" className={selectClass}>
              <option value="">Flexible</option>
              <option>Required</option>
              <option>Not required</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Office Space Needed</label>
            <select name="office_pct" className={selectClass}>
              <option value="">No preference</option>
              <option>Minimal (under 5%)</option>
              <option>5% – 10%</option>
              <option>10% – 20%</option>
              <option>20%+</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Rail Served</label>
            <select name="rail" className={selectClass}>
              <option value="">Not required</option>
              <option>Required</option>
              <option>Preferred</option>
            </select>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <SectionHeading>Timeline & Financing</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Target Close / Occupancy</label>
            <select name="timeline" className={selectClass}>
              <option value="">Select...</option>
              <option>ASAP</option>
              <option>Within 3 months</option>
              <option>3 – 6 months</option>
              <option>6 – 12 months</option>
              <option>12+ months</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Financing</label>
            <select name="financing" className={selectClass}>
              <option value="">Select...</option>
              <option>All cash</option>
              <option>Conventional loan</option>
              <option>SBA 504</option>
              <option>SBA 7(a)</option>
              <option>1031 Exchange funds</option>
              <option>TBD / Not sure</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Currently Working with Another Broker?</label>
            <select name="other_broker" className={selectClass}>
              <option value="">Select...</option>
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Target Cap Rate (if investment)</label>
            <select name="cap_rate" className={selectClass}>
              <option value="">N/A</option>
              <option>5% or higher</option>
              <option>5.5% or higher</option>
              <option>6% or higher</option>
              <option>6.5% or higher</option>
              <option>7%+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div>
        <SectionHeading>Additional Notes</SectionHeading>
        <textarea name="notes" rows={3} placeholder="Any other requirements, constraints, or context that would help us find the right property..." className={`${inputClass} resize-none`} />
      </div>

      {status === 'error' && <p className="text-red-500 text-sm">Something went wrong. Please try again or call us directly.</p>}

      <button type="submit" disabled={status === 'sending'} className="w-full bg-gold text-navy-800 font-bold py-3.5 rounded-xl hover:bg-gold-300 transition-colors text-sm cursor-pointer disabled:opacity-60">
        {status === 'sending' ? 'Submitting...' : 'Submit Buyer Profile'}
      </button>
    </form>
  )
}

function SellerForm({ onSuccess }: { onSuccess: () => void }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('form_type', 'Seller Intake')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) { onSuccess() } else { setStatus('error') }
    } catch { setStatus('error') }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact */}
      <div>
        <SectionHeading>Contact Information</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label className={labelClass}>First Name *</label><input name="first_name" type="text" required className={inputClass} /></div>
          <div><label className={labelClass}>Last Name *</label><input name="last_name" type="text" required className={inputClass} /></div>
          <div><label className={labelClass}>Company Name</label><input name="company" type="text" className={inputClass} /></div>
          <div>
            <label className={labelClass}>Your Relationship to Property *</label>
            <select name="relationship" required className={selectClass}>
              <option value="">Select...</option>
              <option>Owner</option>
              <option>Owner's Representative</option>
              <option>Partner / Co-Owner</option>
              <option>Estate / Trustee</option>
            </select>
          </div>
          <div><label className={labelClass}>Phone *</label><input name="phone" type="tel" required className={inputClass} /></div>
          <div><label className={labelClass}>Email *</label><input name="email" type="email" required className={inputClass} /></div>
        </div>
      </div>

      {/* Property Details */}
      <div>
        <SectionHeading>Property Details</SectionHeading>
        <div className="space-y-4">
          <div><label className={labelClass}>Property Address *</label><input name="address" type="text" required placeholder="Street address" className={inputClass} /></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div><label className={labelClass}>City *</label><input name="city" type="text" required className={inputClass} /></div>
            <div><label className={labelClass}>State</label><input name="state" type="text" defaultValue="GA" className={inputClass} /></div>
            <div><label className={labelClass}>Zip Code</label><input name="zip" type="text" className={inputClass} /></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Property Type *</label>
              <select name="property_type" required className={selectClass}>
                <option value="">Select...</option>
                <option>Warehouse / Distribution</option>
                <option>Flex / R&D</option>
                <option>Manufacturing</option>
                <option>Cold Storage / Food Grade</option>
                <option>Other Industrial</option>
              </select>
            </div>
            <div><label className={labelClass}>Building Size (SF) *</label><input name="building_sf" type="text" required placeholder="e.g. 48,000" className={inputClass} /></div>
            <div><label className={labelClass}>Land Size (Acres)</label><input name="land_acres" type="text" placeholder="e.g. 4.2" className={inputClass} /></div>
            <div><label className={labelClass}>Year Built</label><input name="year_built" type="text" placeholder="e.g. 2008" className={inputClass} /></div>
            <div><label className={labelClass}>Clear Height</label><input name="clear_height" type="text" placeholder="e.g. 30'" className={inputClass} /></div>
            <div><label className={labelClass}>Number of Buildings</label><select name="num_buildings" className={selectClass}><option>1</option><option>2</option><option>3</option><option>4+</option></select></div>
          </div>
        </div>
      </div>

      {/* Occupancy */}
      <div>
        <SectionHeading>Current Occupancy</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Occupancy Status *</label>
            <select name="occupancy" required className={selectClass}>
              <option value="">Select...</option>
              <option>Vacant</option>
              <option>Owner-Occupied</option>
              <option>Fully Leased</option>
              <option>Partially Leased</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Lease Type (if leased)</label>
            <select name="lease_type" className={selectClass}>
              <option value="">N/A</option>
              <option>NNN (Triple Net)</option>
              <option>Modified Gross</option>
              <option>Gross</option>
            </select>
          </div>
          <div><label className={labelClass}>Tenant Name(s)</label><input name="tenant_names" type="text" placeholder="If leased" className={inputClass} /></div>
          <div><label className={labelClass}>Lease Expiration</label><input name="lease_expiration" type="text" placeholder="e.g. Dec 2027" className={inputClass} /></div>
          <div><label className={labelClass}>Annual NOI (if known)</label><input name="noi" type="text" placeholder="e.g. $420,000" className={inputClass} /></div>
          <div><label className={labelClass}>Current Annual Rent</label><input name="annual_rent" type="text" placeholder="e.g. $390,000" className={inputClass} /></div>
        </div>
      </div>

      {/* Pricing & Timeline */}
      <div>
        <SectionHeading>Pricing & Timeline</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Asking Price (if known)</label>
            <input name="asking_price" type="text" placeholder="e.g. $6,500,000 or TBD" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Reason for Selling</label>
            <select name="reason" className={selectClass}>
              <option value="">Select...</option>
              <option>Portfolio Reallocation</option>
              <option>1031 Exchange</option>
              <option>Business Relocation</option>
              <option>Estate / Retirement</option>
              <option>Refinance / Equity Extraction</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Target Close Timeline</label>
            <select name="timeline" className={selectClass}>
              <option value="">Select...</option>
              <option>ASAP</option>
              <option>Within 3 months</option>
              <option>3 – 6 months</option>
              <option>6 – 12 months</option>
              <option>12+ months / Exploratory</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Currently Listed with Another Broker?</label>
            <select name="other_broker" className={selectClass}>
              <option value="">Select...</option>
              <option>No</option>
              <option>Yes — exclusive listing</option>
              <option>Yes — open listing</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Outstanding Mortgage?</label>
            <select name="mortgage" className={selectClass}>
              <option value="">Select...</option>
              <option>No — free and clear</option>
              <option>Yes</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </div>
      </div>

      {/* Condition */}
      <div>
        <SectionHeading>Property Condition</SectionHeading>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Capital Improvements (last 5 years)</label>
            <textarea name="improvements" rows={2} placeholder="e.g. New roof 2022, LED lighting retrofit, repaved truck court..." className={`${inputClass} resize-none`} />
          </div>
          <div>
            <label className={labelClass}>Known Issues or Deferred Maintenance</label>
            <textarea name="issues" rows={2} placeholder="Optional — any issues we should be aware of before showing the property..." className={`${inputClass} resize-none`} />
          </div>
        </div>
      </div>

      {/* Notes */}
      <div>
        <SectionHeading>Additional Notes</SectionHeading>
        <textarea name="notes" rows={3} placeholder="Anything else that would help us market your property effectively..." className={`${inputClass} resize-none`} />
      </div>

      {status === 'error' && <p className="text-red-500 text-sm">Something went wrong. Please try again or call us directly.</p>}

      <button type="submit" disabled={status === 'sending'} className="w-full bg-gold text-navy-800 font-bold py-3.5 rounded-xl hover:bg-gold-300 transition-colors text-sm cursor-pointer disabled:opacity-60">
        {status === 'sending' ? 'Submitting...' : 'Submit Seller Profile'}
      </button>
    </form>
  )
}

export default function BuySellForm() {
  const [mode, setMode] = useState<'buyer' | 'seller' | null>(null)
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center max-w-lg mx-auto">
        <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy-800 mb-2">Profile Received</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Thank you — we have everything we need to get started. Someone from Trinity CRE will be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Mode toggle */}
      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-12">
        <button
          type="button"
          onClick={() => setMode('buyer')}
          className={`group relative rounded-2xl border-2 p-6 text-left transition-all cursor-pointer ${
            mode === 'buyer' ? 'border-gold bg-gold/5' : 'border-gray-200 bg-white hover:border-navy-800/30'
          }`}
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${mode === 'buyer' ? 'bg-gold text-navy-800' : 'bg-navy-800/5 text-navy-800 group-hover:bg-gold/10'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="font-bold text-navy-800 mb-0.5">I'm a Buyer</p>
          <p className="text-xs text-gray-500">Looking to acquire or lease industrial space</p>
          {mode === 'buyer' && <div className="absolute top-3 right-3 w-4 h-4 bg-gold rounded-full flex items-center justify-center"><svg className="w-2.5 h-2.5 text-navy-800" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div>}
        </button>

        <button
          type="button"
          onClick={() => setMode('seller')}
          className={`group relative rounded-2xl border-2 p-6 text-left transition-all cursor-pointer ${
            mode === 'seller' ? 'border-gold bg-gold/5' : 'border-gray-200 bg-white hover:border-navy-800/30'
          }`}
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${mode === 'seller' ? 'bg-gold text-navy-800' : 'bg-navy-800/5 text-navy-800 group-hover:bg-gold/10'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="font-bold text-navy-800 mb-0.5">I'm a Seller</p>
          <p className="text-xs text-gray-500">Looking to sell or exit an industrial asset</p>
          {mode === 'seller' && <div className="absolute top-3 right-3 w-4 h-4 bg-gold rounded-full flex items-center justify-center"><svg className="w-2.5 h-2.5 text-navy-800" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg></div>}
        </button>
      </div>

      {/* Form */}
      {mode && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          {mode === 'buyer'
            ? <BuyerForm onSuccess={() => setSubmitted(true)} />
            : <SellerForm onSuccess={() => setSubmitted(true)} />
          }
        </div>
      )}
    </div>
  )
}
