import Head from "next/head";
import { Fragment, useState } from "react";
import ViewExplorer from "~/components/ViewExplorer";
import HomeLayout from "~/layouts/HomeLayout";
import Window, { IWindow } from "~/components/Window";
import { AiOutlineHome, AiOutlineInfo } from "react-icons/ai";
import Intro from "~/components/Intro";

export default function Home() {
  const [currentView, setCurrentView] = useState("Home");
  const [windows, setWindows] = useState<IWindow[]>([
    {
      windowTitle: "Intro",
      Icon: <AiOutlineInfo />,
      zIndex: 0,
      children: <Intro />
    }
  ]);

  return (
    <>
      <Head>
        <title>AAANH</title>
        <meta name="description" content="Anh Hoang Nguyen's portfolio site :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout currentView={currentView}>
        <main className="z-20 p-4" style={{
          userSelect: "none"
        }}>
          <ViewExplorer setCurrentView={setCurrentView}></ViewExplorer>
          {windows.map((w: IWindow, idx: number) => <Window windowTitle={w.windowTitle} key={idx} zIndex={w.zIndex} Icon={w.Icon}>{w.children}</Window>)}
        </main>
      </HomeLayout>
    </>
  );
}
