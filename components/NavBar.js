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
	function handleHelp() {
		setCommand(":help");
		setContent("help");
	}

	function handleContact() {
		setCommand("cd ~/contact");
		setContent("contact");
	}
	function handleExperience() {
		setCommand("cd /var/experience");
		setContent("experience");
	}
	function handleAwards() {
		setCommand("cd /bin/awards");
		setContent("awards");
	}
	function handleProjects() {
		setCommand("cd /lib/projects");
		setContent("projects");
	}

	return (
		<div className="w-full py-2 px-4 min-h-[32px] flex flex-wrap mb-2 justify-end space-x-2 border-t">
			<button
				onClick={handleHome}
				className={navBtnStyle + " hover:bg-purple-500 hover:text-white"}
			>
				{"1️⃣9️⃣2️⃣ cd ~"}
			</button>
			<button
				onClick={handleHelp}
				className={navBtnStyle + " hover:bg-slate-500 hover:text-white"}
			>
				{"📘 :help"}
			</button>
			<button
				onClick={handleContact}
				className={navBtnStyle + " hover:bg-green-500 hover:text-white"}
			>
				{"📱 Contact"}
			</button>
			<button
				onClick={handleExperience}
				className={navBtnStyle + " hover:bg-blue-500 hover:text-white"}
			>
				{"👨‍💼 Experience"}
			</button>
			<button
				onClick={handleProjects}
				className={navBtnStyle + " hover:bg-pink-500 hover:text-white"}
			>
				{"🔧 Projects"}
			</button>
			<button
				onClick={handleAwards}
				className={navBtnStyle + " hover:bg-yellow-500 hover:text-white"}
			>
				{"🏆 Awards"}
			</button>
		</div>
	);
}
