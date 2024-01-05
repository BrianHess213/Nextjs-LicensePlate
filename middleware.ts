// Without a defined matcher, this one line applies next-auth
// to the entire project
//export { default } from "next-auth/middleware"

// Applies netx-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-applications/routing/middleware#matcher
//export const config = { matcher: ["/extra", "/dashboard"] }

import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = { matcher: ["/dashboard"] }

