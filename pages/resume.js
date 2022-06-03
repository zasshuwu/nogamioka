import Link from "next/link";
import { useRouter } from "next/router";

export default function Resume() {
	const router = useRouter();
	return (
		<div className="dark:bg-neutral-900 dark:text-white m-4 flex flex-wrap flex-col space-y-2">
			<h1 className="text-4xl">Resume</h1>
			<hr />
			<div className="text-slate-600">
				<p>
					I have deprecated this resume page. This page only exists for external
					references.
				</p>

				<button
					onClick={() => router.push("/")}
					className="border border-slate-400 p-2 rounded-lg hover:text-white hover:bg-slate-400 my-4"
				>
					Go To Home
				</button>

				<p>You can download my resume in the following formats below...</p>
				<div className="flex items-center space-x-4 underline underline-offset-2 text-blue-500">
					<Link href="/anh-resume.md" to="/anh-resume.md" download target="_blank">
						.MD
					</Link>
					<Link href="/anh-resume.docx" to="/anh-resume.docx" download target="_blank">
						.DOCX
					</Link>
					<Link href="/anh-resume.pdf" to="/anh-resume.pdf" download target="_blank">
						.PDF
					</Link>
				</div>
			</div>
		</div>
	);
}
