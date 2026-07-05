import { sql } from "@/lib/db";
import { isUUID } from "@/schema/generic.schema";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const { id, limit } = Object.fromEntries(searchParams.entries());

    const value = Number(limit);
    const Limit = isNaN(value) ? 20 : value;
    const check = isUUID.safeParse(id);
    let Id = null;

    if (!check.error) {
      Id = check.data;
    }

    const categories = await sql.query(
      `SELECT * FROM 'HelpCategory' WHERE $1 IS NULL OR id = $1 LIMIT $2`,
      [id, Limit],
    );

    return NextResponse.json({ ok: true, categories }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, message: "" }, { status: 500 });
  }
}
