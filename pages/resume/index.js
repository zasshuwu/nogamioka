import React, { useEffect } from "react";

import { makeStyles } from "@mui/styles";
import { Button, Container, Paper } from "@mui/material";
import ResumeContact from "./resume_contact";

import Aos from "aos";
import "aos/dist/aos.css";
import ResumeSummary from "./resume_summary";
import ResumeEducation from "./resume_education";
import ResumeExperience from "./resume_experience";
import ResumeProjects from "./resume_projects";
import { ArrowLeftRounded } from "@mui/icons-material";

const useStyles = makeStyles((customTheme) => ({
	resume_wrapper: {
		padding: "1rem",
		margin: "2rem 1rem",
		backgroundColor: "#fbfbf8",
		[customTheme.breakpoints.down("md")]: {
			margin: "0",
			minWidth: "100vw",
			minHeight: "100vh",
			fontSize: "0.9em",
			padding: "0.25rem",
		},
	},
	resume_header: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		[customTheme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	},
	export_btn: {
		margin: "0 0.5rem",
	},
	resume_download: {
		display: "flex",
		alignItems: "center",
	},
	back_arrow: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		border: "solid 1px black",
		borderRadius: "50%",
		position: "fixed",
		"&:hover": {
			backgroundColor: "#333333dd",
			color: "#fff",
			cursor: "pointer",
		},
		[customTheme.breakpoints.down("md")]: {
			display: "none",
		},
	},
	resume_container: {
		[customTheme.breakpoints.down("md")]: {
			margin: "0",
			minWidth: "100vw",
			minHeight: "100vh",
			padding: "0",
		},
	},
}));

export default function Resume({}) {
	const classes = useStyles();

	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	return (
		<Container
			className={classes.resume_container}
			style={{ fontFamily: "Be Vietnam Pro" }}
			data-aos="fade-up"
		>
			<title>Anh&apos;s Resume</title>
			<Paper elevation={3} className={classes.resume_wrapper}>
				<ArrowLeftRounded
					className={classes.back_arrow}
					sx={{ fontSize: "48pt" }}
					onClick={() => {
						window.open("/");
					}}
				></ArrowLeftRounded>
				<div className={classes.resume_header}>
					<h1>Anh Hoang Nguyen&apos;s Resume</h1>
					<div className={classes.resume_download}>
						<Button variant="outlined" color="primary" className={classes.export_btn}>
							.PDF
						</Button>
						<Button variant="outlined" color="tertiary" className={classes.export_btn}>
							.DOCX
						</Button>
						<Button variant="outlined" color="black" className={classes.export_btn}>
							.MD
						</Button>
					</div>
					<ResumeContact></ResumeContact>
				</div>
				<ResumeSummary></ResumeSummary>
				<ResumeEducation></ResumeEducation>
				<ResumeExperience></ResumeExperience>
				<ResumeProjects></ResumeProjects>
			</Paper>
		</Container>
	);
}
