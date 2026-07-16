"use client";
import RichTextRenderer from "@/components/rich-text/RichTextRenderer";
import { CardDescription } from "@/components/ui/card";
import useHelpCache from "@/hooks/useHelpCache";
import ApiClient from "@/lib/api/api-client";
import { HelpApi } from "@/types/api/help";
import React, { use, useCallback, useEffect } from "react";

const ArticlePage = ({
  params,
}: {
  params: Promise<{ category: string; article: string }>;
}) => {
  const { category, article } = use(params);
  const { categories, setCategories, isHydrated } = useHelpCache();
  const currentArticle = categories
    .find((c) => c.slug === category)
    ?.articles.find((a) => a.slug === article);

  const fetchData = useCallback(async () => {
    if (!categories.length) return;

    const currentCategory = categories.find((item) => item.slug === category);

    if (!currentCategory) {
      throw new Error("Category can't be found");
    }

    if (currentCategory.articles.length > 0) return;

    const url = `/api/help/articles?categoryId=${currentCategory.id}&content=true`;

    const data = await ApiClient<HelpApi.Article.Response>(url);

    if (data.ok) {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === currentCategory.id
            ? { ...c, articles: [...c.articles, ...data.articles] }
            : c,
        ),
      );
    }
  }, [categories, category, setCategories]);

  useEffect(() => {
    if (!isHydrated) return;

    fetchData().catch((error) => {
      console.log(error);
    });
  }, [isHydrated, fetchData]);

  return (
    <div>
      <div className="py-5 flex flex-col">
        {currentArticle ? (
          <RichTextRenderer content={currentArticle.content} />
        ) : (
          <CardDescription>Loading...</CardDescription>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
