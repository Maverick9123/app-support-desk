// force-dynamic prevents static prerendering of /_not-found,
// which avoids a React hooks dispatcher bug in Next.js 15.5.x SSG workers.
export const dynamic = 'force-dynamic'

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        404 — Page Not Found
      </h1>
      <a href="/" style={{ color: '#00B4D8' }}>
        Go back home
      </a>
    </div>
  )
}
