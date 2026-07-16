"use client";
import { CardDescription } from "@/components/ui/card";
import ApiConfig from "@/configs/api.config";
import ApiClient from "@/lib/api/api-client";
import { HelpApi } from "@/types/api/help";
import { useRouter } from "next/navigation";
import React, { use, useCallback, useEffect } from "react";

const CategoryPage = ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = use(params);
  const router = useRouter();

  const handleRedirect = useCallback(async () => {
    try {
      const body: HelpApi.Redirect.Request = { category };
      const data = await ApiClient<HelpApi.Redirect.Response>(
        "/api/help/redirect",
        {
          ...ApiConfig.post,
          body: JSON.stringify(body),
        },
      );

      if (data.ok) {
        router.push(data.redirectPath);
      }
    } catch (error) {
      console.log(error);
    }
  }, [category, router]);

  useEffect(() => {
    handleRedirect();
  }, [handleRedirect]);

  return (
    <div>
      <CardDescription>Loading...</CardDescription>
    </div>
  );
};

export default CategoryPage;
