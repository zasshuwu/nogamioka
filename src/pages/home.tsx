import Head from "next/head";
import ViewExplorer from "~/components/ViewExplorer";
import HomeLayout from "~/layouts/HomeLayout";


export default function Home() {
  return (
    <>
      <Head>
        <title>AAANH</title>
        <meta name="description" content="Anh Hoang Nguyen's portfolio site :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <main className="z-20 p-4">
          <ViewExplorer></ViewExplorer>
        </main>
      </HomeLayout>
    </>
  );
}
