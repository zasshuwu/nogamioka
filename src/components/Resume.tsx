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
    <>
      <div className="text-center">
        <h1 className="text-4xl">Resume/CV Download Module</h1>
        <div className="flex items-center justify-center">
          <progress
            className="progress progress-secondary -z-10 mr-2 w-full transition-all ease-in-out"
            value={progressVal.toString()}
            max="100"
          ></progress>
          {progressVal}%
        </div>
        <div className="text-slate-400">
          <p>You can download my resume in the following formats below.</p>
          <br />
          <div className="flex flex-wrap items-center justify-center text-blue-500 underline underline-offset-2">
            <Link
              className="btn m-2"
              href="/anh-resume.md"
              download
              target="_blank"
            >
              .MD
            </Link>
            <Link className="btn" href="/anh-resume.pdf" target="_blank">
              {".PDF (in browser)"}
            </Link>
            <Link
              className="btn m-2"
              href="/anh-resume.pdf"
              download
              target="_blank"
            >
              {".PDF (download)"}
            </Link>
            <Link
              className="btn m-2"
              href="/anh-resume.docx"
              download
              target="_blank"
            >
              {".DOCX (download)"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

Resume.displayName = "Resume";
