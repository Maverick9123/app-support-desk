import { sql } from './neon'
import { Ticket, Contact, Agent, TicketNote } from '@/types'

export const agents: Agent[] = [
  { id: 'a1', name: 'Bruce Wynn', email: 'btwynn@bellsouth.net', role: 'admin', initials: 'BW' },
  { id: 'a2', name: 'Sarah Johnson', email: 'sarah@support.com', role: 'agent', initials: 'SJ' },
  { id: 'a3', name: 'Mike Davis', email: 'mike@support.com', role: 'agent', initials: 'MD' },
]

type UpdateTicketData = {
  subject?: string
  description?: string
  status?: string
  priority?: string
  app?: string | null
  category?: string
  customerName?: string
  customerEmail?: string
  assignedTo?: string | null
}

function rowToTicket(row: any): Ticket {
  return {
    id: row.id,
    ticketNumber: row.ticket_number,
    subject: row.subject,
    description: row.description,
    status: row.status,
    priority: row.priority,
    app: row.app,
    category: row.category,
    customerName: row.customer_name,
    customerEmail: row.customer_email,
    assignedTo: row.assigned_to,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    notes: Array.isArray(row.notes)
      ? row.notes.map((n: any) => ({
          id: n.id,
          ticketId: row.id,
          content: n.content,
          author: n.author,
          isInternal: n.is_internal,
          createdAt: n.created_at,
        }))
      : [],
  }
}

function rowToContact(row: any): Contact {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    app: row.app,
    ticketCount: row.ticket_count,
    lastTicketDate: row.last_ticket_date,
    createdAt: row.created_at,
  }
}

export async function getTickets(app?: string, status?: string): Promise<Ticket[]> {
  let rows: any[]
  if (app && status) {
    rows = await sql`
      SELECT t.*, COALESCE(json_agg(tn ORDER BY tn.created_at) FILTER (WHERE tn.id IS NOT NULL), '[]') as notes
      FROM tickets t LEFT JOIN ticket_notes tn ON t.id = tn.ticket_id
      WHERE t.app = ${app} AND t.status = ${status}
      GROUP BY t.id ORDER BY t.created_at DESC
    `
  } else if (app) {
    rows = await sql`
      SELECT t.*, COALESCE(json_agg(tn ORDER BY tn.created_at) FILTER (WHERE tn.id IS NOT NULL), '[]') as notes
      FROM tickets t LEFT JOIN ticket_notes tn ON t.id = tn.ticket_id
      WHERE t.app = ${app}
      GROUP BY t.id ORDER BY t.created_at DESC
    `
  } else if (status) {
    rows = await sql`
      SELECT t.*, COALESCE(json_agg(tn ORDER BY tn.created_at) FILTER (WHERE tn.id IS NOT NULL), '[]') as notes
      FROM tickets t LEFT JOIN ticket_notes tn ON t.id = tn.ticket_id
      WHERE t.status = ${status}
      GROUP BY t.id ORDER BY t.created_at DESC
    `
  } else {
    rows = await sql`
      SELECT t.*, COALESCE(json_agg(tn ORDER BY tn.created_at) FILTER (WHERE tn.id IS NOT NULL), '[]') as notes
      FROM tickets t LEFT JOIN ticket_notes tn ON t.id = tn.ticket_id
      GROUP BY t.id ORDER BY t.created_at DESC
    `
  }
  return rows.map(rowToTicket)
}

export async function getTicketById(id: string): Promise<Ticket | null> {
  const rows = await sql`
    SELECT t.*, COALESCE(json_agg(tn ORDER BY tn.created_at) FILTER (WHERE tn.id IS NOT NULL), '[]') as notes
    FROM tickets t LEFT JOIN ticket_notes tn ON t.id = tn.ticket_id
    WHERE t.id = ${id}
    GROUP BY t.id
  `
  if (rows.length === 0) return null
  return rowToTicket(rows[0])
}

