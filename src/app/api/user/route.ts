import GENERIC_ERRORS from "@/constants/errors/generic.errors";
import { sql } from "@/lib/db";
import { ERROR_TYPE } from "@/types/generic";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
): Promise<NextResponse<{ ok: boolean; error?: ERROR_TYPE; user?: unknown }>> {
  try {
    const { searchParams } = new URL(req.url);
    const { id } = Object.fromEntries(searchParams.entries());

    if (!id || typeof id !== "string")
      return NextResponse.json(
        { ok: false, error: GENERIC_ERRORS.GENERIC_ERROR },
        { status: 400 },
      );

    const users = await sql.query(`SELECT * FROM users WHERE id = $1`, [id]);
    const user = users[0];

    return NextResponse.json({ ok: true, user }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: GENERIC_ERRORS.SERVER_ERROR },
      { status: 500 },
    );
  }
}
