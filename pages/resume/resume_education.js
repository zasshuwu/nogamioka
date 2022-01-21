import React from "react";

import { makeStyles } from "@mui/styles";
import customTheme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
	resume_education: {
		padding: "1rem",
	},
	h2: {
		color: customTheme.palette.primary.main,
	},
}));

function createData(key, entry, school, year) {
	return { key, entry, school, year };
}

const edu_data = [
	createData(
		0,
		"Bachelor of Computer Engineering",
		"Concordia University, Montreal, QC.",
		"2020 - 2024"
	),
];

const edu_block = (props) => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.edu_degree}>{props.degree}</div>
			<div className={classes.edu_head}>{props.school}</div>
			<div className={classes.edu_year}>{props.year}</div>
		</>
	);
};

export default function ResumeEducation({}) {
	const classes = useStyles();

	return (
		<div className={classes.resume_education}>
			<h2 className={classes.h2}>Education</h2>
		</div>
	);
}
