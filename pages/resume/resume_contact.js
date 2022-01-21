import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import Aos from "aos";
import "aos/dist/aos.css";

// icons
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyles = makeStyles((theme) => ({
	resume_contact: {
		marginTop: "1rem",
	},
	resume_contact_icons: {
		margin: "0 .5rem 0 0",
		"&:hover": {
			transition: "ease-in-out .25s",
			cursor: "pointer",
		},
	},
	mail_icon: {
		"&:hover": {
			color: "#1ac1c7",
		},
	},
	linkedin_icon: {
		"&:hover": {
			color: "#0a66c2",
		},
	},
	github_icon: {
		"&:hover": {
			color: "black",
		},
	},
	twitter_icon: {
		"&:hover": {
			color: "#1DA1F2",
		},
	},
}));

export default function ResumeContact({}) {
	const classes = useStyles();

	return (
		<div className={classes.resume_contact}>
			<EmailIcon
				onClick={() => {
					window.open("mailto:iam@hoanganh.tech");
				}}
				className={clsx(classes.resume_contact_icons, classes.mail_icon)}
				fontSize="large"
			></EmailIcon>
			<LinkedInIcon
				onClick={() => {
					window.open("https://linkedin.com/in/aaanh");
				}}
				className={clsx(classes.resume_contact_icons, classes.linkedin_icon)}
				fontSize="large"
			></LinkedInIcon>
			<GitHubIcon
				onClick={() => {
					window.open("https://github.com/aaanh");
				}}
				className={clsx(classes.resume_contact_icons, classes.github_icon)}
				fontSize="large"
			></GitHubIcon>
			<TwitterIcon
				onClick={() => {
					window.open("https://twitter.com/yeetusmagus");
				}}
				className={clsx(classes.resume_contact_icons, classes.twitter_icon)}
				fontSize="large"
			></TwitterIcon>
		</div>
	);
}
