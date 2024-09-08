import { env } from "@/env/server";

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

    return data;
  }
}
