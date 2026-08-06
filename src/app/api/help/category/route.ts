import GENERIC_ERRORS from "@/constants/errors/generic.errors";
import { sql } from "@/lib/db";
import { isUUID } from "@/schema/generic.schema";
import getCategories from "@/services/help/category/categories.service";
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

    let arg: GetCategoryRequest;

    if (Id) {
      arg = {
        type: "byId",
        payload: { id: Id },
      };
    } else if (slug) {
      arg = {
        type: "bySlug",
        payload: { slug },
      };
    } else {
      arg = {
        type: "default",
        payload: { limit: Limit },
      };
    }

    const categories = await getCategories(arg);

    return NextResponse.json({ ok: true, categories }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: GENERIC_ERRORS.SERVER_ERROR },
      { status: 500 },
    );
  }
}
