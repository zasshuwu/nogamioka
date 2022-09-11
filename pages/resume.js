import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Resume() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Anh{"'"}s Resume</title>
      </Head>  
      <div className="dark:bg-neutral-900 dark:text-white p-4 flex flex-wrap flex-col space-y-2 w-screen h-screen">
        <h1 className="text-4xl">Resume</h1>
        <hr />
        <div className="text-slate-400">
          <p>
            You can download my resume in the following formats below.
          </p>
          <div className="flex items-center space-x-4 underline underline-offset-2 text-blue-500">
            <Link
              href="/anh-resume.md"
              to="/anh-resume.md"
              download
              target="_blank"
            >
              .MD
            </Link>
            <Link
              href="/anh-resume.docx"
              to="/anh-resume.docx"
              download
              target="_blank"
            >
              .DOCX
            </Link>
            <Link
              href="/anh-resume.pdf"
              to="/anh-resume.pdf"
              download
              target="_blank"
            >
              .PDF
            </Link>
          </div>
          <button
            onClick={() => router.push("/home")}
            className="border border-slate-400 p-2 rounded-lg hover:text-white hover:bg-slate-400 my-4"
          >
            Go To Home
          </button>
        </div>
        </div>
      </>
  );
}
