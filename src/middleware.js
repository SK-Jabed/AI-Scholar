import { getToken } from "next-auth/jwt";
export const middleware = async (request) => {
  const { nextUrl } = request;
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const isAuthenticated = !!token;

  console.log(isAuthenticated, nextUrl.pathname);

  if(!isAuthenticated){
    return Response.redirect(new URL("/login", nextUrl))
  }
};


export const config = {
  matcher: "/dashboard"
}