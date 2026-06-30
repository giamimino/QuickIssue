import { ERROR_TYPE } from "@/types/generic";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
): Promise<NextResponse<{ ok: boolean; error?: ERROR_TYPE }>> {
  try {
    const { searchParams } = new URL(req.url);
    const { id } = Object.fromEntries(searchParams.entries());

    if (!id || typeof id !== "string")
      return NextResponse.json(
        { ok: false, error: { title: "", description: "" } },
        { status: 400 },
      );
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: { title: "", description: "" } },
      { status: 500 },
    );
  }
}