export async function createTicket(data: {
  subject: string
  description: string
  status: string
  priority: string
  app?: string
  category: string
  customerName: string
  customerEmail: string
  assignedTo?: string | null
}): Promise<Ticket> {
  const id = `ticket-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  const rows = await sql`
    INSERT INTO tickets (id, subject, description, status, priority, app, category, customer_name, customer_email, assigned_to)
    VALUES (${id}, ${data.subject}, ${data.description}, ${data.status}, ${data.priority}, ${data.app ?? null}, ${data.category}, ${data.customerName}, ${data.customerEmail}, ${data.assignedTo ?? null})
    RETURNING *
  `
  if (data.customerEmail) {
    await sql`
      INSERT INTO contacts (id, name, email, app, ticket_count, last_ticket_date)
      VALUES (${`contact-${Date.now()}`}, ${data.customerName}, ${data.customerEmail}, ${data.app ?? null}, 1, NOW())
      ON CONFLICT (email) DO UPDATE SET
        ticket_count = contacts.ticket_count + 1,
        last_ticket_date = NOW(),
        name = EXCLUDED.name
    `
  }
  return rowToTicket({ ...rows[0], notes: [] })
}

export async function updateTicket(id: string, data: UpdateTicketData): Promise<Ticket | null> {
  const existing = await getTicketById(id)
  if (!existing) return null
  const subject = data.subject !== undefined ? data.subject : existing.subject
  const description = data.description !== undefined ? data.description : existing.description
  const status = data.status !== undefined ? data.status : existing.status
  const priority = data.priority !== undefined ? data.priority : existing.priority
  const app = data.app !== undefined ? data.app : existing.app
  const category = data.category !== undefined ? data.category : existing.category
  const customerName = data.customerName !== undefined ? data.customerName : existing.customerName
  const customerEmail = data.customerEmail !== undefined ? data.customerEmail : existing.customerEmail
  const assignedTo = data.assignedTo !== undefined ? data.assignedTo : existing.assignedTo
  await sql`
    UPDATE tickets SET
      subject = ${subject},
      description = ${description},
      status = ${status},
      priority = ${priority},
      app = ${app ?? null},
      category = ${category},
      customer_name = ${customerName},
      customer_email = ${customerEmail},
      assigned_to = ${assignedTo ?? null},
      updated_at = NOW()
    WHERE id = ${id}
  `
  return getTicketById(id)
}

export async function addNote(
  ticketId: string,
  data: { content: string; author: string; isInternal: boolean }
): Promise<TicketNote | null> {
  const ticket = await getTicketById(ticketId)
  if (!ticket) return null
  const id = `note-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  const rows = await sql`
    INSERT INTO ticket_notes (id, ticket_id, content, author, is_internal)
    VALUES (${id}, ${ticketId}, ${data.content}, ${data.author}, ${data.isInternal})
    RETURNING *
  `
  const row = rows[0]
  return {
    id: row.id,
    ticketId: row.ticket_id,
    content: row.content,
    author: row.author,
    isInternal: row.is_internal,
    createdAt: row.created_at,
  }
}

export async function getContacts(): Promise<Contact[]> {
  const rows = await sql`SELECT * FROM contacts ORDER BY last_ticket_date DESC NULLS LAST`
  return rows.map(rowToContact)
}

export async function getStats(): Promise<{
  total: number
  open: number
  inProgress: number
  resolved: number
  byApp: Record<string, number>
}> {
  const [totals, byApp] = await Promise.all([
    sql`SELECT status, COUNT(*) as count FROM tickets GROUP BY status`,
    sql`SELECT app, COUNT(*) as count FROM tickets WHERE app IS NOT NULL GROUP BY app`,
  ])
  const stats = { total: 0, open: 0, inProgress: 0, resolved: 0, byApp: {} as Record<string, number> }
  for (const row of totals) {
    const count = parseInt(row.count)
    stats.total += count
    if (row.status === 'open') stats.open = count
    else if (row.status === 'in-progress') stats.inProgress = count
    else if (row.status === 'resolved') stats.resolved = count
  }
  for (const row of byApp) {
    stats.byApp[row.app] = parseInt(row.count)
  }
  return stats
}