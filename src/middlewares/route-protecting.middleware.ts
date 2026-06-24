import RoutesProtectionRule from "@/rules/middlewares/route-protecting.rule";
import { NextRequest, NextResponse } from "next/server";

export default async function RouteProtectingMiddleware(
  req: NextRequest,
  session: boolean,
): Promise<NextResponse<unknown> | undefined> {
  const pathname = req.nextUrl.pathname;

  for (const [path, config] of Object.entries(RoutesProtectionRule)) {
    const matches = config.matchSubRoutes
      ? pathname.startsWith(path)
      : pathname === path;

    if (!matches) continue;

    if (config.isAuthRequired && !session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}
