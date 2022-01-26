import React from "react";

import { makeStyles } from "@mui/styles";
import customTheme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
	resume_others: {
		padding: "1rem",
	},
	h2: {
		color: customTheme.palette.tertiary.main,
	},
}));

export default function ResumeOthers() {
	const classes = useStyles();

	return (
		<div className={classes.resume_others}>
			<h2 className={classes.h2}>Other Interests</h2>
			<ul>
				<li>Music, cultural exchange, travelling.</li>
				<li>
					Messing around with{" "}
					<a href="https://github.com/awesome-selfhosted/awesome-selfhosted">
						Awesome Selfhosted
					</a>
				</li>
				<li>Gaming</li>
			</ul>
			<p
				style={{
					textAlign: "center",
					fontWeight: "lighter",
					marginTop: "4rem",
				}}
			>
				This online classic-style resume is latest and supersedes all other
				versions/mutations on other media and platforms, including but not limited to, hard
				copies, digital copies, LinkedIn, my homepage itself, and etc.
			</p>
		</div>
	);
}
