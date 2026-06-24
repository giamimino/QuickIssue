"use client";
import AuthHero from "@/components/common/auth/auth-hero";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex w-full">
      <div className="flex-1 flex">
        <AuthHero />
      </div>
      <div className="bg-background flex-1"></div>
    </div>
  );
};

export default LoginPage;
