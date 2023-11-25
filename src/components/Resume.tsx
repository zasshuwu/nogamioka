import Link from "next/link";
import { useEffect, useState } from "react";

export default function Resume() {
  const [progressVal, updateProgressVal] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progressVal < 100) {
        const random = Math.floor(Math.random() * 2);
        updateProgressVal((prevVal) => prevVal + random);
      } else {
        updateProgressVal(100);
      }
    }, 5);
    return () => clearInterval(interval);
  }, [progressVal]);

  return (
    <div className="p-8">
      <div className="text-center">
        <h1 className="text-4xl">Resume/CV Download Module</h1>
        <div className="flex items-center justify-center">
          <progress
            className="-z-10 mr-2 w-full transition-all ease-in-out"
            value={progressVal.toString()}
            max="100"
          ></progress>
          {progressVal}%
        </div>
        <div className="dark:text-slate-400 text-slate-800">
          <p>You can download my resume in the following formats below.</p>
          <br />
          <div className="flex flex-wrap items-center justify-center dark:text-white text-black text-lg">
            <Link className="border border-black dark:border-white p-2 rounded-lg hover:bg-white/10 transition-all ease-in-out" href="/anh-resume.pdf" target="_blank">
              {".PDF (in browser)"}
            </Link>
            <Link
              className="border border-black dark:border-white p-2 rounded-lg hover:bg-white/10 m-2 transition-all ease-in-out"
              href="/anh-resume.pdf"
              download
              target="_blank"
            >
              {".PDF (download)"}
            </Link>
            <Link
              className="border border-black dark:border-white p-2 rounded-lg hover:bg-white/10 m-2 transition-all ease-in-out"
              href="/anh-resume.docx"
              download
              target="_blank"
            >
              {".DOCX (download)"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Resume.displayName = "Resume";