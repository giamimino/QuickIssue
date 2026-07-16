import { RateLimitConfig } from "@/types/rules";

const RateLimitRule: RateLimitConfig[] = [
  { path: "/api/user", limit: 5, matchSubRoutes: true },
  { path: "/api/auth", limit: 3, matchSubRoutes: true },
];

export default RateLimitRule;
