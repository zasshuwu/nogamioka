"use server";

import { AccessTokenResponseSchema, NowPlayingSchema } from "@/lib/types";
import { env } from "@/env/server";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

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

async function getNowPLaying() {
  const accessToken = (await getAccessToken())?.access_token;

  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const raw = await res.json();

  const data = NowPlayingSchema.parse(raw);

  return data;
}

export async function getSpotifyStatus() {
  return await getNowPLaying();
}
