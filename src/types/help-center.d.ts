import DocumentRegistry from "@/components/rich-text/registry";

export interface HelpCenterCategoryType {
  id: string;
  name: string;
  slug: string;
  description?: string;
  priority: number;
  created_at: string;
}

export type DocContentTypes =
  | "paragraph"
  | "heading"
  | "list"
  | "warning"
  | "note";

export type HelpCenterArticleContentType =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
      level: 1 | 2 | 3;
    }
  | {
      type: "list";
      items: string[];
      style: "unordered";
    }
  | {
      type: "note";
      text: string;
    }
  | {
      type: "warning";
      text: string;
    };

export interface HelpCenterArticleType {
  id: string;
  title: string;
  slug: string;
  content: HelpCenterArticleContentType[];
  categoryId: string;
  published: boolean;
  created_at: string;
}

export type HelpCenterCacheType = HelpCenterCategoryType & {
  articles: HelpCenterArticleType[];
};

export type DocumentRegistryType = typeof DocumentRegistry;

export type DocumentNodeType = keyof DocumentRegistryType;
