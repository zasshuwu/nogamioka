import { SiApplemusic } from "react-icons/si";
import { IoIosMusicalNotes } from "react-icons/io";
import Image from "next/image";
import { AppleMusicNowPlaying } from "@/lib/types";

export default function AppleMusicStatusCard({
  title,
  albumTitle,
  albumCoverUrl,
  artist,
  lyricsUri,
}: AppleMusicNowPlaying) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={lyricsUri}
      className="btn-ghost btn relative flex h-fit w-80 items-center space-x-4 rounded-md border border-zinc-500 p-2 transition-all hover:border-primary"
    >
      <div className="w-16">
        {albumCoverUrl ? (
          <Image
            unoptimized
            height={72}
            width={72}
            className={"w-16 rounded-md"}
            src={albumCoverUrl ?? "https://github.com/aaanh.png"}
            alt={albumCoverUrl}
          />
        ) : (
          <IoIosMusicalNotes size={64} className="text-primary" />
        )}
      </div>

      <div className="flex-1 text-left font-sans pr-5">
        <p className="component text-sm font-bold normal-case">
          {title ?? "Not listening at the moment"}
        </p>
        <p className="font-dark text-xs">{artist ?? "Artist: ---"}</p>
        <p className="font-dark text-primary/80 w-[172px] overflow-hidden overflow-ellipsis whitespace-nowrap text-xs font-light">
          {`Album: ${albumTitle ?? "---"}`}
        </p>
      </div>
      <div className="absolute bottom-1.5 right-1.5">
        <SiApplemusic size={16} color={"#FA2D48"} />
      </div>
    </a>
  );
}
