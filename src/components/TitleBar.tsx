import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsHouseExclamation, BsWrench } from "react-icons/bs";
import sf_pro_display from "~/fonts/sf_pro";
import LoadingScreen from "./Loading";

export const Logo = () => {
  return <Link href="/" className="">
    <Image className="hover:dark:opacity-80 transition-all ease-in-out duration-200 rounded-full" src="/logos/aaanh.png" width={32} height={32} alt="Logo"></Image>
  </Link>
}

interface TitleBarProps {
  currentView: string,
}

function TitleBar(props: TitleBarProps) {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  return <nav className={`flex justify-between items-center px-4 p-1.5 dark:bg-neutral-900/60 bg-white/60 backdrop-blur-lg ${sf_pro_display.className}`}>
    <section className="w-fit flex items-center">
      <Logo></Logo>
      <span className="md:hidden block ml-4">{props.currentView}</span>
    </section>
    <section className="md:block hidden">
      {props.currentView}
    </section>
    <section className="font-mono w-[13rem] text-end flex justify-end">
      <Link className={`px-2 py-1 mr-2 dark:hover:bg-white/30 dark:bg-white/10 transition-all ease-in-out duration-300 rounded`} href="/home"><BsHouseExclamation></BsHouseExclamation></Link>
      <Link className={`px-2 py-1 mr-2 dark:hover:bg-white/30 dark:bg-white/10 transition-all ease-in-out duration-300 rounded`} href="/uses"><BsWrench></BsWrench></Link>
      <span className="w-32 text-end flex justify-center">{dateTime == "" ? <div className="relative h-6 w-6">
        <Image fill={true} src="/logos/aaanh.png" alt="Loading..." className="motion-safe:animate-spin animate-ping h-20 w-20 object-contain" />
      </div> : dateTime}</span>
    </section>
  </nav>
}

export default TitleBar;