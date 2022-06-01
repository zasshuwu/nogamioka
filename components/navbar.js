import { useState } from "react";
import { useRouter } from "next/router";

export default function NavBar({ setCommand, setContent }) {
	const router = useRouter();

	const navBtnStyle =
		"py-2 px-4 font-['Be_Vietnam_Pro'] text-sm rounded-xl justify-center items-center flex transition-all ease-in-out";

	const [navTarget, setNavTarget] = useState({
		contact: false,
		experience: false,
		awards: false,
		projects: false,
		home: false,
	});

	function handleHome() {
		setCommand("cd ~");
		setContent("home");
	}

	function handleContact() {
		setCommand("cd ~/contact");
		setContent("contact");
	}
	function handleExperience() {
		setCommand("cd ~/contact");
		setContent("contact");
	}
	function handleAwards() {
		setCommand("cd ~/contact");
		setContent("contact");
	}
	function handleProjects() {
		setCommand("cd ~/contact");
		setContent("contact");
	}

	return (
		<div className="w-full py-2 px-4 min-h-[32px] flex justify-end space-x-2 border-t">
			<button className={navBtnStyle + " hover:bg-purple-500 hover:text-white"}>
				{"cd ~"}
			</button>
			<button className={navBtnStyle + " hover:bg-green-500 hover:text-white"}>
				{"Contact"}
			</button>
			<button className={navBtnStyle + " hover:bg-blue-500 hover:text-white"}>
				{"Experience"}
			</button>
			<button className={navBtnStyle + " hover:bg-yellow-500 hover:text-white"}>
				{"Awards"}
			</button>
			<button className={navBtnStyle + " hover:bg-pink-500 hover:text-white"}>
				{"Projects"}
			</button>
		</div>
	);
}
