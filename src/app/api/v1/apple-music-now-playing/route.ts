import { NextRequest, NextResponse } from "next/server";

let clients: any[] = [];

export function GET(request: NextRequest) {
  // Set up SSE headers
  const headers = new Headers({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // Create a readable stream for SSE
  const stream = new ReadableStream({
    start(controller) {
      // Add the client to the list
      const client = {
        send: (data: string) => {
          controller.enqueue(new TextEncoder().encode(`data: ${data}\n\n`));
        },
        close: () => {
          controller.close();
        },
      };

      clients.push(client);

      // Handle connection close event
      request.signal.addEventListener("abort", () => {
        clients = clients.filter((c) => c !== client);
        client.close();
      });
    },
  });

  return new Response(stream, { headers });
}

// Utility function to broadcast data to all connected clients
export function broadcast(data: object) {
  clients.forEach((client) => {
    client.send(JSON.stringify(data));
  });
}
