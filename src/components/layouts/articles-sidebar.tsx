import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import ApiClient from "@/lib/api/api-client";
import { HelpApi } from "@/types/api/help";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

const ArticlesSidebar = ({
  id,
  category,
}: {
  id: string | undefined;
  category: string | undefined;
}) => {
  const [articles, setArticles] = useState<
    Extract<HelpApi.Article.NoContentResponse, { ok: true }>["articles"]
  >([]);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const url = `/api/help/articles?categoryId=${id}&content=false`;
        const data = await ApiClient<HelpApi.Article.NoContentResponse>(url);

        if (data.ok) {
          setArticles(data.articles);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Card className="w-full h-50 bg-background rounded-md p-2 scroll-auto">
      <CardContent className="px-0">
        <CardTitle className="text-center">{category}</CardTitle>
        <div className="flex flex-col gap-1 mt-2">
          {articles.map((a) => (
            <div
              className={clsx(
                "px-2.5 py-1.5 rounded-md cursor-pointer transition-all duration-300 text-xs font-medium border",
                pathname.includes(a.slug)
                  ? "text-foreground border-foreground/70"
                  : "text-muted-foreground border-transparent hover:border-border",
              )}
              key={a.id}
              onClick={() => router.push(a.slug)}
            >
              {a.title}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticlesSidebar;
