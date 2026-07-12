import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";

const ArticlesSidebar = ({
  id,
  category,
}: {
  id: string | undefined;
  category: string | undefined;
}) => {
  const [articles, setArticles] = useState<
    { title: string; slug: string; categoryId: string }[]
  >([]);

  useEffect(() => {
    if (!id) return;
  }, [id]);

  return (
    <Card className="w-full h-50 bg-background rounded-md p-3 scroll-auto">
      <CardContent className="px-0">
        <CardTitle className="text-center">{category}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default ArticlesSidebar;
