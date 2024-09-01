import { SiSpotify } from "react-icons/si";
import { IoIosMusicalNotes } from "react-icons/io";
import Image from "next/image";
import { NowPlaying } from "@/lib/types";

export default function SpotifyStatusCard({
  progress_ms,
  currently_playing_type,
  item,
  is_playing,
}: NowPlaying) {
  // Calculate the progress percentage
  const progressPercentage =
    is_playing && item?.duration_ms
      ? (progress_ms / item.duration_ms) * 100
      : 0;

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={
        is_playing
          ? item?.external_urls?.spotify
          : "https://open.spotify.com/user/fugunagi"
      }
      className="btn-ghost btn relative flex h-fit w-80 items-center space-x-4 rounded-md border border-zinc-500 p-3 transition-all hover:border-primary"
    >
      <div className="w-16">
        {is_playing && item?.album?.images?.[0].url ? (
          <Image
            height={72}
            width={72}
            className={"w-16 rounded-md"}
            src={item.album.images[0].url}
            alt={item.album.name}
          />
        ) : (
          <IoIosMusicalNotes size={64} className="text-primary" />
        )}
      </div>

      <div className="flex-1 text-left font-sans">
        <p className="component text-sm font-bold normal-case">
          {is_playing
            ? currently_playing_type === "episode"
              ? "Listening to a podcast"
              : currently_playing_type === "ad"
              ? "Spotify Freemium ad spot 🙃"
              : "🎧 " + item?.name
            : "Not listening at the moment, any suggestions?"}
        </p>
        <p className="font-dark text-xs">
          {is_playing ? item?.artists?.[0].name : null}
        </p>
        <p className="font-dark text-neutral-500 dark:text-neutral-400 w-[172px] overflow-hidden overflow-ellipsis whitespace-nowrap text-xs font-light">
          {is_playing
            ? "Album: " +
              (item?.album?.name !== undefined ? item.album.name : "Episode")
            : is_playing === undefined
            ? null
            : null}
        </p>
        {/* Progress bar */}

        {is_playing && (
          <div className="grid grid-cols-[1fr_2fr]">
            <div className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">
              {formatTime(progress_ms)} / {formatTime(item?.duration_ms || 0)}
            </div>
            <div className="bottom-0 left-0 w-24 h-1.5 bg-zinc-300 dark:bg-zinc-600 mt-2">
              <div
                className="h-full bg-primary"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-1.5 right-1.5">
        <SiSpotify size={16} color={"#1ED760"} />
      </div>
    </a>
  );
}
