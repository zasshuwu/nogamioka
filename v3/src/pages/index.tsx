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
    <IndexLayout>
      <div className="to-neutral-neutral-900 flex h-[95%] w-full flex-col items-center bg-gradient-to-b sm:justify-center">
        <div className="mb-auto mt-10 sm:absolute sm:right-6 sm:top-12 sm:m-0">
          <SpotifyBadge data={data}></SpotifyBadge>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="my-4 text-6xl text-primary">Log in as</h2>
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
        <div className="mt-auto flex items-center space-x-2 sm:absolute sm:bottom-2 sm:left-2">
          <span className="badge">Anh&apos;s Portfolio</span>
          <span>{"::"}</span>
          <span className="badge">v420.69 RC</span>
          <span>{"::"}</span>
          <span className="badge">Crazy Chameleon</span>
        </div>
      </div>
    </IndexLayout>
  );
};

export default Index;
