import { env } from "@/env/server";
import { GeniusSearchResponseSchema } from "@/lib/types";

export class GeniusClient {
  #accessToken: string;

  #endpoint: string = "https://api.genius.com";

  constructor() {
    this.#accessToken = env.GENIUS_ACCESS_TOKEN;
  }

  async searchSong(query: string) {
    const searchParams = new URLSearchParams({
      q: query,
    });
    const uri = `${this.#endpoint}/search?${searchParams}`;
    const res = await fetch(uri, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.#accessToken}`,
      },
    });
    const data = await res.json();
    try {
      const lyricsUri =
        GeniusSearchResponseSchema.parse(data).response.hits[0].result.url;

      return lyricsUri;
    } catch (e) {
      console.log("Unable to search for lyrics");
      return undefined;
    }
  }
}
