/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GoogleLogin,
  GoogleOAuthProvider,
  googleLogout,
  useGoogleLogin,
} from "@react-oauth/google";
import { useEffect, useState } from "react";
import ServiceLayout from "~/layouts/ServiceLayout";

type Profile = {
  picture: string;
  name: string;
  email: string;
};

type User = {
  access_token: string;
};

export default function GoogleSso() {
  const [user, setUser] = useState<User>();
  const [profile, setProfile] = useState<Profile | null>();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user?.access_token}`,
            Accept: "application/json",
          },
        },
      );

      const data = await res.json();

      console.log(data);
      setProfile(data);
    };

    void fetchUser().catch(console.error);
  }, [user]);

  return (
    <ServiceLayout>
      <main className="p-4 md:p-8">
        <h2 className="text-2xl font-bold">Google SSO Testing Sandbox</h2>
        {user && profile ? (
          <div>
            <img
              className="rounded-full"
              src={profile.picture}
              alt="user image"
            />
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <>
            <button
              className="flex space-x-2 rounded bg-neutral-800 p-2 hover:bg-opacity-90"
              onClick={() => login()}
            >
              <img
                className="h-6 w-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Sign in with Google</span>
            </button>
          </>
        )}
      </main>
    </ServiceLayout>
  );
}
