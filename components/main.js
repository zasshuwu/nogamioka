// react
import { React, useState } from "react";
import clsx from "clsx";

// ui
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import customTheme from "../styles/theme";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// components
import NavBar from "./navbar";
import Head from "next/head";
import { ArrowDownward, Close, Crop32 } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
		backgroundSize: "400% 400%",
		animation: "gradient 15s ease infinite",
		position: "relative",
		width: "100%",
		minHeight: "100vh",
		[theme.breakpoints.down("sm")]: {
			minHeight: "120vh",
		},
		display: "flex",
		margin: "0",
		padding: "0",
		color: customTheme.palette.primary.main,
		justifyContent: "center",
		alignItems: "center",
		"& > *": {
			fontFamily: "Fira Code",
			lineHeight: "1rem",
		},
		fontSize: "11pt",
		"& .MuiPaper-root": {
			background: customTheme.palette.background.main,
		},
		"& .MuiTableCell-root": {
			fontFamily: "monospace",
			color: "#ddd !important",
		},
		"& a": {
			color: "#4ea8ed !important",
			textDecoration: "none",
			"&:hover": {
				textDecoration: "underline",
				textDecorationThickness: "0.1rem"
			},
			"& :visited": {
				color: "#1691f0 !important",
			},
		},
	},
	content: {
		background: customTheme.palette.background.main,
		minWidth: "50%",
		minHeight: "95%",
		border: "none",
		borderRadius: "8px",
		position: "relative",
		boxShadow: "3px 7px 15px 0px rgba(0,0,0,0.74)",
	},
	tab: {
		margin: "0",
		borderBottom: "solid 1px grey",
		borderRight: "solid 1px grey",
		borderRadius: "8px 0px",
		padding: "1rem",
		color: "white",
		width: "150px",
	},
	message: {
		margin: "1rem",
		wordBreak: "break-all",
		color: "#ddd",
		paddingBottom: "2rem",
	},
	"@keyframes gradient": {
		"0%": {
			backgroundPosition: "0% 50%",
		},
		"50%": {
			backgroundPosition: "100% 50%",
		},
		"100%": {
			backgroundPosition: "0% 50%",
		},
	},
	animatedCaret: {
		paddingRight: "5px",
		// borderRight: "solid 5px white",
		animation: "$blinkCaret 1s infinite",
	},
	"@keyframes blinkCaret": {
		from: {
			borderRight: "solid 5px #141414",
		},
		to: {
			borderRight: "solid 5px #141414",
		},
		"50%": {
			borderRight: "solid 5px #fff",
		},
	},
	headerNav: {
		listStyleType: "none",
		padding: 0,
		margin: 0,
		display: 'flex',
		flexDirection: 'row',
	},
	headNavIcons: {
		padding: "4px",
		margin: "4px",
		background: "transparent",
		borderRadius: "1rem",
		transition: "500ms ease",
		"&:hover": {
			background: "#333333",
			transition: "500ms ease"
		}
	}
	// copyright: {
	// 	position: "absolute",
	// 	bottom: "2%",
	// 	[theme.breakpoints.down("md")]: {
	// 		display: "none",
	// 	},
	// 	color: "#000",
	// },
}));

