import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

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
	const [content, setContent] = useState("home");
	const [command, setCommand] = useState("");

	const handleCommandInput = () => {};

	return (
		<div className="flex min-h-screen min-w-screen">
			<div className="flex flex-col m-auto h-screen w-screen sm:max-h-[768px] sm:max-w-[1366px] rounded-[18pt] shadow-2xl">
				<div className="flex justify-between items-center max-h-14 w-full bg-green-500 bg-opacity-80 rounded-t-[18pt]">
					<div className=" mt-2 ml-2 p-2 px-4 min-w-[100px] flex space-x-10 bg-black bg-opacity-10 rounded-[16pt] rounded-b-none text-white">
						<div>~ @ aaanh.home</div>
						<div> x </div>
					</div>
					<div className="flex justify-end items-center space-x-2 px-2">
						<MinimizeBtn></MinimizeBtn>
						<MaximizeBtn></MaximizeBtn>
						<CloseBtn></CloseBtn>
					</div>
				</div>
				<div className="overflow-y-scroll h-full p-4"></div>
				<div
					id="navbarplaceholder"
					className="min-h-[48px] border-t rounded-b-[18pt]"
				></div>
			</div>
		</div>
	);
}
