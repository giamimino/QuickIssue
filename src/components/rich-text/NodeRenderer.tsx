import {
  DocumentNodeType,
  HelpCenterArticleContentType,
} from "@/types/help-center";
import React from "react";
import DocumentRegistry from "./registry";

const NodeRenderer = ({
  content,
}: {
  content: HelpCenterArticleContentType;
}) => {
  const Component = DocumentRegistry[content.type] as React.ComponentType<
    typeof content
  >;
  return <Component {...content} />;
};

export default NodeRenderer;
