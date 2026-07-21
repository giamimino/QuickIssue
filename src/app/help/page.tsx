"use client";
import { useCallback, useEffect } from "react";
import ApiConfig from "@/configs/api.config";
import ApiClient from "@/lib/api/api-client";
import { HelpApi } from "@/types/api/help";
import { useRouter } from "next/navigation";
import { useAlertContext } from "@/store/contexts/alert.context";

const HelpPage = () => {
  const router = useRouter();
  const { setAlert } = useAlertContext();

  const handleRedirect = useCallback(async () => {
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
      } else if (data.error) {
        setAlert({ ...data.error, id: crypto.randomUUID() });
      }
    } catch (error) {
      console.log(error);
    }
  }, [router]);

  useEffect(() => {
    handleRedirect();
  }, [handleRedirect]);

  return null;
};

export default HelpPage;
