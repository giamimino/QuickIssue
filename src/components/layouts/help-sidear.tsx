"use client";
import useHelpCache from "@/hooks/useHelpCache";
import React, { useCallback, useEffect } from "react";
import { CardTitle } from "../ui/card";
import { useRouter } from "next/navigation";

const HelpSidebar = () => {
  const { categories, setCategories, isHydrated } = useHelpCache();
  const router = useRouter();

  const fetchData = useCallback(async () => {
    if (categories.length !== 0) return;

    try {
      const res = await fetch("/api/help/category");
      const data = await res.json();

      if (data.ok) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.log(error);
    }
  }, [categories.length, setCategories]);

  const handleRedirect = async (slug: string) => {
    const res = await fetch("");
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
        <div>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="p-2.5 border border-border rounded-md cursor-pointer"
            >
              <h1>{cat.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSidebar;
