import { useRouter } from "next/router";

export default function Empty() {
	const router = useRouter();
	return (
		<div
			style={{ fontFamily: "Comic Sans MS, Comic Sans, cursive" }}
			className="h-screen w-screen bg-black flex justify-center items-center text-white flex-col space-y-4"
		>
			<div>
				<div
					className="h-64 w-64"
					style={{ backgroundImage: "url('/doge-bonk.gif')", backgroundSize: "contain" }}
				></div>
			</div>
			<div className="text-4xl text-red-500">Wow, many empty</div>
			<p className="text-green-500 text-4xl">
				{"Congrats, you broke the web. Now face the wrath of (g)old internet memes."}
			</p>
			<div className="flex">
				<div
					className="h-64 w-64"
					style={{
						backgroundImage: "url('/rickroll.gif')",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				></div>
				<div
					className="h-64 w-64"
					style={{ backgroundImage: "url('/pepe.gif')", backgroundSize: "cover" }}
				></div>
				<div
					className="h-64 w-64"
					style={{ backgroundImage: "url('/pog.gif')", backgroundSize: "cover" }}
				></div>
				<div
					className="h-64 w-64"
					style={{ backgroundImage: "url('/steve.gif')", backgroundSize: "cover" }}
				></div>
			</div>
			<p className="text-blue-500">
				{"Have you repented for your sins? Click the button to go back 🤔"}
			</p>
			<button
				onClick={() => router.push("/")}
				className="border py-2 px-4 hover:text-black hover:bg-white transition-all ease-in-out"
			>
				{"<<<< "} Go Back
			</button>
		</div>
	);
}
