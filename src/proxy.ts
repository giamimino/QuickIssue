import { NextRequest } from "next/server";
import RouteProtectingMiddleware from "./middlewares/route-protecting.middleware";

export default async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const routeProtectingRes = await RouteProtectingMiddleware(pathname);
}
