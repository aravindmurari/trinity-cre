import ChatBotInline from '@/components/ChatBotInline'

export const metadata = {
  title: 'Bot Demo — Trinity CRE',
  robots: 'noindex, nofollow',
}

function PanelShell({
  label,
  tag,
  tagColor,
  description,
  children,
}: {
  label: string
  tag: string
  tagColor: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col" style={{ height: 780 }}>
      {/* Panel header */}
      <div className="bg-navy-800 px-5 py-4 flex items-start gap-3 flex-shrink-0 rounded-t-2xl border border-navy-700">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5 ${tagColor}`}>
          {tag}
        </span>
        <div>
          <p className="text-white font-semibold text-sm leading-tight">{label}</p>
          <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 min-h-0 rounded-b-2xl overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Header */}
      <div className="bg-navy-800 border-b border-white/10 pt-32 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gold/20 text-gold tracking-widest uppercase">
              Internal Demo
            </span>
            <span className="text-gray-500 text-xs">Not indexed or linked in navigation</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Bot Comparison</h1>
          <p className="text-gray-400 text-sm max-w-xl">
            Try both chat experiences and compare how they handle the same questions.
          </p>
        </div>
      </div>

      {/* Side-by-side panels */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <PanelShell
            label="Scripted Bot"
            tag="Option A"
            tagColor="bg-blue-500/20 text-blue-300"
            description="Menu-driven decision tree. Guides users to contact or listings in 3–4 taps. Zero running cost, works offline."
          >
            <div className="bg-white h-full flex flex-col">
              <ChatBotInline />
            </div>
          </PanelShell>

          <PanelShell
            label="AI Bot (RAG)"
            tag="Option B"
            tagColor="bg-gold/20 text-gold"
            description="Free-text conversation powered by Claude. Answers market questions, references listings, and earns the CTA through dialogue."
          >
            <iframe
              src="https://aravindmurari.github.io/trinity-cre-bot/"
              className="w-full h-full border-0"
              title="Trinity CRE AI Bot"
            />
          </PanelShell>

        </div>

        {/* Comparison notes */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              label: 'Best for lead capture',
              a: 'Predictable -- always ends at contact or listings',
              b: 'Depends on conversation quality',
              edge: 'a',
            },
            {
              label: 'Handles complex questions',
              a: 'No -- button-only, no free text',
              b: 'Yes -- market data, cap rates, lease structures',
              edge: 'b',
            },
            {
              label: 'Running cost',
              a: 'Zero',
              b: 'AI infrastructure (~$5-10/mo at low volume)',
              edge: 'a',
            },
          ].map((row) => (
            <div key={row.label} className="bg-navy-800 rounded-xl p-5 border border-white/8">
              <p className="text-gold text-[10px] font-bold tracking-widest uppercase mb-3">{row.label}</p>
              <div className="space-y-2">
                <div className={`flex gap-2 p-2 rounded-lg text-xs ${row.edge === 'a' ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-white/4'}`}>
                  <span className="text-blue-300 font-bold flex-shrink-0">A</span>
                  <span className="text-gray-300">{row.a}</span>
                </div>
                <div className={`flex gap-2 p-2 rounded-lg text-xs ${row.edge === 'b' ? 'bg-gold/10 border border-gold/20' : 'bg-white/4'}`}>
                  <span className="text-gold font-bold flex-shrink-0">B</span>
                  <span className="text-gray-300">{row.b}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
