import "../styles/globals.css";
import LogRocket from "logrocket";
import { Analytics } from "@vercel/analytics/react";

LogRocket.init("6m72da/homepage");

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
