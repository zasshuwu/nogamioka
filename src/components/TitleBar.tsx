import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  return <nav className="flex justify-between items-center px-4 p-1.5 dark:bg-neutral-900/60 bg-white/60 backdrop-blur-lg">
    <section className="w-32">
      <Logo></Logo>
    </section>
    <section>
      {props.currentView}
    </section>
    <section className="font-mono w-32 text-end">
      {dateTime}
    </section>
  </nav>
}

export default TitleBar;