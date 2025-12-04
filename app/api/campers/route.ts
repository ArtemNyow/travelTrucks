import { NextRequest, NextResponse } from "next/server";
import { api } from "../api";

interface CampersQuery {
  page?: number;
  limit?: number;
  location?: string;
  type?: string;
  AC?: string;
  kitchen?: string;
}

export async function GET(req: NextRequest) {
  try {
    const page = Number(req.nextUrl.searchParams.get("page") ?? 1);
    const limit = Number(req.nextUrl.searchParams.get("limit") ?? 4);
    const location = req.nextUrl.searchParams.get("location") ?? undefined;
    const type = req.nextUrl.searchParams.get("type") ?? undefined;
    const AC = req.nextUrl.searchParams.get("AC") ?? undefined;
    const kitchen = req.nextUrl.searchParams.get("kitchen") ?? undefined;

    const params: CampersQuery = { page, limit };
    if (location) params.location = location;
    if (type) params.type = type;
    if (AC) params.AC = AC;
    if (kitchen) params.kitchen = kitchen;

    const { data } = await api.get("/campers", { params });

    return NextResponse.json({
      data: data.items ?? [],
      total: data.total ?? 0,
    });
  } catch (error: unknown) {
    console.error("Failed to fetch campers:", error);
    return NextResponse.json({ data: [], total: 0 }, { status: 500 });
  }
}
