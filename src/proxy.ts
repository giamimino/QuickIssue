import RouteProtectingMiddleware from "./middlewares/route-protecting.middleware";
import { auth } from "./lib/auth/auth";
import RateLimitMiddleware from "./middlewares/rate-limit.middleware";
import GlobalRateLimitMiddleware from "./middlewares/global-limit.middleware";
import { NextResponse } from "next/server";

export default auth(async (req) => {
  const globalRateLimit = await GlobalRateLimitMiddleware();

  if (globalRateLimit) return globalRateLimit;

  const isAuthenticated = !!req.auth;

  const routeProtectingRes = await RouteProtectingMiddleware(
    req,
    isAuthenticated,
  );

  if (routeProtectingRes) return routeProtectingRes;

  const rateLimitRes = await RateLimitMiddleware(req);

  if (rateLimitRes) return rateLimitRes;

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!429$|_next/static|_next/image|favicon.ico).*)"],
};
