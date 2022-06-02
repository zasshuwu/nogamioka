function createProject({
	key = 0,
	title = "",
	description = [""],
	stack = "",
	link_ref = "",
	iframe = "",
	image = "",
} = {}) {
	return {
		key,
		title,
		description,
		stack,
		link_ref,
		iframe,
		image,
	};
}

export const projectData = [
	createProject({
		title: "Linux/Unix Docs",
		description: [
			"My simple, copy-paste repertoire of useful Linux/Unix commands and how-to's.",
		],
		stack: "Python3 + Sphinx Docs. Containerized with Docker. CI/CD with Github Actions, bash scripts, Google Cloud Container Registry + Cloud Run.",
		iframe: "https://linux.hoanganh.tech",
		image: "",
	}),
	createProject({
		title: "Dev Blog",
		description: [
			"This is where I detail my testing adventure with new technologies and encounter with new technical knowledge.",
		],
		stack: "Nextjs, Tailwindcss. Hosted on Netlify PaaS",
		iframe: "https://dev.hoanganh.tech",
		image: "",
	}),
	createProject({
		title: "Dev Blog",
		description: [
			"This is where I detail my testing adventure with new technologies and encounter with new technical knowledge.",
		],
		stack: "Nextjs, Tailwindcss. Hosted on Netlify PaaS",
		iframe: "https://dev.hoanganh.tech",
		image: "",
	}),
];
