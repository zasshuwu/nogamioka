import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const config = {
  auth: {
    clientId: "***REMOVED***",
  },
};

const publicClientApplication = new PublicClientApplication(config);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MsalProvider instance={publicClientApplication}>
      <Component {...pageProps} />
    </MsalProvider>
  );
};

export default MyApp;
