import React from "react";
import { Skeleton } from "../ui/skeleton";

const MeSkeleton = () => {
  return (
    <div className="flex gap-2">
      <Skeleton className="w-8 h-8 rounded-full" />
      <div className="flex flex-col gap-1.5 py-0.5">
        <Skeleton className="w-16 h-3" />
        <Skeleton className="w-12 h-2" />
      </div>
    </div>
  );
};

export default MeSkeleton;
