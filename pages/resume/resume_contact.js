import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

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
			transition: "ease-in-out .25s",
			cursor: "pointer",
		},
	},
}));

export default function ResumeContact({}) {
	const classes = useStyles();

	return (
		<div className={classes.resume_contact}>
			<EmailIcon
				className={clsx(classes.resume_contact_icons, classes.mail_icon)}
				fontSize="large"
			></EmailIcon>
			<LinkedInIcon
				className={clsx(classes.resume_contact_icons, classes.linkedin_icon)}
				fontSize="large"
			></LinkedInIcon>
			<GitHubIcon
				className={clsx(classes.resume_contact_icons, classes.github_icon)}
				fontSize="large"
			></GitHubIcon>
			<TwitterIcon
				className={clsx(classes.resume_contact_icons, classes.twitter_icon)}
				fontSize="large"
			></TwitterIcon>
		</div>
	);
}
