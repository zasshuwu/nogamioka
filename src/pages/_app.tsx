import { type AppType } from "next/dist/shared/lib/utils";
import LogRocket from "logrocket";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

LogRocket.init("6m72da/homepage");

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      < Component {...pageProps} />;
      <Analytics></Analytics>
    </>
  )
};

export default MyApp;
