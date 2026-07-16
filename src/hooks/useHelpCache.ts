import { HelpCenterCacheType } from "@/types/help-center";
import safeParse from "@/utils/safeParse";
import { useEffect, useState } from "react";

const STORAGE_KEY = "help-center/categories";

export default function useHelpCache() {
  const [categories, setCategories] = useState<HelpCenterCacheType[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const getData = () => {
      const data = sessionStorage.getItem(STORAGE_KEY);

      if (data) {
        const parsed = safeParse<HelpCenterCacheType[], []>(data, []);

        setCategories(parsed);
      }

      setIsHydrated(true);
    };

    getData();
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
  }, [categories, isHydrated]);

  return {
    categories,
    setCategories,
    isHydrated,
  };
}
