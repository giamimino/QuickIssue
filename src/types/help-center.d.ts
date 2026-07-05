export interface HelpCenterCategoryType {
  id: string;
  name: string;
  slug: string;
  description?: string;
  priority: number;
  created_at: string;
}

export interface HelpCenterArticleType {
  id: string;
  title: string;
  slug: string;
  content: string;
  categoryId: string;
  published: boolean;
  created_at: string;
}
