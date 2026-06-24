'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { Plus, Search, Fish, Music, AlertCircle } from 'lucide-react'
import { Ticket } from '@/types'
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
const PRIORITY_DOT: Record<string, string> = {
  urgent: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-yellow-500',
  low: 'bg-slate-400',
}

export default function TicketsPage() {
  const searchParams = useSearchParams()
  const appParam = searchParams?.get('app') || 'all'
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [appFilter, setAppFilter] = useState(appParam)
  const [statusFilter, setStatusFilter] = useState('all')

  const fetchTickets = useCallback(async () => {
    setLoading(true)
    const params = new URLSearchParams()
    if (appFilter !== 'all') params.set('app', appFilter)
    if (statusFilter !== 'all') params.set('status', statusFilter)
    const res = await fetch(`/api/tickets?${params.toString()}`)
    const data = await res.json()
    setTickets(data)
    setLoading(false)
  }, [appFilter, statusFilter])

  useEffect(() => { fetchTickets() }, [fetchTickets])
  useEffect(() => { setAppFilter(appParam) }, [appParam])

  const filtered = tickets.filter(t =>
    !search || t.subject.toLowerCase().includes(search.toLowerCase()) ||
    t.customerName.toLowerCase().includes(search.toLowerCase()) ||
    t.customerEmail.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Tickets</h1>
          <p className="text-slate-500 text-sm mt-0.5">{filtered.length} ticket{filtered.length !== 1 ? 's' : ''} found</p>
        </div>
        <Link href="/tickets/new">
          <Button className="text-white gap-2" style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}>
            <Plus className="h-4 w-4" /> New Ticket
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input placeholder="Search tickets..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-9" />
        </div>
        <Select value={appFilter} onValueChange={setAppFilter}>
          <SelectTrigger className="w-44 h-9">
            <SelectValue placeholder="All Apps" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Apps</SelectItem>
            <SelectItem value="FishingPalPro">🎣 FishingPalPro</SelectItem>
            <SelectItem value="PlayListAI">🎵 PlayListAI</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40 h-9">
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in_progress">In Progress</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
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
              <p className="font-medium">No tickets found</p>
              <p className="text-sm mt-1">Try adjusting your filters</p>
            </div>
          ) : (
            <>
              {/* Table header */}
              <div className="grid grid-cols-12 gap-3 px-5 py-2.5 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                <div className="col-span-1">#</div>
                <div className="col-span-4">Subject</div>
                <div className="col-span-2">App</div>
                <div className="col-span-1">Priority</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-2">Customer</div>
                <div className="col-span-1">Created</div>
              </div>
              {/* Rows */}
              {filtered.map(ticket => (
                <Link key={ticket.id} href={`/tickets/${ticket.id}`} className="grid grid-cols-12 gap-3 px-5 py-3.5 border-b border-slate-100 hover:bg-slate-50 transition-colors items-center cursor-pointer last:border-0">
                  <div className="col-span-1 text-xs text-slate-400 font-mono">#{ticket.ticketNumber}</div>
                  <div className="col-span-4">
                    <p className="text-sm font-medium text-slate-800 truncate">{ticket.subject}</p>
                    <p className="text-xs text-slate-400 truncate">{ticket.category.replace('_', ' ')}</p>
                  </div>
                  <div className="col-span-2">
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${ticket.app === 'FishingPalPro' ? 'bg-[#00B4D8]/15 text-[#00B4D8]' : 'bg-purple-100 text-purple-600'}`}>
                      {ticket.app === 'FishingPalPro' ? <Fish className="h-3 w-3" /> : <Music className="h-3 w-3" />}
                      {ticket.app === 'FishingPalPro' ? 'Fishing' : 'Playlist'}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <div className="flex items-center gap-1.5">
                      <div className={`h-2 w-2 rounded-full shrink-0 ${PRIORITY_DOT[ticket.priority]}`} />
                      <span className="text-xs text-slate-600 capitalize">{ticket.priority}</span>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[ticket.status]}`}>
                      {ticket.status.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-slate-700 truncate">{ticket.customerName}</p>
                    <p className="text-xs text-slate-400 truncate">{ticket.customerEmail}</p>
                  </div>
                  <div className="col-span-1 text-xs text-slate-400">
                    {formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}
                  </div>
                </Link>
              ))}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
