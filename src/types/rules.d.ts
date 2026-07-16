export interface RouteProtectConfig {
  isAuthRequired: boolean;
  matchSubRoutes: boolean;
}

export interface RateLimitConfig {
  limit: number;
  matchSubRoutes: boolean;
  path: string;
}
