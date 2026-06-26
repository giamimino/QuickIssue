"use client";
import Sidebar from "@/components/layouts/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="p-2.5 min-h-screen">
        <Sidebar />
      </div>
      <div className="py-2.5 pr-2.5 w-full min-h-screen">{children}</div>
    </div>
  );
};

export default DashboardLayout;
