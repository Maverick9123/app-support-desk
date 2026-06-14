import { neon } from '@neondatabase/serverless'
import { Ticket, TicketNote } from '@/types'

export const agents = [
  { id: 'a1', name: 'Bruce Wynn', email: 'btwynn@bellsouth.net', role: 'admin', initials: 'BW' },
  { id: 'a2', name: 'Sarah Johnson', email: 'sarah@support.com', role: 'agent', initials: 'SJ' },
  { id: 'a3', name: 'Mike Davis', email: 'mike@support.com', role: 'agent', initials: 'MD' },
]

let ready = false

function db() {
  return neon(process.env.DATABASE_URL!)
}

async function ensureTables() {
  if (ready) return
  const sql = db()
  await sql`
    CREATE TABLE IF NOT EXISTS hd_tickets (
      id TEXT PRIMARY KEY,
      ticket_data JSONB NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `
  await sql`
    CREATE TABLE IF NOT EXISTS hd_counter (
      id INTEGER PRIMARY KEY,
      value INTEGER NOT NULL DEFAULT 7
    )
  `
  await sql`
    INSERT INTO hd_counter (id, value) VALUES (1, 7) ON CONFLICT (id) DO NOTHING
  `
  const rows = await sql`SELECT COUNT(*) as count FROM hd_tickets`
  if (parseInt(rows[0].count) === 0) {
    const seed = buildSeedTickets()
    for (const t of seed) {
      await sql`INSERT INTO hd_tickets (id, ticket_data) VALUES (${t.id}, ${JSON.stringify(t)}::jsonb)`
    }
  }
  ready = true
}

export async function getTickets(app?: string, status?: string): Promise<Ticket[]> {
  await ensureTables()
  const sql = db()
  const rows = await sql`SELECT ticket_data FROM hd_tickets ORDER BY (ticket_data->>'createdAt') DESC`
  let tickets = rows.map(r => r.ticket_data as Ticket)
  if (app && app !== 'all') tickets = tickets.filter(t => t.app === app)
  if (status && status !== 'all') tickets = tickets.filter(t => t.status === status)
  return tickets
}

export async function getTicketById(id: string): Promise<Ticket | undefined> {
  await ensureTables()
  const sql = db()
  const rows = await sql`SELECT ticket_data FROM hd_tickets WHERE id = ${id}`
  return rows.length > 0 ? (rows[0].ticket_data as Ticket) : undefined
}

