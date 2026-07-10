'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm the DreamTeamApps support assistant 👋 I can help with FishingPalPro, Search Quest, PlayListAI, SkinGuardAI, and GigStand. What can I help you with today?",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100)
  }, [isOpen])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!response.ok || !response.body) throw new Error('Bad response')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let text = ''

      setMessages(prev => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        text += decoder.decode(value, { stream: true })
        setMessages(prev => [...prev.slice(0, -1), { role: 'assistant', content: text }])
      }
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content:
            "Sorry, I'm having trouble right now. Please submit a support ticket using the form above and we'll get back to you within 24 hours.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50"
          style={{ height: '460px', maxWidth: '400px' }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 rounded-t-2xl"
            style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              <span className="text-white font-semibold text-sm">DreamTeamApps Support</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white text-lg leading-none"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'text-white rounded-br-sm'
                      : 'bg-white text-slate-800 rounded-bl-sm shadow-sm border border-slate-100'
                  }`}
                  style={msg.role === 'user' ? { background: 'linear-gradient(135deg, #00B4D8, #0096b4)' } : {}}
                >
                  {msg.content || (isLoading && i === messages.length - 1 ? (
                    <span className="flex gap-1 items-center h-4">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  ) : '')}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Ticket nudge */}
          <div className="px-4 py-1.5 border-t border-slate-100 bg-white text-center">
            <p className="text-xs text-slate-400">
              Prefer a ticket?{' '}
              <a href="#" onClick={() => setIsOpen(false)} className="text-[#00B4D8] hover:underline">
                Use the form above ↑
              </a>
            </p>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-100 bg-white rounded-b-2xl flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask a question..."
              disabled={isLoading}
              className="flex-1 text-sm border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#00B4D8] transition-colors"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="px-3 py-2 text-white text-sm font-semibold rounded-xl disabled:opacity-40 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="fixed bottom-5 right-5 w-14 h-14 text-white rounded-full shadow-xl flex items-center justify-center z-50 text-2xl hover:scale-105 transition-transform"
        style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}
        aria-label="Open support chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </>
  )
}
