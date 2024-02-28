import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const config = {
  auth: {
    clientId: "509c2dda-fe28-40f0-83aa-33dfa789c50c",
  },
};

const publicClientApplication = new PublicClientApplication(config);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <GoogleOAuthProvider clientId="879749396928-jp95jro4l9uif4mf77crv62sgk4la2on.apps.googleusercontent.com">
      <MsalProvider instance={publicClientApplication}>
        <Component {...pageProps} />
      </MsalProvider>
    </GoogleOAuthProvider>
  );
};

export default MyApp;
