import Head from "next/head";
import { themeChange } from "theme-change";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const IndexLayout = ({ children }: any) => {
  const router = useRouter();
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    themeChange(false);
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen">
      <Head>
        <title>{"Anh's Homepage"}</title>
        <meta name="description" content="This is where I experiment." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          "sticky top-0 left-0 flex h-fit w-full items-center justify-between bg-base-300 px-4"
        }
      >
        <div className="flex sm:w-72">
          <div className="mx-2 space-x-2">
            <label className="text-sm">{"Theme ::"}</label>
            <select
              tabIndex={0}
              className="rounded-box bg-base-100 px-2 text-sm shadow"
              data-choose-theme
            >
              <option value="mytheme">Default</option>
              <option value="dracula">Dracula</option>
              <option value="business">Business</option>
              <option value="light">Light</option>
            </select>
          </div>
        </div>
        <div className="font-semibold text-info">{dateTime}</div>
        <div className="hidden sm:block sm:w-72"></div>
      </div>
      {children}
    </div>
  );
};

export default IndexLayout;
