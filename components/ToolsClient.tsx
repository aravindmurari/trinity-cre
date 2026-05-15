'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ── helpers ───────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 })
}

function currency(n: number) {
  return '$' + fmt(Math.round(n))
}

// ── shared UI ─────────────────────────────────────────────────────────────────

const fieldClass =
  'w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 bg-white outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 placeholder-gray-400 transition-colors'

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold mb-3">{children}</p>
}

function ResultRow({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0 gap-4">
      <div>
        <p className="text-sm font-medium text-gray-700">{label}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
      <p className="text-sm font-bold text-navy-800 flex-shrink-0">{value}</p>
    </div>
  )
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center rounded-xl bg-gray-50 border border-dashed border-gray-200 min-h-[220px]">
      <p className="text-sm text-gray-400 text-center px-8 leading-relaxed">{text}</p>
    </div>
  )
}

// ── Lease Cost Calculator ─────────────────────────────────────────────────────

function LeaseCalc() {
  const [sf, setSf] = useState('')
  const [rate, setRate] = useState('')
  const [term, setTerm] = useState('36')
  const [nnn, setNnn] = useState('')

  const sfN = parseFloat(sf) || 0
  const rateN = parseFloat(rate) || 0
  const termN = parseInt(term) || 0
  const nnnN = parseFloat(nnn) || 0
  const ready = sfN > 0 && rateN > 0

  const monthlyBase = (sfN * rateN) / 12
  const annualBase = sfN * rateN
  const monthlyAllIn = (sfN * (rateN + nnnN)) / 12
  const totalCommitment = monthlyAllIn * termN
  const baseTotal = monthlyBase * termN

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <Label>Your Space</Label>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1.5">Square Footage</p>
            <input type="number" placeholder="e.g. 25,000" value={sf} onChange={e => setSf(e.target.value)} className={fieldClass} />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1.5">Base Lease Rate ($/SF/year)</p>
            <input type="number" placeholder="e.g. 7.50" step="0.25" value={rate} onChange={e => setRate(e.target.value)} className={fieldClass} />
            <p className="text-xs text-gray-400 mt-1">Atlanta industrial avg: $6.50 – $10.50/SF</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1.5">Lease Term</p>
            <select value={term} onChange={e => setTerm(e.target.value)} className={fieldClass}>
              <option value="12">1 Year</option>
              <option value="24">2 Years</option>
              <option value="36">3 Years</option>
              <option value="60">5 Years</option>
              <option value="84">7 Years</option>
              <option value="120">10 Years</option>
            </select>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1.5">
              NNN Expenses ($/SF/year) <span className="text-gray-400 font-normal">— optional</span>
            </p>
            <input type="number" placeholder="e.g. 3.00" step="0.25" value={nnn} onChange={e => setNnn(e.target.value)} className={fieldClass} />
            <p className="text-xs text-gray-400 mt-1">Taxes, insurance, maintenance. Atlanta avg: $2.50 – $4.00/SF</p>
          </div>
        </div>
      </div>

      <div>
        <Label>Estimated Costs</Label>
        {!ready ? (
          <EmptyState text="Enter square footage and lease rate to see your cost breakdown." />
        ) : (
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <ResultRow label="Monthly Base Rent" value={currency(monthlyBase)} />
            <ResultRow label="Annual Base Rent" value={currency(annualBase)} />
            {nnnN > 0 ? (
              <>
                <ResultRow label="Monthly All-In Cost" value={currency(monthlyAllIn)} sub="Base + NNN expenses" />
                <ResultRow
                  label="Total Lease Commitment"
                  value={currency(totalCommitment)}
                  sub={`${termN / 12} year${termN > 12 ? 's' : ''}, all-in`}
                />
              </>
            ) : (
              <ResultRow
                label="Total Base Commitment"
                value={currency(baseTotal)}
                sub={`${termN / 12} year${termN > 12 ? 's' : ''} — add NNN for full picture`}
              />
            )}
            <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-200 leading-relaxed">
              Estimates are for planning purposes. Actual leases may include annual escalations, free rent periods, and TI allowances. Burke can walk you through the full picture.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Space Needs Estimator ─────────────────────────────────────────────────────

const USE_TYPES = [
  { id: 'warehouse',     label: 'Warehousing / Distribution', sfPer: 1500, dockSf: 2500, rateMin: 6.5,  rateMax: 8.5  },
  { id: 'manufacturing', label: 'Light Manufacturing',         sfPer: 800,  dockSf: 2000, rateMin: 7.0,  rateMax: 9.5  },
  { id: 'flex',          label: 'Flex / Office-Warehouse',     sfPer: 400,  dockSf: 1500, rateMin: 9.0,  rateMax: 12.0 },
  { id: 'cold',          label: 'Cold Storage / Food Grade',   sfPer: 2000, dockSf: 4000, rateMin: 10.0, rateMax: 15.0 },
]

const DOCK_OPTIONS = [
  { value: '0', label: 'None' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3 – 4' },
  { value: '5', label: '5+' },
]

function SpaceCalc() {
  const [useType, setUseType] = useState('warehouse')
  const [employees, setEmployees] = useState('')
  const [docks, setDocks] = useState('0')

  const type = USE_TYPES.find(t => t.id === useType)!
  const empN = parseInt(employees) || 0
  const docksN = parseInt(docks) || 0
  const ready = empN > 0

  const rawSf = empN * type.sfPer + docksN * type.dockSf
  const minSf = Math.round((rawSf * 0.9) / 1000) * 1000
  const maxSf = Math.round((rawSf * 1.2) / 1000) * 1000
  const minMonthly = (minSf * type.rateMin) / 12
  const maxMonthly = (maxSf * type.rateMax) / 12

  const pillActive = (val: string) =>
    `px-3 py-1.5 rounded-full text-xs font-semibold border cursor-pointer transition-colors ${
      docks === val
        ? 'bg-navy-800 text-white border-navy-800'
        : 'bg-white text-gray-600 border-gray-300 hover:border-navy-800 hover:text-navy-800'
    }`

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <Label>Your Operation</Label>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-medium text-gray-600 mb-2">Primary Use</p>
            <div className="flex flex-col gap-2">
              {USE_TYPES.map(t => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setUseType(t.id)}
                  className={`text-left px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                    useType === t.id
                      ? 'bg-navy-800 text-white border-navy-800'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-navy-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1.5">Employees On-Site</p>
            <input
              type="number"
              placeholder="e.g. 15"
              value={employees}
              onChange={e => setEmployees(e.target.value)}
              className={fieldClass}
            />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 mb-2">Dock-High Doors Needed</p>
            <div className="flex flex-wrap gap-2">
              {DOCK_OPTIONS.map(d => (
                <button key={d.value} type="button" onClick={() => setDocks(d.value)} className={pillActive(d.value)}>
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Label>Recommended Space</Label>
        {!ready ? (
          <EmptyState text="Enter your employee count and select your operation type to get a space recommendation." />
        ) : (
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-xs text-gray-500 mb-1">Recommended SF Range</p>
              <p className="text-3xl font-bold text-navy-800">
                {fmt(minSf)} – {fmt(maxSf)} SF
              </p>
            </div>
            <ResultRow
              label="Est. Monthly Lease Cost"
              value={`${currency(minMonthly)} – ${currency(maxMonthly)}`}
              sub="Based on current Atlanta market rates"
            />
            <ResultRow
              label="Est. Annual Cost"
              value={`${currency(minMonthly * 12)} – ${currency(maxMonthly * 12)}`}
              sub="Base rent only — excludes NNN and escalations"
            />
            <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-200 leading-relaxed">
              Actual requirements depend on racking systems, workflow, and growth plans. Burke can right-size your search before you tour a single property.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Cap Rate Calculator ───────────────────────────────────────────────────────

function CapRateCalc() {
  const [price, setPrice] = useState('')
  const [income, setIncome] = useState('')
  const [expenses, setExpenses] = useState('')
  const [sf, setSf] = useState('')

  const clean = (s: string) => parseFloat(s.replace(/,/g, '')) || 0
  const priceN = clean(price)
  const incomeN = clean(income)
  const expN = clean(expenses)
  const sfN = clean(sf)

  const noi = incomeN - expN
  const capRate = priceN > 0 && noi > 0 ? (noi / priceN) * 100 : 0
  const pricePerSf = sfN > 0 && priceN > 0 ? priceN / sfN : 0
  const ready = priceN > 0 && incomeN > 0

  const capRateColor =
    capRate >= 6.5 ? 'text-green-600' : capRate >= 5 ? 'text-navy-800' : capRate > 0 ? 'text-amber-600' : 'text-navy-800'

  const capRateNote =
    capRate >= 6.5
      ? 'Strong yield for Atlanta industrial'
      : capRate >= 5
      ? 'Market-rate for Atlanta industrial'
      : capRate > 0
      ? 'Below market — verify assumptions'
      : ''

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <Label>Property Details</Label>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1.5">Purchase Price ($)</p>
            <input type="text" placeholder="e.g. 5,000,000" value={price} onChange={e => setPrice(e.target.value)} className={fieldClass} />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1.5">Annual Gross Rental Income ($)</p>
            <input type="text" placeholder="e.g. 400,000" value={income} onChange={e => setIncome(e.target.value)} className={fieldClass} />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1.5">Annual Operating Expenses ($)</p>
            <input type="text" placeholder="e.g. 75,000" value={expenses} onChange={e => setExpenses(e.target.value)} className={fieldClass} />
            <p className="text-xs text-gray-400 mt-1">Taxes, insurance, management, maintenance. Exclude debt service.</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-600 mb-1.5">
              Square Footage <span className="text-gray-400 font-normal">— optional</span>
            </p>
            <input type="text" placeholder="e.g. 80,000" value={sf} onChange={e => setSf(e.target.value)} className={fieldClass} />
          </div>
        </div>
      </div>

      <div>
        <Label>Investment Analysis</Label>
        {!ready ? (
          <EmptyState text="Enter the purchase price and gross income to see your investment return analysis." />
        ) : (
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-xs text-gray-500 mb-1">Cap Rate</p>
              <p className={`text-3xl font-bold ${capRateColor}`}>{capRate.toFixed(2)}%</p>
              {capRateNote && <p className="text-xs text-gray-400 mt-1">{capRateNote}</p>}
            </div>
            <ResultRow label="Net Operating Income (NOI)" value={currency(noi)} sub="Gross income minus operating expenses" />
            <ResultRow label="Gross Rental Income" value={currency(incomeN)} />
            <ResultRow label="Operating Expenses" value={currency(expN)} />
            {pricePerSf > 0 && (
              <ResultRow label="Price Per SF" value={`$${pricePerSf.toFixed(2)}`} sub="Atlanta industrial avg: $80 – $140/SF" />
            )}
            <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-200 leading-relaxed">
              Cap rate benchmarks vary by submarket, building class, and lease structure. Trinity CRE can provide a full underwriting on any Atlanta industrial opportunity.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Gate Form ─────────────────────────────────────────────────────────────────

function GateForm({ onUnlock }: { onUnlock: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: JSON.stringify({ name, email, phone, _subject: 'Tools Access' }),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      })
    } catch {}
    localStorage.setItem('trinity-tools-unlocked', '1')
    onUnlock()
    setSubmitting(false)
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-navy-800 px-8 py-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Free Industrial Space Tools</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Instant access to Trinity CRE's calculators — lease cost, space sizing, and investment analysis built for the Atlanta industrial market.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-8">
          <div className="flex flex-col gap-3 mb-6">
            <input
              type="text" required placeholder="Your name"
              value={name} onChange={e => setName(e.target.value)}
              className={fieldClass}
            />
            <input
              type="email" required placeholder="Email address"
              value={email} onChange={e => setEmail(e.target.value)}
              className={fieldClass}
            />
            <input
              type="tel" placeholder="Phone number (optional)"
              value={phone} onChange={e => setPhone(e.target.value)}
              className={fieldClass}
            />
          </div>
          <button
            type="submit" disabled={submitting}
            className="w-full bg-gold text-navy-800 font-semibold py-2.5 rounded-lg hover:bg-gold-300 transition-colors text-sm cursor-pointer disabled:opacity-60"
          >
            {submitting ? 'Loading...' : 'Get Free Access'}
          </button>
          <p className="text-center text-xs text-gray-400 mt-3 leading-relaxed">
            Your information is used solely to follow up if you would like expert guidance. Never shared or sold.
          </p>
        </form>
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────

const TABS = [
  { label: 'Lease Cost',         sub: 'Budget your space'   },
  { label: 'Space Needs',        sub: 'Find your fit'       },
  { label: 'Investment Return',  sub: 'Evaluate a deal'     },
]

export default function ToolsClient() {
  const [unlocked, setUnlocked] = useState(false)
  const [ready, setReady] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('trinity-tools-unlocked')) setUnlocked(true)
    setReady(true)
  }, [])

  if (!ready) return null

  if (!unlocked) return <GateForm onUnlock={() => setUnlocked(true)} />

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1.5 mb-8 bg-white rounded-xl border border-gray-200 p-1.5">
        {TABS.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`flex-1 px-4 py-3 rounded-lg text-center transition-all cursor-pointer ${
              activeTab === i ? 'bg-navy-800 shadow-sm' : 'hover:bg-gray-50'
            }`}
          >
            <p className={`text-sm font-semibold leading-tight ${activeTab === i ? 'text-white' : 'text-gray-800'}`}>
              {tab.label}
            </p>
            <p className={`text-xs mt-0.5 ${activeTab === i ? 'text-gray-300' : 'text-gray-400'}`}>
              {tab.sub}
            </p>
          </button>
        ))}
      </div>

      {/* Calculator panel */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        {activeTab === 0 && <LeaseCalc />}
        {activeTab === 1 && <SpaceCalc />}
        {activeTab === 2 && <CapRateCalc />}
      </div>

      {/* CTA strip */}
      <div className="mt-8 bg-navy-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-2">Want Expert Guidance?</p>
          <h3 className="text-white font-bold text-lg mb-1">Talk to a Specialist</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            These numbers are a starting point. Our team will build a full analysis tailored to your specific situation.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href="tel:7703772063"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-sm px-5 py-3 rounded-lg hover:bg-white/15 transition-colors whitespace-nowrap"
          >
            (770) 377-2063
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy-800 font-semibold text-sm px-5 py-3 rounded-lg hover:bg-gold-300 transition-colors whitespace-nowrap"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </div>
  )
}
