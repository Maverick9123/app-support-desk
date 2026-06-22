/**
 * Custom _error page with getInitialProps.
 *
 * This intentionally uses getInitialProps to set hasNonStaticErrorPage=true,
 * which prevents Next.js from attempting to statically prerender /404 and /500.
 * Those static prerender attempts fail in Next.js 15 due to a missing
 * HtmlContext.Provider in the static generation path.
 *
 * In production, 404s are handled by app/not-found.tsx and Vercel's
 * built-in error handling. This file exists purely as a build workaround.
 */
import type { NextPageContext } from 'next'

interface ErrorProps {
  statusCode?: number
}

function Error({ statusCode }: ErrorProps) {
  return null
}

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? 500 : 404
  return { statusCode }
}

export default Error
