'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, ArrowLeft } from 'lucide-react'

const AGENTS = [
  { id: 'a1', name: 'Bruce Wynn' },
  { id: 'a2', name: 'Sarah Johnson' },
  { id: 'a3', name: 'Mike Davis' },
]

export default function NewTicketPage() {
  const [form, setForm] = useState({
    subject: '', description: '', app: '', category: '', priority: 'medium',
    customerName: '', customerEmail: '', assignedTo: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.subject || !form.app || !form.category || !form.customerName || !form.customerEmail) {
      setError('Please fill in all required fields.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const stored = localStorage.getItem('currentAgent')
      const agent = stored ? JSON.parse(stored) : null
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          status: 'open',
          assignedTo: form.assignedTo || null,
          createdBy: agent?.name || 'Team',
        }),
      })
      if (!res.ok) throw new Error('Failed to create ticket')
      setSuccess(true)
      setForm({ subject: '', description: '', app: '', category: '', priority: 'medium', customerName: '', customerEmail: '', assignedTo: '' })
    } catch {
      setError('Failed to create ticket. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="p-6 flex items-center justify-center min-h-96">
        <Card className="max-w-md w-full text-center border-green-200">
          <CardContent className="pt-10 pb-8 px-8">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Ticket Created!</h2>
            <p className="text-slate-500 text-sm mb-6">The ticket has been added to the queue.</p>
            <div className="flex gap-3">
              <Link href="/tickets" className="flex-1">
                <Button variant="outline" className="w-full">View All Tickets</Button>
              </Link>
              <Button className="flex-1 text-white" style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }} onClick={() => setSuccess(false)}>
                New Ticket
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/tickets">
          <Button variant="ghost" size="sm" className="gap-1 text-slate-500"><ArrowLeft className="h-4 w-4" /> Back</Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">New Ticket</h1>
          <p className="text-slate-500 text-sm">Manually enter a support request</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Customer info */}
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Customer Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="customerName">Full Name <span className="text-red-500">*</span></Label>
                <Input id="customerName" placeholder="John Smith" value={form.customerName} onChange={e => set('customerName', e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="customerEmail">Email Address <span className="text-red-500">*</span></Label>
                <Input id="customerEmail" type="email" placeholder="john@example.com" value={form.customerEmail} onChange={e => set('customerEmail', e.target.value)} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ticket details */}
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Ticket Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
              <Input id="subject" placeholder="Brief description of the issue" value={form.subject} onChange={e => set('subject', e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Detailed description of the problem..." rows={4} value={form.description} onChange={e => set('description', e.target.value)} />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <Label>App <span className="text-red-500">*</span></Label>
                <Select value={form.app} onValueChange={v => set('app', v)}>
                  <SelectTrigger><SelectValue placeholder="Select app" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="FishingPalPro">🎣 FishingPalPro</SelectItem>
                    <SelectItem value="PlayListAI">🎵 PlayListAI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Category <span className="text-red-500">*</span></Label>
                <Select value={form.category} onValueChange={v => set('category', v)}>
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bug">🐛 Bug</SelectItem>
                    <SelectItem value="crash">💥 Crash</SelectItem>
                    <SelectItem value="purchase_issue">💳 Purchase Issue</SelectItem>
                    <SelectItem value="feature_request">✨ Feature Request</SelectItem>
                    <SelectItem value="other">❓ Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Priority</Label>
                <Select value={form.priority} onValueChange={v => set('priority', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">🔴 Urgent</SelectItem>
                    <SelectItem value="high">🟠 High</SelectItem>
                    <SelectItem value="medium">🟡 Medium</SelectItem>
                    <SelectItem value="low">🟢 Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Assign To</Label>
              <Select value={form.assignedTo} onValueChange={v => set('assignedTo', v)}>
                <SelectTrigger><SelectValue placeholder="Unassigned" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="unassigned">Unassigned</SelectItem>
                  {AGENTS.map(a => <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

        <div className="flex gap-3">
          <Link href="/tickets" className="flex-1">
            <Button type="button" variant="outline" className="w-full">Cancel</Button>
          </Link>
          <Button type="submit" disabled={submitting} className="flex-1 text-white" style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}>
            {submitting ? 'Creating...' : 'Create Ticket'}
          </Button>
        </div>
      </form>
    </div>
  )
}