export async function createTicket(
  data: Omit<Ticket, 'id' | 'ticketNumber' | 'notes' | 'createdAt' | 'updatedAt'>
): Promise<Ticket> {
  await ensureTables()
  const sql = db()
  const counter = await sql`UPDATE hd_counter SET value = value + 1 WHERE id = 1 RETURNING value`
  const ticket: Ticket = {
    ...data,
    id: crypto.randomUUID(),
    ticketNumber: counter[0].value,
    notes: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  await sql`INSERT INTO hd_tickets (id, ticket_data) VALUES (${ticket.id}, ${JSON.stringify(ticket)}::jsonb)`
  return ticket
}

export async function updateTicket(
  id: string,
  updates: Partial<Omit<Ticket, 'id' | 'ticketNumber' | 'notes' | 'createdAt'>>
): Promise<Ticket | null> {
  await ensureTables()
  const sql = db()
  const rows = await sql`SELECT ticket_data FROM hd_tickets WHERE id = ${id}`
  if (rows.length === 0) return null
  const ticket = rows[0].ticket_data as Ticket
  const updated = { ...ticket, ...updates, updatedAt: new Date().toISOString() }
  await sql`UPDATE hd_tickets SET ticket_data = ${JSON.stringify(updated)}::jsonb WHERE id = ${id}`
  return updated
}

export async function addNote(
  ticketId: string,
  note: Omit<TicketNote, 'id' | 'createdAt'>
): Promise<TicketNote | null> {
  await ensureTables()
  const sql = db()
  const rows = await sql`SELECT ticket_data FROM hd_tickets WHERE id = ${ticketId}`
  if (rows.length === 0) return null
  const ticket = rows[0].ticket_data as Ticket
  const newNote: TicketNote = { ...note, id: crypto.randomUUID(), createdAt: new Date().toISOString() }
  ticket.notes.push(newNote)
  ticket.updatedAt = new Date().toISOString()
  await sql`UPDATE hd_tickets SET ticket_data = ${JSON.stringify(ticket)}::jsonb WHERE id = ${ticketId}`
  return newNote
}

export async function getStats() {
  const tickets = await getTickets()
  return {
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in_progress').length,
    pending: tickets.filter(t => t.status === 'pending').length,
    resolved: tickets.filter(t => t.status === 'resolved' || t.status === 'closed').length,
    total: tickets.length,
    fishingPalPro: tickets.filter(t => t.app === 'FishingPalPro' && !['resolved', 'closed'].includes(t.status)).length,
    playListAI: tickets.filter(t => t.app === 'PlayListAI' && !['resolved', 'closed'].includes(t.status)).length,
  }
}

function buildSeedTickets(): Ticket[] {
  const now = Date.now()
  return [
    {
      id: 't1', ticketNumber: 1,
      subject: 'App crashes when logging a catch with GPS',
      description: 'Every time I tap Save on the catch log screen with GPS enabled, the app crashes immediately. Running iPhone 15 Pro Max iOS 26.',
      status: 'open', priority: 'urgent', app: 'FishingPalPro', category: 'crash',
      customerName: 'John Martinez', customerEmail: 'john.martinez@gmail.com',
      assignedTo: 'a2', notes: [],
      createdAt: new Date(now - 2 * 3600000).toISOString(),
      updatedAt: new Date(now - 2 * 3600000).toISOString(),
    },
    {
      id: 't2', ticketNumber: 2,
      subject: 'Annual subscription not unlocking premium features',
      description: 'I purchased the Annual plan but the app still shows the paywall. I have a receipt from Apple.',
      status: 'in_progress', priority: 'high', app: 'FishingPalPro', category: 'purchase_issue',
      customerName: 'Linda Chen', customerEmail: 'lchen@outlook.com',
      assignedTo: 'a1',
      notes: [{ id: 'n1', content: 'Asked customer to go to Settings → Restore Purchases.', author: 'Bruce Wynn', isInternal: false, createdAt: new Date(now - 3600000).toISOString() }],
      createdAt: new Date(now - 5 * 3600000).toISOString(),
      updatedAt: new Date(now - 3600000).toISOString(),
    },
    {
      id: 't3', ticketNumber: 3,
      subject: 'Weather section shows infinite loading spinner',
      description: 'The weather tab never loads data. I have a great internet connection.',
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
      notes: [{ id: 'n2', content: 'Resolved — customer needed to re-enable Siri in Settings → Privacy & Security.', author: 'Bruce Wynn', isInternal: false, createdAt: new Date(now - 2 * 86400000).toISOString() }],
      createdAt: new Date(now - 3 * 86400000).toISOString(),
      updatedAt: new Date(now - 2 * 86400000).toISOString(),
    },
    {
      id: 't5', ticketNumber: 5,
      subject: 'Genre search returns no results',
      description: 'Selecting Jazz, Rock, or any genre shows "No results found" immediately.',
      status: 'open', priority: 'high', app: 'PlayListAI', category: 'bug',
      customerName: 'David Kim', customerEmail: 'dkim@icloud.com',
      assignedTo: 'a2', notes: [],
      createdAt: new Date(now - 3 * 3600000).toISOString(),
      updatedAt: new Date(now - 3 * 3600000).toISOString(),
    },
    {
      id: 't6', ticketNumber: 6,
      subject: 'Feature request: Import existing Spotify playlists',
      description: 'Would love to pull in my Spotify playlists and use PlayListAI to enhance them.',
      status: 'open', priority: 'low', app: 'PlayListAI', category: 'feature_request',
      customerName: 'Amanda Foster', customerEmail: 'amanda.f@gmail.com',
      assignedTo: null, notes: [],
      createdAt: new Date(now - 2 * 86400000).toISOString(),
      updatedAt: new Date(now - 2 * 86400000).toISOString(),
    },
  ]
}
