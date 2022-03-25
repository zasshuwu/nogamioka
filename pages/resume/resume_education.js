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

		[customTheme.breakpoints.down("md")]: {
			textAlign: "center",
		},
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
						<h3>DEC in Pure and Applied Sciences</h3>
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
					<ul>
						<li>
							Research project:{" "}
							<a
								style={{ color: "#2172ff" }}
								href="https://islab.ca/student-reports/nguyen_1700362_written_research_rep_submitted_on_2020-05-28_23h03m46s.pdf"
							>
								Development of a Software Environment and User Interface for the
								Analysis of Accelerometer Data
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
