import { NextResponse } from 'next/server'
import { getTickets, createTicket } from '@/lib/store'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const app = searchParams.get('app') || undefined
  const status = searchParams.get('status') || undefined
  return NextResponse.json(await getTickets(app, status))
}

export async function POST(request: Request) {
  const body = await request.json()
  const ticket = await createTicket({
    subject: body.subject || '',
    description: body.description || '',
    status: body.status || 'open',
    priority: body.priority || 'medium',
    app: body.app,
    category: body.category || 'other',
    customerName: body.customerName || '',
    customerEmail: body.customerEmail || '',
    assignedTo: body.assignedTo || null,
  })
  return NextResponse.json(ticket, { status: 201 })
}