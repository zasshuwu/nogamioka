import { React, useState } from "react";

// ui
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import customTheme from "../styles/theme";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const useStyles = makeStyles((theme) => ({
	navBarWrapper: {
		minHeight: "50px",
		width: "100%",
		position: "relative",
		display: "flex",
		borderTop: "solid 1px grey",
		flexGrow: "1",
	},
	navBar: {
		padding: "0",

		marginLeft: "auto",
		"& > *": {
			margin: "0.5rem",
		},
	},
	customButtonHome: {
		color: "#1691f0",
		borderColor: "#1691f0",
		"&:hover": {
			background: "#1691f0",
			color: customTheme.palette.background.main,
		},
	},
	customButtonContact: {
		color: customTheme.palette.primary.main,
		borderColor: customTheme.palette.primary.main,
		"&:hover": {
			background: customTheme.palette.primary.main,
			color: customTheme.palette.background.main,
		},
	},
	customButtonExperience: {
		color: "#facc00",
		borderColor: "#facc00",
		"&:hover": {
			background: "#facc00",
			color: customTheme.palette.background.main,
		},
	},
	customButtonProjects: {
		color: "#00ddff",
		borderColor: "#00ddff",
		"&:hover": {
			background: "#00ddff",
			color: customTheme.palette.background.main,
		},
	},
	customButtonAwards: {
		color: customTheme.palette.navButton,
		borderColor: customTheme.palette.navButton,
		"&:hover": {
			background: customTheme.palette.navButton,
			color: customTheme.palette.background.main,
		},
	},
	customButtonGitHub: {
		color: "#fff",
		borderColor: "#fff",
		"&:hover": {
			background: "#fff",
			color: customTheme.palette.background.main,
		},
	},
	customButtonLinux: {
		color: "#0077BB",
		borderColor: "#0077BB",
		"&:hover": {
			background: "#0077BB",
			color: customTheme.palette.background.main,
		},
	},
	customButtonVpn: {
		color: "#fff",
		borderColor: "#fff",
		"&:hover": {
			background: "#fff",
			color: customTheme.palette.background.main,
		},
	},
	customButtonRDP: {
		color: "#fff",
		borderColor: "#fff",
		"&:hover": {
			background: "#fff",
			color: customTheme.palette.background.main,
		},
	},
	customButtonXterm: {
		color: "#E95420",
		borderColor: "#E95420",
		"&:hover": {
			background: "#E95420",
			color: customTheme.palette.background.main,
		},
	},
	BtnText: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
}));

export default function NavBar({ setCommand, setContent }) {
	const [values, setValues] = useState({
		showContact: false,
		showExperience: false,
		showAwards: false,
		showProjects: false,
		showMain: false,
	});

	// button handlers
	const toHome = () => {
		setCommand("cd /home/aaanh");
		setContent("main");
	};
	const handleContact = () => {
		setCommand("contact");
		setContent("contact");
	};
	const handleExperience = () => {
		setCommand("experience");
		setContent("experience");
	};
	const handleAwards = () => {
		setCommand("awards");
		setContent("awards");
	};
	const handleProjects = () => {
		setCommand("projects");
		setContent("projects");
	};

	const handleGitHub = (e) => {
		e.preventDefault();
		setCommand("github");
		window.open("https://github.com/aaanh");
	};
	const handleLinux = (e) => {
		e.preventDefault();
		setCommand("unix-docs");
		window.open("https://unix.hoanganh.tech");
	};

	const classes = useStyles();

	return (
		<div className={classes.navBarWrapper}>
			<div className={classes.navBar}>
				<Button
					size="small"
					onClick={toHome}
					variant="outlined"
					className={classes.customButtonHome}
				>
					<span style={{ textTransform: "lowercase" }}>cd ~</span>
				</Button>

				<Button
					size="small"
					onClick={handleContact}
					variant="outlined"
					className={classes.customButtonContact}
				>
					<MailIcon fontSize="small"></MailIcon>
					<span className={classes.BtnText}>&nbsp; Contact</span>
				</Button>

				<Button
					size="small"
					onClick={handleExperience}
					variant="outlined"
					className={classes.customButtonExperience}
				>
					<WorkIcon fontSize="small"></WorkIcon>
					<span className={classes.BtnText}>&nbsp; Experience</span>
				</Button>

				<Button
					size="small"
					onClick={handleProjects}
					variant="outlined"
					className={classes.customButtonProjects}
				>
					<AccountTreeIcon fontSize="small"></AccountTreeIcon>
					<span className={classes.BtnText}>&nbsp; Projects</span>
				</Button>

				<Button
					size="small"
					onClick={handleAwards}
					variant="outlined"
					className={classes.customButtonAwards}
				>
					<BeenhereIcon fontSize="small"></BeenhereIcon>
					<span className={classes.BtnText}>&nbsp; Awards</span>
				</Button>

				<Button
					onClick={handleGitHub}
					variant="outlined"
					className={classes.customButtonGitHub}
				>
					<GitHubIcon fontSize="small"></GitHubIcon>
					<span className={classes.BtnText}>&nbsp; @aaanh</span>
				</Button>
				<Button
					onClick={handleLinux}
					variant="outlined"
					className={classes.customButtonLinux}
				>
					<DeveloperModeIcon fontSize="small"></DeveloperModeIcon>
					<span className={classes.BtnText}>&nbsp; Linux/Unix</span>
				</Button>
			</div>
		</div>
	);
}
