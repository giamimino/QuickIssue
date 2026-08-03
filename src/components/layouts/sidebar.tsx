"use client";
import React from "react";
import { CardDescription, CardTitle } from "../ui/card";
import {
  CircleDot,
  CircleHelp,
  House,
  LayoutTemplate,
  LogOut,
  LucideProps,
  Settings,
  Zap,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/lib/api/api-client";
import { MeApi } from "@/types/api/me";
import { useAlertContext } from "@/store/contexts/alert.context";
import MeSkeleton from "../skeletons/me.skeleton";

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
  const { setAlert } = useAlertContext();

  const { data: user, isPending } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const url = "/api/me";
      const data = await ApiClient<MeApi.Me.Response>(url);

      if (!data.ok) {
        setAlert({ id: crypto.randomUUID(), ...data.error });
        return null;
      }

      return data.payload?.user;
    },
  });

  return (
    <div className="p-2.5 h-full">
      <div
        className={`min-w-65 h-full bg-sidebar-bg rounded-md border flex flex-col`}
      >
        <div className="flex gap-2.5 p-4 border-b border-b-sidebar-border">
          <div
            className="w-8 h-8 rounded-md bg-linear-to-br from-indigo-400 to-violet-400 flex items-center justify-center"
            style={{ borderRadius: "10px" }}
          >
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <CardTitle className={`text-card-foreground`}>QuickIssue</CardTitle>
        </div>
        <div className="py-4 border-b border-sidebar-border">
          <div className="flex flex-col gap-2.5">
            {pages.map((item) => (
              <div
                onClick={() => router.push(item.path)}
                className={clsx(
                  `py-2.5 px-4 flex gap-3.75 items-center 
              cursor-pointer text-card-foreground transition-all duration-300`,
                  currentPage === item.id
                    ? "hover:bg-accent/40"
                    : "hover:bg-ring/12",
                )}
                key={item.id}
              >
                <div
                  className={clsx(
                    `p-1.75 border border-accent rounded-md transition-all duration-300`,
                    currentPage === item.id ? "bg-input" : "bg-input/10",
                  )}
                >
                  <item.icon className="w-3.25 h-3.25" />
                </div>
                <CardDescription
                  className={clsx(
                    "font-medium",
                    currentPage === item.id && "text-foreground",
                  )}
                >
                  {item.label}
                </CardDescription>
              </div>
            ))}
          </div>
        </div>
        <div className="py-4 border-b border-sidebar-border">
          <div className="flex flex-col gap-2.5">
            {[
              {
                id: "settings",
                label: "Settings",
                icon: Settings,
                url: "/dashboard/settings",
              },
              {
                id: "helpanddocs",
                label: "Help & Docs",
                icon: CircleHelp,
                url: "/help",
              },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => router.push(item.url)}
                className={clsx(
                  `py-2.5 px-4 flex gap-3.75 items-center 
                cursor-pointer text-card-foreground transition-all duration-300 hover:bg-ring/12`,
                )}
              >
                <div
                  className={clsx(
                    `p-1.75 border border-accent rounded-md transition-all duration-300 bg-input/10`,
                  )}
                >
                  <item.icon className="w-3.25 h-3.25" />
                </div>
                <CardDescription
                  className={clsx("font-medium transition-all duration-300")}
                >
                  {item.label}
                </CardDescription>
              </div>
            ))}
            <div
              onClick={() => router.push("/logout")}
              className={clsx(
                `py-2.5 px-4 flex gap-3.75 items-center 
              cursor-pointer text-card-foreground transition-all duration-300 hover:bg-ring/12 hover:text-red-600/70 group`,
              )}
            >
              <div
                className={clsx(
                  `p-1.75 border border-accent rounded-md transition-all duration-300 bg-input/10`,
                )}
              >
                <LogOut className="w-3.25 h-3.25" />
              </div>
              <CardDescription
                className={clsx(
                  "font-medium group-hover:text-red-600/70 transition-all duration-300",
                )}
              >
                Log out
              </CardDescription>
            </div>
          </div>
        </div>
        <div className="p-4 mt-auto border-t border-border">
          <div className="">
            {isPending ? (
              <MeSkeleton />
            ) : (
              user && (
                <div className="flex gap-2.5 items-center cursor-pointer">
                  <div>
                    {user.image ? (
                      <Image
                        src={user?.image}
                        width={48}
                        height={48}
                        alt="me-profile"
                        className="rounded-xl w-8 h-8"
                      />
                    ) : (
                      <div />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-sm">{user.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {user.email}
                    </CardDescription>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
