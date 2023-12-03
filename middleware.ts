import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const { headers, url } = req

  console.log('여기 오냐?', url)

  try {
    const { status } = await fetch('https://api.sttock.co.kr/api/v1/user/me', {
      headers: { Cookie: headers.get('cookie') ?? '' },
    })
    if (status === 200) {
      const nextRes = NextResponse.next()
      nextRes.cookies.set('isAuth', 'true')
      return nextRes
    }
    const redirectRes = NextResponse.redirect(
      new URL(`/login?continue=${encodeURIComponent(url)}`, url)
    )
    redirectRes.cookies.set('isAuth', 'false')
    return redirectRes
  } catch (err) {
    const redirectRes = NextResponse.redirect(
      new URL(`/login?continue=${encodeURIComponent(url)}`, url)
    )
    redirectRes.cookies.set('isAuth', 'false')
    return redirectRes
  }
}

export const config = {
  matcher: ['/calendar', '/list', '/mypage', '/this-week', '/product/:path*'],
}
