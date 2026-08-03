"use client";
import Sidebar from "@/components/layouts/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-dashboard">
      <div className="p-2.5 min-h-screen">
        <Sidebar />
      </div>

      <div className="py-2.5 pr-2.5 w-full min-h-screen">
        <div className={`w-full h-full p-5.5`}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
