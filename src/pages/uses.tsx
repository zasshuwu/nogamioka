import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import HomeLayout from "@/layouts/HomeLayout";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";

const setups = [
  { key: 0, url: "/setup/desk_2022.png", title: "Desktop" },
  { key: 1, url: "/setup/macbook.png", title: "Macbook" },
  { key: 2, url: "/setup/dell-win.png", title: "Laptop 1" },
  { key: 3, url: "/setup/dell-linux.png", title: "Laptop 2" },
  { key: 4, url: "/setup/server_2022.png", title: "Server" },
];

function HardwareTabs({ showSetup, setShowSetup }: any) {
  return (
    <>
      <div className="tabs tabs-boxed">
        {setups?.map((setup, idx) => (
          <button
            key={idx}
            onClick={() => setShowSetup(setup.title)}
            className={
              "tab " + (setup.title == showSetup ? "tab-active bg-primary" : "")
            }
          >
            <h2 className="text-xl">{setup?.title}</h2>
          </button>
        ))}
      </div>
      <div className="my-2">
        {setups.map((setup, idx) => (
          <div key={idx}>
            {setup?.title == showSetup ? (
              <img className="w-[800px]" src={setup.url}></img>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}

export default function Uses() {
  const [showSetup, setShowSetup] = useState("Desktop");

  const router = useRouter();
  const actions: any = [
    {
      id: "uses",
      name: "Uses",
      shortcut: ["a"],
      keywords: "setup uses workstation laptop tech",
      perform: () => router.push("/uses"),
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home homepage",
      perform: () => router.push("/home"),
    },
    {
      id: "index",
      name: "Index",
      shortcut: ["h"],
      keywords: "login index root",
      perform: () => router.push("/"),
    },
  ];

  const RenderResult = () => {
    const { results } = useMatches();
    return (
      <KBarResults
        items={results}
        onRender={({ item }) =>
          typeof item === "string" ? (
            <div>{item}</div>
          ) : (
            <div className="cursor-pointer rounded-lg bg-base-300 p-2 text-white hover:bg-accent">
              {item.name}
            </div>
          )
        }
      />
    );
  };

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator className="rounded-lg p-4">
              <KBarSearch className="mb-2 w-[50vw] rounded-lg p-4" />
              <RenderResult />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
      </KBarProvider>
      <HomeLayout>
        <div className="m-auto mt-8 p-2">
          <div className="flex items-center space-x-1">
            <button
              className="rounded-full border p-4 hover:border-green-500 hover:text-green-500"
              onClick={(e) => {
                e.preventDefault();
                router.push("/home");
              }}
            >
              <FaHome></FaHome>
            </button>
            <h1 className="text-center text-4xl font-bold">{"/uses"}</h1>
          </div>
          <div>
            <h2 className="my-4 text-3xl">Computing</h2>
            <HardwareTabs
              showSetup={showSetup}
              setShowSetup={setShowSetup}
            ></HardwareTabs>
          </div>
          <div>
            <h2 className="my-4 text-3xl">Mobile</h2>
            <img
              src="/setup/mobile.png"
              className="md:max-w-screen max-w-screen bg-neutral-900/90 rounded-md dark:bg-transparent md:max-h-[400px]"
            ></img>
          </div>
          <div>
            <h2 className="my-4 text-3xl">Infrastructure Operations</h2>
            <img
              src="/setup/homelab.png"
              className="md:max-w-screen max-w-screen bg-neutral-900/90 rounded-md dark:bg-transparent md:max-h-[500px]"
            ></img>
          </div>
          <div>
            <h2 className="my-4 text-3xl">Bonus I: Books</h2>
            <ul>
              <li>
                System Design Interview by Alex Xu &amp; Sahn Lam &mdash;
                Completed.
              </li>
              <li>
                Designing Data-Intensive Applications by Martin Kleppmann
                &mdash; Completed.
              </li>
              <li>
                Site Reliability Engineering by Beyer, Jones, Petoff, Murphy
                &mdash; Completed.
              </li>
              <li>DSA Analysis by Clifford A. Shaffer &mdash; Completed.</li>
              <li>
                Pattern Recognition and ML by Christopher M. Bishop &mdash;
                Reading.
              </li>
              <li>
                Head First Design Patterns by Eric Freeman &mdash; to read
              </li>
              <li>Linux Kernel Development by Robert Love &mdash; to read</li>
            </ul>
          </div>
          <div>
            <h2 className="my-4 text-3xl">Bonus II: Music</h2>
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              height="450"
              style={{
                width: "100%",
                maxWidth: "660px",
                overflow: "hidden",
                background: "transparent",
              }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/ca/playlist/j-song-that-slaps/pl.u-mJy8Z2BtDZAkp6"
            ></iframe>
            <br />
            <iframe
              style={{ borderRadius: "12px", maxWidth: "660px" }}
              src="https://open.spotify.com/embed/playlist/3UtdvYQCE4IxF8LHAMzCkk?utm_source=generator"
              width="100%"
              height="450"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
