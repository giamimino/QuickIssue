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
    <div className="min-w-65 bg-accent p-5.5 rounded-md">
      <div className="flex items-center justify-center flex-col">
        <CardTitle
          className={`text-xl bg-linear-to-br 
            from-muted-foreground from-40% via-foreground 
            to-muted-foreground to-60% bg-clip-text text-transparent`}
        >
          QuickIssue
        </CardTitle>
        <span
          className={`h-px w-full bg-linear-to-r 
            from-accent from-10% via-foreground 
            to-accent to-90% mt-5`}
        ></span>
      </div>
      <div className="flex flex-col py-3 gap-3">
        {pages.map((item) => (
          <div
            onClick={() => router.push(item.path)}
            className={clsx(
              `py-3 px-4 flex gap-3.75 items-center 
            cursor-pointer rounded-xl transition-all duration-300`,
              currentPage === item.id
                ? "bg-periwinkle/20 hover:bg-periwinkle/40"
                : "hover:bg-ring",
            )}
            key={item.id}
          >
            <div
              className={clsx(
                `p-[7.5px] border border-lavender rounded-md transition-all duration-300`,
                currentPage === item.id ? "bg-lavender" : "bg-lavender/40",
              )}
            >
              <item.icon className="w-3.75 h-3.75" />
            </div>
            <CardTitle>{item.label}</CardTitle>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
