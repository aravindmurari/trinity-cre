'use client'

import { useState, useRef, useEffect } from 'react'

const API_URL = 'http://localhost:8002'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function renderMarkdown(text: string) {
  // Bold
  let html = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  // Inline links
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener" class="text-gold underline">$1</a>')
  // Bare contact URL → styled link
  html = html.replace(
    /(https:\/\/aravindmurari\.github\.io\/trinity-cre\/contact[^\s)]*)/g,
    '<a href="$1" target="_blank" rel="noopener" class="text-gold underline">Schedule a Free Consultation</a>'
  )
  // Bullet lines (- or →)
  html = html.replace(/^[-→]\s+(.+)$/gm, '<li class="ml-4 list-none flex gap-2"><span class="text-gold flex-shrink-0">→</span><span>$1</span></li>')
  // Line breaks
  html = html.replace(/\n\n/g, '</p><p class="mt-3">')
  html = html.replace(/\n/g, '<br />')
  return `<p>${html}</p>`
}

export default function AiBotPanel() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput]       = useState('')
  const [streaming, setStreaming] = useState(false)
  const [error, setError]       = useState('')
  const endRef                  = useRef<HTMLDivElement>(null)
  const inputRef                = useRef<HTMLInputElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, streaming])

  async function send() {
    const text = input.trim()
    if (!text || streaming) return

    const userMsg: Message = { role: 'user', content: text }
    const newHistory = [...messages, userMsg]
    setMessages(newHistory)
    setInput('')
    setStreaming(true)
    setError('')

    // Placeholder for streaming response
    const assistantMsg: Message = { role: 'assistant', content: '' }
    setMessages([...newHistory, assistantMsg])

    try {
      const res = await fetch(`${API_URL}/chat/stream`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-10).map(m => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok) throw new Error(`Backend error: ${res.status}`)

      const reader  = res.body!.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let fullText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const payload = line.slice(6)
          if (payload === '[DONE]') break
          try {
            const { token } = JSON.parse(payload)
            fullText += token
            setMessages(prev => {
              const updated = [...prev]
              updated[updated.length - 1] = { role: 'assistant', content: fullText }
              return updated
            })
          } catch (_) {}
        }
      }
    } catch (err) {
      setError('Could not reach the AI backend. Make sure it is running on port 8002.')
      setMessages(prev => prev.slice(0, -1))
    } finally {
      setStreaming(false)
      inputRef.current?.focus()
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-gray-50/50">
        {messages.length === 0 && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-sm text-gray-800 max-w-[85%]">
              Hi, I&apos;m the Trinity CRE AI assistant. I can answer questions about the Atlanta commercial real estate market, Burke&apos;s services, and available properties.<br /><br />What can I help you with today?
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' ? (
              <div
                className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-sm text-gray-800 max-w-[90%] leading-relaxed prose-sm"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) || '<span class="text-gray-400 italic">Thinking...</span>' }}
              />
            ) : (
              <div className="bg-navy-800 text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 text-sm max-w-[85%]">
                {msg.content}
              </div>
            )}
          </div>
        ))}

        {streaming && messages[messages.length - 1]?.role === 'user' && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl px-4 py-3">
            {error}
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="px-3 pb-3 pt-2 flex-shrink-0 border-t border-gray-100 bg-white flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          disabled={streaming}
          placeholder="Ask anything about Atlanta CRE..."
          className="flex-1 px-3.5 py-2 rounded-xl border border-gray-200 text-sm text-gray-800 outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800 placeholder-gray-400 disabled:opacity-50 transition-colors"
        />
        <button
          onClick={send}
          disabled={!input.trim() || streaming}
          className="bg-navy-800 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-navy-700 disabled:opacity-40 transition-colors cursor-pointer flex-shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <line x1="22" y1="2" x2="11" y2="13" strokeWidth="2.5" strokeLinecap="round" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" strokeWidth="2.5" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
