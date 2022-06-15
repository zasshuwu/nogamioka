import useSWR from "swr";
import { SiSpotify } from "react-icons/si";

export default function HomeContent() {
	let d = new Date();

	return (
		<div className="sm:text-md text-sm font-normal my-4">
			<div id="welcome" className="mt-4">
				<h2 className="text-green-600 font-bold">
					{"Welcome to Anh's Portfolio 6.90 RC (Yeetus Magus)"}
				</h2>
			</div>
			<div id="motd" className="my-2">
				<p className="break-all">
					* <span className="text-cyan-500">Documentation:</span>{" "}
					<a href="https://github.com/aaanh/homepage">
						https://github.com/aaanh/homepage.git
					</a>
				</p>
				<p>
					* <span className="text-cyan-500">Status:</span> 📚 🎓 and 👀 internships.
				</p>
				<p>
					* <span className="text-cyan-500">Institution:</span> Concordia University,
					Montreal, QC. Canada
				</p>
				<p>
					* <span className="text-cyan-500">Specializations:</span> Software Development,
					DevOps/SRE, Systems Administration in Windows and Linux.
				</p>
				<p>
					<span className="text-yellow-600 dark:text-yellow-400">420 updates</span> can be
					applied immediately.
				</p>
				<p>
					<span className="text-yellow-600 dark:text-yellow-400">Published Domains:</span>{" "}
					hoanganh.dev; hoanganh.tech; aaanh.app
				</p>
				<p>
					To see these additional updates run:{" "}
					<span className="italic">apt list --upgrade</span>
				</p>
				<br />
				<p className="text-slate-500">Last login: {d.toString()}</p>
			</div>
		</div>
	);
}

export function SpotifyStatus({ data }) {
	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			href={data?.isPlaying ? data.songUrl : "https://open.spotify.com/user/fugunagi"}
			className="relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-80 font-['Be_Vietnam_Pro']"
		>
			<div className="w-16">
				{data?.isPlaying ? (
					<img className="w-16 shadow-sm" src={data?.albumImageUrl} alt={data?.album} />
				) : (
					<SiSpotify size={64} color={"#1ED760"} />
				)}
			</div>

			<div className="flex-1">
				<p className="font-bold component text-sm">
					{data?.isPlaying ? "Listening to: " + data.title : "Not Listening"}
				</p>
				<p className="text-xs font-dark">{data?.isPlaying ? data.artist : "Spotify"}</p>
			</div>
			<div className="absolute bottom-1.5 right-1.5">
				<SiSpotify size={20} color={"#1ED760"} />
			</div>
		</a>
	);
}
