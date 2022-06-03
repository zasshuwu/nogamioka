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
		link_ref: "https://linux.hoanganh.tech",
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
		title: "Will I Pass",
		description: ["I procrastinate productively"],
		stack: "Nextjs, Tailwindcss. Hosted on Netlify PaaS",
		iframe: "https://will-i-pass.aaanh.app",
		image: "",
		link_ref: "https://will-i-pass.aaanh.app",
	}),
	createProject({
		title: "Data Traversal OOP",
		description: ["Final project in Object-Oriented Programming"],
		stack: "C++, python, pandas",
		iframe: "",
		image: "/coen244/coen244-demo.gif",
		link_ref: "https://github.com/aaanh/meaningful-graph-traversal",
	}),
	createProject({
		title: "Imaginary Hackathon Website",
		description: [
			"Originally developed for ConUHacks VI, but project was scrapped in the middle of development. It features CTF-style games. For sentimental values, I finished it up and deployed in halcyon.",
		],
		stack: "Nextjs, Material-UI",
		iframe: "https://halcyon.hoanganh.dev",
		link_ref: "https://halcyon.hoanganh.dev",
	}),

	createProject({
		title: "Maze-Navigating Vehicle",
		description: [
			"Final Project in Applied Physics. 3D-printed vehicle navigates by ultrasonic sensors controlled by an Arduino Uno.",
		],
		stack: "C++, arduino",
	}),
	createProject({
		title: "MRCA Simulation",
		description: [
			"Final Project in Statistics and Probability. Statistical analysis and probabilistic simulation of Most Recent Common Ancestor.",
		],
		stack: "R, matplotlib",
		link_ref: "https://github.com/aaanh/mrca-sim-r",
		image: "https://raw.githubusercontent.com/aaanh/mrca-sim-r/master/results/tmrca.png",
	}),
];