const MainContent = ({ command }) => {
	const classes = useStyles();
	let d = new Date();
	return (
		<>
			<Head>
				<meta property="og:title" content="Hoang Anh Tech" key="title" />
				<meta
					property="og:description"
					content="Hoang Anh's portfolio site, also where web frameworks are experimentally incorporated."
					key="description"
				></meta>
				<meta
					property="og:image"
					content="https://hoanganh.tech/apple-touch-icon.png"
					key="image"
				></meta>
			</Head>
			<div className={classes.message}>
				<h1 style={{ color: customTheme.palette.primary.main, fontSize: "12pt" }}>
					Welcome to Nguyen Hoang Anh's Portfolio 4.20 LTS (Yeetus Magus) 😉
				</h1>

				<code style={{ wordBreak: "break-all" }}>
					<br></br>
					<br></br>
					<p>* Documentation:	<a href="https://github.com/aaanh/main-site-src">https://github.com/aaanh/main-site-src</a></p>
					<p>* Status: Studying to become a Computer Engineer</p>
					<p>* Institution: Concordia University, Montreal, QC. Canada</p>
					<p style={{maxWidth: "60%", wordBreak:"break-word"}}>* Specialization: Full-stack Webdev, ML in Motion Detection &amp; NLP, Linux/Windows Server Admin, Orchestration, Network Admin, Computer Hardware, </p>
					<p>69 updates can be applied immediately.</p>
					<p>To see these additional updates run: apt list --upgrade</p>
					<br></br>
					<br></br>

					<p>Last login: { d.toString() }</p>
				</code>

				<p>
					<span style={{ color: customTheme.palette.primary.main }}>
						aaanh@hoanganhtech
					</span>
					<span style={{ color: "#9f43fa" }}>~$</span>
					{" " + command}
					<span className={classes.animatedCaret}></span>
				</p>
			</div>
		</>
	);
};

