import React from "react";

import { makeStyles } from "@mui/styles";
import { Button, Container, Paper } from "@mui/material";
import ResumeContact from "./resume_contact";

const useStyles = makeStyles((customTheme) => ({
	resume_wrapper: {
		padding: "1rem",
		margin: "1rem",
	},
	export_btn: {
		margin: "0 0.5rem",
	},
	resume_download: {
		display: "flex",
		alignItems: "center",
	},
}));

export default function Resume({}) {
	const classes = useStyles();

	return (
		<Container>
			<title>Anh's Resume</title>
			<Paper elevation={6} className={classes.resume_wrapper}>
				<div className={classes.resume_header}>
					<h1>Anh Hoang Nguyen's Resume</h1>
					<div className={classes.resume_download}>
						<Button variant="outlined" className={classes.export_btn}>
							.PDF
						</Button>
						<Button variant="outlined" className={classes.export_btn}>
							.DOCX
						</Button>
						<Button variant="outlined" className={classes.export_btn}>
							.MD
						</Button>
					</div>
					<ResumeContact></ResumeContact>
				</div>
			</Paper>
		</Container>
	);
}
