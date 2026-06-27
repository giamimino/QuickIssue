import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CircleDot, LayoutTemplate } from "lucide-react";
import React from "react";

const DashboardHomePage = () => {
  return (
    <div>
      <div className="w-full">
        <Card className="rounded-md w-full max-w-100">
          <CardContent className="flex flex-col gap-3">
            <CardTitle>Activity</CardTitle>
            <CardDescription className="border-b border-border pb-1">
              Total poins: 0
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
      </div>
    </div>
  );
};

export default DashboardHomePage;
