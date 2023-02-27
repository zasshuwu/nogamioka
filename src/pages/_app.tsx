import { type AppType } from "next/dist/shared/lib/utils";
import LogRocket from "logrocket";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

LogRocket.init(process.env.LOGROCKET_MONITORING || '');

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      < Component {...pageProps} />
      <Analytics></Analytics>
    </>
  )
};

export default MyApp;
