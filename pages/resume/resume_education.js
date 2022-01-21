import React from "react";

import { makeStyles } from "@mui/styles";
import customTheme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
	resume_education: {
		padding: "1rem",
	},
	h2: {
		color: customTheme.palette.tertiary.main,
	},
	edu_head: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	edu_year: {
		margin: "0 0 0 1rem",
	},
	edu_school: {
		margin: "0 0 0 1rem",
	},
	edu_block: {
		// color: "#ddd",
	},
}));

export default function ResumeEducation({}) {
	const classes = useStyles();

	return (
		<div className={classes.resume_education}>
			<h2 className={classes.h2}>Education</h2>
			<div className={classes.edu_block}>
				<div className={classes.edu_head}>
					<div className={classes.edu_entry}>
						<h3>Bachelor of Computer Engineering</h3>
					</div>
					<div className={classes.edu_school}>Concordia University, Montréal, QC.</div>
					<div className={classes.edu_year}>2020 - 2024</div>
				</div>
				<div className={classes.edu_description}>
					<ul>
						<li>
							Relevant courses: Object-oriented Programming, Data Structures &amp;
							Algorithms, Computer Organization &amp; Software (assembly programming),
							Discrete Math, Technical Writing and Communications
						</li>
					</ul>
				</div>
			</div>

			<div className={classes.edu_block}>
				<div className={classes.edu_head}>
					<div className={classes.edu_entry}>
						<h3>DEC in Pure and Applies Sciences</h3>
					</div>
					<div className={classes.edu_school}>
						John Abbott College, Ste-Anne-de-Bellevue, QC.
					</div>
					<div className={classes.edu_year}>2017 - 2020</div>
				</div>
				<div className={classes.edu_description}>
					<ul>
						<li>Relevant courses: Linear Algebra, Statistics &amp; Probability</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
