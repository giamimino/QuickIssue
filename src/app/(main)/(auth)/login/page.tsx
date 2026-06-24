"use client";
import AuthHero from "@/components/common/auth/auth-hero";
import LoginButton from "@/components/common/auth/sign-in-button";
import { CardTitle } from "@/components/ui/card";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex w-full">
      <div className="flex-1 hidden lg:flex">
        <AuthHero />
      </div>
      <div className="bg-background flex-1">
        <div className="p-24 flex flex-col items-center justify-center h-full gap-3.5">
          <div>
            <CardTitle className="font-semibold text-[18px]">Sign in</CardTitle>
          </div>
          <div>
            <LoginButton provider={"github"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
