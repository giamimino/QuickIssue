import GENERIC_ERRORS from "@/constants/errors/generic.errors";
import { auth } from "@/lib/auth/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payload = await auth();

    return NextResponse.json({ ok: true, payload }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: GENERIC_ERRORS.SERVER_ERROR },
      { status: 500 },
    );
  }
}
