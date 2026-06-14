'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Users, Bell, Shield, Info, Plus } from 'lucide-react'

const AGENTS = [
  { name: 'Bruce Wynn', email: 'btwynn@bellsouth.net', role: 'Admin', initials: 'BW' },
  { name: 'Sarah Johnson', email: 'sarah@support.com', role: 'Agent', initials: 'SJ' },
  { name: 'Mike Davis', email: 'mike@support.com', role: 'Agent', initials: 'MD' },
]

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
        <p className="text-slate-500 text-sm mt-0.5">Manage your team and notification preferences</p>
      </div>

      {/* Team Members */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base">
            <Users className="h-4 w-4 text-[#00B4D8]" /> Team Members
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {AGENTS.map(agent => (
            <div key={agent.email} className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}>
                {agent.initials}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-800">{agent.name}</p>
                <p className="text-xs text-slate-500">{agent.email}</p>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${agent.role === 'Admin' ? 'bg-[#00B4D8]/15 text-[#00B4D8]' : 'bg-slate-100 text-slate-600'}`}>
                {agent.role}
              </span>
            </div>
          ))}
          <Separator />
          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-700">Add Team Member</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs">Full Name</Label>
                <Input placeholder="Jane Smith" className="h-9" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Email</Label>
                <Input type="email" placeholder="jane@support.com" className="h-9" />
              </div>
            </div>
            <Button size="sm" className="gap-1.5 text-white" style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}>
              <Plus className="h-3.5 w-3.5" /> Add Member
            </Button>
            <p className="text-xs text-slate-400">Current plan supports up to 5 team members (3 active)</p>
          </div>
        </CardContent>
      </Card>

      {/* Email Notifications */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base">
            <Bell className="h-4 w-4 text-[#00B4D8]" /> Email Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="border-[#00B4D8]/30 bg-[#00B4D8]/5">
            <Info className="h-4 w-4 text-[#00B4D8]" />
            <AlertDescription className="text-sm text-slate-600">
              Email notifications require connecting an email service (Resend or SendGrid) when deploying to production. All settings below are configured and ready.
            </AlertDescription>
          </Alert>
          {[
            { label: 'New ticket submitted', desc: 'Alert all admins when a new ticket arrives via portal or manual entry', defaultOn: true },
            { label: 'Ticket assigned to me', desc: 'Notify me when a ticket is assigned to my name', defaultOn: true },
            { label: 'Customer reply received', desc: 'Alert assigned agent when a customer responds', defaultOn: true },
            { label: 'Ticket resolved', desc: 'Send confirmation email to customer when ticket is closed', defaultOn: false },
            { label: 'Daily summary', desc: 'Morning digest of open and pending tickets', defaultOn: false },
          ].map(item => (
            <div key={item.label} className="flex items-start justify-between gap-4 py-2">
              <div>
                <p className="text-sm font-medium text-slate-800">{item.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
              </div>
              <Switch defaultChecked={item.defaultOn} />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* App Settings */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base">
            <Shield className="h-4 w-4 text-[#00B4D8]" /> App Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Support Portal Title</Label>
            <Input defaultValue="Bruce Wynn Apps — Support" className="max-w-sm" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Support Email (shown on portal)</Label>
            <Input defaultValue="btwynn@bellsouth.net" type="email" className="max-w-sm" />
          </div>
          <div className="flex items-center justify-between max-w-sm">
            <div>
              <p className="text-sm font-medium text-slate-800">Auto-assign new tickets</p>
              <p className="text-xs text-slate-500">Round-robin assignment to available agents</p>
            </div>
            <Switch />
          </div>
          <Button className="text-white" style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}>
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
