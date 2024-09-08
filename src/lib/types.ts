import { z } from "zod";

export const AccessTokenResponseSchema = z.object({
  access_token: z.string(),
  token_type: z.string(),
  expires_in: z.number(),
  scope: z.string(),
});

export const NowPlayingSchema = z.object({
  progress_ms: z.number().optional().default(0),
  item: z
    .object({
      uri: z.string(),
      name: z.string(),
      duration_ms: z.number().optional().default(0),
      preview_url: z
        .string()
        .url()
        .nullable()
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
  is_playing: z.boolean().optional().default(false),
});

export type NowPlaying = z.infer<typeof NowPlayingSchema>;

export const AppleMusicNowPlayingSchema = z.object({
  title: z.string(),
  albumTitle: z.string(),
  artist: z.string(),
  albumCoverUrl: z.string().optional(),
  endpointKey: z.string().optional(),
  lyricsUri: z.string().url().optional(),
});

export type AppleMusicNowPlaying = z.infer<typeof AppleMusicNowPlayingSchema>;
