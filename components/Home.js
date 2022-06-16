export default function HomeContent() {
	let d = new Date();

	return (
		<div className="sm:text-md text-sm font-normal my-4">
			<div id="welcome" className="mt-4">
				<h2 className="text-green-600 font-bold">
					{"Welcome to Anh's Portfolio 6.90 RC (Yeetus Magus)"}
				</h2>
			</div>
			<div id="motd" className="my-2">
				<p className="break-all">
					* <span className="text-cyan-500">Documentation:</span>{" "}
					<a href="https://github.com/aaanh/homepage">
						https://github.com/aaanh/homepage.git
					</a>
				</p>
				<p>
					* <span className="text-cyan-500">Status:</span> 📚 🎓 and 👀 internships.
				</p>
				<p>
					* <span className="text-cyan-500">Institution:</span> Concordia University,
					Montreal, QC. Canada
				</p>
				<p>
					* <span className="text-cyan-500">Specializations:</span> Software Development,
					DevOps/SRE, Systems Administration in Windows and Linux.
				</p>
				<p>
					<span className="text-yellow-600 dark:text-yellow-400">420 updates</span> can be
					applied immediately.
				</p>
				<p>
					<span className="text-yellow-600 dark:text-yellow-400">Published Domains:</span>{" "}
					hoanganh.dev; hoanganh.tech; aaanh.app
				</p>
				<p>
					To see these additional updates run:{" "}
					<span className="italic">apt list --upgrade</span>
				</p>
				<br />
				<p className="text-slate-500">Last login: {d.toString()}</p>
			</div>
		</div>
	);
}
