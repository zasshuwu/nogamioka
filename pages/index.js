import { SpotifyBadge } from "../components/SpotifyBadge";
import useSWR from "swr";
import Image from "next/image";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Typed from "typed.js";
import SEO from "../components/SEO";

const TypedBios = () => {
	const el = useRef(null);
	const typed = useRef(null);

	useEffect(() => {
		const options = {
			stringsElement: "#bios",
			typeSpeed: 25,
			backSpeed: 5,
			loop: true,
			backDelay: 800,
		};
		typed.current = new Typed(el.current, options);
		return () => typed.current.destroy();
	}, []);

	return (
		<div>
			<ul id="bios" className="hidden">
				<li>
					You can simply call me <b className="font-medium">Anh</b>.
				</li>
				<li className="word-wrap">I can communicate in VN, EN, FR, JP, DE.</li>
				<li>I love listening to music.</li>
				<li>I play guitar.</li>
				<li>A lover for good food.</li>
				<li>A team-player and result-oriented person.</li>
				<li>Capable of admistrating Linux systems</li>
				<li>...and Windows Server.</li>
				<li>Good knowledge on networking protocols.</li>
				<li>Well-versed in Docker, k8s, and IaC tools.</li>
				<li>Firm grasp on security concepts &amp; frameworks.</li>
			</ul>
			<span ref={el} className="text-neutral-900 dark:text-neutral-200" />
		</div>
	);
};

export default function Splash() {
	let d = new Date();

	const fetcher = (url) => fetch(url).then((res) => res.json());
	const { data, error } = useSWR("/api/spotify", fetcher);

	const [themeBtnTxt, setThemeBtnTxt] = useState();
	useEffect(() => {
		setThemeBtnTxt(localStorage.getItem("theme"));
	}, []);

	return (
		<div className="overflow-hidden font-['Fira_Sans'] w-screen sm:h-screen h-[88vh] dark:text-white bg-white dark:bg-neutral-900 flex flex-col justify-center items-center transition-all ease-in-out">
			<SEO title="aaanh 👾"></SEO>
			<div className="p-8 flex flex-col justify-center items-center sm:border min-h-[80vh] rounded-md sm:shadow-2xl dark:border-neutral-600 border-neutral-200">
				<div className="rounded-full h-32 w-32 sm:h-48 sm:w-48 shadow-2xl my-4 relative -top-8">
					<Image
						width={"200px"}
						height={"200px"}
						layout="responsive"
						style={{ borderRadius: "50%" }}
						src="/splash-photo.jpeg"
					></Image>
				</div>
				<div className="text-center">
					<h1 className="font-bold">Anh Hoang Nguyen</h1>
					<h2 className="">
						Software Engineer{" "}
						{
							<span className="sm:hidden">
								<br></br>
							</span>
						}{" "}
						DevOps &amp; Web Development
					</h2>
					<h3 className="text-neutral-500">Bachelor of Computer Engineering &apos;24</h3>
					<TypedBios></TypedBios>
					<div className="my-2 font-mono">
						<Link href="/home">go to full site</Link>
					</div>
					<div className="flex space-x-4 justify-center my-4">
						<a href="https://linkedin.com/in/aaanh">
							<SiLinkedin size={28}></SiLinkedin>
						</a>
						<a href="https://github.com/aaanh">
							<SiGithub size={28}></SiGithub>
						</a>
						<a href="mailto:iam@hoanganh.dev">
							<IoMdMail size={28}></IoMdMail>
						</a>
						<a href="https://twitter.com/yeetusmagus">
							<SiTwitter size={28}></SiTwitter>
						</a>
					</div>
				</div>
				<div>
					<button
						className="hover:bg-violet-500 hover:text-white dark:text-neutral-300 hover:dark:text-neutral-900 p-1 px-4 rounded-lg transition-all ease-in-out dark:hover:bg-rose-400 border dark:border-rose-400 dark:border-opacity-40 border-violet-500 border-opacity-40"
						onClick={() => {
							if (localStorage.getItem("theme") === "dark") {
								document.documentElement.classList.remove("dark");
								localStorage.setItem("theme", "light");
								setThemeBtnTxt("light");
							} else {
								document.documentElement.classList.add("dark");
								localStorage.setItem("theme", "dark");
								setThemeBtnTxt("dark");
							}
						}}
					>
						{themeBtnTxt === "dark" ? "towards the sun" : "into the shadows"}
					</button>
				</div>
				<div className="mt-4">
					<SpotifyBadge data={data}></SpotifyBadge>
				</div>
			</div>
			<div className="w-72 text-sm text-right absolute sm:block hidden right-4 bottom-4 text-neutral-200 dark:text-neutral-800">
				Looks like everyone and their grandma is doing these clean, sleek-looking pages. So,
				I am jumping on the bandwagon.
			</div>
			<div className="font-sans w-72 text-sm text-left absolute sm:flex hidden left-4 bottom-4 text-neutral-500 dark:text-neutral-500">
				Anh Hoang Nguyen &copy; {d.getFullYear()}
			</div>
		</div>
	);
}
