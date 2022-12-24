import Link from "next/link";

export default function Resume() {
  return (
    <>
      <div className="">
        <h1 className="text-4xl">Resume</h1>
        <hr />
        <div className="text-slate-400">
          <p>You can download my resume in the following formats below.</p>
          <div className="flex items-center space-x-4 text-blue-500 underline underline-offset-2">
            <Link href="/anh-resume.md" download target="_blank">
              .MD
            </Link>
            <Link href="/anh-resume.docx" download target="_blank">
              .DOCX
            </Link>
            <Link href="/anh-resume.pdf" download target="_blank">
              .PDF
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

Resume.displayName = "Resume"
