import { useState, type ReactNode } from "react"
import TitleBar from "~/components/TitleBar";
import hazelnuts from "~/fonts/hazelnuts";
import Image from "next/image";

interface HomeLayoutProps {
  children: ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const [currentView, setCurrentView] = useState("Intro");

  return <div className={"relative flex flex-col w-full dark:bg-black bg-neutral-100 min-h-screen dark:text-white " + hazelnuts.className}>
    <Image className="object-cover opacity-80" src="/wallpaper-2.jpg" fill={true} alt="wallpaper"></Image>
    <TitleBar currentView={currentView}></TitleBar>
    {children}
  </div>
}

export default HomeLayout;