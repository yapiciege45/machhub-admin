import { NextResponse } from 'next/server'
import { getUser } from './lib/getUser'
 
export async function middleware(req) {
  let token = req.cookies.get('token')
  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  const user = await getUser(token)

  if (!user) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  const response = NextResponse.next()

  response.cookies.set('token', token)
}

export const config = {
  matcher: '/dashboard/:path*',
}