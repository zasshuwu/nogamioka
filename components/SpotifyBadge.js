import { SiSpotify } from "react-icons/si";
import { IoIosMusicalNotes } from "react-icons/io";

export function SpotifyBadge({ data }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={
        data?.isPlaying
          ? data.songUrl
          : "https://open.spotify.com/user/fugunagi"
      }
      className="relative flex items-center p-3 space-x-4 transition-all border rounded-md shadow-md shadow-green-500/50 hover:shadow-green-500 w-80 font-['Be_Vietnam_Pro'] border-green-500/40"
    >
      <div className="w-16">
        {data?.isPlaying && data?.albumImageUrl ? (
          <img
            className={"w-16 shadow-md rounded-md shadow-green-500/50"}
            // className={"w-16 shadow-md rounded-md shadow-[#a99398]"}
            src={data?.albumImageUrl}
            alt={data?.album}
          />
        ) : (
          <IoIosMusicalNotes size={64} color={"#2dd4bf"} />
        )}
      </div>

      <div className="flex-1 font-['Noto_Sans_JP']">
        <p className="font-bold component text-sm">
          {data?.isPlaying
            ? data?.type === "episode"
              ? "Listening to a podcast"
                : data?.type === "ad"
              ? "Spotify Freemium ad spot 🙃"
                : "🎧 " + data.title
            : "not listening at the moment, any suggestions?"}
        </p>
        <p className="text-xs font-dark">
          {data?.isPlaying ? data.artist : null}
        </p>
        <p className="text-xs font-light font-dark overflow-ellipsis overflow-hidden whitespace-nowrap w-[172px] text-neutral-500 dark:text-neutral-400">
          {data?.isPlaying ? "Album: " + data.album : null}
        </p>
      </div>
      <div className="absolute bottom-1.5 right-1.5">
        <SiSpotify size={20} color={"#1ED760"} />
      </div>
    </a>
  );
}
