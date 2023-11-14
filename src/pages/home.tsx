import Head from "next/head";
import { Fragment, useState } from "react";
import ViewExplorer from "~/components/ViewExplorer";
import HomeLayout from "~/layouts/HomeLayout";
import Window, { type IWindow } from "~/components/Window";
import { AiOutlineInfo } from "react-icons/ai";

import Intro from "~/components/Intro";
import LoadingScreen from "~/components/Loading";


export default function Home() {
  const [currentView, setCurrentView] = useState("Home");
  const [windows, setWindows] = useState<IWindow[]>([
    {
      windowTitle: "Intro",
      Icon: <AiOutlineInfo />,
      zIndex: 0,
      children: <Intro />,
      handleCloseWindow: () => handleCloseWindow("Intro")
    }
  ]);

  const addWindow = (view: IWindow | null) => {
    if (view !== null) {
      setWindows((existing: IWindow[]) => [...existing, view]);
    }
  }

  const handleCloseWindow = (windowTitle: string | null) => {
    if (windowTitle !== null) {
      setWindows(windows.filter((w: IWindow) => windowTitle !== w.windowTitle))
    }
  }

  return (
    <>
      <Head>
        <title>AAANH</title>
        <meta name="description" content="Anh Hoang Nguyen's portfolio site :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout currentView={currentView}>
        <main className="z-20 p-4 relative h-[95vh] w-screen overflow-hidden" style={{
          userSelect: "none"
        }}>
          <ViewExplorer handleCloseWindow={handleCloseWindow} addWindow={addWindow} setCurrentView={setCurrentView}></ViewExplorer>
          {windows.map((w: IWindow, idx: number) => <Window handleCloseWindow={handleCloseWindow} windowTitle={w.windowTitle} key={idx} zIndex={w.zIndex} Icon={w.Icon}>{w.children}</Window>)}
        </main>
      </HomeLayout>
    </>
  );
}
