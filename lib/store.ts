import { Ticket, Contact, Agent, TicketNote } from '@/types'

export const agents: Agent[] = [
  { id: 'a1', name: 'Bruce Wynn', email: 'btwynn@bellsouth.net', role: 'admin', initials: 'BW' },
  { id: 'a2', name: 'Sarah Johnson', email: 'sarah@support.com', role: 'agent', initials: 'SJ' },
  { id: 'a3', name: 'Mike Davis', email: 'mike@support.com', role: 'agent', initials: 'MD' },
]

let counter = 7

const now = Date.now()
let tickets: Ticket[] = [
  {
    id: 't1', ticketNumber: 1,
    subject: 'App crashes when logging a catch with GPS',
    description: 'Every time I tap Save on the catch log screen with GPS enabled, the app crashes immediately. This has happened 3 times today. Running iPhone 15 Pro Max iOS 26.',
    status: 'open', priority: 'urgent', app: 'FishingPalPro', category: 'crash',
    customerName: 'John Martinez', customerEmail: 'john.martinez@gmail.com',
    assignedTo: 'a2', notes: [],
    createdAt: new Date(now - 2 * 3600000).toISOString(),
    updatedAt: new Date(now - 2 * 3600000).toISOString(),
  },
  {
    id: 't2', ticketNumber: 2,
    subject: 'Annual subscription not unlocking premium features',
    description: 'I purchased the Annual plan but the app still shows the paywall. I have a receipt from Apple. Please help!',
    status: 'in_progress', priority: 'high', app: 'FishingPalPro', category: 'purchase_issue',
    customerName: 'Linda Chen', customerEmail: 'lchen@outlook.com',
    assignedTo: 'a1',
    notes: [{
      id: 'n1',
      content: 'Asked customer to go to Settings → Restore Purchases. Waiting for their response.',
      author: 'Bruce Wynn', isInternal: false,
      createdAt: new Date(now - 3600000).toISOString(),
    }],
    createdAt: new Date(now - 5 * 3600000).toISOString(),
    updatedAt: new Date(now - 3600000).toISOString(),
  },
  {
    id: 't3', ticketNumber: 3,
    subject: 'Weather section shows infinite loading spinner',
    description: 'The weather tab never loads data. I have a great internet connection and have tried restarting the app multiple times.',
    status: 'pending', priority: 'medium', app: 'FishingPalPro', category: 'bug',
    customerName: 'Robert Taylor', customerEmail: 'rtaylor@yahoo.com',
    assignedTo: 'a3', notes: [],
    createdAt: new Date(now - 86400000).toISOString(),
    updatedAt: new Date(now - 86400000).toISOString(),
  },
  {
    id: 't4', ticketNumber: 4,
    subject: 'Siri voice command not recognized',
    description: 'When I say "Log a catch in FishingPalPro" Siri says it doesn\'t know that app.',
    status: 'resolved', priority: 'low', app: 'FishingPalPro', category: 'bug',
    customerName: 'Patricia Williams', customerEmail: 'pwilliams@gmail.com',
    assignedTo: 'a1',
    notes: [{
      id: 'n2',
      content: 'Resolved — customer needed to re-enable Siri in Settings → Privacy & Security → Siri & Dictation. All working now!',
      author: 'Bruce Wynn', isInternal: false,
      createdAt: new Date(now - 2 * 86400000).toISOString(),
    }],
    createdAt: new Date(now - 3 * 86400000).toISOString(),
    updatedAt: new Date(now - 2 * 86400000).toISOString(),
  },
  {
    id: 't5', ticketNumber: 5,
    subject: 'Genre search returns no results',
    description: 'Selecting Jazz, Rock, or any genre shows "No results found" immediately without loading. This happens every time.',
    status: 'open', priority: 'high', app: 'PlayListAI', category: 'bug',
    customerName: 'David Kim', customerEmail: 'dkim@icloud.com',
    assignedTo: 'a2', notes: [],
    createdAt: new Date(now - 3 * 3600000).toISOString(),
    updatedAt: new Date(now - 3 * 3600000).toISOString(),
  },
  {
    id: 't6', ticketNumber: 6,
    subject: 'Feature request: Import existing Spotify playlists',
    description: 'Would love to pull in my Spotify playlists and use PlayListAI to enhance them with AI suggestions. This would be a killer feature!',
    status: 'open', priority: 'low', app: 'PlayListAI', category: 'feature_request',
    customerName: 'Amanda Foster', customerEmail: 'amanda.f@gmail.com',
    assignedTo: null, notes: [],
    createdAt: new Date(now - 2 * 86400000).toISOString(),
    updatedAt: new Date(now - 2 * 86400000).toISOString(),
  },
]

