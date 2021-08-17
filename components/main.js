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
		backgroundColor: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
		backgroundImage: svgBackground,
		// backgroundSize: "400% 400%",
		animation: "gradient 15s ease infinite",
		position: "relative",
		width: "100%",
		minHeight: "100vh",
		
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
		[theme.breakpoints.down("sm")]: {
			borderRadius: 0,
			opacity: '0.8',
		},
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
		wordBreak: "break-word",
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
					
					<p style={{wordBreak: "break-all"}}>* <span style={{color: "#00ddff"}}>Documentation:</span> <a href="https://github.com/aaanh/main-site-src">https://github.com/aaanh/main-site-src</a></p>
					<p>* <span style={{color: "#00ddff"}}>Status:</span> Studying to become a Computer Engineer</p>
					<p>* <span style={{color: "#00ddff"}}>Institution:</span> Concordia University, Montreal, QC. Canada</p>
					<p>* <span style={{color: "#00ddff"}}>Specialization:</span> Full-stack Webdev, ML in Motion Detection &amp; NLP, Linux/Windows Server Admin, Orchestration, Network Admin, Computer Hardware.</p>
					<p><span style={{color: "#facc00"}}>69 updates</span> can be applied immediately.</p>
					<p>To see these additional updates run: apt list --upgrade</p>
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
			<p>* All inquiries: </p>
			<p>
				* <span style={{ color: "#fff" }}>iam@hoanganh.tech</span>
			</p>
			<p>* Academic email: </p>
			<p>
				* <span style={{ color: "#fff" }}>a_en201@encs.concordia.ca</span>
			</p>
			<p>
				* LinkedIn:{" "}
			</p>
			<p>
				* <a href="https://linkedin.com/in/aaanh">https://linkedin.com/in/aaanh</a>

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

const svgBackground = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='3840' height='2160' preserveAspectRatio='none' viewBox='0 0 3840 2160'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2096%26quot%3b)' fill='none'%3e%3crect width='3840' height='2160' x='0' y='0' fill='url(%23SvgjsLinearGradient2097)'%3e%3c/rect%3e%3cpath d='M918 926L917 2111' stroke-width='8' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M320 581L319 1844' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M404 625L403 1655' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1831 675L1830 1353' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3478 200L3477 811' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M2817 1876L2816 1025' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1640 73L1639 -1136' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2147 990L2146 -116' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M525 379L524 1836' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2464 200L2463 1533' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M2379 205L2378 1713' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2468 780L2467 102' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1234 1302L1233 756' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M2165 223L2164 -796' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3009 98L3008 794' stroke-width='8' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1029 88L1028 -1525' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1351 485L1350 -415' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1258 1087L1257 -221' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2149 550L2148 -552' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3216 1944L3215 989' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3519 276L3518 -1065' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M213 1999L212 3249' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M696 2038L695 1117' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M538 1544L537 2541' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1112 329L1111 926' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M36 423L35 1824' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M273 2122L272 2778' stroke-width='8' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1471 248L1470 1394' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M776 2100L775 2889' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M703 1973L702 3391' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2049 262L2048 -504' stroke-width='8' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1827 1619L1826 3009' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M3604 304L3603 1749' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M732 2130L731 3605' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3815 658L3814 1859' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M3310 1875L3309 3197' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1738 1454L1737 2716' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M875 148L874 -1073' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M839 234L838 1359' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M630 1242L629 2687' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M247 2010L246 1040' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1705 121L1704 -1355' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1322 1229L1321 2611' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1181 1563L1180 2497' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M54 308L53 -757' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1786 2131L1785 2687' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M2873 1450L2872 228' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1477 568L1476 -333' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M481 1043L480 -257' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M885 451L884 1086' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2251 1894L2250 2827' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M3298 756L3297 2200' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1763 248L1762 1511' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3769 1706L3768 3062' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1544 1206L1543 2678' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1899 1198L1898 2544' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2398 1912L2397 304' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M162 788L161 2005' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M3284 129L3283 1609' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2017 1963L2016 1135' stroke-width='8' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M2819 202L2818 -572' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2082 515L2081 1616' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M327 1702L326 489' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3365 1476L3364 799' stroke-width='8' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M3430 2051L3429 2750' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M161 875L160 1649' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2197 251L2196 -532' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3482 1449L3481 889' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M2827 1107L2826 2411' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M3309 867L3308 2039' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2152 2128L2151 2810' stroke-width='8' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M3146 689L3145 -694' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M216 748L215 2251' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3196 659L3195 1403' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M737 1502L736 2122' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M3081 1020L3080 1680' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M2106 1013L2105 21' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M315 980L314 -429' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3434 115L3433 -578' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3830 734L3829 -400' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M3122 1019L3121 -57' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3007 763L3006 1783' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2404 1778L2403 3384' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1682 1098L1681 -204' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M2954 1062L2953 32' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M762 470L761 -647' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M3795 560L3794 1765' stroke-width='8' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M3309 1396L3308 2027' stroke-width='8' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M803 174L802 -795' stroke-width='6' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1041 1839L1040 2519' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1838 486L1837 1732' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M2471 22L2470 1439' stroke-width='10' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1974 178L1973 -1225' stroke-width='10' stroke='url(%23SvgjsLinearGradient2098)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1746 93L1745 -1079' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3148 548L3147 1912' stroke-width='8' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M3660 1702L3659 912' stroke-width='6' stroke='url(%23SvgjsLinearGradient2099)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2096'%3e%3crect width='3840' height='2160' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2097'%3e%3cstop stop-color='rgba(70%2c 177%2c 177%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(88%2c 53%2c 150%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient2098'%3e%3cstop stop-color='rgba(200%2c 235%2c 255%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(200%2c 235%2c 255%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient2099'%3e%3cstop stop-color='rgba(200%2c 235%2c 255%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(200%2c 235%2c 255%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`;