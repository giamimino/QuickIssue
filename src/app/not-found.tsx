import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/sections/landing/footer";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="bg-background w-full pt-24 sm:p-12 p-6 flex flex-col gap-2.5">
      <Header />
      <div className="flex sm:h-screen h-fit sm:justify-center flex-col gap-2.5">
        <CardDescription className="text-xs">ERROR CODE 404</CardDescription>
        <CardTitle className="text-9xl font-bold max-md:text-8xl max-sm:text-6xl">
          OOOPS!!
        </CardTitle>
        <CardTitle className="text-3xl font-normal max-w-90 max-sm:text-lg">
          This is not the page you are looking for
        </CardTitle>

        <div className="md:mt-10 mt-5 flex flex-col gap-2.5">
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
      <div className="sm:mt-0 mt-20">
        <Footer />
      </div>
    </div>
  );
}
