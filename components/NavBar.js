import { useState } from "react";
import { useRouter } from "next/router";

const ThemeSwitcher = () => {
	return (
		<div className="flex text-slate justify-center dark:transparent dark:border-gray-500 rounded-3xl px-2">
			<button
				type="button"
				aria-label="Use Dark Mode"
				onClick={() => {
					document.documentElement.classList.add("dark");
					localStorage.setItem("theme", "dark");
				}}
				className="flex items-center px-4 dark:bg-primary rounded-3xl justify-center align-center p-2 transition dark:text-green-500 hover:bg-purple-500 hover:dark:bg-transparent"
			>
				Dark
			</button>

			<button
				type="button"
				aria-label="Use Light Mode"
				onClick={() => {
					document.documentElement.classList.remove("dark");
					localStorage.setItem("theme", "light");
				}}
				className="flex items-center  bg-primary dark:bg-transparent rounded-3xl justify-center align-center px-4 transition dark:text-white text-purple-600 hover:dark:bg-green-500"
			>
				Light
			</button>
		</div>
	);
};

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
		<div className="w-full py-2 px-4 min-h-[36px] flex flex-wrap mb-2 justify-between space-x-2 border-t">
			<ThemeSwitcher />
			<div className="flex flex-wrap">
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
		</div>
	);
}
