import React from "react";

import { makeStyles } from "@mui/styles";
import customTheme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
	resume_summary: {
		color: customTheme.palette.mode === "light" ? "#000" : "#ddd",
		borderLeft: "solid 8px #777",
		padding: "0 1rem",
		fontSize: "1.25em",
		[customTheme.breakpoints.down("md")]: {
			fontSize: "0.9em",
		},
	},
	skill_cloud: {
		padding: "1rem",
	},
	skill_topic: {
		fontWeight: "bold",
	},
	h2: {
		color: customTheme.palette.tertiary.main,
	},
}));

export default function ResumeSummary({}) {
	const classes = useStyles();

	return (
		<div>
			<blockquote className={classes.resume_summary}>
				<p>
					I&apos;m a Bachelor of Computer Engineering student at Concordia University in
					Montreal, QC. <br />
				</p>
				<p>
					I actively work on modern web applications, APIs, and frameworks and machine
					learning research projects in natural language processing. As an avid adopter of
					new and exciting cloud, server, and networking technologies, I setup my home lab
					and cloud clusters on Linode, AWS, and manage orchestration via Ansible. My
					tentative endgame is to work in DevOps and SRE.
				</p>
			</blockquote>
			<div className={classes.skill_cloud}>
				<h2 className={classes.h2}>Skills</h2>
				<ul>
					<li>
						<span className={classes.skill_topic}>Programming Languages</span>: C (2y),
						C++ (2y), C# (1y), Python (4y), JavaScript (4y), HTML/CSS (4y), TypeScript
						(1y), Java (1y).
					</li>
					<li>
						<span className={classes.skill_topic}>Specializations</span>: Web app
						development (2y), cross-platform with Electron (1y), systems administration
						(1.5y), server orchestration (3y) and networking (2y).
					</li>
					<li>
						<span className={classes.skill_topic}>Environments</span>: Linux, macOS,
						Windows and respective CLI&apos;s.
					</li>
					<li>
						<span className={classes.skill_topic}>Tools</span>: Agile process, git,
						bash/zsh, PowerShell, vim, vscode, conda, OSINT framework.
					</li>
					<li>
						<span className={classes.skill_topic}>Natural languages</span>: vi-vn
						(native), en-us/ca/uk (bilingual), fr-ca (B1), ja-jp (N5), de-de (casual).
					</li>
					<li>
						<span className={classes.skill_topic}>Personal</span>: Professional manner,
						responsible, problem solving, willing to learn, a team player, empathetic,
						friendly, advanced Googling with complex search queries and syntaxes.
					</li>
				</ul>
			</div>
		</div>
	);
}
