import RoutesProtectionRule from "@/rules/middlewares/route-protecting.rule";

export default async function RouteProtectingMiddleware(pathname: string) {
  const route = Object.entries(RoutesProtectionRule).map(([path, config]) => {
    return config.matchSubRoutes
      ? pathname.startsWith(path)
      : pathname === path;
  });
}
