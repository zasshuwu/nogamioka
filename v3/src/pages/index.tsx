import { type NextPage } from "next";

import { useState } from "react";
import { useRouter } from "next/router";
import IndexLayout from "@/layouts/IndexLayout";

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

  const handlePasswordInput = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <IndexLayout>
        <main
          data-theme="mytheme"
          className="to-neutral-neutral-900 flex min-h-full w-full flex-col items-center justify-center bg-gradient-to-b"
        >
          <div
            className="btn flex h-auto flex-wrap items-center justify-center space-y-2 space-x-2 rounded-lg border p-4 normal-case hover:cursor-pointer"
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
        </main>
      </IndexLayout>
    </>
  );
};

export default Index;
