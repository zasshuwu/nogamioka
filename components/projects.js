import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import customTheme from "../styles/theme";

const useStyles = makeStyles((theme) => ({
	project: {
		display: "flex",
		flexDirection: "column",
		"& p": {
			color: "#ddd",
		},
		minWidth: "50vw",
		[theme.breakpoints.down("md")]: {
			maxWidth: "100vw",
			maxHeight: "100vh",
		},
		maxHeight: "70vh",
		overflowY: "scroll",
	},
	projectEntry: {
		margin: "1rem",
		marginLeft: "0",
		alignItems: "center",
		paddingRight: "1rem",
		[theme.breakpoints.down("sm")]: {
			margin: 0,
		},
		"& iframe": {
			[theme.breakpoints.down("sm")]: {
				display: "none",
			},
		},
	},
	projectText: {
		display: "flex",
		flexDirection: "column",
		"& > *": {
			maxWidth: "50vw",
		},

		[theme.breakpoints.down("sm")]: {
			maxWidth: "100vw",
			"& > *": {
				maxWidth: "100vw",
			},
		},
		"& img": {
			[theme.breakpoints.down("sm")]: {
				maxWidth: "100vw",
			},
		},
		color: "white",
		lineHeight: "1.5rem",
	},
	projectDemo: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
		"& img": {
			maxWidth: "100%",
			maxHeight: "600px",
		},
	},
	projects: {
		maxWidth: "80vw",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "100vw",
		},
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
}));

export default function ProjectsContent({ command }) {
	const classes = useStyles();

	return (
		<div style={{ margin: "1rem" }} className={classes.projects}>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
				{" " + command}
			</p>

			<div className={classes.project}>
				<h2>Infrastructure Diagram</h2>
				<img src="/homelab-and-cloud-infra.png" width="80%"></img>
				<br></br>
				<div className={classes.projectEntry}>
					<div className={classes.projectText}>
						<h2>
							<a href="https://dev.hoanganh.tech">Development Blog</a>
						</h2>
						<p>
							This is where I detail my testing adventure with new technologies and
							encounter with new technical knowledge.
						</p>
						<p>Stack: gatsby.js deployed on vercel PaaS.</p>
						<iframe
							src="https://dev.hoanganh.tech"
							width="800px"
							height="600px"
						></iframe>
					</div>
					<div className={classes.projectDemo}></div>
				</div>
				<div className={classes.projectEntry}>
					<div className={classes.projectText}>
						<h2>
							<a href="https://do-it-demo.hoanganh.tech">Do It</a> (collab, WIP)
						</h2>
						<p>
							I'm developing front-end for this job board web app tailored for the
							Vietnamese market.
						</p>
						<p>
							Stack: (FE) react/nextjs, redux, material-ui; (BE) python/django api,
							postgreSQL
						</p>
						<iframe
							src="https://do-it-demo.hoanganh.tech"
							width="800px"
							height="600px"
						></iframe>
					</div>
				</div>

				<div className={classes.projectEntry}>
					<div className={classes.projectText}>
						<h2>
							<a href="https://github.com/aaanh/coen244-project">
								Graph Visualization of Panama Papers
							</a>{" "}
							(final project)
						</h2>
						<p>
							I applied graph theory, traversal algorithm, C++ OOP methodologies into
							visualizing the Panama Papers dataset
						</p>
						<p>Stack: C++, bash, Python/jupyterlab/pandas</p>
						<img src="/coen244/coen244-demo.gif" width="800px"></img>
						<img src="/coen244/coen244-demo.png" width="600px"></img>
					</div>
				</div>

				<div className={classes.projectEntry}>
					<div className={classes.projectText}>
						<h2>
							<a href="https://github.com/aaanh/arduino-phys4eng-w2020">
								Autonomous Maze-Navigating Vehicle
							</a>{" "}
							(final project)
						</h2>
						<p>
							Lead programmer for this college engineering project in applied Physics.
							3D-printed vehicle navigates by ultrasonic sensors controlled by an
							Arduino Uno.
						</p>
						<p>Stack: C++, arduino</p>
					</div>
				</div>

				<div className={classes.projectEntry}>
					<div className={classes.projectText}>
						<h2>
							<a href="https://github.com/aaanh/mrca-sim-r">
								Simulate Most Recent Common Ancestor
							</a>{" "}
							(final project)
						</h2>
						<p>
							Statistical analysis and probabilistic simulation of Most Recent Common
							Ancestor (MRCA).
						</p>
						<p>Stack: R</p>
						<img src="/tmrca.png"></img>
					</div>
				</div>

				<div className={classes.projectEntry}>
					<div className={classes.projectText}>
						<h2>Others:</h2>
						<ul>
							<li>Deploy and host personal minecraft server (java) on linux-gsm</li>
							<li>
								Deploy VPN server with NAT routing to access geo-locked content and
								hardened RDP
							</li>
							<li>Setup private e-mail service for this domain name</li>
						</ul>
					</div>
				</div>
			</div>

			<p>
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
				<span className={classes.animatedCaret}></span>
			</p>
		</div>
	);
}
