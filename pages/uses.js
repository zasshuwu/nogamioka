import Head from "next/head";
import { ThemeSwitcher } from "../components/NavBar";
import { useRouter } from "next/router";
import { Tab } from "@headlessui/react"
import { Fragment } from "react";
import { FaHome } from "react-icons/fa";

function HardwareTabs() {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-sky-400/20 p-1">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button className={"transition-all ease-in-out w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 " + (selected ? 'bg-green-500 dark:text-neutral-900 text-white' : "dark:text-white text-neutral-900")}>Desktop</button>
          )}
          </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button className={"transition-all ease-in-out w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 " + (selected ? 'bg-green-500 dark:text-neutral-900 text-white' : "dark:text-white text-neutral-900")}>Laptop 1</button>
          )}
          </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button className={"transition-all ease-in-out w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 " + (selected ? 'bg-green-500 dark:text-neutral-900 text-white' : "dark:text-white text-neutral-900")}>Laptop 2</button>
          )}
          </Tab>
      </Tab.List>
      <Tab.Panels className="mt-2">
        <Tab.Panel className="dark:bg-transparent bg-neutral-900/90 flex justify-center rounded-xl border border-neutral-500/50 p-3 ring-white/10 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-1">
            <img src="/setup/desk_2022.png" className="md:max-w-screen md:max-h-[400px] max-w-screen"></img>
        </Tab.Panel>
        <Tab.Panel className="dark:bg-transparent bg-neutral-900/90 flex justify-center rounded-xl border border-neutral-500/50 p-3 ring-white/10 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-1">
          <img src="/setup/macbook.png" className="md:max-w-screen md:max-h-[400px] max-w-screen"></img>
        </Tab.Panel>
        <Tab.Panel className="dark:bg-transparent bg-neutral-900/90 flex justify-center rounded-xl border border-neutral-500/50 p-3 ring-white/10 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-1">
          <img src="/setup/dell.png" className="md:max-w-screen md:max-h-[400px] max-w-screen"></img>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default function Uses({ isOpen, handleClose }) {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen min-w-screen justify-center items-center dark:bg-neutral-900 dark:text-slate-200 transition-all ease-in-out py-12 px-4">
      <Head>
        <title>aaanh&apos;s Uses</title>
      </Head>
      <div>
        <div className="flex space-x-4 items-center">
          <button className="hover:text-blue-500 hover:border-blue-500 border rounded-full p-4" onClick={(e) => { e.preventDefault(); router.push("/home") }}>
            <FaHome></FaHome>  
          </button>
          <h1 className="text-4xl font-bold text-center">{ "/uses" }</h1>
          <ThemeSwitcher />
        </div>
        <div>
          <h2 className="text-3xl my-4">Computing</h2>
          <HardwareTabs></HardwareTabs>
        </div>
        <div>
          <h2 className="text-3xl my-4">Mobile</h2>
          <img src="/setup/mobile.png" className="md:max-w-screen md:max-h-[400px] max-w-screen dark:bg-transparent bg-slate-900/90 rounded-md"></img>
        </div>
        <div>
          <h2 className="text-3xl my-4">Bonus I: Books</h2>
          <ul>
            <li>
              System Design Interview by Alex Xu &amp; Sahn Lam
              &mdash; Completed, 2022-06-19
            </li>
            <li>
              Designing Data-Intensive Applications by Martin
              Kleppmann &mdash; in progress
            </li>
            <li>
              Site Reliability Engineering by Beyer, Jones, Petoff,
              Murphy &mdash; in progress
            </li>
            <li>
              DSA Analysis by Clifford A. Shaffer &mdash; in progress
            </li>
            <li>
              Pattern Recognition and ML by Christopher M. Bishop
              &mdash; to read
            </li>
            <li>
              Head First Design Patterns by Eric Freeman &mdash; to
              read
            </li>
            <li>
              Linux Kernel Development by Robert Love &mdash; to read
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl my-4">Bonus II: Music</h2>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="450"
            style={{
              width: "100%",
              maxWidth: "660px",
              overflow: "hidden",
              background: "transparent",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/ca/playlist/j-music-definitive/pl.u-11zB5mgCb0y3zJ"
        ></iframe>
        <br/>
          <iframe
            style={{ borderRadius: "12px", maxWidth: "660px" }}
            src="https://open.spotify.com/embed/playlist/4gXW0Bpuz8TlnCmELENb2X?utm_source=generator"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  
    
  );
}
