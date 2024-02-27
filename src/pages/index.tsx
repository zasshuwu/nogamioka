import Head from "next/head";
import { useState, useEffect } from "react";
import IndexLayout from "~/layouts/IndexLayout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoadingScreen from "~/components/Loading";

export default function Index() {
  const [dateTime, setDateTime] = useState("");
  const dateInstance = new Date();
  const year = dateInstance.getFullYear().toString();
  const monthName = dateInstance.toLocaleString("en-US", { month: "long" });
  const day = dateInstance.getDate().toString().padStart(2, "0");

  const dateString = monthName + " " + day + ", " + year;

  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password != "letmein") {
      alert("Wrong password!");
    } else {
      route.push("/home");
    }
  };

  const route = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Head>
        <title>AAANH</title>
        <meta
          name="description"
          content="Anh Hoang Nguyen's portfolio site :)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {dateTime == "" ? (
        <LoadingScreen></LoadingScreen>
      ) : (
        <IndexLayout>
          <div className={`relative h-screen w-screen`}>
            <Image
              className={`object-cover opacity-60 transition-all duration-300 ease-in-out dark:opacity-40 ${
                showLogin ? "blur-lg" : ""
              }`}
              src="/wallpaper.jpg"
              fill={true}
              alt="wallpaper"
            ></Image>
          </div>
          <div className="absolute top-12 flex flex-col items-center justify-center space-y-4 text-center text-6xl transition-all ease-in-out md:text-8xl">
            <p>{dateTime}</p>
            <p className="text-2xl md:text-4xl">{dateString}</p>
          </div>
          <div
            className={`absolute bottom-28 flex flex-col items-center justify-center space-y-2`}
          >
            <div
              className={`flex flex-col items-center justify-center rounded-xl p-2 transition-all duration-300 ease-in-out hover:bg-white/20 hover:backdrop-blur ${
                showLogin ? "translate-y-[-12px]" : "translate-y-[6px]"
              }`}
            >
              <button
                onClick={() => setShowLogin((old) => !old)}
                className="relative h-32 w-32 rounded-full border-2 border-neutral-500"
              >
                <Image
                  className="rounded-full object-contain p-1"
                  src="https://avatars.githubusercontent.com/u/37283437?v=4"
                  fill={true}
                  alt="Profile picture"
                ></Image>
              </button>
              <div>
                <h1 className="text-lg">Anh Hoang Nguyen</h1>
              </div>
            </div>
            <div
              className={`form-control mt-2 transition-all duration-300 ease-in-out ${
                showLogin
                  ? "translate-y-[5px] opacity-100"
                  : "pointer-events-none translate-y-[-12px] opacity-0"
              }`}
            >
              <form onSubmit={handleLogin}>
                <div className="flex items-center rounded-lg border p-2">
                  <input
                    type="password"
                    placeholder="Try 'letmein'"
                    className="w-48 bg-black bg-opacity-0 focus:outline-none"
                    value={password}
                    onChange={(e) => handlePasswordInput(e)}
                    tabIndex={showLogin ? 0 : -1}
                  />
                  <button
                    type="submit"
                    className="btn-primary btn-square btn h-6 w-6 rounded-full border transition-all ease-in-out hover:border-green-500 hover:text-green-300"
                    tabIndex={showLogin ? 0 : -1}
                  >
                    &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </IndexLayout>
      )}
    </>
  );
}
