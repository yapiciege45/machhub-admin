import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(req) {

  

  return NextResponse.next()
}