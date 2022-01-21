import React from "react";

import { makeStyles } from "@mui/styles";
import customTheme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
	resume_summary: {
		color: customTheme.palette.mode === "light" ? "#000" : "#ddd",
		borderLeft: "solid 8px #555",
		padding: "0 1rem",
		fontSize: "1.25em",
	},
}));

export default function ResumeSummary({}) {
	const classes = useStyles();

	return (
		<div>
			<blockquote className={classes.resume_summary}>
				<p>
					I am a Bachelor of Computer Engineering student at Concordia University in
					Montreal, QC. <br />
					I'm also a member of the Co-op Institute.
				</p>
				<p>
					I actively work on modern web applications, APIs, and frameworks and machine
					learning research projects in natural language processing. As an avid adopter of
					new and exciting cloud, server, and networking technologies, I setup my home lab
					and cloud clusters on Linode, AWS, and manage orchestration via Ansible. My
					tentative endgame is to work in DevOps and CyberSec.
				</p>
				<p>
					I started out in linguistics, psychology, and political science, but have since
					(2017) departed and pursued my life-long passion in computer science and
					engineering.
				</p>
			</blockquote>
		</div>
	);
}
