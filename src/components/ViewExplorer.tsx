import { type IWindow } from "./Window"

import { AiFillInfoCircle, AiFillProject, AiFillQuestionCircle } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs"
import { FaScroll } from "react-icons/fa"

import Projects from "~/components/Projects";
import Experience from "~/components/Experience";
import Resume from "~/components/Resume";
import Intro from "./Intro";
import About from "./About";

interface IViewExplorer {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>
  addWindow: (view: IWindow | null) => void
  handleCloseWindow: (view: string) => void
}



const File = ({ windowTitle, handleOpenView, }: { windowTitle: string, handleOpenView: (view: string) => void }) => {


  return <div onClick={() => handleOpenView(windowTitle)} className="flex flex-col transition-all ease-in-out duration-300 rounded-lg hover:cursor-pointer items-center w-fit h-fit hover:dark:bg-black/30 hover:bg-white/30 hover:backdrop-blur-md bg-transparent p-2">
    <div className="w-14 h-10 bg-sky-500 rounded-md shadow-lg">
    </div>
    <div className="">
      <span className="[text-shadow:_1px_2px_5px_var(--tw-shadow-color)] dark:shadow-black">
        {windowTitle}
      </span>
    </div>
  </div>
}

const ViewExplorer = ({ setCurrentView, addWindow, handleCloseWindow }: IViewExplorer) => {

  const viewMap = new Map<string, IWindow>();

  const views: IWindow[] = [
    {
      windowTitle: "Intro",
      Icon: <AiFillInfoCircle />,
      zIndex: 0,
      children: <Intro></Intro>,
      handleCloseWindow: () => handleCloseWindow("Intro")
    },
    {
      windowTitle: "Experience",
      Icon: <BsBriefcaseFill />,
      zIndex: 0,
      children: <Experience></Experience>,
      handleCloseWindow: () => handleCloseWindow("Experience")
    },
    {
      windowTitle: "Projects",
      Icon: <AiFillProject />,
      zIndex: 0,
      children: <Projects></Projects>,
      handleCloseWindow: () => handleCloseWindow("Projects")
    },
    {
      windowTitle: "Resume",
      Icon: <FaScroll />,
      zIndex: 0,
      children: <Resume></Resume>,
      handleCloseWindow: () => handleCloseWindow("Resume")
    },
    {
      windowTitle: "About This Site",
      Icon: <AiFillQuestionCircle></AiFillQuestionCircle>,
      zIndex: 0,
      children: <About></About>,
      handleCloseWindow: () => handleCloseWindow("About This Site")
    }
  ]

  views.forEach((v: IWindow) => viewMap.set(v.windowTitle, v));


  const handleOpenView = (view: string) => {
    setCurrentView(view);
    addWindow(viewMap.get(view) ?? null);
  }

  return <div className="flex flex-col space-y-4 items-center absolute left-4">
    {views.map((v: IWindow, idx: number) => <File handleOpenView={handleOpenView} key={idx} windowTitle={v.windowTitle}></File>)}
  </div>

}

export default ViewExplorer;