const ContactContent = ({ command }) => {
	const classes = useStyles();
	return (
		<div style={{ margin: "1rem", wordBreak: "break-all" }}>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
				{" " + command}
			</p>
			<p>
				<img
					style={{ height: "100px", borderRadius: "50%" }}
					src="https://avatars.githubusercontent.com/u/37283437?s=400&u=2a2c5c4c8b8db89ec19da727abba8daf277ba57e&v=4"
				></img>
			</p>
			<p>{">"} Official email: </p>
			<p>
				{">"} <span style={{ color: "#fff" }}>iam@hoanganh.tech</span>
			</p>
			<p>{">"} Academic email: </p>
			<p>
				{">"} <span style={{ color: "#fff" }}>a_en201@encs.concordia.ca</span>
			</p>
			<p>
				{">"} LinkedIn:{" "}
				<a href="https://linkedin.com/in/aaanh">https://linkedin.com/in/aaanh</a>
			</p>
			<br></br>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
				<span className={classes.animatedCaret}></span>
			</p>
		</div>
	);
};
const ProjectsContent = ({ command }) => {
	const classes = useStyles();
	function createData(id, role, description) {
		return { id, role, description };
	}

	const projectRows = [
		createData(
			"dev blog",
			"gatsby + vercel",
			"A blog that helps me stay grounded by reflecting on my responsibilities."
		),
		createData("this website", "very proud", "react/nextjs, vercel, material-ui"),
		createData("do-it (WIP)", "front-end dev", "a job board for vn"),
		createData(
			"Graph viz of Panama Papers",
			"C++",
			"Apply graph theory, graph algo, c++ oop methodologies into the visualization task"
		),
		createData(
			"your-nutritionist (defunct)",
			"front-end dev",
			"a recipe-sharing social network"
		),
		createData(
			"Maze-navigating vehicle",
			"C++ (arduino)",
			"College engineering project. 3D-printed vehicle navigates by ultrasonic sensors controlled by an Arduino Uno."
		),
		createData(
			"R project in Statistics",
			"R",
			"College project using R in statistical analysis. Simulate Most Recent Common Ancestor (MRCA)."
		),
	];
	return (
		<div style={{ margin: "1rem" }}>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
				{" " + command}
			</p>
			<TableContainer>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>id</TableCell>
							<TableCell>role/tech</TableCell>
							<TableCell>description</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{projectRows.map((projectRow) => (
							<TableRow key={projectRow.name}>
								<TableCell component="th" scope="row">
									{projectRow.id}
								</TableCell>
								<TableCell>{projectRow.role}</TableCell>
								<TableCell>{projectRow.description}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Typography style={{fontFamily: "Fira Code", color: "#00ddff"}}>
				<p>Others:</p>
				<ul>
					<li>Deploy and host personal minecraft server (java) on linux-gsm</li>
					<li>
						Deploy VPN server with NAT routing to access geo-locked content and hardened
						RDP
					</li>
					<li>Setup private e-mail service for this domain name</li>
				</ul>
			</Typography>
			<br></br>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
				<span className={classes.animatedCaret}></span>
			</p>
		</div>
	);
};
const ExperienceContent = ({ command }) => {
	const classes = useStyles();
	function createData(id, role, description) {
		return { id, role, description };
	}
	const experienceRows = [
		createData(
			"Applied NLP (university)",
			"Undergrad research student",
			"Assist research progress by running and reporting models performance"
		),
		createData(
			"AITS (university)",
			"Service Desk Operator",
			"Tech support for utilizing university's IT, network, and account resources"
		),
		createData(
			"Inertial Sensing Lab (islab.ca)",
			"Webmaster",
			"machine learning on accelerometric data; build, deploy, maintain wiki"
		),
		createData(
			"Mai Boat Service (maiboatservice.us)",
			"Webmaster",
			"Build and maintain website for a boat repair shop in Orlando, Fl."
		),
	];
	return (
		<div style={{ margin: "1rem" }}>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
				{" " + command}
			</p>
			<TableContainer>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>id</TableCell>
							<TableCell>role</TableCell>
							<TableCell>description</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{experienceRows.map((experienceRow) => (
							<TableRow key={experienceRow.name}>
								<TableCell component="th" scope="row">
									{experienceRow.id}
								</TableCell>
								<TableCell>{experienceRow.role}</TableCell>
								<TableCell>{experienceRow.description}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<br></br>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
				<span className={classes.animatedCaret}></span>
			</p>
		</div>
	);
};
const AwardsContent = ({ command }) => {
	const classes = useStyles();
	function createData(id, role, description) {
		return { id, role, description };
	}

	const awardRows = [
		createData(
			"FRQNT Stipend Recipient",
			"October, 2020",
			"for work in Inertial Sensing Lab under Prof. Larnder"
		),
	];
	return (
		<div style={{ margin: "1rem" }}>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
				{" " + command}
			</p>
			<TableContainer>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>id</TableCell>
							<TableCell>year</TableCell>
							<TableCell>description</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{awardRows.map((awardRow) => (
							<TableRow key={awardRow.name}>
								<TableCell component="th" scope="row">
									{awardRow.id}
								</TableCell>
								<TableCell>{awardRow.role}</TableCell>
								<TableCell>{awardRow.description}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
				<span className={classes.animatedCaret}></span>
			</p>
		</div>
	);
};

export default function Main(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [command, setCommand] = useState("cd ~");
	const [screenContent, setContent] = useState("main");

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<div style={{ width: "100%", height: "3rem" }}>
					<ul className={classes.headerNav}>
						<li>
							<div className={classes.tab}> {">"}
								&nbsp;HATerm&nbsp;&nbsp;&nbsp;&nbsp;X
							</div>
						</li>
						
						<li style={{ marginLeft: "auto", padding: "1rem" }}>
							<ArrowDownward className={classes.headNavIcons}></ArrowDownward>
							<Crop32 className={classes.headNavIcons}></Crop32>
							<Close className={classes.headNavIcons} onClick={(e) => {
								e.preventDefault();
								window.location.replace("/empty");
							}}></Close>
						</li>
					</ul>
				</div>
				{screenContent === "main" && <MainContent command={command}></MainContent>}
				{screenContent === "contact" && <ContactContent command={command}></ContactContent>}
				{screenContent === "experience" && (
					<ExperienceContent command={command}></ExperienceContent>
				)}
				{screenContent === "projects" && (
					<ProjectsContent command={command}></ProjectsContent>
				)}
				{screenContent === "awards" && <AwardsContent command={command}></AwardsContent>}

				<NavBar setCommand={setCommand} setContent={setContent}></NavBar>
			</div>
			{/* <div className={classes.copyright}>Anh Hoang Nguyen (c) 2021</div> */}
		</div>
	);
}
