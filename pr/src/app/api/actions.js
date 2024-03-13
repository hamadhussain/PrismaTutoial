// 'use server'
 
// import { cookies } from 'next/headers'
 
// async function create(data) {
//   cookies().set('name', 'lee')
//   // or
//   cookies().set('name', 'lee', { secure: true })
//   // or
//   cookies().set({
//     name: 'name',
//     value: 'lee',
//     httpOnly: true,
//     path: '/',
//   })
// }


// pages/api/set-cookie.js

// export default (req, res) => {
//     // Set a cookie
//     res.setHeader('Set-Cookie', 'hammad=hussain');
//     res.status(200).json({ message: 'Cookie set successfully' });
//   };
  


// pages/api/setCookie.js
export default function handler(req, res) {
  // const { data } = req.body; // Assuming data is sent in the request body
  // Set the cookie here
  console.log("ssa");
      res.status(200).json({ message: 'Cookie set successfully' });

  // res.setHeader('Set-Cookie', `yourCookieName=${data}; Path=/; HttpOnly`);
  // res.status(200).end();
}
