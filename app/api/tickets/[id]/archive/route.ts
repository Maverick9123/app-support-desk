import { NextResponse } from 'next/server'
import { archiveTicket, unarchiveTicket } from '@/lib/store'

// POST → archive a ticket (hides it from main list)
export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const ticket = await archiveTicket(id)
  if (!ticket) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(ticket)
}

// DELETE → unarchive / restore a ticket back to main list
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const ticket = await unarchiveTicket(id)
  if (!ticket) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(ticket)
}
