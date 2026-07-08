"use client";
import ApiConfig from "@/configs/api.config";
import ApiClient from "@/lib/api/api-client";
import { HelpApi } from "@/types/api/help";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HelpPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const body: HelpApi.Redirect.Request = { category: "getting-started" };
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
    };

    handleRedirect();
  }, []);
  return null;
};

export default HelpPage;
