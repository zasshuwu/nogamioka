import { NextRequest, NextResponse } from "next/server";
import { addClient, removeClient } from "@/lib/apple-music/broadcast";

export function GET(request: NextRequest) {
  const headers = new Headers({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  const stream = new ReadableStream({
    start(controller) {
      const client = {
        send: (data: string) => {
          controller.enqueue(new TextEncoder().encode(`data: ${data}\n\n`));
        },
        close: () => {
          controller.close();
        },
      };

      addClient(client);

      request.signal.addEventListener("abort", () => {
        removeClient(client);
        client.close();
      });
    },
  });

  return new Response(stream, { headers });
}
