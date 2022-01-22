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
					I&apos;m also a member of the Co-op Institute.
				</p>
				<p>
					I actively work on modern web applications, APIs, and frameworks and machine
					learning research projects in natural language processing. As an avid adopter of
					new and exciting cloud, server, and networking technologies, I setup my home lab
					and cloud clusters on Linode, AWS, and manage orchestration via Ansible. My
					tentative endgame is to work in DevOps and CyberSec.
				</p>
			</blockquote>
			<div className={classes.skill_cloud}>
				<h2 className={classes.h2}>Skills</h2>
				<ul>
					<li>
						<span className={classes.skill_topic}>Programming Languages</span>: C, C++,
						C#, Python, JavaScript, HTML/CSS, TypeScript, Java.
					</li>
					<li>
						<span className={classes.skill_topic}>Specializations</span>: Web app
						development, cross-platform with Electron, server orchestration and
						networking.
					</li>
					<li>
						<span className={classes.skill_topic}>Environments</span>: Linux, macOS,
						Windows and respective CLI&apos;s.
					</li>
					<li>
						<span className={classes.skill_topic}>Tools</span>: Agile process, git,
						bash/zsh, PowerShell, vim, vscode, conda.
					</li>
					<li>
						<span className={classes.skill_topic}>Natural languages</span>: vi-vn
						(native), en-us/ca/uk (bilingual), fr-ca (B1), ja-jp (N5), de-de (casual).
					</li>
					<li>
						<span className={classes.skill_topic}>Personal</span>: Professional manner,
						responsible, problem solving, willing to learn, team player, empathy,
						friendly.
					</li>
				</ul>
			</div>
		</div>
	);
}
