"use client";
import React from "react";
import { CardTitle } from "../ui/card";
import { CircleDot, House, LayoutTemplate, LucideProps } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

const pages: {
  id: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  path: string;
  matchSubRouter: boolean;
}[] = [
  {
    id: "dashboard-home",
    icon: House,
    label: "Dashboard",
    path: "/dashboard",
    matchSubRouter: false,
  },
  {
    id: "templates",
    icon: LayoutTemplate,
    label: "Templates",
    path: "/dashboard/templates",
    matchSubRouter: true,
  },
  {
    id: "issues",
    icon: CircleDot,
    label: "Issues",
    path: "/dashboard/issues",
    matchSubRouter: true,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = pages.find((p) =>
    p.matchSubRouter ? pathname.startsWith(p.path) : pathname === p.path,
  )?.id;

  return (
    <div
      className={`min-w-65 h-full border 
    border-sidebar-foreground/40 shadow-[-5px_15px_20px] 
    shadow-muted-foreground/10 bg-card p-5.5 rounded-md`}
    >
      <div className="flex items-center justify-center flex-col">
        <CardTitle className={`text-xl text-card-foreground`}>
          QuickIssue
        </CardTitle>
      </div>
      <div className="flex flex-col pt-5 gap-3">
        {pages.map((item) => (
          <div
            onClick={() => router.push(item.path)}
            className={clsx(
              `py-3 px-4 flex gap-3.75 items-center 
            cursor-pointer rounded-xl text-card-foreground transition-all duration-300`,
              currentPage === item.id
                ? "bg-accent/20 hover:bg-accent/40"
                : "hover:bg-ring/12",
            )}
            key={item.id}
          >
            <div
              className={clsx(
                `p-[7.5px] border border-accent rounded-md transition-all duration-300`,
                currentPage === item.id ? "bg-input" : "bg-input/10",
              )}
            >
              <item.icon className="w-3.75 h-3.75" />
            </div>
            <CardTitle className="font-medium">{item.label}</CardTitle>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