let contacts: Contact[] = [
  { id: 'c1', name: 'John Martinez', email: 'john.martinez@gmail.com', app: 'FishingPalPro', ticketCount: 1, lastTicketDate: new Date(now - 2 * 3600000).toISOString(), createdAt: new Date(now - 2 * 3600000).toISOString() },
  { id: 'c2', name: 'Linda Chen', email: 'lchen@outlook.com', app: 'FishingPalPro', ticketCount: 1, lastTicketDate: new Date(now - 5 * 3600000).toISOString(), createdAt: new Date(now - 5 * 3600000).toISOString() },
  { id: 'c3', name: 'Robert Taylor', email: 'rtaylor@yahoo.com', app: 'FishingPalPro', ticketCount: 1, lastTicketDate: new Date(now - 86400000).toISOString(), createdAt: new Date(now - 86400000).toISOString() },
  { id: 'c4', name: 'Patricia Williams', email: 'pwilliams@gmail.com', app: 'FishingPalPro', ticketCount: 1, lastTicketDate: new Date(now - 3 * 86400000).toISOString(), createdAt: new Date(now - 3 * 86400000).toISOString() },
  { id: 'c5', name: 'David Kim', email: 'dkim@icloud.com', app: 'PlayListAI', ticketCount: 1, lastTicketDate: new Date(now - 3 * 3600000).toISOString(), createdAt: new Date(now - 3 * 3600000).toISOString() },
  { id: 'c6', name: 'Amanda Foster', email: 'amanda.f@gmail.com', app: 'PlayListAI', ticketCount: 1, lastTicketDate: new Date(now - 2 * 86400000).toISOString(), createdAt: new Date(now - 2 * 86400000).toISOString() },
]

export function getTickets(app?: string, status?: string): Ticket[] {
  let result = [...tickets]
  if (app && app !== 'all') result = result.filter(t => t.app === app)
  if (status && status !== 'all') result = result.filter(t => t.status === status)
  return result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export function getTicketById(id: string): Ticket | undefined {
  return tickets.find(t => t.id === id)
}

export function createTicket(data: Omit<Ticket, 'id' | 'ticketNumber' | 'notes' | 'createdAt' | 'updatedAt'>): Ticket {
  const ticket: Ticket = {
    ...data,
    id: crypto.randomUUID(),
    ticketNumber: counter++,
    notes: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  tickets.unshift(ticket)
  const existing = contacts.find(c => c.email === data.customerEmail)
  if (existing) {
    existing.ticketCount++
    existing.lastTicketDate = ticket.createdAt
  } else {
    contacts.push({
      id: crypto.randomUUID(),
      name: data.customerName,
      email: data.customerEmail,
      app: data.app,
      ticketCount: 1,
      lastTicketDate: ticket.createdAt,
      createdAt: ticket.createdAt,
    })
  }
  return ticket
}

export function updateTicket(id: string, updates: Partial<Omit<Ticket, 'id' | 'ticketNumber' | 'notes' | 'createdAt'>>): Ticket | null {
  const idx = tickets.findIndex(t => t.id === id)
  if (idx === -1) return null
  tickets[idx] = { ...tickets[idx], ...updates, updatedAt: new Date().toISOString() }
  return tickets[idx]
}

export function addNote(ticketId: string, note: Omit<TicketNote, 'id' | 'createdAt'>): TicketNote | null {
  const ticket = tickets.find(t => t.id === ticketId)
  if (!ticket) return null
  const newNote: TicketNote = { ...note, id: crypto.randomUUID(), createdAt: new Date().toISOString() }
  ticket.notes.push(newNote)
  ticket.updatedAt = new Date().toISOString()
  return newNote
}

export function getContacts(): Contact[] {
  return [...contacts].sort((a, b) => new Date(b.lastTicketDate).getTime() - new Date(a.lastTicketDate).getTime())
}

export function getStats() {
  return {
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in_progress').length,
    pending: tickets.filter(t => t.status === 'pending').length,
    resolved: tickets.filter(t => t.status === 'resolved' || t.status === 'closed').length,
    total: tickets.length,
    fishingPalPro: tickets.filter(t => t.app === 'FishingPalPro' && !['resolved','closed'].includes(t.status)).length,
    playListAI: tickets.filter(t => t.app === 'PlayListAI' && !['resolved','closed'].includes(t.status)).length,
  }
}
