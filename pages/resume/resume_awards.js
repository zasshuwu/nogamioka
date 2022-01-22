import React from "react";

import { makeStyles } from "@mui/styles";
import customTheme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
	resume_awards: {
		padding: "1rem",
	},
	h2: {
		color: customTheme.palette.tertiary.main,
	},
}));

export default function ResumeAwards() {
	const classes = useStyles();

	return (
		<div className={classes.resume_awards}>
			<h2 className={classes.h2}>Awards</h2>
			<ul>
				<li>
					FRQNT Stipend Recipient, October, 2020, for work in Inertial Sensing Lab under
					Prof. Larnder.
				</li>
			</ul>
		</div>
	);
}
