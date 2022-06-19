import { IoMdMail, IoMdMusicalNote } from "react-icons/io";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { SpotifyBadge } from "../components/SpotifyBadge";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SEO from "../components/SEO";
import Typed from "typed.js";
import useSWR from "swr";

const TypedBios = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      backDelay: 800,
      backSpeed: 5,
      loop: true,
      stringsElement: "#intros",
      typeSpeed: 20,
    };
    typed.current = new Typed(el.current, options);
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="intros" className="hidden">
        <li>
          You can simply call me <b className="font-medium">Anh</b>.
        </li>
        <li className="word-wrap">
          I can communicate in VN, EN, FR, JP, DE.
        </li>
        <li>
          I love listening to{" "}
          <IoMdMusicalNote
            style={{ display: "inline" }}
          ></IoMdMusicalNote>
          .
        </li>
        <li>I play acoustic guitar.</li>
        <li>A lover for good food.</li>
        <li>Team-player and result-oriented.</li>
        <li>Capable of administrating Linux</li>
        <li>...and Windows.</li>
        <li>Good knowledge on networking protocols.</li>
        <li>Well-versed in orchestration and IaC tools.</li>
        <li>Firm grasp on security concepts &amp; frameworks.</li>
      </ul>
      <span
        ref={el}
        className="text-neutral-900 dark:text-neutral-200"
      />
    </div>
  );
};

export default function Splash() {
  let d = new Date();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/spotify", fetcher);

  const [themeBtnTxt, setThemeBtnTxt] = useState("dark");

  return (
    <div className="overflow-hidden font-['Fira_Sans'] w-screen h-screen dark:text-white bg-white dark:bg-neutral-900 flex flex-col justify-center items-center transition-all ease-in-out">
      <SEO title="aaanh 👾"></SEO>
      <div className="relative sm:skew-y-[2deg] p-8 flex flex-col justify-center items-center min-h-[80vh] sm:border sm:min-h-[70vh] rounded-md dark:sm:shadow-[8px_8px_0px_1px_rgba(6,182,212,.9)] sm:shadow-[8px_8px_0px_1px_#8b5cf6] dark:border-neutral-600 border-neutral-200">
        <div className="dark:drop-shadow-[8px_2px_.5px_rgba(6,182,212,.4)] drop-shadow-[8px_2px_.5px_#8b5cf6bb] sm:block relative -top-4 w-16 h-6 border border-neutral-600 rounded-xl hidden"></div>
        <div className="rounded-full h-32 w-32 sm:h-48 sm:w-48 my-4 relative sm:-top-2 -top-4 dark:sm:shadow-[8px_0px_0px_1px_rgba(6,182,212,.9)] sm:shadow-[8px_0px_0px_1px_#8b5cf6]">
          <Image
            height={"200px"}
            layout="responsive"
            src="/splash-photo.jpeg"
            style={{ borderRadius: "50%" }}
            width={"200px"}
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
          <h3 className="text-neutral-500">
            Bachelor of Computer Engineering &apos;24
          </h3>
          <TypedBios></TypedBios>
          <div className="my-2 font-mono">
            <Link href="/home">goto: full site</Link>
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
            className="hover:bg-violet-500 hover:text-white dark:text-neutral-300 hover:dark:text-neutral-900 p-1 px-4 rounded-lg transition-all ease-in-out dark:hover:bg-cyan-400 border dark:border-cyan-400 dark:border-opacity-40 border-violet-500 border-opacity-40"
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
            {themeBtnTxt === "dark"
              ? "praise the sun"
              : "race into the night"}
          </button>
        </div>
        <div className="mt-4">
          <SpotifyBadge data={data}></SpotifyBadge>
        </div>
      </div>
    </div>
  );
}
