'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { Users, Search, Fish, Music, Mail } from 'lucide-react'
import { Contact } from '@/types'
import { formatDistanceToNow } from 'date-fns'

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/contacts').then(r => r.json()).then(data => { setContacts(data); setLoading(false) })
  }, [])

  const filtered = contacts.filter(c =>
    !search ||
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Contacts</h1>
          <p className="text-slate-500 text-sm mt-0.5">{contacts.length} customers on record</p>
        </div>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <Input placeholder="Search contacts..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-9" />
      </div>

      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-4 space-y-3">{Array(5).fill(0).map((_, i) => <Skeleton key={i} className="h-14 w-full" />)}</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <Users className="h-10 w-10 mx-auto mb-3 opacity-30" />
              <p>No contacts found</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-12 gap-3 px-5 py-2.5 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                <div className="col-span-4">Customer</div>
                <div className="col-span-3">Email</div>
                <div className="col-span-2">App</div>
                <div className="col-span-1 text-center">Tickets</div>
                <div className="col-span-2">Last Contact</div>
              </div>
              {filtered.map(contact => (
                <div key={contact.id} className="grid grid-cols-12 gap-3 px-5 py-3.5 border-b border-slate-100 hover:bg-slate-50 transition-colors items-center last:border-0">
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 shrink-0">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-slate-800">{contact.name}</span>
                  </div>
                  <div className="col-span-3 flex items-center gap-1.5 text-xs text-slate-500">
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{contact.email}</span>
                  </div>
                  <div className="col-span-2">
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${contact.app === 'FishingPalPro' ? 'bg-[#00B4D8]/15 text-[#00B4D8]' : 'bg-purple-100 text-purple-600'}`}>
                      {contact.app === 'FishingPalPro' ? <Fish className="h-3 w-3" /> : <Music className="h-3 w-3" />}
                      {contact.app === 'FishingPalPro' ? 'Fishing' : 'Playlist'}
                    </span>
                  </div>
                  <div className="col-span-1 text-center">
                    <span className="text-sm font-semibold text-slate-700">{contact.ticketCount}</span>
                  </div>
                  <div className="col-span-2 text-xs text-slate-400">
                    {formatDistanceToNow(new Date(contact.lastTicketDate), { addSuffix: true })}
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
