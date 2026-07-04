import { HelpCenterCategoryType } from "@/types/help-center";

export const HelpCategoryCache = new Map<string, HelpCenterCategoryType>();

export function GetCategoryFromHelpCache(slug: string) {
  return HelpCategoryCache.get(slug);
}
