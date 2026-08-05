import { sql } from "@/lib/db";

export default async function getArticles(
  hasContent: boolean,
  body: { categoryId?: string; limit?: number },
  bySlug = "",
) {
  if (!bySlug && body) {
    const sqlQuery = hasContent
      ? `SELECT * FROM "HelpArticle" WHERE "categoryId" = $1 AND published = true LIMIT $2`
      : `SELECT title, "categoryId", slug, id FROM "HelpArticle" WHERE "categoryId" = $1 AND published = true LIMIT $2`;

    const articles = await sql.query(sqlQuery, [body.categoryId, body.limit]);

    return articles;
  } else if (bySlug) {
    const articles = await sql.query(
      `SELECT a.slug FROM "HelpCategory" c LEFT JOIN "HelpArticle" a ON a."categoryId" = c.id AND a.order = 0 WHERE c.slug = $1`,
      [bySlug],
    );

    return articles;
  }
}
