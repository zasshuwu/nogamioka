/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useIsAuthenticated,
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { useState } from "react";
import { ProfileData } from "~/components/msal/ProfileData";
import ServiceLayout from "~/layouts/ServiceLayout";
import { loginRequest } from "~/lib/authConfig";
import { callMsGraph } from "~/lib/graph";

const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    void instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        void callMsGraph(response.accessToken).then((response) =>
          setGraphData(response ?? null),
        );
      });
  }

  return (
    <>
      <h5 className="card-title">
        Welcome, <span className="font-bold italic">{accounts[0]?.name}</span>
      </h5>
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <>
          <p>
            <strong>First Name: </strong>
          </p>
          <p>
            <strong>Last Name: </strong>
          </p>
          <p>
            <strong>Email: </strong>
          </p>
          <p>
            <strong>Id: </strong>
          </p>
          <button className="my-2 bg-blue-500 p-1" onClick={RequestProfileData}>
            Request Profile Information
          </button>
        </>
      )}
    </>
  );
};

function SignInButton() {
  const { instance } = useMsal();

  function handleSignIn(loginType: "popup" | "redirect") {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  }

  return (
    <button
      className="rounded bg-blue-500 p-1"
      onClick={() => handleSignIn("redirect")}
    >
      Sign in
    </button>
  );
}

function SignOutButton() {
  const { instance } = useMsal();

  const handleLogout = (logoutType: "popup" | "redirect") => {
    if (logoutType === "popup") {
      void instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/",
      });
    } else if (logoutType === "redirect") {
      void instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  };

  return (
    <button
      className="rounded bg-red-500 p-1"
      onClick={() => handleLogout("redirect")}
    >
      Sign out
    </button>
  );
}

const MainContent = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h5>
          <center>Please sign-in to see your profile information.</center>
        </h5>
      </UnauthenticatedTemplate>
    </div>
  );
};

export default function Msazure() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <ServiceLayout>
      <div className="p-4 md:p-8">
        <h2 className="text-center text-4xl">MSAL Testing Sandbox</h2>
        <br />
        <br />
        <MainContent></MainContent>
        <div className="flex justify-center">
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
        </div>
      </div>
    </ServiceLayout>
  );
}
