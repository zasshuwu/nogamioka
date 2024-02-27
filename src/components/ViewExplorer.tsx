import { type IWindow } from "./Window";

import Link from "next/link";
import {
  AiFillInfoCircle,
  AiFillProject,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { BsBriefcaseFill, BsMicrosoft } from "react-icons/bs";
import { FaScroll } from "react-icons/fa";

import Projects from "~/components/Projects";
import Experience from "~/components/Experience";
import Resume from "~/components/Resume";
import Intro from "./Intro";
import About from "./About";

interface IViewExplorer {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
  addWindow: (view: IWindow | null) => void;
  handleCloseWindow: (view: string) => void;
}

const File = ({
  windowTitle,
  handleOpenView,
}: {
  windowTitle: string;
  handleOpenView: (view: string) => void;
}) => {
  return (
    <div
      onClick={() => handleOpenView(windowTitle)}
      className="flex h-fit w-fit flex-col items-center rounded-lg bg-transparent p-2 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white/30 hover:backdrop-blur-md hover:dark:bg-black/30"
    >
      <div className="h-10 w-14 rounded-md bg-sky-500 shadow-lg"></div>
      <div className="">
        <span className="[text-shadow:_1px_2px_5px_var(--tw-shadow-color)] dark:shadow-black">
          {windowTitle}
        </span>
      </div>
    </div>
  );
};

const ViewExplorer = ({
  setCurrentView,
  addWindow,
  handleCloseWindow,
}: IViewExplorer) => {
  const viewMap = new Map<string, IWindow>();

  const views: IWindow[] = [
    {
      windowTitle: "Intro",
      Icon: <AiFillInfoCircle />,
      zIndex: 0,
      children: <Intro></Intro>,
      handleCloseWindow: () => handleCloseWindow("Intro"),
    },
    {
      windowTitle: "Experience",
      Icon: <BsBriefcaseFill />,
      zIndex: 0,
      children: <Experience></Experience>,
      handleCloseWindow: () => handleCloseWindow("Experience"),
    },
    {
      windowTitle: "Projects",
      Icon: <AiFillProject />,
      zIndex: 0,
      children: <Projects></Projects>,
      handleCloseWindow: () => handleCloseWindow("Projects"),
    },
    {
      windowTitle: "Resume",
      Icon: <FaScroll />,
      zIndex: 0,
      children: <Resume></Resume>,
      handleCloseWindow: () => handleCloseWindow("Resume"),
    },
    {
      windowTitle: "About This Site",
      Icon: <AiFillQuestionCircle></AiFillQuestionCircle>,
      zIndex: 0,
      children: <About></About>,
      handleCloseWindow: () => handleCloseWindow("About This Site"),
    },
  ];

  views.forEach((v: IWindow) => viewMap.set(v.windowTitle, v));

  const handleOpenView = (view: string) => {
    setCurrentView(view);
    addWindow(viewMap.get(view) ?? null);
  };

  return (
    <div className="absolute left-4 flex flex-col items-center space-y-4">
      {views.map((v: IWindow, idx: number) => (
        <File
          handleOpenView={handleOpenView}
          key={idx}
          windowTitle={v.windowTitle}
        ></File>
      ))}
      <Link
        href="/services"
        className="flex h-fit w-fit flex-col items-center rounded-lg bg-transparent p-2 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white/30 hover:backdrop-blur-md hover:dark:bg-black/30"
      >
        <div className="h-10 w-14 rounded-md bg-sky-500 shadow-lg"></div>
        <div className="">
          <span className="[text-shadow:_1px_2px_5px_var(--tw-shadow-color)] dark:shadow-black">
            Services
          </span>
        </div>
      </Link>
      <Link
        href="/sso"
        className="flex h-fit w-fit flex-col items-center rounded-lg bg-transparent p-2 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white/30 hover:backdrop-blur-md hover:dark:bg-black/30"
      >
        <div className="h-10 w-14 rounded-md bg-sky-500 shadow-lg"></div>
        <div className="">
          <span className="[text-shadow:_1px_2px_5px_var(--tw-shadow-color)] dark:shadow-black">
            MSAL Test
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ViewExplorer;
