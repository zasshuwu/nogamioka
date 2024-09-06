import { NextRequest, NextResponse } from "next/server";
import { broadcast } from "@/lib/apple-music/broadcast";
import { AppleMusicNowPlayingSchema } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const parsed = AppleMusicNowPlayingSchema.safeParse(req);

    if (parsed.error) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const nowPlayingData = parsed.data;

    broadcast(nowPlayingData);

    return NextResponse.json({ message: "Data broadcasted" }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { message: "Unable to broadcast data" },
      { status: 500 }
    );
  }
}
