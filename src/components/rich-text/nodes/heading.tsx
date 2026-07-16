import { HelpCenterArticleContentType } from "@/types/help-center";
import React from "react";

const Heading = ({
  text,
  level,
}: Extract<HelpCenterArticleContentType, { type: "heading" }>) => {
  return <h1 className="text-[18px] font-semibold">{text}</h1>;
};

export default Heading;
