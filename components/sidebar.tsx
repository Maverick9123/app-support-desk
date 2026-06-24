'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, FileText, Plus, Users, Settings, Globe, Fish, Music, Search, LogOut, ChevronRight } from 'lucide-react'
import { Stats } from '@/types'

interface AgentInfo {
  name: string
  email: string
  initials: string
  role: string
}

export function Sidebar() {
  const pathname = usePathname()
  const [agent, setAgent] = useState<AgentInfo | null>(null)
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('currentAgent')
    if (stored) setAgent(JSON.parse(stored))
  }, [])

  useEffect(() => {
    fetch('/api/stats').then(r => r.json()).then(setStats).catch(() => null)
  }, [pathname])

  function handleLogout() {
    localStorage.removeItem('currentAgent')
    window.location.href = '/'
  }

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/tickets', label: 'All Tickets', icon: FileText, badge: stats ? stats.open + stats.inProgress + stats.pending : null },
    { href: '/tickets/new', label: 'New Ticket', icon: Plus },
    { href: '/contacts', label: 'Contacts', icon: Users },
    { href: '/portal', label: 'Customer Portal', icon: Globe, external: true },
    { href: '/settings', label: 'Settings', icon: Settings },
  ]

  const appItems = [
    { app: 'FishingPalPro', icon: Fish, badgeColor: 'bg-red-500/80' },
    { app: 'PlayListAI', icon: Music, badgeColor: 'bg-orange-500/80' },
    { app: 'SleuthPro', icon: Search, badgeColor: 'bg-teal-500/80' },
  ]

  return (
    <aside className="w-60 flex flex-col shrink-0 min-h-screen" style={{ background: '#0D1B2A' }}>
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2
