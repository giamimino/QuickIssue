import Heading from "./nodes/heading";
import Paragraph from "./nodes/paragraph";
import List from "./nodes/list";
import { HelpCenterArticleContentType } from "@/types/help-center";
import { ComponentType } from "react";
import Note from "./nodes/note";
import Warning from "./nodes/warning";

type Registry = {
  [k in HelpCenterArticleContentType["type"]]: ComponentType<
    Extract<HelpCenterArticleContentType, { type: k }>
  >;
};

const DocumentRegistry: Registry = {
  heading: Heading,
  paragraph: Paragraph,
  list: List,
  note: Note,
  warning: Warning,
};

export default DocumentRegistry;
