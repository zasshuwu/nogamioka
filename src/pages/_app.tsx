import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_SSO_CLIENT_ID ?? "";

const MSFT_CLIENT_ID = process.env.MSFT_SSO_CLIENT_ID ?? "";

const msalConfig = {
  auth: {
    clientId: MSFT_CLIENT_ID,
  },
};

const publicClientApplication = new PublicClientApplication(msalConfig);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <MsalProvider instance={publicClientApplication}>
        <Component {...pageProps} />
      </MsalProvider>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
