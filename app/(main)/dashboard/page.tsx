'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle, Clock, CheckCircle, Loader2, TrendingUp, Plus, Fish, Music, Search, ShieldCheck, ArrowRight } from 'lucide-react'
import { Stats, Ticket } from '@/types'
import { formatDistanceToNow } from 'date-fns'

const STATUS_COLORS: Record<string, string> = {
  open: 'bg-blue-100 text-blue-700',
  in_progress: 'bg-purple-100 text-purple-700',
  pending: 'bg-yellow-100 text-yellow-700',
  resolved: 'bg-green-100 text-green-700',
  closed: 'bg-gray-100 text-gray-600',
}
const PRIORITY_COLORS: Record<string, string> = {
  urgent: 'bg-red-100 text-red-700',
  high: 'bg-orange-100 text-orange-700',
  medium: 'bg-yellow-100 text-yellow-700',
  low: 'bg-slate-100 text-slate-600',
}

function appBadge(app: string) {
  if (app === 'FishingPalPro') return <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-[#00B4D8]/15 text-[#00B4D8]">🎣 {app}</span>
  if (app === 'PlayListAI') return <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-purple-100 text-purple-600">🎵 {app}</span>
  if (app === 'SleuthPro') return <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-teal-100 text-teal-600">🔍 {app}</span>
  if (app === 'SkinGuardAI') return <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-cyan-100 text-cyan-600">🛡️ {app}</span>
  return <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-slate-100 text-slate-600">{app}</span>
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [agentName, setAgentName] = useState('Team')

  useEffect(() => {
    const stored = localStorage.getItem('currentAgent')
    if (stored) setAgentName(JSON.parse(stored).name.split(' ')[0])
    Promise.all([
      fetch('/api/stats').then(r => r.json()),
      fetch('/api/tickets').then(r => r.json()),
    ]).then(([s, t]) => {
      setStats(s)
      setTickets(t.slice(0, 6))
    })
  }, [])

  const statCards = stats ? [
    { label: 'Open', value: stats.open, icon: AlertCircle, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { label: 'In Progress', value: stats.inProgress, icon: Loader2, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    { label: 'Pending', value: stats.pending, icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
    { label: 'Resolved', value: stats.resolved, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
  ] : []

  const appCards = [
    { app: 'FishingPalPro', icon: Fish, color: '#00B4D8', emoji: '🎣' },
    { app: 'PlayListAI', icon: Music, color: '#7C3AED', emoji: '🎵' },
    { app: 'SleuthPro', icon: Search, color: '#0D9488', emoji: '🔍' },
    { app: 'SkinGuardAI', icon: ShieldCheck, color: '#00D4C8', emoji: '🛡️' },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Good to see you, {agentName}! 👋</h1>
          <p className="text-slate-500 text-sm mt-0.5">Here&apos;s what&apos;s happening across your apps today.</p>
        </div>
        <Link href="/tickets/new">
          <Button className="text-white gap-2" style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}>
            <Plus className="h-4 w-4" /> New Ticket
          </Button>
        </Link>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {!stats ? Array(4).fill(0).map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />) : statCards.map(card => (
          <Card key={card.label} className={`border ${card.border}`}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-600">{card.label}</span>
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${card.bg}`}>
                  <card.icon className={`h-4 w-4 ${card.color}`} />
                </div>
              </div>
              <div className={`text-3xl font-bold ${card.color}`}>{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* App breakdown */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {appCards.map(({ app, icon: Icon, color, emoji }) => (
            <Link key={app} href={`/tickets?app=${app}`}>
              <Card className="border hover:border-[#00B4D8] transition-colors cursor-pointer group" style={{ borderColor: `${color}30` }}>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: `${color}25` }}>
                        <Icon className="h-5 w-5" style={{ color }} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{app}</p>
                        <p className="text-xs text-slate-500">Active tickets</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-slate-800">{stats.byApp?.[app] || 0}</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#00B4D8] transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* Recent tickets */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle className="text-base font-semibold text-slate-800 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-[#00B4D8]" /> Recent Tickets
          </CardTitle>
          <Link href="/tickets" className="text-sm text-[#00B4D8] hover:underline font-medium">View all →</Link>
        </CardHeader>
        <CardContent className="p-0">
          {tickets.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <CheckCircle className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p>No tickets yet</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {tickets.map(ticket => (
                <Link key={ticket.id} href={`/tickets/${ticket.id}`} className="flex items-center gap-4 px-6 py-3.5 hover:bg-slate-50 transition-colors">
                  <span className="text-xs text-slate-400 w-10 shrink-0">#{ticket.ticketNumber}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 truncate">{ticket.subject}</p>
                    <p className="text-xs text-slate-400">{ticket.customerName}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {appBadge(ticket.app)}
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${PRIORITY_COLORS[ticket.priority]}`}>{ticket.priority}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[ticket.status]}`}>{ticket.status.replace('_', ' ')}</span>
                    <span className="text-xs text-slate-400 hidden lg:block">{formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
