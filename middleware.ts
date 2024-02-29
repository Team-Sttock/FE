import { type NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  //   const { headers, url } = req
  //   const baseUrl =
  //     process.env.NODE_ENV === 'development' ? 'http://44.210.56.132:8080' : ''
  //   try {
  //     const { status } = await fetch(`${baseUrl}/api/v1/user/me`, {
  //       headers: { Cookie: headers.get('cookie') ?? '' },
  //     })
  //     if (status === 200) {
  //       const nextRes = NextResponse.next()
  //       nextRes.cookies.set('isAuth', 'true')
  //       return nextRes
  //     }
  //     // Refresh Token 로직짜기. 있던 쿠키 그대로 호출함. 리프레시 한걸 그대로 받음.
  //     if (status === 401) {
  //       const { status: refreshStatus, headers: refreshHeaders } = await fetch(
  //         `${baseUrl}/api/v1/`,
  //         {
  //           headers: { Cookie: headers.get('cookie') ?? '' },
  //         }
  //       )
  //       if (refreshStatus === 201) {
  //         const nextRes = NextResponse.next()
  //         refreshHeaders.forEach((value, key) => {
  //           if (key.toLowerCase() === 'set-cookie') {
  //             nextRes.headers.append('Set-Cookie', value)
  //           }
  //         })
  //         nextRes.cookies.set('isAuth', 'true')
  //         return nextRes
  //       }
  //     }
  //     const redirectRes = NextResponse.redirect(
  //       new URL(`/login?continue=${encodeURIComponent(url)}`, url)
  //     )
  //     redirectRes.cookies.set('isAuth', 'false')
  //     return redirectRes
  //   } catch (err) {
  //     const redirectRes = NextResponse.redirect(
  //       new URL(`/login?continue=${encodeURIComponent(url)}`, url)
  //     )
  //     redirectRes.cookies.set('isAuth', 'false')
  //     return redirectRes
  //   }
}

export const config = {
  matcher: ['/calendar', '/list', '/mypage', '/this-week', '/product/:path*'],
}
