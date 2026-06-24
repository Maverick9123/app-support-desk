'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { ArrowLeft, User, Mail, Clock, MessageSquare, Lock, Send, Fish, Music } from 'lucide-react'
import { Ticket } from '@/types'
import { formatDistanceToNow, format } from 'date-fns'

const STATUS_COLORS: Record<string, string> = {
  open: 'bg-blue-100 text-blue-700 border-blue-200',
  in_progress: 'bg-purple-100 text-purple-700 border-purple-200',
  pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  resolved: 'bg-green-100 text-green-700 border-green-200',
  closed: 'bg-gray-100 text-gray-600 border-gray-200',
}
const PRIORITY_COLORS: Record<string, string> = {
  urgent: 'bg-red-100 text-red-700',
  high: 'bg-orange-100 text-orange-700',
  medium: 'bg-yellow-100 text-yellow-700',
  low: 'bg-slate-100 text-slate-600',
}
const AGENTS = [
  { id: 'a1', name: 'Bruce Wynn' },
  { id: 'a2', name: 'Sarah Johnson' },
  { id: 'a3', name: 'Mike Davis' },
]

export default function TicketDetailPage() {
  const pathname = usePathname()
  const id = pathname?.split('/').pop() || ''
  const [ticket, setTicket] = useState<Ticket | null>(null)
  const [loading, setLoading] = useState(true)
  const [noteText, setNoteText] = useState('')
  const [isInternal, setIsInternal] = useState(false)
  const [sending, setSending] = useState(false)
  const [agentName, setAgentName] = useState('Team')

  useEffect(() => {
    const stored = localStorage.getItem('currentAgent')
    if (stored) setAgentName(JSON.parse(stored).name)
  }, [])

  useEffect(() => {
    if (!id) return
    fetch(`/api/tickets/${id}`).then(r => r.json()).then(data => { setTicket(data); setLoading(false) })
  }, [id])

  async function updateField(field: string, value: string) {
    if (!ticket) return
    const res = await fetch(`/api/tickets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [field]: value }),
    })
    const updated = await res.json()
    setTicket(updated)
  }

  async function sendNote() {
    if (!noteText.trim() || !ticket) return
    setSending(true)
    const res = await fetch(`/api/tickets/${id}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: noteText.trim(), author: agentName, isInternal }),
    })
    const data = await res.json()
    setTicket(prev => prev ? { ...prev, notes: [...prev.notes, data.note], updatedAt: new Date().toISOString() } : prev)
    setNoteText('')
    setSending(false)
  }

  if (loading) return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-60 w-full" />
    </div>
  )

  if (!ticket) return (
    <div className="p-6 text-center py-20">
      <p className="text-slate-500">Ticket not found.</p>
      <Link href="/tickets"><Button variant="outline" className="mt-4">Back to Tickets</Button></Link>
    </div>
  )

  return (
    <div className="p-6 max-w-4xl space-y-5">
      {/* Back + header */}
      <div className="flex items-start gap-3">
        <Link href="/tickets">
          <Button variant="ghost" size="sm" className="gap-1 text-slate-500 mt-0.5"><ArrowLeft className="h-4 w-4" /> Back</Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-slate-400 font-mono">#{ticket.ticketNumber}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${STATUS_COLORS[ticket.status]}`}>{ticket.status.replace('_', ' ')}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${PRIORITY_COLORS[ticket.priority]}`}>{ticket.priority}</span>
            <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${ticket.app === 'FishingPalPro' ? 'bg-[#00B4D8]/15 text-[#00B4D8]' : 'bg-purple-100 text-purple-600'}`}>
              {ticket.app === 'FishingPalPro' ? <Fish className="h-3 w-3" /> : <Music className="h-3 w-3" />} {ticket.app}
            </span>
          </div>
          <h1 className="text-xl font-bold text-slate-800 mt-1">{ticket.subject}</h1>
          <p className="text-xs text-slate-400 mt-0.5">Opened {formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* Main content */}
        <div className="col-span-2 space-y-4">
          {/* Original message */}
          <Card>
            <CardContent className="pt-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                  {ticket.customerName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{ticket.customerName}</p>
                  <p className="text-xs text-slate-400">{ticket.customerEmail}</p>
                </div>
                <span className="ml-auto text-xs text-slate-400">{format(new Date(ticket.createdAt), 'MMM d, yyyy h:mm a')}</span>
              </div>
              <p className="text-sm text-slate-700 whitespace-pre-wrap bg-slate-50 rounded-lg p-4 border">{ticket.description}</p>
            </CardContent>
          </Card>

          {/* Notes / conversation */}
          {ticket.notes.length > 0 && (
            <div className="space-y-3">
              {ticket.notes.map(note => (
                <Card key={note.id} className={note.isInternal ? 'border-yellow-200 bg-yellow-50/50' : 'border-blue-100'}>
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}>
                        {note.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="text-sm font-semibold text-slate-800">{note.author}</p>
                      {note.isInternal && (
                        <span className="flex items-center gap-1 text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full">
                          <Lock className="h-2.5 w-2.5" /> Internal
                        </span>
                      )}
                      <span className="ml-auto text-xs text-slate-400">{formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}</span>
                    </div>
                    <p className="text-sm text-slate-700 pl-9 whitespace-pre-wrap">{note.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Add note */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-[#00B4D8]" /> Add Note / Reply
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                placeholder={isInternal ? 'Internal note (only visible to your team)...' : 'Reply to customer...'}
                rows={3}
                value={noteText}
                onChange={e => setNoteText(e.target.value)}
                className={isInternal ? 'bg-yellow-50 border-yellow-200' : ''}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsInternal(false)}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${!isInternal ? 'bg-blue-100 text-blue-700' : 'text-slate-500 hover:bg-slate-100'}`}
                  >
                    Customer Reply
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsInternal(true)}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1 transition-colors ${isInternal ? 'bg-yellow-100 text-yellow-700' : 'text-slate-500 hover:bg-slate-100'}`}
                  >
                    <Lock className="h-3 w-3" /> Internal Note
                  </button>
                </div>
                <Button size="sm" disabled={!noteText.trim() || sending} onClick={sendNote} className="text-white gap-1.5" style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}>
                  <Send className="h-3.5 w-3.5" /> {sending ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="col-span-1 space-y-4">
          {/* Status controls */}
          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Ticket Properties</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-500">Status</label>
                <Select value={ticket.status} onValueChange={v => updateField('status', v)}>
                  <SelectTrigger className="h-8 text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-500">Priority</label>
                <Select value={ticket.priority} onValueChange={v => updateField('priority', v)}>
                  <SelectTrigger className="h-8 text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">🔴 Urgent</SelectItem>
                    <SelectItem value="high">🟠 High</SelectItem>
                    <SelectItem value="medium">🟡 Medium</SelectItem>
                    <SelectItem value="low">🟢 Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-500">Assigned To</label>
                <Select value={ticket.assignedTo || 'unassigned'} onValueChange={v => updateField('assignedTo', v === 'unassigned' ? '' : v)}>
                  <SelectTrigger className="h-8 text-sm"><SelectValue placeholder="Unassigned" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unassigned">Unassigned</SelectItem>
                    {AGENTS.map(a => <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Customer info */}
          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Customer</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 shrink-0">
                  {ticket.customerName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{ticket.customerName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span className="break-all">{ticket.customerEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                <span>Updated {formatDistanceToNow(new Date(ticket.updatedAt), { addSuffix: true })}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <User className="h-3.5 w-3.5 shrink-0" />
                <span className="capitalize">{ticket.category.replace('_', ' ')}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
