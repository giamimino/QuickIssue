import HelpSidebar from "@/components/layouts/help-sidear";
import React from "react";

const HelpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2.5">
      <div>
        <HelpSidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HelpLayout;
