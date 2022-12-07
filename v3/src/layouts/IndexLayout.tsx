import { type NextPage } from "next";
import Head from "next/head";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const IndexLayout = ({ children, openComponents }: any) => {
  const [dateTime, setDateTime] = useState("");

  const pathName = useRouter().pathname;

  useEffect(() => {
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
          "absolute top-0 left-0 flex h-8 w-full items-center justify-center bg-base-300 px-4"
        }
      >
        <div className="font-semibold text-info">{dateTime}</div>
      </div>
      {children}
    </div>
  );
};

export default IndexLayout;
