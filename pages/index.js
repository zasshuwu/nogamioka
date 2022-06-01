import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function MinimizeBtn() {
	return (
		<button className="flex items-center justify-center hover:text-yellow-500 transition-all ease-in-out rounded-full p-1 hover:bg-slate-700">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
	);
}

function MaximizeBtn() {
	return (
		<button className="flex items-center justify-center hover:text-green-500 transition-all ease-in-out rounded-full p-1 hover:bg-slate-700">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
			</svg>
		</button>
	);
}

function CloseBtn() {
	return (
		<button className="flex items-center justify-center hover:text-red-500 transition-all ease-in-out rounded-full p-1 hover:bg-slate-700">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	);
}

export default function Home() {
	return (
		<div className="flex min-h-screen min-w-screen">
			<div className="flex flex-col m-auto h-screen w-screen sm:max-h-[768px] sm:max-w-[1366px] rounded-[18pt] shadow-2xl">
				<div className="flex justify-between items-center max-h-14 w-full bg-green-500 bg-opacity-80 rounded-t-[18pt]">
					<div className=" mt-2 ml-2 p-2 min-w-[100px] flex space-x-10 bg-black bg-opacity-10 rounded-[16pt] rounded-b-none text-white">
						<div>~ @ aaanh.home</div>
						<div> x </div>
					</div>
					<div className="flex justify-end items-center space-x-2 px-2">
						<MinimizeBtn></MinimizeBtn>
						<MaximizeBtn></MaximizeBtn>
						<CloseBtn></CloseBtn>
					</div>
				</div>
				<div
					className="overflow-y-scroll h-full p-4
        "
				>
					Reprehenderit est qui cupidatat ex mollit proident eu. Do duis esse exercitation
					ut. Lorem veniam velit sunt et sit enim deserunt exercitation. Labore veniam
					commodo cupidatat pariatur qui dolor qui et incididunt sit velit ad sint
					aliquip. Id ea deserunt do magna. Minim esse ex non aliqua nostrud ea veniam
					voluptate aute est excepteur officia est ad. Elit reprehenderit amet
					reprehenderit dolor id ad est dolore aliqua. Adipisicing reprehenderit irure
					reprehenderit enim dolore proident pariatur occaecat eu ad ad laboris eiusmod.
					Aliquip dolor excepteur cillum aliqua commodo eu. Laborum commodo labore sunt
					incididunt do qui proident ex in aute laboris nulla. Duis elit excepteur aliquip
					exercitation exercitation ex amet non officia culpa id enim. Culpa laborum sint
					deserunt culpa amet magna irure qui veniam mollit aliqua aliquip. Aliquip ad
					deserunt eiusmod consectetur anim duis. Aute excepteur consectetur enim et
					dolore mollit mollit ipsum proident. Occaecat excepteur dolore commodo ipsum
					labore magna reprehenderit non ipsum. Enim cillum anim cupidatat eiusmod
					excepteur consectetur occaecat non pariatur. Adipisicing laboris est ullamco eu
					cillum consequat voluptate occaecat consequat. Officia do reprehenderit laboris
					veniam. Anim consequat ea id aliqua nulla occaecat. Enim duis minim id aliquip
					aliqua eu sit commodo elit occaecat occaecat ipsum veniam. Aute proident Lorem
					mollit exercitation culpa nulla voluptate officia aliqua ad non mollit minim
					quis. Amet ut dolore exercitation ea est. Culpa sit irure id reprehenderit
					laboris laborum irure fugiat amet veniam consectetur.
				</div>
				<div
					id="navbarplaceholder"
					className="min-h-[36px] bg-neutral-500 rounded-b-[18pt]"
				></div>
			</div>
		</div>
	);
}
