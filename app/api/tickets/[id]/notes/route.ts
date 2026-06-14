import { NextResponse } from 'next/server'
import { addNote } from '@/lib/store'

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await request.json()
  const note = addNote(id, {
    content: body.content || '',
    author: body.author || 'Team',
    isInternal: body.isInternal ?? false,
  })
  if (!note) return NextResponse.json({ error: 'Ticket not found' }, { status: 404 })
  return NextResponse.json({ note }, { status: 201 })
}
