import GENERIC_ERRORS from "@/constants/errors/generic.errors";
import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { category } = body;

    console.log(category);

    if (!category)
      return NextResponse.json(
        { ok: false, error: GENERIC_ERRORS.GENERIC_ERROR },
        { status: 400 },
      );

    const articles = await sql.query(
      `SELECT a.slug FROM "HelpArticle" a JOIN "HelpCategory" c ON c.slug = $1 WHERE a.order = 0`,
      [category],
    );

    return NextResponse.json({ ok: true, articles }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
