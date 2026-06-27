import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CircleDot, LayoutTemplate } from "lucide-react";
import React from "react";
import { FaFireAlt } from "react-icons/fa";

const DashboardHomePage = () => {
  return (
    <div>
      <div className="w-full flex gap-5">
        <Card className="rounded-md w-full max-w-100">
          <CardContent className="flex flex-col gap-3">
            <CardTitle>Activity</CardTitle>
            <CardDescription className="border-b border-border pb-1">
              Total points: 0
            </CardDescription>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <CircleDot className="w-4 h-4" />
                  <h1>Total Issues:</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <LayoutTemplate className="w-4 h-4" />
                  <h1>Total Templates:</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <LayoutTemplate className="w-4 h-4" />
                  <h1>Template Saves:</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <LayoutTemplate className="w-4 h-4" />
                  <h1>Template Usage:</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <LayoutTemplate className="w-4 h-4" />
                  <h1>Community Bonus:</h1>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-center mt-px">
                <h1>0</h1>
                <h1>0</h1>
                <h1>0</h1>
                <h1>0</h1>
                <h1>0</h1>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-md w-full h-fit min-w-50 max-w-fit">
          <CardContent className="flex flex-col gap-4">
            <div className="border-b pb-1 border-border">
              <CardTitle>🔥Contribution Streak</CardTitle>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2.5 items-center">
                <div className="w-15 h-15 relative border-3 flex items-center justify-center border-red-600 rounded-full">
                  <span className="p-1 absolute -top-3 bg-card left-1/2 -translate-x-1/2">
                    <FaFireAlt className="text-red-600" />
                  </span>
                  <h1 className="font-semibold text-[18px]">0</h1>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-medium">Current Streak</h1>
                  <CardDescription className="text-xs text-center">
                    Jun 18 - Jun 19
                  </CardDescription>
                </div>
              </div>
              <div className="h-25 my-auto rounded-xl w-0.5 bg-foreground/50" />
              <div className="flex flex-col gap-2.5 items-center my-auto">
                <div className="w-5 h-5 flex items-center justify-center">
                  <h1 className="font-semibold text-[18px]">0</h1>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-medium">Longest Streak</h1>
                  <CardDescription className="text-xs text-center">
                    Jun 18 - Jun 19
                  </CardDescription>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHomePage;
