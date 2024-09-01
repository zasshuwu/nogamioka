"use server";

import { env } from "@/env/server";
import { z } from "zod";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const AccessTokenResponseSchema = z.object({
  access_token: z.string(),
  token_type: z.string(),
  expires_in: z.number(),
  scope: z.string(),
});

async function getAccessToken() {
  const authToken = Buffer.from(
    `${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");
  const refreshToken = env.SPOTIFY_REFRESH_TOKEN;

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authToken}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const raw = await res.json();

  const { data, error } = AccessTokenResponseSchema.safeParse(raw);

  if (error) {
    console.error(
      "Error fetching access token from Spotify API\nPlease contact the developer https://aaanh.com/contact with the error message: ",
      error
    );
    return null;
  }

  return data;
}

const NowPlayingSchema = z.object({
  progress_ms: z.number().optional().default(0),
  item: z
    .object({
      duration_ms: z.number().optional().default(0),
      preview_url: z
        .string()
        .url()
        .optional()
        .default("https://open.spotify.com/user/fugunagi"),

      album: z
        .object({
          images: z.array(z.object({ url: z.string().url() })).optional(),
          name: z.string(),
        })
        .optional(),
      external_urls: z
        .object({
          spotify: z.string().url().optional(),
        })
        .optional(),
      artists: z
        .array(
          z.object({
            name: z.string().optional(),
          })
        )
        .optional(),
    })
    .optional(),
  currently_playing_type: z.string().optional(),
});

async function getNowPLaying() {
  const accessToken = (await getAccessToken())?.access_token;

  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const raw = await res.json();

  console.log(raw);

  const data = NowPlayingSchema.parse(raw);

  console.log(data);

  return data;
}

export async function getSpotifyStatus() {
  return await getNowPLaying();
}
