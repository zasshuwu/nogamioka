import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    AZURE_COMM_DEST_ADDR: z.string(),
    AZURE_COMM_ENDPOINT: z.string(),
    AZURE_COMM_KEY: z.string(),
    AZURE_COMM_ORIG_ADDR: z.string(),
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
    SPOTIFY_REFRESH_TOKEN: z.string(),
    KV_HOMEPAGE_REST_API_URL: z.string(),
    KV_HOMEPAGE_REST_API_TOKEN: z.string(),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  experimental__runtimeEnv: {
    AZURE_COMM_DEST_ADDR: process.env.AZURE_COMM_DEST_ADDR,
    AZURE_COMM_ENDPOINT: process.env.AZURE_COMM_ENDPOINT,
    AZURE_COMM_KEY: process.env.AZURE_COMM_KEY,
    AZURE_COMM_ORIG_ADDR: process.env.AZURE_COMM_ORIG_ADDR,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    KV_HOMEPAGE_REST_API_URL: process.env.KV_HOMEPAGE_REST_API_URL,
    KV_HOMEPAGE_REST_API_TOKEN: process.env.KV_HOMEPAGE_REST_API_TOKEN,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
