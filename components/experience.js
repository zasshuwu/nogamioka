import React from "react";
import { makeStyles } from "@mui/styles";

import customTheme from "../styles/theme";

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
	experience: {
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
		overflowX: "hidden",
	},
	experienceEntry: {
		margin: "1rem",
		marginLeft: "0",
		// minHeight: '200px',
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
	experienceText: {
		display: "flex",
		flexDirection: "column",
		"& > *": {
			maxWidth: "100vw",
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
		color: "#ccc",
		lineHeight: "1.5rem",
	},
	experienceDemo: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
		"& img": {
			maxWidth: "100%",
			maxHeight: "600px",
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

export default function ExperienceContent({ command }) {
	const classes = useStyles();

	return (
		<div style={{ margin: "1rem" }}>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>
					root@ANH-WEB-SERVER:
				</span>
				<span style={{ color: "#9f43fa" }}>~#</span>
				{" " + command}
			</p>
			<div className={classes.experience}>
				<div className={classes.experienceContent}>
					<div className={classes.experienceEntry}>
						<div className={classes.experienceTitle}>
							<a href="https://genetec.com">Genetec Inc.</a> (Internship, 2022)
						</div>
						<div className={classes.experienceText}>
							Software Developer in SCMT/DevOps
							<details>
								<summary>Details</summary>
								<ul>
									<li>
										Maintain and update the installation program scripts
										(InstallShield)
									</li>
									<li>
										Create an assistance library for the installation programs
										in C#/C++
									</li>
									<li>
										Maintain and update compilation scripts for the compilation
										servers
									</li>
									<li>
										Create C# extensions for the Build Team Foundation library
									</li>
									<li>Improve the team&apos;s intranet page</li>
									<li>
										Design and add functionalities for the team&apos;s intranet
										page (ASP .NET): list and management of builds, reports,
										etc.
									</li>
									<li>
										Develop the installation script of a tool intended for our
										partners (InstallShield)
									</li>
									<li>
										Analyze different virtualization tools allowing execution of
										an application in a virtual environment, without having to
										install it in advance
									</li>
									<li>
										Develop a series of automated tests to be executed after
										each build of an application
									</li>
								</ul>
							</details>
						</div>
					</div>
					<div className={classes.experienceEntry}>
						<div className={classes.experienceTitle}>
							<a href="https://genetec.com">Genetec Inc.</a> (Internship, 2021)
						</div>
						<div className={classes.experienceText}>
							IT Support Specialist
							<details>
								<summary>Details</summary>
								<ul>
									<li>
										Provide technical assistance and troubleshooting for users
									</li>
									<li>Perform infra and team workflow improvement tasks</li>
									<li>
										Test new hardware and software compatibility in the
										environment
									</li>
									<li>
										Manage hybrid AD and Endpoint, account credentials and
										permission groups.
									</li>
									<li>Deploy IT assets: hardware and software</li>
									<li>Utilize PowerShell scripting</li>
									<li>Manage VMs and KVM/Hyper-V</li>
									<li>Extensive use of Jira</li>
									<li>Handle IT phone calls</li>
									<li>
										Maintain asset inventory and specifications. Troubleshoot
										computer hardware issues.
									</li>
									<li>Manage access request according to InfoSec policies</li>
									<li>Provide escalation and contribute to internal wiki</li>
									<li>Work usually encompasses OSI layers 5 to 7</li>
								</ul>
							</details>
						</div>
					</div>
					<div className={classes.experienceEntry}>
						<div className={classes.experienceTitle}>
							<a href="https://www.concordia.ca/ginacody/aits.html">
								Concordia University{" "}
							</a>
							(part-time, 03/2021 - present)
						</div>
						<div className={classes.experienceText}>
							Service Desk Operator @ Academic IT Services
							<details>
								<summary>Details</summary>
								<ul>
									<li>
										Offering frontline support to the customers in terms of
										utilizing the IT services and resources at Concordia.
									</li>
									<li>
										Regularly checking the teaching lab peripherals (i.e.,
										computers, monitors, projectors), and troubleshooting the
										found issues.
									</li>
									<li>
										Servicing the walk-in customer or in labs, and answering the
										phone call.
									</li>
									<li>
										Utilizing the ticketing system to offer efficient IT
										support.
									</li>
									<li>
										Working in conjunction with Service Desk full-time staff to
										ensure the functionality of computer labs.
									</li>
									<li>
										Performing inventory for new purchases (computers and
										equipment) by the engineering faculty.
									</li>
									<li>
										Undertaking other job-related missions assigned by the
										manager of User Services.
									</li>
								</ul>
							</details>
						</div>
					</div>
					<div className={classes.experienceEntry}>
						<div className={classes.experienceTitle}>
							<a href="https://users.encs.concordia.ca/~sac/">SAC Research Group</a>{" "}
							(part-time, 02/2021 - present)
						</div>
						<div className={classes.experienceText}>
							Undergraduate Assistant
							<details>
								<summary>Details</summary>
								<ul>
									<li>
										Assisting in researching practical applications of ML and DL
										models with current focus on explainable AI (XAI).
									</li>
									<li>
										Previously, reporting performance of NLP models for
										classification on non-Latin datasets, e.g. XLNet and bert.
									</li>
								</ul>
							</details>
						</div>
					</div>
					<div className={classes.experienceEntry}>
						<div className={classes.experienceTitle}>
							<a href="https://islab.ca">Inertial Sensing Lab</a> (project/contract,
							2020)
						</div>
						<div className={classes.experienceText}>
							Webmaster, System Administrator
							<details>
								<summary>Details</summary>
								<ul>
									<li>
										Build and manage research website, contribute to ML source
										code, maintain code repository
									</li>
								</ul>
								<iframe
									src="https://islab.ca"
									width="500px"
									height="500px"
								></iframe>
							</details>
						</div>
					</div>
					<div className={classes.experienceEntry}>
						<div className={classes.experienceTitle}>
							<a href="https://maiboatservice.us">Mai Boat Service</a> (contract)
						</div>
						<div className={classes.experienceText}>
							Full-stack Web Developer
							<details>
								<summary>Details</summary>
								<ul>
									<li>
										Build and maintain customer-facing website, increase
										customer interaction and conversion rate.
									</li>
									<li>
										Apply Google SEO: site is within top 5 related search result
										100% of all time.
									</li>
								</ul>
								<iframe
									src="https://maiboatservice.us"
									width="500px"
									height="500px"
								></iframe>
							</details>
						</div>
					</div>
				</div>
			</div>

			<br></br>
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
