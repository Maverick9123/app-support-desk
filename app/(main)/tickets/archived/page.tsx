'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { Search, Fish, Music, AlertCircle, ArchiveRestore, Trash2 } from 'lucide-react'
import { Ticket } from '@/types'
import { formatDistanceToNow } from 'date-fns'

const STATUS_COLORS: Record<string, string> = {
  open: 'bg-blue-100 text-blue-700',
  in_progress: 'bg-purple-100 text-purple-700',
  pending: 'bg-yellow-100 text-yellow-700',
  resolved: 'bg-green-100 text-green-700',
  closed: 'bg-gray-100 text-gray-600',
}
const PRIORITY_DOT: Record<string, string> = {
  urgent: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-yellow-500',
  low: 'bg-slate-400',
}

export default function ArchivedTicketsPage() {
  const router = useRouter()
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [appFilter, setAppFilter] = useState('all')
  const [actionId, setActionId] = useState<string | null>(null)

  const fetchTickets = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({ archived: 'true' })
      if (appFilter !== 'all') params.set('app', appFilter)
      const res = await fetch(`/api/tickets?${params.toString()}`)
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setTickets(Array.isArray(data) ? data : [])
    } catch {
      setTickets([])
    } finally {
      setLoading(false)
    }
  }, [appFilter])

  useEffect(() => { fetchTickets() }, [fetchTickets])

  const filtered = tickets.filter(t =>
    !search ||
    (t.subject ?? '').toLowerCase().includes(search.toLowerCase()) ||
    (t.customerName ?? '').toLowerCase().includes(search.toLowerCase()) ||
    (t.customerEmail ?? '').toLowerCase().includes(search.toLowerCase())
  )

  async function handleRestore(e: React.MouseEvent, ticketId: string) {
    e.preventDefault()
    e.stopPropagation()
    setActionId(ticketId)
    try {
      await fetch(`/api/tickets/${ticketId}/archive`, { method: 'DELETE' })
      setTickets(prev => prev.filter(t => t.id !== ticketId))
    } catch {
      // silently fail
    } finally {
      setActionId(null)
    }
  }

  async function handleDelete(e: React.MouseEvent, ticketId: string, subject: string) {
    e.preventDefault()
    e.stopPropagation()
    if (!confirm(`Permanently delete ticket "${subject}"?\n\nThis cannot be undone.`)) return
    setActionId(ticketId)
    try {
      await fetch(`/api/tickets/${ticketId}`, { method: 'DELETE' })
      setTickets(prev => prev.filter(t => t.id !== ticketId))
    } catch {
      // silently fail
    } finally {
      setActionId(null)
    }
  }

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Archived Tickets</h1>
          <p className="text-slate-500 text-sm mt-0.5">
            {filtered.length} archived ticket{filtered.length !== 1 ? 's' : ''} — restore or permanently delete
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input placeholder="Search archived..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-9" />
        </div>
        <Select value={appFilter} onValueChange={setAppFilter}>
          <SelectTrigger className="w-44 h-9">
            <SelectValue placeholder="All Apps" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Apps</SelectItem>
            <SelectItem value="FishingPalPro">🎣 FishingPalPro</SelectItem>
            <SelectItem value="PlayListAI">🎵 PlayListAI</SelectItem>
            <SelectItem value="SleuthPro">🔍 SleuthPro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-4 space-y-3">{Array(5).fill(0).map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <AlertCircle className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No archived tickets</p>
              <p className="text-sm mt-1">Archive tickets from the main tickets list to free up screen space</p>
            </div>
          ) : (
            <>
              {/* Table header */}
              <div className="grid grid-cols-12 gap-3 px-5 py-2.5 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                <div className="col-span-1">#</div>
                <div className="col-span-3">Subject</div>
                <div className="col-span-2">App</div>
                <div className="col-span-1">Priority</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-2">Customer</div>
                <div className="col-span-1">Archived</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>
              {/* Rows */}
              {filtered.map(ticket => (
                <div
                  key={ticket.id}
                  onClick={() => router.push(`/tickets/${ticket.id}`)}
                  className="grid grid-cols-12 gap-3 px-5 py-3.5 border-b border-slate-100 hover:bg-slate-50 transition-colors items-center cursor-pointer last:border-0 group"
                >
                  <div className="col-span-1 text-xs text-slate-400 font-mono">#{ticket.ticketNumber}</div>
                  <div className="col-span-3">
                    <p className="text-sm font-medium text-slate-600 truncate">{ticket.subject ?? '—'}</p>
                    <p className="text-xs text-slate-400 truncate">{(ticket.category ?? '').replace('_', ' ')}</p>
                  </div>
                  <div className="col-span-2">
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${
                      ticket.app === 'FishingPalPro' ? 'bg-[#00B4D8]/15 text-[#00B4D8]' :
                      ticket.app === 'SleuthPro' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {ticket.app === 'FishingPalPro' ? <Fish className="h-3 w-3" /> :
                       ticket.app === 'SleuthPro' ? <Search className="h-3 w-3" /> :
                       <Music className="h-3 w-3" />}
                      {ticket.app === 'FishingPalPro' ? 'Fishing' :
                       ticket.app === 'SleuthPro' ? 'Sleuth' : 'Playlist'}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <div className="flex items-center gap-1.5">
                      <div className={`h-2 w-2 rounded-full shrink-0 ${PRIORITY_DOT[ticket.priority ?? 'low'] ?? 'bg-slate-400'}`} />
                      <span className="text-xs text-slate-600 capitalize">{ticket.priority ?? '—'}</span>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[ticket.status ?? ''] ?? 'bg-gray-100 text-gray-600'}`}>
                      {(ticket.status ?? '').replace('_', ' ')}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-slate-700 truncate">{ticket.customerName ?? '—'}</p>
                    <p className="text-xs text-slate-400 truncate">{ticket.customerEmail ?? '—'}</p>
                  </div>
                  <div className="col-span-1 text-xs text-slate-400">
                    {ticket.archivedAt
                      ? formatDistanceToNow(new Date(ticket.archivedAt), { addSuffix: true })
                      : '—'}
                  </div>
                  <div className="col-span-1 flex justify-end gap-1">
                    {actionId === ticket.id ? (
                      <div className="h-4 w-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <button
                          onClick={(e) => handleRestore(e, ticket.id)}
                          title="Restore ticket to main list"
                          className="p-1.5 rounded-md hover:bg-green-100 text-slate-400 hover:text-green-600 transition-colors"
                        >
                          <ArchiveRestore className="h-4 w-4" />
                        </button>
                        <button
                          onClick={(e) => handleDelete(e, ticket.id, ticket.subject ?? '')}
                          title="Permanently delete"
                          className="p-1.5 rounded-md hover:bg-red-100 text-slate-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
