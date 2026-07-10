'use client'

import { useState, useMemo } from 'react'
import { ALL_FAQS, getCategories, type FAQ } from '@/lib/faqs-data'
import { Fish, Music, Search, ShieldCheck, Guitar, ChevronDown, ChevronUp, ExternalLink, ArrowLeft, LifeBuoy } from 'lucide-react'
import { Input } from '@/components/ui/input'

const APP_CONFIG = {
  FishingPalPro: {
    label: 'FishingPalPro',
    emoji: '🎣',
    color: '#00B4D8',
    icon: Fish,
  },
  PlayListAI: {
    label: 'PlayListAI',
    emoji: '🎵',
    color: '#7C3AED',
    icon: Music,
  },
  'Search Quest': {
    label: 'Search Quest',
    emoji: '🔍',
    color: '#0D9488',
    icon: Search,
  },
  SkinGuardAI: {
    label: 'SkinGuardAI',
    emoji: '🛡️',
    color: '#00D4C8',
    icon: ShieldCheck,
  },
  GigStand: {
    label: 'GigStand',
    emoji: '🎸',
    color: '#F2A83B',
    icon: Guitar,
  },
  General: {
    label: 'General',
    emoji: '💬',
    color: '#64748B',
    icon: null,
  },
  AppSupportDesk: {
    label: 'AppSupport Desk',
    emoji: '🛠️',
    color: '#6366F1',
    icon: LifeBuoy,
  },
} as const

type AppName = 'all' | 'FishingPalPro' | 'PlayListAI' | 'Search Quest' | 'SkinGuardAI' | 'GigStand' | 'General' | 'AppSupportDesk'

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false)
  const appCfg = APP_CONFIG[faq.app]

  return (
    <div
      className="border border-slate-200 rounded-xl overflow-hidden transition-shadow hover:shadow-md"
      style={{ borderLeftWidth: 3, borderLeftColor: appCfg.color }}
    >
      <button
        className="w-full flex items-start gap-3 px-5 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="text-lg mt-0.5 shrink-0">{appCfg.emoji}</span>
        <span className="flex-1 font-medium text-slate-800 text-sm leading-snug">
          {faq.question}
        </span>
        <span className="shrink-0 ml-2 mt-0.5">
          {open
            ? <ChevronUp className="h-4 w-4 text-slate-400" />
            : <ChevronDown className="h-4 w-4 text-slate-400" />}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 bg-white border-t border-slate-100">
          <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}

function CategoryGroup({ app, category, faqs }: { app: string; category: string; faqs: FAQ[] }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="mb-6">
      <button
        className="flex items-center gap-2 mb-3 group"
        onClick={() => setCollapsed(c => !c)}
      >
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide group-hover:text-slate-700 transition-colors">
          {category}
        </h3>
        <span className="text-xs text-slate-400 bg-slate-100 rounded-full px-2 py-0.5">{faqs.length}</span>
        {collapsed
          ? <ChevronDown className="h-3 w-3 text-slate-400" />
          : <ChevronUp className="h-3 w-3 text-slate-400" />}
      </button>
      {!collapsed && (
        <div className="space-y-2">
          {faqs.map(faq => <FAQItem key={faq.id} faq={faq} />)}
        </div>
      )}
    </div>
  )
}

// Apps excluded from the public-facing portal (internal/chatbot-only)
const INTERNAL_APPS: FAQ['app'][] = ['General', 'AppSupportDesk']

