import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import NavBar from "../components/navbar";
import Contact from "../components/Contact";
import Help from "../components/Help";

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

const cmdList = [
	"cd ~",
	"cd /etc/contact",
	"cd /var/experience",
	"cd /bin/awards",
	"cd /lib/projects",
	":help",
];

export default function Home() {
	const [content, setContent] = useState("home");
	const [command, setCommand] = useState();
	const [isValidCmd, setValidCmd] = useState(true);

	const handleCommandInput = (e) => {
		setCommand(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("Command Fired");
		cmdList.includes(command) ? setValidCmd(true) : setValidCmd(false);
		command == "cd /etc/contact"
			? setContent("contact")
			: command == ":help"
			? setContent("help")
			: setContent("home");
	};
	const Prompt = ({ className }) => {
		return <p className={className}>{"visitor@aaanh.home > "}</p>;
	};

	return (
		<div className="flex min-h-screen min-w-screen">
			<div className="flex flex-col m-auto h-screen w-screen sm:max-h-[768px] sm:max-w-[1366px] rounded-[18pt] shadow-2xl">
				<div className="flex justify-between items-center max-h-14 w-full bg-green-500 bg-opacity-80 rounded-t-[18pt]">
					<div className="mt-2 ml-2 p-2 px-4 min-w-[100px] flex space-x-10 bg-black bg-opacity-10 rounded-[16pt] rounded-b-none text-white">
						<div>~ @ aaanh.home</div>
						<div> x </div>
					</div>
					<div className="flex justify-end items-center space-x-2 px-2">
						<MinimizeBtn></MinimizeBtn>
						<MaximizeBtn></MaximizeBtn>
						<CloseBtn></CloseBtn>
					</div>
				</div>
				<div className="overflow-y-scroll h-full p-4 font-fira-code font-bold text-md">
					<div className="flex space-x-4 items-center">
						<Prompt className="text-purple-500"></Prompt>
						<form onSubmit={(e) => handleSubmit(e)}>
							<input
								className="w-auto border-none text-sky-500 font-bold block px-3 py-2 bg-white border border-slate-300 text-sm placeholder-slate-400
								focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-transparent
								disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
								invalid:border-pink-500 invalid:text-pink-600
								focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
								placeholder="try :help & Enter"
								name="terminal"
								onChange={(e) => handleCommandInput(e)}
								type="text"
								autoComplete="off"
							></input>
							<input type="submit" hidden></input>
						</form>
						<div>{"< "}Be cool and use the CLI 😎</div>
						<div className="transition-all ease-in-out">
							{isValidCmd ? null : "🛑 Invalid Command"}
						</div>
					</div>
					{content == "contact" ? <Contact></Contact> : null}
					{content == "help" ? <Help></Help> : null}
				</div>
				<NavBar setCommand={setCommand} setContent={setContent}></NavBar>
			</div>
		</div>
	);
}
