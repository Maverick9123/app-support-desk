import { sql } from './neon'
import { Ticket, Contact, Agent, TicketNote } from '@/types'

export const agents: Agent[] = [
  { id: 'a1', name: 'Bruce Wynn', email: 'btwynn@bellsouth.net', role: 'admin', initials: 'BW' },
  { id: 'a2', name: 'Sarah Johnson', email: 'sarah@support.com', role: 'agent', initials: 'SJ' },
  { id: 'a3', name: 'Mike Davis', email: 'mike@support.com', role: 'agent', initials: 'MD' },
]

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

export async function updateTicket(
  id: string,
  data: Partial<{
    subject: string
    description: string
    status: string
    priority: string
    app: string
    category: string
    customerName: string
    customerEmail: string
    assignedTo: string | null
  }>
): Promise<Ticket | null> {
  const existing = await getTicketById(id)
  if (!existing) return null
  await sql`
    UPDATE tickets SET