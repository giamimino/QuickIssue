import { HelpCenterArticleContentType } from "@/types/help-center";
import React from "react";

const Paragraph = ({
  text,
}: Extract<HelpCenterArticleContentType, { type: "paragraph" }>) => {
  return <p className="text-sm text-foreground/85">{text}</p>;
};

export default Paragraph;
