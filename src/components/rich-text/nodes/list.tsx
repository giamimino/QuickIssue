import { HelpCenterArticleContentType } from "@/types/help-center";
import React from "react";

const List = ({
  items,
}: Extract<HelpCenterArticleContentType, { type: "list" }>) => {
  return (
    <ul className="flex flex-col list-disc ml-5 text-foreground/85 text-sm">
      {items.map((item) => (
        <li key={item.toLowerCase().trim()}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
