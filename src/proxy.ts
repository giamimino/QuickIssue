import RouteProtectingMiddleware from "./middlewares/route-protecting.middleware";
import { auth } from "./lib/auth/auth";
import RateLimitMiddleware from "./middlewares/rate-limit.middleware";

export default auth(async (req) => {
  const isAuthenticated = !!req.auth;

  const routeProtectingRes = await RouteProtectingMiddleware(
    req,
    isAuthenticated,
  );

  if (routeProtectingRes) return routeProtectingRes;

  const rateLimitRes = await RateLimitMiddleware(req);

  // if (rateLimitRes) return rateLimitRes;
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
