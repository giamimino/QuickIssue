import GENERIC_ERRORS from "@/constants/errors/generic.errors";
import RateLimitRule from "@/rules/middlewares/rate-limit.rule";
import { RateLimitConfig } from "@/types/rules";
import { NextRequest, NextResponse } from "next/server";

const ipRequestMap = new Map<string, number[]>();

const RATE_LIMIT_WINDOW = 60 * 1000;

export default async function RateLimitMiddleware(
  req: NextRequest,
): Promise<NextResponse<unknown> | undefined> {
  const pathname = req.nextUrl.pathname;
  let rule: ({ path: string } & RateLimitConfig) | undefined = undefined;

  for (const config of RateLimitRule) {
    const path = config.path;
    const matches = config.matchSubRoutes
      ? pathname.startsWith(path)
      : pathname === path;

    if (!matches) continue;

    rule = config;
  }

  if (!rule) {
    rule = { path: "/", matchSubRoutes: true, limit: 20 };
  }

  const key = rule.path;

  if (!ipRequestMap.has(key)) {
    ipRequestMap.set(key, []);
  }

  const currentTime = Date.now();

  const timestamps = ipRequestMap
    .get(key)!
    .filter((ts) => currentTime - ts < RATE_LIMIT_WINDOW);

  if (timestamps.length > rule.limit) {
    return NextResponse.json(
      { error: GENERIC_ERRORS.RATE_LIMITED },
      { status: 429 },
    );
  }

  timestamps.push(currentTime);
  ipRequestMap.set(key, timestamps);
}
