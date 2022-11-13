import { useState } from "react";
import { useRouter } from "next/router";

export const ThemeSwitcher = () => {
  return (
    <div className="flex text-slate justify-center dark:transparent dark:border-gray-500 rounded-3xl">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }}
        className="flex items-center px-4 dark:bg-primary rounded-[16px] justify-center align-center p-2 transition dark:text-green-500 hover:bg-purple-500 hover:dark:bg-transparent"
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
        className="flex items-center  bg-primary dark:bg-transparent rounded-[16px] justify-center align-center px-4 transition dark:text-white text-purple-600 hover:dark:bg-green-500"
      >
        Light
      </button>
    </div>
  );
};

export default function NavBar({ setCommand, setContent }) {
  const router = useRouter();

  const navBtnStyle =
    "px-4 font-['Be_Vietnam_Pro'] text-sm rounded-[16px] justify-center items-center flex transition-all ease-in-out";

  function handleHome() {
    setCommand("cd ~");
    setContent("home");
  }
  function handleHelp() {
    setCommand(":help");
    setContent("help");
  }

  function handleContact() {
    setCommand("cd /etc/contact");
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
  function handleUses() {
    setCommand("curl -O /uses");
    router.push("/uses");
  }
  function handleHistory() {
    setCommand("history");
    setContent("history");
  }

  return (
    <div className="dark:bg-neutral-900 w-full min-h-[36px] flex flex-wrap justify-between space-x-2 border-t p-2">
      <ThemeSwitcher />
      <div className="flex flex-wrap">
        <button
          onClick={handleHome}
          className={
            navBtnStyle + " hover:bg-purple-500 hover:text-white"
          }
        >
          {"cd ~"}
        </button>
        <button
          onClick={handleHelp}
          className={
            navBtnStyle + " hover:bg-slate-500 hover:text-white"
          }
        >
          {"📘 Help"}
        </button>
        <button
          onClick={handleContact}
          className={
            navBtnStyle + " hover:bg-green-500 hover:text-white"
          }
        >
          {"📱 Contact"}
        </button>
        <button
          onClick={handleExperience}
          className={
            navBtnStyle + " hover:bg-blue-500 hover:text-white"
          }
        >
          {"👨‍💼 Experience"}
        </button>
        <button
          onClick={handleProjects}
          className={
            navBtnStyle + " hover:bg-pink-500 hover:text-white"
          }
        >
          {"🔧 Projects"}
        </button>
        <button
          onClick={handleAwards}
          className={
            navBtnStyle + " hover:bg-yellow-500 hover:text-white"
          }
        >
          {"🏆 Awards"}
        </button>
        <button
          onClick={handleUses}
          className={
            navBtnStyle + " hover:bg-cyan-500 hover:text-white"
          }
        >
          {"💻 Uses"}
        </button>
        <button
          onClick={handleHistory}
          className={
            navBtnStyle + " hover:bg-cyan-500 hover:text-white"
          }
        >
          {"🧭 History"}
        </button>
      </div>
    </div>
  );
}
