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

const Home: NextPage = () => {
  const router = useRouter();

  const handleSnapContact = (component: any) => {
    setComponentsToRender((existing: any) => [...existing, component]);
  };
  const handleSnapExperience = (component: any) => {
    setComponentsToRender((existing: any) => [...existing, component]);
  };
  const handleSnapAbout = (component: any) => {
    setComponentsToRender((existing: any) => [...existing, component]);
  };
  const handleSnapProjects = (component: any) => {
    setComponentsToRender((existing: any) => [...existing, component]);
  };

  function handleCloseSnapIn(index: number) {
    setComponentsToRender(
      componentsToRender.filter((_: any, i: number) => i !== index)
    );

    console.log("Fired");
    console.log(componentsToRender);
  }

  const [componentsToRender, setComponentsToRender] = useState<any>([
    <About key={0}></About>,
  ]);

  const actions: any = [
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "contact email phone",
      perform: () => handleSnapContact(<Contact />),
    },
    {
      id: "experience",
      name: "Experience",
      shortcut: ["e"],
      keywords: "experience work position role job",
      perform: () => handleSnapExperience(<Experience />),
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["p"],
      keywords: "projects personal",
      perform: () => handleSnapProjects(<Projects />),
    },
    {
      id: "about",
      name: "About",
      shortcut: ["a"],
      keywords: "about info information whoami",
      perform: () => handleSnapAbout(<About />),
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
      <HomeLayout
        openComponents={componentsToRender}
        handleCloseSnapIn={handleCloseSnapIn}
        handleSnapAbout={() => handleSnapAbout(<About />)}
        handleSnapProjects={() => handleSnapProjects(<Projects />)}
        handleSnapExperience={() => handleSnapExperience(<Experience />)}
        handleSnapContact={() => handleSnapContact(<Contact />)}
      >
        <main
          data-theme="dracula"
          className="flex min-h-[96.5vh] items-center justify-center p-2 pt-10 pb-10"
        >
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
          <div className="flex flex-wrap space-y-2 sm:grid sm:grid-cols-2 sm:gap-1 sm:space-y-0">
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
