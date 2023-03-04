import HomeLayout from "@/layouts/HomeLayout";
import { NextPage } from "next";
import Link from "next/link";

const Resume: NextPage = () => {
  return (
    <HomeLayout>
      <div className="flex h-[94.5vh] items-center justify-center p-4">
        <h1 className="p-4 font-mono">
          <span className="text-accent">{`Resume`}</span>.
          <span className="text-secondary">{`get`}</span>
          <span className="text-info">{`()`}</span>
        </h1>
        <div>
          <ul className="flex flex-col space-y-2">
            <li title="No longer supported, to maintain information integrity.">
              <Link
                className="btn-disabled btn"
                href="/"
                download
                target="_blank"
              >
                .MD
              </Link>
            </li>
            <li>
              <Link className="btn" href="/anh-resume.pdf" target="_blank">
                {".PDF (in browser)"}
              </Link>
            </li>
            <li>
              <Link
                className="btn"
                href="/anh-resume.pdf"
                download
                target="_blank"
              >
                {".PDF (download)"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Resume;
