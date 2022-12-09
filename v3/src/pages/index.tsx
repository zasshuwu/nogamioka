import { type NextPage } from "next";

import { useState } from "react";
import { useRouter } from "next/router";
import IndexLayout from "@/layouts/IndexLayout";
import { SpotifyBadge } from "@/components/SpotifyBadge";
import useSWR from "swr";

const Index: NextPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const route = useRouter();

  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (password != "letmein") {
      alert("Wrong password!");
    } else {
      route.push("/home");
    }
  };

  const fetcher = (url: any) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/spotify", fetcher);

  const handlePasswordInput = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <IndexLayout>
        <main
          className="to-neutral-neutral-900 flex min-h-full w-full flex-col items-center bg-gradient-to-b sm:justify-center"
          data-theme="mytheme"
        >
          <div className="mb-8 mt-36 sm:absolute sm:right-6 sm:top-12 sm:m-0">
            <SpotifyBadge data={data}></SpotifyBadge>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="my-4 text-6xl text-emerald-500">Log in as</h2>
            <div
              className="btn flex h-auto w-fit flex-wrap items-center justify-center space-y-2 space-x-2 rounded-lg border p-4 normal-case hover:cursor-pointer"
              onClick={() => setShowLogin((old) => !old)}
            >
              <img
                className="h-12 w-12 rounded-lg"
                src="https://avatars.githubusercontent.com/u/37283437?v=4"
              ></img>
              <p className="font-bold">Anh H Nguyen</p>
            </div>
            <div>
              {showLogin && (
                <div className="form-control mt-2">
                  <form>
                    <div className="input-group">
                      <input
                        type="password"
                        placeholder="Try 'letmein'"
                        className="input-bordered input rounded-lg"
                        value={password}
                        onChange={(e) => handlePasswordInput(e)}
                      />
                      <button
                        onClick={(e) => handleLogin(e)}
                        className="btn-primary btn-square btn"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </main>
      </IndexLayout>
    </>
  );
};

export default Index;
