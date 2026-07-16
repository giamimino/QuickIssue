import { HelpCenterArticleContentType } from "@/types/help-center";
import React from "react";

const Note = ({
  text,
}: Extract<HelpCenterArticleContentType, { type: "note" }>) => {
  return <p>{text}</p>;
};

export default Note;
