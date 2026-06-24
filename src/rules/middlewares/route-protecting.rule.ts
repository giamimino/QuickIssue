import { RouteProtectConfig } from "@/types/rules";

const RoutesProtectionRule: Record<string, RouteProtectConfig> = {
  "/dashboard": {
    isAuthRequired: true,
    matchSubRoutes: true,
  },
  "/login": {
    isAuthRequired: false,
    matchSubRoutes: false,
  },
  "/": {
    isAuthRequired: false,
    matchSubRoutes: false,
  },
};

export default RoutesProtectionRule;
