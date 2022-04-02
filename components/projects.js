import React from "react";
import { makeStyles } from "@mui/styles";

import customTheme from "../styles/theme";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
	"@global": {
		"*::-webkit-scrollbar": {
			width: "0.4em",
		},
		"*::-webkit-scrollbar-track": {
			"-webkit-box-shadow": "inset 0 0 6px #2172ff00",
		},
		"*::-webkit-scrollbar-thumb": {
			backgroundColor: "#30d95daa",
			outline: "1px solid #00000000",
			borderRadius: ".5em",
		},
	},
	project: {
		display: "flex",
		flexDirection: "column",
		"& p": {
			color: "#ddd",
		},
		maxHeight: "80vh",
		overflowY: "scroll",
		overflowX: "hidden",
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
			maxWidth: "100%",
		},
		[theme.breakpoints.down("sm")]: {
			maxWidth: "100vw",
			"& > *": {
				maxWidth: "100vw",
			},
		},
		"& img": {
			width: "80%",
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
		maxWidth: "100%",
		[theme.breakpoints.down("sm")]: {
			maxWidth: "100vw",
		},
	},
	iframe: {
		background: "white",
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
				<span style={{ color: customTheme.palette.primary.main }}>
					root@ANH-WEB-SERVER:
				</span>
				<span style={{ color: "#9f43fa" }}>~#</span>
				{" " + command}
			</p>

			<div className={classes.project}>
				<div className={classes.projectEntry}>
					<div className={classes.projectText}>
						<h2>
							<a href="https://linux.hoanganh.tech">Linux/Unix Docs</a>
						</h2>
						<p>
							My simple, copy-paste repertoire of useful Linux/Unix commands and
							how-to{"'"}s.
						</p>
						<p>Stack: Python3 + Sphinx Docs.</p>
						<iframe
							className={classes.iframe}
							src="https://linux.hoanganh.dev"
							width="800px"
							height="600px"
						></iframe>
					</div>
					<div className={classes.projectDemo}></div>
				</div>
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
							className={classes.iframe}
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
							This is a job board that is catered to my home country job market.
							I&quot;m developing its front-end and branding, as well as building its
							in-house infrastructures, i.e. DNS, edge computing, load balancing,
							cloud identity and acess, InfraSec gatekeeping, etc.
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
							<li>
								Deploy and host personal minecraft server (java) on bare-metal Linux
								server with automated backup to AWS S3.
							</li>
							<li>
								Deploy VPN server with NAT routing to access geo-locked content and
								hardened RDP
							</li>
							<li>Setup private e-mail service for this domain name</li>
						</ul>
					</div>
				</div>
				<h2>Infrastructure Diagram</h2>
				<img src="/static/homelab-and-cloud-infra.png" width="80%"></img>
			</div>

			<p>
				<span style={{ color: customTheme.palette.primary.main }}>
					root@ANH-WEB-SERVER:
				</span>
				<span style={{ color: "#9f43fa" }}>~#</span>
				<span className={classes.animatedCaret}></span>
			</p>
		</div>
	);
}
