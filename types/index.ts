export type TicketStatus = 'open' | 'in_progress' | 'pending' | 'resolved' | 'closed'
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent'
export type AppType = 'FishingPalPro' | 'PlayListAI' | 'SleuthPro' | 'SkinGuardAI' | 'GigStand'
export type IssueCategory = 'bug' | 'feature_request' | 'purchase_issue' | 'crash' | 'other'

export interface TicketNote {
  id: string
  ticketId: string
  content: string
  author: string
  isInternal: boolean
  createdAt: string
}

export interface Ticket {
  id: string
  ticketNumber: number
  subject: string
  description: string
  status: TicketStatus
  priority: TicketPriority
  app: AppType
  category: IssueCategory
  customerName: string
  customerEmail: string
  assignedTo: string | null
  notes: TicketNote[]
  createdAt: string
  updatedAt: string
  archived: boolean
  archivedAt: string | null
}

export interface Agent {
  id: string
  name: string
  email: string
  role: string
  initials: string
}

export interface Contact {
  id: string
  name: string
  email: string
  app: string | null
  ticketCount: number
  lastTicketDate: string | null
  createdAt: string
}

export interface Stats {
  total: number
  open: number
  inProgress: number
  pending: number
  resolved: number
  archived: number
  byApp: Record<string, number>
}