export default function FAQPage() {
  const [selectedApp, setSelectedApp] = useState<AppName>('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    let pool = selectedApp === 'all'
      ? ALL_FAQS.filter(f => !INTERNAL_APPS.includes(f.app))
      : ALL_FAQS.filter(f => f.app === selectedApp)

    if (query.trim()) {
      const q = query.toLowerCase()
      pool = pool.filter(f =>
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q) ||
        f.keywords.some(k => k.toLowerCase().includes(q))
      )
    }
    return pool
  }, [selectedApp, query])

  const grouped = useMemo(() => {
    const map = new Map<string, Map<string, FAQ[]>>()
    for (const faq of filtered) {
      if (!map.has(faq.app)) map.set(faq.app, new Map())
      const catMap = map.get(faq.app)!
      if (!catMap.has(faq.category)) catMap.set(faq.category, [])
      catMap.get(faq.category)!.push(faq)
    }
    return map
  }, [filtered])

  const appTabs: { value: AppName; label: string; emoji: string; count: number }[] = [
    {
      value: 'all',
      label: 'All Apps',
      emoji: '📚',
      count: ALL_FAQS.filter(f => !INTERNAL_APPS.includes(f.app)).length,
    },
    {
      value: 'FishingPalPro',
      label: 'FishingPalPro',
      emoji: '🎣',
      count: ALL_FAQS.filter(f => f.app === 'FishingPalPro').length,
    },
    {
      value: 'PlayListAI',
      label: 'PlayListAI',
      emoji: '🎵',
      count: ALL_FAQS.filter(f => f.app === 'PlayListAI').length,
    },
    {
      value: 'Search Quest',
      label: 'Search Quest',
      emoji: '🔍',
      count: ALL_FAQS.filter(f => f.app === 'Search Quest').length,
    },
    {
      value: 'SkinGuardAI',
      label: 'SkinGuardAI',
      emoji: '🛡️',
      count: ALL_FAQS.filter(f => f.app === 'SkinGuardAI').length,
    },
    {
      value: 'GigStand',
      label: 'GigStand',
      emoji: '🎸',
      count: ALL_FAQS.filter(f => f.app === 'GigStand').length,
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #3A6EA5 0%, #2B5586 100%)' }}>

      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 pt-5">
        <a
          href="/portal"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Support
        </a>
      </div>

      {/* Header */}
      <div className="text-center pt-6 pb-8 px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Fish className="h-7 w-7 text-[#00B4D8]" />
          <Music className="h-6 w-6 text-[#7C3AED]" />
          <Search className="h-6 w-6 text-[#0D9488]" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Help & FAQ</h1>
        <p className="text-white/90 mb-6">
          FishingPalPro · PlayListAI · Search Quest · SkinGuardAI · GigStand — Find answers instantly
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
          <Input
            placeholder="Search all FAQs..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 h-12 text-base"
          />
        </div>
      </div>

      {/* App Tabs */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <div className="flex gap-2 flex-wrap justify-center">
          {appTabs.map(tab => (
            <button
              key={tab.value}
              onClick={() => setSelectedApp(tab.value)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedApp === tab.value
                  ? 'bg-[#00B4D8] text-white shadow-lg shadow-[#00B4D8]/30'
                  : 'bg-white/10 text-white/85 hover:bg-white/15'
              }`}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                selectedApp === tab.value ? 'bg-white/20' : 'bg-white/10'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg mb-2">No FAQs found for &ldquo;{query}&rdquo;</p>
            <p className="text-slate-500 text-sm">
              Try a different search term, or{' '}
              <a href="/portal" className="text-[#00B4D8] hover:underline">
                submit a support ticket
              </a>
              {' '}and we&apos;ll help directly.
            </p>
          </div>
        ) : (
          Array.from(grouped.entries()).map(([appName, catMap]) => {
            const appCfg = APP_CONFIG[appName as FAQ['app']]
            return (
              <div key={appName} className="mb-10">
                {selectedApp === 'all' && (
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: appCfg.color }}
                    >
                      {appCfg.emoji}
                    </div>
                    <h2 className="text-xl font-bold text-white">{appCfg.label}</h2>
                    <span className="text-slate-500 text-sm">
                      {Array.from(catMap.values()).flat().length} articles
                    </span>
                  </div>
                )}

                <div className="bg-white/5 rounded-2xl p-5">
                  {Array.from(catMap.entries()).map(([category, faqs]) => (
                    <CategoryGroup
                      key={category}
                      app={appName}
                      category={category}
                      faqs={faqs}
                    />
                  ))}
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-12 text-center">
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <p className="text-white font-semibold text-lg mb-1">Didn&apos;t find your answer?</p>
          <p className="text-slate-400 text-sm mb-4">
            Our support team responds within 24 hours on business days.
          </p>
          <a
            href="/portal"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}
          >
            Submit a Support Ticket
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
