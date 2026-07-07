import { HelpCenterCategoryType } from "@/types/help-center";
import safeParse from "@/utils/safeParse";
import { useEffect, useState } from "react";

const STORAGE_KEY = "help-center/categories";

export default function useHelpCache() {
  const [categories, setCategories] = useState<HelpCenterCategoryType[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    const getData = () => {
      const data = sessionStorage.getItem(STORAGE_KEY);

      if (!data) return;

      const parsed = safeParse<HelpCenterCategoryType[], null>(data, null);

      if (parsed && parsed.length !== 0) {
        setCategories(parsed);
      }

      setIsHydrated(true);
    };

    getData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
  }, [categories]);

  return {
    categories,
    setCategories,
    isHydrated,
    setIsHydrated,
  };
}
