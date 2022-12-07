import { type NextPage } from "next";
import Head from "next/head";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface HomeLayoutProps {
  handleCloseSnapIn: (params: any) => any;
  handleSnapAbout: (params: any) => any;
  handleSnapContact: (params: any) => any;
  handleSnapExperience: (params: any) => any;
  handleSnapProjects: (params: any) => any;
}

const HomeLayout = ({
  children,
  openComponents,
  handleCloseSnapIn,
  handleSnapAbout,
  handleSnapContact,
  handleSnapExperience,
  handleSnapProjects,
}: any) => {
  const [dateTime, setDateTime] = useState("");
  const router = useRouter();
  const pathName = useRouter().pathname;

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col" data-theme="dracula">
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
        <div className="sm:w-72">
          <Link href="/">🏡</Link>
        </div>

        <div className="hidden font-semibold text-info sm:block">
          {dateTime}
        </div>
        <div className="flex sm:w-72">
<div className="hidden sm:block">
          Command: <span className="kbd kbd-xs">CTRL / ⌘</span> +{" "}
          <span className="kbd kbd-xs">K</span>
        </div>
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
              <button onClick={() => handleSnapExperience()}>Experience</button>
            </li>
            <li>
              <button onClick={() => handleSnapProjects()}>Projects</button>
            </li>
            <li>
              <button onClick={() => router.push("/uses")}>Uses</button>
            </li>
          </ul>
        </div>
        </div>
        
      </div>
      {children}

      <div className="sticky bottom-0 left-0 flex w-full flex-wrap items-center justify-start bg-base-300 px-2 sm:h-10">
        {openComponents?.map((component: any, idx: number) => (
          <button
            key={idx}
            onClick={() => handleCloseSnapIn(idx)}
            className="btn-ghost m-2 flex w-28 items-center justify-center rounded-lg bg-success text-black hover:text-error"
          >
            {idx + 1 + ": "} {component?.type?.displayName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeLayout;
