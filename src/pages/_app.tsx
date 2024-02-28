import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { GoogleOAuthProvider } from "@react-oauth/google";
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
    <GoogleOAuthProvider clientId="***REMOVED***">
      <MsalProvider instance={publicClientApplication}>
        <Component {...pageProps} />
      </MsalProvider>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
