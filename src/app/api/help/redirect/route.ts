import GENERIC_ERRORS from "@/constants/errors/generic.errors";
import { sql } from "@/lib/db";
import getArticles from "@/services/help/articles/articles.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { category } = body;

    if (!category)
      return NextResponse.json(
        { ok: false, error: GENERIC_ERRORS.GENERIC_ERROR },
        { status: 400 },
      );

    const articles = await getArticles(false, { limit: 1 }, category);

    if (!articles)
      return NextResponse.json(
        { ok: false, error: GENERIC_ERRORS.GENERIC_ERROR },
        { status: 400 },
      );

    const article = articles[0];
    const slug = article.slug;

    const url = `/help/${category}/${slug}`;

    return NextResponse.json({ ok: true, redirectPath: url }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: GENERIC_ERRORS.SERVER_ERROR },
      { status: 500 },
    );
  }
}
