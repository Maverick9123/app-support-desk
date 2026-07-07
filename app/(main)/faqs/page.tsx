'use client'

import { useState, useMemo } from 'react'
import { ALL_FAQS, type FAQ } from '@/lib/faqs-data'
import { Search, ChevronDown, ChevronUp, Copy, Check, ExternalLink } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

type AppFilter = 'all' | FAQ['app']

const APP_COLORS: Record<FAQ['app'], string> = {
  FishingPalPro:  'bg-cyan-100 text-cyan-800',
  PlayListAI:     'bg-purple-100 text-purple-800',
  SleuthPro:      'bg-teal-100 text-teal-800',
  SkinGuardAI:    'bg-cyan-100 text-cyan-800',
  General:        'bg-slate-100 text-slate-700',
  AppSupportDesk: 'bg-indigo-100 text-indigo-800',
}

const APP_EMOJI: Record<FAQ['app'], string> = {
  FishingPalPro:  '🎣',
  PlayListAI:     '🎵',
  SleuthPro:      '🔍',
  SkinGuardAI:    '🛡️',
  General:        '💬',
  AppSupportDesk: '🛠️',
}

function CopyAnswerButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-[#00B4D8] transition-colors"
      title="Copy answer to clipboard"
    >
      {copied
        ? <><Check className="h-3 w-3 text-green-500" /><span className="text-green-500">Copied!</span></>
        : <><Copy className="h-3 w-3" /><span>Copy answer</span></>}
    </button>
  )
}

function FAQCard({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="border border-slate-200 shadow-none hover:shadow-sm transition-shadow">
      <CardContent className="p-0">
        <button
          className="w-full flex items-start gap-3 p-4 text-left"
          onClick={() => setOpen(o => !o)}
        >
          <span className="text-base shrink-0 mt-0.5">{APP_EMOJI[faq.app]}</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 leading-snug">{faq.question}</p>
            <div className="flex items-center gap-2 mt-1.5">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${APP_COLORS[faq.app]}`}>
                {faq.app === 'AppSupportDesk' ? 'AppSupport Desk' : faq.app}
              </span>
              <span className="text-xs text-slate-400">{faq.category}</span>
            </div>
          </div>
          <span className="shrink-0 ml-1 mt-1">
            {open
              ? <ChevronUp className="h-4 w-4 text-slate-400" />
              : <ChevronDown className="h-4 w-4 text-slate-400" />}
          </span>
        </button>
        {open && (
          <div className="px-4 pb-4 pt-0 border-t border-slate-100">
            <p className="text-sm text-slate-600 leading-relaxed mt-3 mb-2">{faq.answer}</p>
            <div className="flex items-center justify-between mt-3">
              <CopyAnswerButton text={faq.answer} />
              <span className="text-xs text-slate-300">ID: {faq.id}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function AdminFAQsPage() {
  const [appFilter, setAppFilter] = useState<AppFilter>('all')
  const [catFilter, setCatFilter] = useState('all')
  const [query, setQuery] = useState('')

  const appOptions: { value: AppFilter; label: string; emoji: string; count: number }[] = [
    { value: 'all',            label: 'All',             emoji: '📚', count: ALL_FAQS.length },
    { value: 'FishingPalPro',  label: 'FishingPalPro',   emoji: '🎣', count: ALL_FAQS.filter(f => f.app === 'FishingPalPro').length },
    { value: 'PlayListAI',     label: 'PlayListAI',      emoji: '🎵', count: ALL_FAQS.filter(f => f.app === 'PlayListAI').length },
    { value: 'SleuthPro',      label: 'SleuthPro',       emoji: '🔍', count: ALL_FAQS.filter(f => f.app === 'SleuthPro').length },
    { value: 'SkinGuardAI',    label: 'SkinGuardAI',     emoji: '🛡️', count: ALL_FAQS.filter(f => f.app === 'SkinGuardAI').length },
    { value: 'General',        label: 'General',         emoji: '💬', count: ALL_FAQS.filter(f => f.app === 'General').length },
    { value: 'AppSupportDesk', label: 'AppSupport Desk', emoji: '🛠️', count: ALL_FAQS.filter(f => f.app === 'AppSupportDesk').length },
  ]

  const availableCategories = useMemo(() => {
    const pool = appFilter === 'all' ? ALL_FAQS : ALL_FAQS.filter(f => f.app === appFilter)
    const cats = pool.map(f => f.category)
    return ['all', ...new Set(cats)]
  }, [appFilter])

  const filtered = useMemo(() => {
    let pool = appFilter === 'all' ? ALL_FAQS : ALL_FAQS.filter(f => f.app === appFilter)
    if (catFilter !== 'all') pool = pool.filter(f => f.category === catFilter)
    if (query.trim()) {
      const q = query.toLowerCase()
      pool = pool.filter(f =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.keywords.some(k => k.toLowerCase().includes(q))
      )
    }
    return pool
  }, [appFilter, catFilter, query])

  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">FAQ Database</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            {ALL_FAQS.length} articles across all apps — use as a quick reference when resolving tickets
          </p>
        </div>
        <a
          href="/portal/faq"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-[#00B4D8] hover:underline"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          View Public FAQ Page
        </a>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-5 gap-3 mb-6">
        {appOptions.filter(o => o.value !== 'all').map(opt => (
          <div key={opt.value} className="bg-white rounded-xl border border-slate-200 p-4 text-center">
            <div className="text-2xl mb-1">{opt.emoji}</div>
            <div className="text-xl font-bold text-slate-800">{opt.count}</div>
            <div className="text-xs text-slate-500 mt-0.5 leading-tight">{opt.label}</div>
          </div>
        ))}
      </div>

      {/* Search + Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 mb-5">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search questions, answers, or keywords..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="pl-9 h-9"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs text-slate-500 self-center mr-1">App:</span>
            {appOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => { setAppFilter(opt.value); setCatFilter('all') }}
                className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                  appFilter === opt.value
                    ? 'bg-[#00B4D8] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {opt.emoji} {opt.label}
                <span className="ml-1 opacity-70">({opt.count})</span>
              </button>
            ))}
          </div>
          {availableCategories.length > 2 && (
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs text-slate-500 self-center mr-1">Category:</span>
              {availableCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCatFilter(cat)}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                    catFilter === cat
                      ? 'bg-slate-700 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'All Categories' : cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-slate-500 mb-3">
        Showing <strong>{filtered.length}</strong> of {ALL_FAQS.length} FAQs
        {query && <> matching &ldquo;<em>{query}</em>&rdquo;</>}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <p className="text-lg mb-1">No FAQs found</p>
          <p className="text-sm">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map(faq => <FAQCard key={faq.id} faq={faq} />)}
        </div>
      )}
    </div>
  )
}
