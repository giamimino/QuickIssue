import { HelpCenterArticleContentType } from "@/types/help-center";
import React from "react";

const Warning = ({
  text,
}: Extract<HelpCenterArticleContentType, { type: "warning" }>) => {
  return <p>{text}</p>;
};

export default Warning;
