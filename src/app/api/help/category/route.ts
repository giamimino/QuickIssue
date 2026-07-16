import GENERIC_ERRORS from "@/constants/errors/generic.errors";
import { sql } from "@/lib/db";
import { isUUID } from "@/schema/generic.schema";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const { id, limit, slug } = Object.fromEntries(searchParams.entries());

    const value = Number(limit);
    const Limit = isNaN(value) ? 20 : value;
    const check = isUUID.safeParse(id ?? "");
    let Id = null;

    if (check.success) {
      Id = check.data;
    }

    let categories;

    if (Id) {
      categories = await sql.query(
        `SELECT * FROM "HelpCategory" WHERE id = $1 LIMIT 1`,
        [Id],
      );
    } else if (slug) {
      categories = await sql.query(
        `SELECT * FROM "HelpCategory" WHERE slug = $1 LIMIT 1`,
        [slug],
      );
    } else {
      categories = await sql.query(`SELECT * FROM "HelpCategory" LIMIT $1`, [
        Limit,
      ]);
    }

    return NextResponse.json({ ok: true, categories }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: GENERIC_ERRORS.SERVER_ERROR },
      { status: 500 },
    );
  }
}
