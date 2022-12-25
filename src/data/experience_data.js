function createExperience({
	key = 0,
	organization = "",
	team = "",
	role = "",
	type = "",
	location = "",
	start_month = 0,
	start_year = 0,
	end_month = 0,
	end_year = 0,
	description = [""],
	link_ref = "",
	skills = [""]
} = {}) {
	return {
		key,
		organization,
		team,
		role,
		type,
		location,
		start_month,
		start_year,
		end_month,
		end_year,
		description,
		link_ref,
		skills
	};
}

const month = {
	1: "January",
	2: "February",
	3: "March",
	4: "April",
	5: "May",
	6: "June",
	7: "July",
	8: "August",
	9: "September",
	10: "October",
	11: "November",
	12: "December",
};

export const experienceData = [
	createExperience({
		organization: "Nuance + Microsoft",
		link_ref: "https://nuance.com",
		role: "Software Developer",
		type: "Internship, Full-time",
		location: "Montreal, Quebec, Canada",
		start_month: month[1],
		start_year: 2023,
		end_month: month[5],
		end_year: 2023,
	}),
	createExperience({
		organization: "Genetec",
		link_ref: "https://genetec.com",
		role: "Software Developer",
		team: "Software Configuration Management & Tools",
		type: "Internship, Full-time",
		location: "Saint-Laurent, Québec, Canada",
		start_month: month[5],
		start_year: 2022,
		end_month: month[8],
		end_year: 2022,
		description: [
			"The work revolves around the Azure DevOps platform, managing code repositories, building & deploying pipelines, API tooling, dev tooling, automation, and containers (Docker) orchestration.",
			"Learned and improved personal DevOps skills, software development practices, and problem analysis skills."
		],
		skills: ['CI/CD', 'DevOps', 'Container Orchestration', 'IAM', 'GitOps', 'C#', 'Bash', 'Linux', 'Shell Scripting', 'Powershell']
	}),
	createExperience({
		organization: "Concordia University",
		link_ref: "https://users.encs.concordia.ca/~sac",
		role: "Undergraduate Research Assistant",
		type: "Part-time",
		location: "Montréal, Québec, Canada",
		start_month: month[1],
		start_year: 2020,
		end_month: 0,
		end_year: 0,
		description: [
			"My research activities focus on machine learning platforms, processes, and services.",
			"Current project goal is to evaluate and benchmark these systems to formulate metrics on the operational costs and overhead when performing ML engineering tasks. My research complements my professional development in DevOps and systems design/architecture.",
			"I also (WIP) am developing the group's public-facing website."
		],
		skills: ['MLOps', 'DevOps', 'Web Development', 'Python', 'IaaS', 'GitOps', 'Next.js', 'Tailwind CSS', 'React', 'Linux', 'Cloud Computing', 'TensorFlow', 'Powershell']
	}),
	createExperience({
		organization: "AITS @Concordia University",
		link_ref: "https://www.concordia.ca/ginacody/aits.html",
		role: "IT Technician L2",
		type: "Part-time, Permanent",
		location: "Montréal, Québec, Canada",
		start_month: month[3],
		start_year: 2020,
		end_month: 0,
		end_year: 0,
		description: [
			"Troubleshoot end-user environment in Windows, Linux, and macOS desktop and remote server sessions on Linux shells and Windows RDS.",
			"Deal with complicated issues involving hardware, software, and network infrastructure.",
			"Investigate operational incidents and either resolve or triage to senior teams.",
			"I migrate and maintain the team's knowledge base with scheduled backups. I also contribute to the university's high performance computing (the Speed HPC) group's repository."
		],
		skills: ['Asset Management', 'Incident Investigation', 'IAM', 'Bash', 'Linux', 'System Administration', 'Technical Support', 'OS', 'Powershell']
	}),
	createExperience({
		organization: "Genetec",
		link_ref: "https://genetec.com",
		role: "IT Specialist",
		type: "Part-time",
		location: "Saint-Laurent, Québec, Canada",
		start_month: month[8],
		start_year: 2021,
		end_month: month[12],
		end_year: 2021,
		description: [
			"Assistance and troubleshooting for end-users, on-premise AD and Azure AD management, incident response and investigation, hardware/software asset management and deployment, infrastructure and workflow improvement."
		],
		skills: ['Active Directory', 'Jira', 'Automation', 'IAM', 'Technical Support', 'OS', 'Powershell']
	}),
	// createExperience({
	// 	organization: "Inertial Sensing Lab",
	// 	link_ref: "https://islab.ca",
	// 	role: "Full-Stack Web Developer, Systems Administrator",
	// 	type: "Contract, On-call",
	// 	location: "Montreal, Quebec, Canada",
	// 	start_month: month[10],
	// 	start_year: 2020,
	// 	end_month: month[5],
	// 	end_year: 2021,
	// 	description: [
	// 		"Responsible for building and maintaining the project website. The website is a hub for both internal and public communications. I decide and implement from the tech stacks and the UI/UX design to the web hosting, networking, and security. The site functions as a knowledge base, blog, archive, and file repository.",
	// 	],
	// }),
	// createExperience({
	// 	organization: "Inertial Sensing Lab",
	// 	link_ref:
	// 		"https://islab.ca/student-reports/nguyen_1700362_written_research_rep_submitted_on_2020-05-28_23h03m46s.pdf",
	// 	role: "Student Researcher",
	// 	type: "On-call",
	// 	location: "Saint-Anne-de-Bellevue, Quebec, Canada",
	// 	start_month: month[11],
	// 	start_year: 2019,
	// 	end_month: month[10],
	// 	end_year: 2020,
	// 	description: [
	// 		"One semester working with inertia sensing devices. Worked on the software architect of the project. Project used Python for data processing and analysis with Tensorflow v1 for data inference and tkinter for building UI.",
	// 	],
	// }),
	// createExperience({
	// 	organization: "Mai Boat Service",
	// 	link_ref: "https://maiboatservice.us",
	// 	role: "Full-Stack Web Developer",
	// 	type: "Contract",
	// 	location: "Orlando, Florida, United States",
	// 	start_month: month[5],
	// 	start_year: 2017,
	// 	end_month: month[5],
	// 	end_year: 2021,
	// 	description: [
	// 		"The website is built using Nextjs. styled with Tailwindcss, hosted on Vercel, and DNS routed through Cloudflare with DDoS and bot protections.",
	// 	],
	// }),
	createExperience({
		organization: "John Abbott College",
		link_ref: "https://johnabbott.qc.ca",
		role: "Tutor",
		type: "Volunteer",
		location: "Saint-Anne-de-Bellevue, Quebec, Canada",
		start_month: month[1],
		start_year: 2017,
		end_month: month[5],
		end_year: 2017,
		description: [
			"Tutored Macroeconomics.",
			"My pedagogy approach was to have the students try problems first, then pointed out the errors, and guided their path to the final solution.",
			"I facilitated multiple students achieve at least 70% on their midterms and finals. Among those, 2 went from below passing to passing the course.",
		],
	}),
];
