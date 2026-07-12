"use client";
import useHelpCache from "@/hooks/useHelpCache";
import React, { useCallback, useEffect } from "react";
import { CardTitle } from "../ui/card";
import { usePathname, useRouter } from "next/navigation";
import ApiClient from "@/lib/api/api-client";
import { HelpApi } from "@/types/api/help";
import ApiConfig from "@/configs/api.config";
import clsx from "clsx";
import { HelpCenterCacheType } from "@/types/help-center";
import ArticlesSidebar from "./articles-sidebar";

const HelpSidebar = () => {
  const { categories, setCategories, isHydrated } = useHelpCache();
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = categories.find((c) => pathname.includes(c.slug));

  const fetchData = useCallback(async () => {
    if (categories.length !== 0) return;

    try {
      const data =
        await ApiClient<HelpApi.Category.Response>("/api/help/category");

      if (data.ok) {
        const normalizedCategories: HelpCenterCacheType[] = data.categories.map(
          (c) => ({
            ...c,
            articles: [],
          }),
        );

        setCategories((prev) => [...prev, ...normalizedCategories]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [categories.length, setCategories]);

  const handleRedirect = async (slug: string) => {
    try {
      const body: HelpApi.Redirect.Request = { category: slug };
      const data = await ApiClient<HelpApi.Redirect.Response>(
        "/api/help/redirect",
        { ...ApiConfig.post, body: JSON.stringify(body) },
      );

      if (data.ok) {
        router.push(data.redirectPath);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!isHydrated) return;

    fetchData();
  }, [fetchData, isHydrated]);

  return (
    <div className={`min-w-50 max-w-65 h-screen p-2.5`}>
      <div className="p-3 border border-border h-full rounded-md flex flex-col gap-4">
        <CardTitle className="flex flex-col text-xl">
          <span>QuickIssue</span>
          <span>Help-Center</span>
        </CardTitle>
        <div className="flex flex-col gap-2.5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={async () => {
                await handleRedirect(cat.slug);
              }}
              className={clsx(
                "p-2.5 rounded-md border cursor-pointer hover:border-border/90 transition-all duration-300",
                pathname.includes(cat.slug)
                  ? "font-semibold border-border text-sm"
                  : "text-xs border-current/0 ",
              )}
            >
              <h1>{cat.name}</h1>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <ArticlesSidebar id={currentPage?.id} category={currentPage?.name} />
        </div>
      </div>
    </div>
  );
};

export default HelpSidebar;
