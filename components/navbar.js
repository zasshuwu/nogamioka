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
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useRouter } from "next/router";

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
			borderColor: "#1691f0",
		},
	},
	customButtonContact: {
		color: customTheme.palette.primary.main,
		borderColor: customTheme.palette.primary.main,
		"&:hover": {
			background: customTheme.palette.primary.main,
			color: customTheme.palette.background.main,
			borderColor: customTheme.palette.primary.main,
		},
	},
	customButtonExperience: {
		color: "#facc00",
		borderColor: "#facc00",
		"&:hover": {
			background: "#facc00",
			color: customTheme.palette.background.main,
			borderColor: "#facc00",
		},
	},
	customButtonProjects: {
		color: "#00ddff",
		borderColor: "#00ddff",
		"&:hover": {
			background: "#00ddff",
			color: customTheme.palette.background.main,
			borderColor: "#00ddff",
		},
	},
	customButtonAwards: {
		color: customTheme.palette.navButton,
		borderColor: customTheme.palette.navButton,
		"&:hover": {
			background: customTheme.palette.navButton,
			color: customTheme.palette.background.main,
			borderColor: customTheme.palette.navButton,
		},
	},
	customButtonGitHub: {
		color: "#fff",
		borderColor: "#fff",
		"&:hover": {
			background: "#fff",
			color: customTheme.palette.background.main,
			borderColor: "#fff",
		},
	},
	customButtonLinux: {
		color: "#329ddb",
		borderColor: "#329ddb",
		"&:hover": {
			background: "#329ddb",
			color: customTheme.palette.background.main,
			borderColor: "#329ddb",
		},
	},
	customButtonBlog: {
		color: "#a863f7",
		borderColor: "#a863f7",
		"&:hover": {
			background: "#a863f7",
			color: customTheme.palette.background.main,
			borderColor: "#a863f7",
		},
	},
	customButtonUses: {
		color: "pink",
		borderColor: "pink",
		"&:hover": {
			background: "pink",
			color: customTheme.palette.background.main,
			borderColor: "pink",
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
	const router = useRouter();

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
	const handleUses = (e) => {
		e.preventDefault();
		setCommand("cd /uses");
		router.push("/uses");
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
					size="small"
					onClick={handleUses}
					variant="outlined"
					className={classes.customButtonUses}
				>
					<BeenhereIcon fontSize="small"></BeenhereIcon>
					<span className={classes.BtnText}>&nbsp; Uses</span>
				</Button>

				<Button
					size="small"
					onClick={handleGitHub}
					variant="outlined"
					className={classes.customButtonGitHub}
				>
					<GitHubIcon fontSize="small"></GitHubIcon>
					<span className={classes.BtnText}>&nbsp; @aaanh</span>
				</Button>
				<Button
					size="small"
					onClick={handleLinux}
					variant="outlined"
					className={classes.customButtonLinux}
				>
					{/* <DeveloperModeIcon fontSize="small"></DeveloperModeIcon> */}
					🐧
					<span className={classes.BtnText}>&nbsp; Linux/Unix</span>
				</Button>
				<Button
					size="small"
					className={classes.customButtonBlog}
					variant="outlined"
					onClick={() => {
						window.open("https://dev.hoanganh.tech");
					}}
				>
					<DriveFileRenameOutlineIcon fontSize="small"></DriveFileRenameOutlineIcon>
					<span className={classes.BtnText}>&nbsp; Blog</span>
				</Button>
			</div>
		</div>
	);
}
