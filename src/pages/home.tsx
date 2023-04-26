import HomeLayout from "@/layouts/HomeLayout";
import { type NextPage } from "next";
import { useState } from "react";

import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
} from "kbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { useRouter } from "next/router";
import Resume from "@/components/Resume";

const Home: NextPage = () => {
  const router = useRouter();

  const handleSnapIn = (component: any) => {
    setComponentsToRender((existing: any) => [...existing, component]);
  };

  function handleCloseSnapIn(index: number) {
    setComponentsToRender(
      componentsToRender.filter((_: any, i: number) => i !== index)
    );
  }

  const [componentsToRender, setComponentsToRender] = useState<any>([
    <About key={0}></About>,
    <Resume key={1}></Resume>,
    <Experience key={2}></Experience>,
    <Projects key={3}></Projects>,
  ]);

  const actions: any = [
    {
      id: "about",
      name: "About",
      shortcut: ["a"],
      keywords: "about info information whoami",
      perform: () => handleSnapIn(<About />),
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "contact email phone",
      perform: () => handleSnapIn(<Contact />),
    },
    {
      id: "experience",
      name: "Experience",
      shortcut: ["e"],
      keywords: "experience work position role job",
      perform: () => handleSnapIn(<Experience />),
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["p"],
      keywords: "projects personal",
      perform: () => handleSnapIn(<Projects />),
    },
    {
      id: "resume",
      name: "Resume",
      shortcut: ["r"],
      keywords: "resume cv",
      perform: () => handleSnapIn(<Resume />),
    },
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
      shortcut: ["i"],
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
            <div className="my-1 flex cursor-pointer items-center justify-between bg-neutral p-2 text-white hover:bg-accent">
              <span>{item.name}</span>
              <span className="kbd kbd-sm">{item.shortcut}</span>
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
      <HomeLayout
        openComponents={componentsToRender}
        handleCloseSnapIn={handleCloseSnapIn}
        handleSnapAbout={() => handleSnapIn(<About />)}
        handleSnapProjects={() => handleSnapIn(<Projects />)}
        handleSnapExperience={() => handleSnapIn(<Experience />)}
        handleSnapContact={() => handleSnapIn(<Contact />)}
        handleSnapResume={() => handleSnapIn(<Resume />)}
      >
        <main className="flex min-h-[96.5vh] items-center justify-center p-2 pt-10 pb-10">
          {componentsToRender.length == 0 ? (
            <div>
              <div>{"There's nothing here, spooky 👻"}</div>
              <div>Watch your back! ⚠️</div>
              <div>
                Or <kbd className="kbd kbd-sm">CTRL / ⌘ + K</kbd> to bring up
                the command palette.
              </div>
            </div>
          ) : null}
          <div
            className={
              "flex flex-wrap space-y-2 " +
              (componentsToRender.length == 1
                ? "flex"
                : "sm:grid sm:grid-cols-2 sm:gap-1 sm:space-y-0")
            }
          >
            {componentsToRender?.map((component: any, idx: number) => (
              <div className="min-h-1/4 border border-slate-500 p-4" key={idx}>
                {component}
              </div>
            ))}
          </div>
        </main>
      </HomeLayout>
    </>
  );
};

export default Home;
