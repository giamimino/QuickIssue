import { HelpCenterArticleType } from "@/types/help-center";
import React from "react";
import NodeRenderer from "./NodeRenderer";

const RichTextRenderer = ({
  content,
}: {
  content: HelpCenterArticleType["content"];
}) => {
  return (
    <div className="flex flex-col">
      {content.map((c, i) => (
        <NodeRenderer content={c} key={i} />
      ))}
    </div>
  );
};

export default RichTextRenderer;
