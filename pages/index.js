import { SpotifyBadge } from "../components/SpotifyBadge";

export default function Splash() {
	return (
		<div className="w-screen h-screen bg-purple-50 dark:bg-neutral-900 flex flex-col justify-center items-center">
			<div>
				<div className="rounded-full h-48 w-48 sm:h-64 sm:w-64 shadow-xl">
					<Image
						width={"200px"}
						height={"200px"}
						layout="responsive"
						style={{ borderRadius: "50%" }}
						src="https://avatars.githubusercontent.com/u/37283437?v=4"
					></Image>
				</div>
				<div className="mt-4">
					<SpotifyBadge data={data}></SpotifyBadge>
				</div>
			</div>
		</div>
	);
}
