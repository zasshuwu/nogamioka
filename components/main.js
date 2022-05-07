import { React, useState } from "react";
import Head from "next/head";

// ui
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/styles";
import customTheme from "../styles/theme";
import NavBar from "../components/navbar";
import { ArrowDownward, Close, Crop32 } from "@mui/icons-material";

// components
import AwardsContent from "./awards";
import ExperienceContent from "./experience";
import ProjectsContent from "./projects";
import ContactContent from "./contact";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Main(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [command, setCommand] = useState("cd ~");
	const [screenContent, setContent] = useState("main");

	const router = useRouter();

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<div style={{ width: "100%", height: "3rem" }}>
					<ul className={classes.headerNav}>
						<li>
							<div className={classes.tab}>
								<div style={{ flex: "0" }}>X</div>
								<div style={{ margin: "auto" }}>{"~ "}anhTerm</div>
								<div>{"⌘1"}</div>
							</div>
						</li>

						<li style={{ marginLeft: "auto", padding: "1rem" }}>
							<ArrowDownward className={classes.headNavIcons}></ArrowDownward>
							<Crop32 className={classes.headNavIcons}></Crop32>
							<Close
								className={classes.headNavIcons}
								onClick={(e) => {
									e.preventDefault();
									window.location.replace("/empty");
								}}
							></Close>
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

const MainContent = ({ command }) => {
	const classes = useStyles();
	let d = new Date();

	const router = useRouter();

	const handleResume = (e) => {
		e.preventDefault();
		router.push("/resume");
	};

	return (
		<>
			<Head>
				<meta property="og:title" content="Hoang Anh Tech" key="title" />
				<meta
					property="og:description"
					content="Nguyen Hoang Anh's portfolio site."
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
					Welcome to Nguyen Hoang Anh&apos;s Portfolio 6.90 RC (Yeetus Magus) 😉
				</h1>
				<div className={classes.resume_download}>
					<Button
						onClick={() => {
							window.open("/anh-resume.pdf");
						}}
						variant="outlined"
						color="primary"
					>
						.PDF
					</Button>
					<Button
						onClick={() => {
							window.open("/anh-resume.docx");
						}}
						variant="outlined"
						color="tertiary"
					>
						.DOCX
					</Button>
					<Button
						onClick={() => {
							window.open("/anh-resume.md");
						}}
						variant="outlined"
						color="primary"
					>
						.MD
					</Button>
					<Button
						onClick={() => {
							window.open("/Anh_Hoang_Nguyen.vcf");
						}}
						variant="outlined"
						color="primary"
					>
						vCard
					</Button>
				</div>

				{/* <Button onClick={handleResume} variant="outlined" color="primary">
					View Classic Resume
				</Button> */}
				<div className="code">
					<br></br>

					<p style={{ wordBreak: "break-all" }}>
						* <span style={{ color: "#00ddff" }}>Documentation:</span>{" "}
						<a href="https://github.com/aaanh/homepage">
							https://github.com/aaanh/homepage.git
						</a>
					</p>
					<p>
						* <span style={{ color: "#00ddff" }}>Status:</span> 📚 🎓 and 👀
						internships.
					</p>
					<p>
						* <span style={{ color: "#00ddff" }}>Institution:</span> Concordia
						University, Montreal, QC. Canada
					</p>
					<p>
						* <span style={{ color: "#00ddff" }}>Specializations:</span> Software
						Development, DevOps/SRE, Systems Administration in Windows and Linux.
					</p>
					<p>
						<span style={{ color: "#facc00" }}>420 updates</span> can be applied
						immediately.
					</p>
					<p>
						<span style={{ color: "#facc00" }}>Published Domains:</span> hoanganh.dev;
						hoanganh.tech; aaanh.app
					</p>
					<p>To see these additional updates run: apt list --upgrade</p>
					<br></br>

					<p>Last login: {d.toString()}</p>
				</div>

				<p>
					<span style={{ color: customTheme.palette.primary.main }}>
						root@ANH-WEB-SERVER
					</span>
					<span style={{ color: "#9f43fa" }}>~#</span>
					{" " + command}
					<span className={classes.animatedCaret}></span>
				</p>
			</div>
		</>
	);
};

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#111111",
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
			fontFamily: "Fira Code, monospace",
			color: "#ddd !important",
		},
		"& a": {
			color: "#4ea8ed !important",
			textDecoration: "none",
			"&:hover": {
				textDecoration: "underline",
				textDecorationThickness: "0.1rem",
			},
			"& :visited": {
				color: "#1691f0 !important",
			},
		},
	},
	content: {
		background: customTheme.palette.background.main,
		minWidth: "95%",
		minHeight: "95%",
		border: "none",
		borderRadius: "8px",
		position: "relative",
		boxShadow: "3px 7px 15px 0px rgba(0,0,0,0.74)",
		[theme.breakpoints.down("sm")]: {
			borderRadius: 0,
			opacity: "0.9",
			minHeight: "100vh",
		},
		border: "solid .25px #aaa",
	},
	tab: {
		margin: "0",
		borderBottom: "solid 1.25px #aaa",
		borderRight: "solid 1.25px #aaa",
		borderRadius: "8px 0",
		display: "flex",
		justifyContent: "space-between",
		padding: ".75rem .5rem",
		color: "#aaa",
		minWidth: "250px",
		fontSize: "1em",
		"& > *": {
			marginLeft: "1em",
		},
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
		display: "flex",
		flexDirection: "row",
	},
	headNavIcons: {
		padding: "4px",
		margin: "4px",
		background: "transparent",
		borderRadius: "1rem",
		transition: "500ms ease",
		"&:hover": {
			background: "#333333",
			transition: "500ms ease",
		},
	},
	resume_download: {
		display: "flex",
		alignItems: "center",
		"& > *": {
			marginRight: "1rem",
		},
	},
}));
