import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { authKey } from "./constants/authKey";
import { TDecodedInfo } from "./types/auth";
import { jwtDecode } from "jwt-decode";
import { TUserRole } from "./types";
import { USER_ROLE } from "./constants/role";

type Role = keyof typeof roleBasedPrivateRoutes;

const AuthRoutes = ["/login", "/register"];
const commonPrivateRoutes = [
  "/dashboard",
  "/dashboard/change-password",
  "/doctors",
];
const roleBasedPrivateRoutes = {
  PATIENT: [/^\/dashboard\/patient/],
  DOCTOR: [/^\/dashboard\/doctor/],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/super-admin/],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get(authKey)?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }
  const role: TUserRole = decodedData?.role?.toLowerCase();

  // check conditions
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (accessToken && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (role === USER_ROLE.ADMIN && pathname.startsWith("/dashboard/admin")) {
    return NextResponse.next();
  }
  if (role === USER_ROLE.DOCTOR && pathname.startsWith("/dashboard/doctor")) {
    return NextResponse.next();
  }
  if (role === USER_ROLE.PATIENT && pathname.startsWith("/dashboard/patient")) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};

//* another way----------------------
// import { jwtDecode } from 'jwt-decode';
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// type Role = keyof typeof roleBasedPrivateRoutes;

// const AuthRoutes = ['/login', '/register'];
// const commonPrivateRoutes = [
//    '/dashboard',
//    '/dashboard/change-password',
//    '/doctors',
// ];
// const roleBasedPrivateRoutes = {
//    PATIENT: [/^\/dashboard\/patient/],
//    DOCTOR: [/^\/dashboard\/doctor/],
//    ADMIN: [/^\/dashboard\/admin/],
//    SUPER_ADMIN: [/^\/dashboard\/super-admin/],
// };

// export function middleware(request: NextRequest) {
//    const { pathname } = request.nextUrl;
//    console.log({ pathname });
//    const accessToken = cookies().get('accessToken')?.value;

//    if (!accessToken) {
//       if (AuthRoutes.includes(pathname)) {
//          return NextResponse.next();
//       } else {
//          return NextResponse.redirect(new URL('/login', request.url));
//       }
//    }

//    console.log({ pathname });

//    if (
//       accessToken &&
//       (commonPrivateRoutes.includes(pathname) ||
//          commonPrivateRoutes.some((route) => pathname.startsWith(route)))
//    ) {
//       return NextResponse.next();
//    }

//    let decodedData = null;

//    if (accessToken) {
//       decodedData = jwtDecode(accessToken) as any;
//    }

//    const role = decodedData?.role;

//    if (role && roleBasedPrivateRoutes[role as Role]) {
//       const routes = roleBasedPrivateRoutes[role as Role];
//       if (routes.some((route) => pathname.match(route))) {
//          return NextResponse.next();
//       }
//    }

//    return NextResponse.redirect(new URL('/', request.url));
// }

// export const config = {
//    matcher: ['/login', '/register', '/dashboard/:page*', '/doctors/:page*'],
// };
