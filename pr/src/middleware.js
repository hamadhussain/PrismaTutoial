// // // export default function middleware() {
// // //     // Registertion page & Login page
// // //     // Registraion id -> cookie, prisma.user.create({id: id})
// // //     const response = NextResponse.next()
// // //     response.cookies.set('id', 'dasdasdasda')

// // //             // Get, post, delete -> response
// // //   // middleware
// // //     const id = cookies.get("id");
// // //     // add check agar current path != login
// // //   if(!id ) {
// // //     // user is not signed in
// // //     redirect("login")
// // //   }

  

// // //   // Overview
// // //     //   Context -> per tab, use state ki tarah magar puri application me share horaha

// // //   user.email
// // // }

// // // funcition () {
// // //      cookies.get("id")
// // //   user = prisma.user.findMany({w...})
// // //   return
// // // }


// // // REgister -> create id -> Save id to cookie -> Create user with id
// // // Login -> Database me user find with email and password -> result.id -> save result.id to cookie








// // import { NextResponse } from 'next/server'
 
// // export function middleware(request) {
// //   // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
// //   // Getting cookies from the request using the `RequestCookies` API
// //   let cookie = request.cookies.get('nextjs')
// //   // console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
// //   const allCookies = request.cookies.getAll()
// //   // console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
 
// //   request.cookies.has('nextjs') // => true
// //   request.cookies.delete('nextjs')
// //   request.cookies.has('nextjs') // => false
 


// //   // Setting cookies on the response using the `ResponseCookies` API
// //   const response = NextResponse.next()
// //   response.cookies.set('vercel', 'fast')
// //   response.cookies.set({
// //     name: 'vercel',
// //     value: 'fast',
// //     path: '/',
// //   })
// //   cookie = response.cookies.get('vercel')
// // //   console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
// //   // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.
// //   //  console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }

// //   let allCookiess = response.cookies.getAll()
// //   console.log(allCookiess)
// //   return response
// // }









// // import Cookies from 'js-cookie';
// // import { cookies } from 'next/headers';
// // import { NextResponse } from 'next/server'

// // export function middleware(request, res, next) {
// //   // const exampleCookie = Cookies.get();
// //   // console.log(exampleCookie);
// //   // req.exampleCookie = exampleCookie;
// //   // console.log(exampleCookie);

// //   // const cookieStore = cookies()
// //   // const theme = cookieStore.get('theme')
// //   // console.log(theme);
// //   // next();
// //   const response = NextResponse.next()
// //   response.cookies.set('vercel', 'fast')
// //   response.cookies.set({
// //     name: 'vercel',
// //     value: 'fast',
// //     path: '/',
// //   })
// //   const cookie = response.cookies.getAll()
// //   console.log(cookie)


// //   const allCookies = request.cookies.getAll()
// //   // console.log(allCookies)
// // }








// // import { NextResponse } from 'next/server'
 
// // // This function can be marked `async` if using `await` inside
// // export function middleware(request) {
// //   return NextResponse.redirect(new URL('/home', request.url))
// // }
 
// // // See "Matching Paths" below to learn more
// // export const config = {
// //   matcher: '/about/:path*',
// // }










// import { NextResponse } from 'next/server'
// import { cookies } from 'next/headers'

// export default function middleware(request) {
//   // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
//   // Getting cookies from the request using the `RequestCookies` API
//   // let cookie = request.cookies.get('nextjs')
//   // console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
//   const cookieStore = cookies()
//   console.log(cookieStore.getAll());
//   // const allCookies = request.cookieStore.get()
//   // console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
 
//   console.log("sdsd");
//   // request.cookies.has('nextjs') // => true
//   // request.cookies.delete('nextjs')
//   // request.cookies.has('nextjs') // => false
 
//   // // Setting cookies on the response using the `ResponseCookies` API
//   // const response = NextResponse.next()
//   // response.cookies.set('vercel', 'fast')
//   // response.cookies.set({
//   //   name: 'vercel',
//   //   value: 'fast',
//   //   path: '/',
//   // })
//   // cookie = response.cookies.get('vercel')
//   // console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
//   // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.
 
//   // return response
// }


export default (req, res, next) => {
  // Log cookies
  console.log("f");
  // console.log('Cookies:', req.headers.cookie);
  // next();
};





