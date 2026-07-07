import HelpSidebar from "@/components/layouts/help-sidear";
import React from "react";

const HelpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <HelpSidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HelpLayout;
