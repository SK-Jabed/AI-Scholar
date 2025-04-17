import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server"; // Import NextResponse for redirection

export const middleware = async (request) => {
  const { nextUrl } = request;

  // Get the JWT token
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Check if the user is authenticated (token exists)
  const isAuthenticated = !!token;
  console.log("Authenticated:", isAuthenticated); // For debugging

  // If user is not authenticated and tries to access any protected route, redirect to login page
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", nextUrl)); // Redirect to login page
  }

  // Role-based access control: Check the role for specific routes
  if (nextUrl.pathname.startsWith("/dashboard/admin") && token?.role !== "admin") {
    // If the user is trying to access an admin page but isn't an admin, redirect to unauthorized page
    return NextResponse.redirect(new URL("/unauthorized", nextUrl));
  }

  // If the user is authenticated and passes role checks, proceed with the request
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/*"], // Matches all routes under /dashboard
};