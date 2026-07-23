import { Header } from "@/components/layouts/header";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="bg-background w-full h-screen p-12 flex flex-col gap-2.5">
      <Header />
      <div className="h-screen flex justify-center flex-col gap-2.5">
        <CardDescription className="text-xs">ERROR CODE 404</CardDescription>
        <CardTitle className="text-6xl font-bold">OOOPS!!</CardTitle>
        <CardTitle className="text-3xl font-normal max-w-90">
          This is not the page you are looking for
        </CardTitle>

        <div className="mt-10 flex flex-col gap-2.5">
          <CardDescription>
            Here are some helpful links instead:
          </CardDescription>
          <div className="flex gap-2.5">
            <Link
              href={"/"}
              className="font-medium text-sm border-b hover:text-blue-100 border-b-foreground"
            >
              Home
            </Link>
            <Link
              href={"/help"}
              className="font-medium text-sm border-b hover:text-blue-100 border-b-foreground"
            >
              Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
