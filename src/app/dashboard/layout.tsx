"use client";
import Sidebar from "@/components/layouts/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="p-2.5 min-h-screen">
        <Sidebar />
      </div>

      <div className="py-2.5 pr-2.5 w-full min-h-screen">
        <div
          className={`w-full h-full bg-card rounded-md p-5.5
  border-sidebar-foreground/40 shadow-[-5px_20px_20px] border
  shadow-accent-foreground/10`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
