import { sql } from "@/lib/db";

export default async function getCategories(req: GetCategoryRequest) {
  switch (req.type) {
    case "byId": {
      const categories = await sql.query(
        `SELECT * FROM "HelpCategory" WHERE id = $1 LIMIT 1`,
        [req.payload.id],
      );
      return categories;
    }
    case "bySlug": {
      const categories = await sql.query(
        `SELECT * FROM "HelpCategory" WHERE slug = $1 LIMIT 1`,
        [req.payload.slug],
      );

      return categories;
    }
    case "default": {
      const categories = await sql.query(
        `SELECT * FROM "HelpCategory" LIMIT $1`,
        [req.payload.limit],
      );

      return categories;
    }
  }
}
