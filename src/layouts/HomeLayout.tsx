import Head from "next/head";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { themeChange } from "theme-change";

const HomeLayout = ({
  children,
  openComponents,
  handleCloseSnapIn,
  handleSnapAbout,
  handleSnapContact,
  handleSnapExperience,
  handleSnapProjects,
  handleSnapResume,
}: any) => {
  const [dateTime, setDateTime] = useState("");
  const router = useRouter();

  const playCyberpunk = () => {
    const dataTheme = localStorage.getItem("theme");
    if (dataTheme == "cyberpunk") {
      const fx = new Audio("/cyberpunk.mp3");
      fx.play();
    }
  };

  useEffect(() => {
    themeChange(false);
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval)
  }, []);

  return (
    <div className="relative flex flex-col">
      <Head>
        <title>{"Anh's Homepage"}</title>
        <meta name="description" content="This is where I experiment." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          "sticky top-0 left-0 flex h-8 w-full items-center justify-between bg-base-300 px-4"
        }
      >
        <div className="flex sm:w-72">
          <Link href={router.asPath === "/home" ? "/" : "/home"}>🏡</Link>
          <div className="mx-2 space-x-2">
            <label className="text-sm">{"Theme ::"}</label>
            <select
              tabIndex={0}
              className="rounded-box bg-base-100 px-2 text-sm shadow"
              data-choose-theme
              onChange={() => playCyberpunk()}
            >
              <option value="mytheme">Default</option>
              <option value="cyberpunk">Cyberpunk</option>
              <option value="dracula">Dracula</option>
              <option value="business">Business</option>
              <option value="light">Light</option>
            </select>
          </div>
        </div>

        <div className="hidden font-semibold text-info sm:block">
          {dateTime}
        </div>
        <div className="flex sm:w-64">
          <div className="hidden sm:block">
            Command: <span className="kbd kbd-xs">CTRL / ⌘</span> +{" "}
            <span className="kbd kbd-xs">K</span>
          </div>
          {router.pathname == "/uses" ? null : (
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="badge-accent badge m-1">
                Menu
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <button onClick={() => handleSnapAbout()}>About</button>
                </li>
                <li>
                  <button onClick={() => handleSnapContact()}>Contact</button>
                </li>
                <li>
                  <button onClick={() => handleSnapExperience()}>
                    Experience
                  </button>
                </li>
                <li>
                  <button onClick={() => handleSnapProjects()}>Projects</button>
                </li>
                <li>
                  <button onClick={() => handleSnapResume()}>Resume</button>
                </li>
                <li>
                  <button onClick={() => router.push("/uses")}>Uses</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {children}

      <div className="sticky bottom-0 left-0 flex w-full flex-wrap items-center justify-start bg-base-300 px-2 sm:h-10">
        {openComponents?.map((component: any, idx: number) => (
          <button
            key={idx}
            onClick={() => handleCloseSnapIn(idx)}
            className="m-2 flex w-fit items-center justify-center rounded-lg bg-success px-2 text-sm text-black hover:text-error"
          >
            {idx + 1 + ": "} {component?.type?.displayName}{" "}
            <span className="mx-1 flex h-2 w-2 items-center justify-center rounded-full bg-stone-500/20 p-2 font-mono">
              X
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default HomeLayout
