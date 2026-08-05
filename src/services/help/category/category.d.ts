type GetCategoryRequest =
  | {
      type: "byId";
      payload: { id: string };
    }
  | {
      type: "bySlug";
      payload: { slug: string };
    }
  | {
      type: "default";
      payload: { limit: number };
    };
