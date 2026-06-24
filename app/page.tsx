'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertCircle, Fish, Music } from 'lucide-react'

const AGENTS = [
  { email: 'btwynn@bellsouth.net', name: 'Bruce Wynn', initials: 'BW', role: 'Admin' },
  { email: 'sarah@support.com', name: 'Sarah Johnson', initials: 'SJ', role: 'Agent' },
  { email: 'mike@support.com', name: 'Mike Davis', initials: 'MD', role: 'Agent' },
]

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const agent = AGENTS.find(a => a.email.toLowerCase() === email.toLowerCase())
    if (!agent || password !== 'demo') {
      setError('Invalid credentials. Use an agent email and password: demo')
      setLoading(false)
      return
    }
    localStorage.setItem('currentAgent', JSON.stringify(agent))
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #0a2a3a 100%)' }}>
      <div className="w-full max-w-md px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex items-center gap-1">
              <Fish className="h-7 w-7 text-[#00B4D8]" />
              <Music className="h-5 w-5 text-[#00B4D8]" />
            </div>
            <h1 className="text-3xl font-bold text-white">AppSupport</h1>
          </div>
          <p className="text-slate-400 text-sm">FishingPalPro &amp; PlayListAI Help Desk</p>
        </div>

        <Card className="border-0 shadow-2xl">
          <CardHeader className="pb-4" style={{ background: 'linear-gradient(135deg, #0D1B2A, #0a2a3a)', borderRadius: '0.5rem 0.5rem 0 0' }}>
            <CardTitle className="text-white text-center text-xl">Team Sign In</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 pb-8 px-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 text-white font-semibold text-base"
                style={{ background: 'linear-gradient(135deg, #00B4D8, #0096b4)' }}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Demo hint */}
            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-xs font-semibold text-slate-600 mb-2">Demo Credentials (password: demo)</p>
              {AGENTS.map(a => (
                <button
                  key={a.email}
                  type="button"
                  onClick={() => { setEmail(a.email); setPassword('demo') }}
                  className="block w-full text-left text-xs text-slate-500 hover:text-[#00B4D8] py-0.5 transition-colors"
                >
                  {a.name} — {a.email}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
