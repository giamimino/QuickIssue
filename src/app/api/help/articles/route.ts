import GENERIC_ERRORS from "@/constants/errors/generic.errors";
import { sql } from "@/lib/db";
import { isUUID } from "@/schema/generic.schema";
import getArticles from "@/services/help/articles/articles.service";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const { categoryId, limit, content } = Object.fromEntries(
      searchParams.entries(),
    );

    await isUUID.parseAsync(categoryId);

    const value = Number(limit);
    const Limit = isNaN(value) ? 20 : value;

    const articles = await getArticles(Boolean(content), {
      limit: Limit,
      categoryId,
    });

    return NextResponse.json({ ok: true, articles }, { status: 200 });
  } catch (err) {
    console.log(err);

    if (err instanceof Error) {
      if (err instanceof ZodError) {
        return NextResponse.json(
          { ok: false, error: GENERIC_ERRORS.GENERIC_ERROR },
          { status: 400 },
        );
      } else {
        return NextResponse.json(
          { ok: false, error: GENERIC_ERRORS.SERVER_ERROR },
          { status: 500 },
        );
      }
    }
  }
}
