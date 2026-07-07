'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, FileText, Plus, Users, Settings, Globe, Fish, Music, Search, ShieldCheck, LogOut, ChevronRight, Archive, BookOpen } from 'lucide-react'
import { Stats } from '@/types'

interface AgentInfo {
  name: string
  email: string
  initials: string
  role: string
}

export function Sidebar() {
  const pathname = usePathname()
  const [agent, setAgent] = useState<AgentInfo | null>(null)
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('currentAgent')
    if (stored) setAgent(JSON.parse(stored))
  }, [])

  useEffect(() => {
    fetch('/api/stats').then(r => r.json()).then(setStats).catch(() => null)
  }, [pathname])

  function handleLogout() {
    localStorage.removeItem('currentAgent')
    window.location.href = '/'
  }

  const totalActive = stats ? stats.open + stats.inProgress + stats.pending : null
  const archivedCount = stats?.archived ?? 0
  const byApp = stats ? (stats.byApp || {}) : {}
  const fpCount = byApp['FishingPalPro'] || 0
  const plCount = byApp['PlayListAI'] || 0
  const spCount = byApp['SleuthPro'] || 0
  const sgaCount = byApp['SkinGuardAI'] || 0

  const navItems = [
    { href: '/dashboard',        label: 'Dashboard',       icon: Home },
    { href: '/tickets',          label: 'All Tickets',     icon: FileText, badge: totalActive },
    { href: '/tickets/new',      label: 'New Ticket',      icon: Plus },
    { href: '/tickets/archived', label: 'Archived',        icon: Archive, badge: archivedCount > 0 ? archivedCount : null, badgeColor: 'bg-amber-500/80' },
    { href: '/contacts',         label: 'Contacts',        icon: Users },
    { href: '/faqs',             label: 'FAQ Database',    icon: BookOpen },
    { href: '/portal',           label: 'Customer Portal', icon: Globe, external: true },
    { href: '/portal/faq',       label: 'Public FAQ Page', icon: Globe, external: true },
    { href: '/settings',         label: 'Settings',        icon: Settings },
  ]

  return (
    <aside className="w-60 flex flex-col shrink-0 min-h-screen" style={{ background: '#0D1B2A' }}>
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-1">
            <Fish className="h-5 w-5 text-[#00B4D8]" />
            <Music className="h-4 w-4 text-[#00B4D8]" />
          </div>
          <span className="text-white font-bold text-lg">AppSupport</span>
        </div>
        <p className="text-slate-500 text-xs pl-8">Help Desk v1.0</p>
      </div>

      {stats && (
        <div className="px-4 py-3 border-b border-white/10 space-y-1.5">
          <Link href="/tickets?app=FishingPalPro" className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-2">
              <Fish className="h-3.5 w-3.5 text-[#00B4D8]" />
              <span className="text-xs text-slate-400 group-hover:text-slate-200">FishingPalPro</span>
            </div>
            {fpCount > 0 && <span className="text-xs bg-red-500/80 text-white px-1.5 py-0.5 rounded-full font-medium">{fpCount}</span>}
          </Link>
          <Link href="/tickets?app=PlayListAI" className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-2">
              <Music className="h-3.5 w-3.5 text-[#00B4D8]" />
              <span className="text-xs text-slate-400 group-hover:text-slate-200">PlayListAI</span>
            </div>
            {plCount > 0 && <span className="text-xs bg-orange-500/80 text-white px-1.5 py-0.5 rounded-full font-medium">{plCount}</span>}
          </Link>
          <Link href="/tickets?app=SleuthPro" className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5 text-[#00B4D8]" />
              <span className="text-xs text-slate-400 group-hover:text-slate-200">SleuthPro</span>
            </div>
            {spCount > 0 && <span className="text-xs bg-teal-500/80 text-white px-1.5 py-0.5 rounded-full font-medium">{spCount}</span>}
          </Link>
          <Link href="/tickets?app=SkinGuardAI" className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-[#00D4C8]" />
              <span className="text-xs text-slate-400 group-hover:text-slate-200">SkinGuardAI</span>
            </div>
            {sgaCount > 0 && <span className="text-xs bg-cyan-500/80 text-white px-1.5 py-0.5 rounded-full font-medium">{sgaCount}</span>}
          </Link>
        </div>
      )}

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map(item => {
          const isActive = pathname === item.href ||
            (item.href !== '/dashboard' && item.href !== '/tickets/new' && item.href !== '/tickets/archived' &&
             item.href !== '/portal' && item.href !== '/portal/faq' && item.href !== '/settings' &&
             pathname?.startsWith(item.href)) ||
            (item.href === '/tickets/archived' && pathname === '/tickets/archived')
          return item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-400 hover:bg-white/5 hover:text-slate-200 transition-all text-sm">
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                {item.label}
              </div>
              <ChevronRight className="h-3 w-3 opacity-50" />
            </a>
          ) : (
            <Link key={item.href} href={item.href}
              className={cn('flex items-center justify-between px-3 py-2.5 rounded-lg transition-all text-sm',
                isActive ? 'text-[#00B4D8] font-medium' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5')}
              style={isActive ? { background: 'rgba(0,180,216,0.15)' } : {}}>
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                {item.label}
              </div>
              {item.badge != null && item.badge > 0 && (
                <span className={`text-xs text-white px-1.5 py-0.5 rounded-full font-medium ${
                  item.badgeColor ?? 'bg-[#00B4D8]'
                }`}>{item.badge}</span>
              )}
            </Link>
          )
        })}
      </nav>

      {agent && (
        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
              style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}>
              {agent.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-medium truncate">{agent.name}</p>
              <p className="text-slate-500 text-xs">{agent.role}</p>
            </div>
            <button onClick={handleLogout} className="text-slate-500 hover:text-red-400 transition-colors" title="Sign out">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}
