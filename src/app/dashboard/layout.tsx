"use client";
import Sidebar from "@/components/layouts/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="p-2.5">
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
