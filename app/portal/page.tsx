'use client'

import { ChatWidget } from '@/components/chat-widget'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, Fish, Music, Search, AlertCircle } from 'lucide-react'

export default function PortalPage() {
  const [form, setForm] = useState({
    customerName: '', customerEmail: '', app: '', category: '', subject: '', description: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [ticketNum, setTicketNum] = useState(0)
  const [error, setError] = useState('')

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.customerName || !form.customerEmail || !form.app || !form.category || !form.subject) {
      setError('Please fill in all required fields.')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, status: 'open', priority: 'medium', assignedTo: null }),
      })
      if (!res.ok) throw new Error('Failed')
      const data = await res.json()
      setTicketNum(data.ticketNumber)
      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3a 100%)' }}>
        <Card className="max-w-md w-full text-center shadow-2xl border-0">
          <CardContent className="pt-12 pb-10 px-8">
            <div className="h-18 w-18 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5" style={{ width: 72, height: 72 }}>
              <CheckCircle className="h-9 w-9 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Ticket Submitted!</h2>
            <p className="text-slate-500 mb-1">Your ticket number is</p>
            <p className="text-3xl font-bold text-[#00B4D8] mb-4">#{ticketNum}</p>
            <p className="text-sm text-slate-500 mb-6">Our support team will review your request and get back to you at <strong>{form.customerEmail}</strong> as soon as possible.</p>
            <Button className="text-white w-full" style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }} onClick={() => { setSuccess(false); setForm({ customerName: '', customerEmail: '', app: '', category: '', subject: '', description: '' }) }}>
              Submit Another Request
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3a 100%)' }}>
      {/* Header */}
      <div className="text-center pt-10 pb-8 px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Fish className="h-7 w-7 text-[#00B4D8]" />
          <Music className="h-6 w-6 text-[#00B4D8]" />
          <Search className="h-6 w-6 text-[#00B4D8]" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Support Center</h1>
        <p className="text-slate-400">FishingPalPro · PlayListAI · SleuthPro — How can we help you?</p>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto px-4 pb-12">
        <Card className="shadow-2xl border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-slate-800">Submit a Support Request</CardTitle>
            <p className="text-sm text-slate-500">Fill out the form below and we&apos;ll get back to you promptly.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Your Name <span className="text-red-500">*</span></Label>
                  <Input id="name" placeholder="John Smith" value={form.customerName} onChange={e => set('customerName', e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                  <Input id="email" type="email" placeholder="john@example.com" value={form.customerEmail} onChange={e => set('customerEmail', e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Which App? <span className="text-red-500">*</span></Label>
                  <Select value={form.app} onValueChange={v => set('app', v)}>
                    <SelectTrigger><SelectValue placeholder="Select your app" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FishingPalPro">🎣 FishingPalPro</SelectItem>
                      <SelectItem value="PlayListAI">🎵 PlayListAI</SelectItem>
                      <SelectItem value="SleuthPro">🔍 SleuthPro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Issue Type <span className="text-red-500">*</span></Label>
                  <Select value={form.category} onValueChange={v => set('category', v)}>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bug">🐛 Bug / Not Working</SelectItem>
                      <SelectItem value="crash">💥 App Crash</SelectItem>
                      <SelectItem value="purchase_issue">💳 Purchase / Billing</SelectItem>
                      <SelectItem value="feature_request">✨ Feature Request</SelectItem>
                      <SelectItem value="other">❓ Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
                <Input id="subject" placeholder="Brief description of your issue" value={form.subject} onChange={e => set('subject', e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="desc">Details</Label>
                <Textarea id="desc" placeholder="Please describe your issue in detail. Include your device type, iOS version, and any steps to reproduce the problem..." rows={5} value={form.description} onChange={e => set('description', e.target.value)} />
              </div>
              {error && <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertDescription>{error}</AlertDescription></Alert>}
              <Button type="submit" disabled={submitting} className="w-full h-11 text-white font-semibold" style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}>
                {submitting ? 'Submitting...' : 'Submit Support Request'}
              </Button>
            </form>
          </CardContent>
        </Card>
        <ChatWidget />
        <p className="text-center text-slate-500 text-xs mt-6">Powered by DreamTeamApps · Average response time: 24 hours</p>
      </div>
    </div>
  )
}
