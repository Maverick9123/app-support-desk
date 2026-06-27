import { NextResponse } from 'next/server'
import { sql } from '@/lib/neon'

export async function GET() {
  try {
    await sql`ALTER TABLE tickets ADD COLUMN IF NOT EXISTS archived BOOLEAN NOT NULL DEFAULT false`
    await sql`ALTER TABLE tickets ADD COLUMN IF NOT EXISTS archived_at TIMESTAMPTZ`
    return NextResponse.json({
      success: true,
      message: 'Migration complete: archived and archived_at columns added to tickets table.',
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
