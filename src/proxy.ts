import RouteProtectingMiddleware from "./middlewares/route-protecting.middleware";
import { auth } from "./lib/auth/auth";

export default auth(async (req) => {
  const isAuthenticated = !!req.auth;

  const routeProtectingRes = await RouteProtectingMiddleware(
    req,
    isAuthenticated,
  );

  if (routeProtectingRes) return routeProtectingRes;
});
