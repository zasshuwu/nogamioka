import { SiSpotify } from "react-icons/si";
import { IoIosMusicalNotes } from "react-icons/io";

export function SpotifyBadge({ data }: any) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={
        data?.isPlaying
          ? data.songUrl
          : "https://open.spotify.com/user/fugunagi"
      }
      className="btn-ghost btn relative flex h-fit w-80 items-center space-x-4 rounded-md border border-zinc-500 p-3 transition-all hover:border-primary"
    >
      <div className="w-16">
        {data?.isPlaying && data?.albumImageUrl ? (
          <img
            className={"w-16 rounded-md"}
            // className={"w-16 shadow-md rounded-md shadow-[#a99398]"}
            src={data?.albumImageUrl}
            alt={data?.album}
          />
        ) : (
          <IoIosMusicalNotes size={64} color={"#2dd4bf"} />
        )}
      </div>

      <div className="flex-1 font-sans">
        <p className="component text-sm font-bold">
          {data?.isPlaying
            ? data?.type === "episode"
              ? "Listening to a podcast"
              : data?.type === "ad"
              ? "Spotify Freemium ad spot 🙃"
              : "🎧 " + data.title
            : "not listening at the moment, any suggestions?"}
        </p>
        <p className="font-dark text-xs">
          {data?.isPlaying ? data.artist : null}
        </p>
        <p className="font-dark text-neutral-500 dark:text-neutral-400 w-[172px] overflow-hidden overflow-ellipsis whitespace-nowrap text-xs font-light">
          {data?.isPlaying
            ? "Album: " + (data.album !== undefined ? data.album : "Episode")
            : data?.isPlaying === undefined
            ? null
            : null}
        </p>
      </div>
      <div className="absolute bottom-1.5 right-1.5">
        <SiSpotify size={20} color={"#1ED760"} />
      </div>
    </a>
  );
}
