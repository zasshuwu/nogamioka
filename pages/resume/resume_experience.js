import React from "react";

import { makeStyles } from "@mui/styles";
import customTheme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
	resume_experience: {
		padding: "1rem",
	},
	experience_entry: {
		// color: "#ddd",
	},
	exp_head: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	comp: {
		color: "#1245a8",
		fontSize: "1.25em",
		margin: "0.5rem",
		[customTheme.breakpoints.down("md")]: {
			fontSize: "1em",
		},
		"&:hover": {
			fontWeight: "bold",
		},
		[customTheme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	},
	h2: {
		color: customTheme.palette.tertiary.main,
	},
	role: {
		[customTheme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	},
	time: {
		[customTheme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	},
}));

export default function ResumeExperience() {
	const classes = useStyles();

	return (
		<div className={classes.resume_experience}>
			<h2 className={classes.h2}>Experience</h2>
			<div className={classes.experience_entry}>
				<div className={classes.exp_head}>
					<div className={classes.role}>
						<h3>IT Technician L2 &mdash; Part-time</h3>
					</div>
					<div className={classes.comp}>
						<a href="https://www.concordia.ca/ginacody/aits.html">
							Academic IT Services, Concordia University
						</a>
					</div>
					<div className={classes.time}>3/2021 - now</div>
				</div>
				<div className={classes.desc}>
					<ul>
						<li>
							Offer frontline support to the customers in terms of utilizing the IT
							infrastructures, services, and resources at Concordia.
						</li>
						<li>
							Investigate complicate issues regarding physical systems, networking,
							internal accounts, and access controls to resolve or to escalate to
							SysAdmins and NetAdmins.
						</li>
						<li>
							Suggest insightful improvements for service desk work processes and
							cross-team communications.
						</li>
						<li>
							Regularly check the teaching lab peripherals (i.e., computers, monitors,
							projectors), and troubleshoot the found issues.
						</li>
						<li>
							Service the walk-in customer or in labs, and answering the phone call.
						</li>
						<li>Utilize the ticketing system to offer efficient IT support.</li>
						<li>
							Work in conjunction with full-time staff to ensure the functionality of
							computer labs.
						</li>
						<li>
							Perform inventory for new purchases (computers and equipment) by the
							engineering faculty.
						</li>
						<li>
							Undertake other job-related missions assigned by the manager of User
							Services.
						</li>
					</ul>
				</div>
			</div>

			<div className={classes.experience_entry}>
				<div className={classes.exp_head}>
					<div className={classes.role}>
						<h3>IT Support Specialist &mdash; Internship</h3>
					</div>
					<div className={classes.comp}>
						<a href="https://genetec.com">Genetec Inc.</a>
					</div>
					<div className={classes.time}>8/2021 - 12/2021</div>
				</div>
				<div className={classes.desc}>
					<ul>
						<li>Provide technical assistance and troubleshooting for users.</li>
						<li>Perform infra and team workflow improvement tasks.</li>
						<li>Test new hardware and software compatibility in the environment.</li>
						<li>
							Manage hybrid AD and Endpoint, account credentials and permission
							groups.
						</li>
						<li>Deploy IT assets: hardware and software.</li>
						<li>Utilize PowerShell and bash scripting.</li>
						<li>Manage cloud VMs and KVM/Hyper-V.</li>
						<li>
							Extensive use of Jira ticketing system and contribute to internal wiki.
						</li>
						<li>Handle IT phone calls.</li>
						<li>
							Maintain asset inventory and specifications. Troubleshoot computer
							hardware issues.
						</li>
						<li>Manage access request according to InfoSec policies.</li>
						<li>Work usually encompasses OSI layers 5 to 7.</li>
					</ul>
				</div>
			</div>

			<div className={classes.experience_entry}>
				<div className={classes.exp_head}>
					<div className={classes.role}>
						<h3>Undergraduate Researcher &mdash; Casual</h3>
					</div>
					<div className={classes.comp}>
						<a href="https://users.encs.concordia.ca/~sac">SAC Research Group</a>
					</div>
					<div className={classes.time}>1/2021 - now</div>
				</div>
				<div className={classes.desc}>
					<ul>
						<li>
							I assist in researching practical applications of machine learning and
							deep learning models with current focus on explainable AI (XAI).
						</li>
						<li>
							I replicate experiments to verify claims arising during the research of
							a topic.
						</li>
						<li>
							I gather information from research literatures and extract meaningful
							points to aid in the research progress of the group.
						</li>

						<li>
							Previously, I contributed by running and reporting NLP models for
							classification on non-Latin datasets, more specifically XLNet and bert.
						</li>
					</ul>
				</div>
			</div>

			<div className={classes.experience_entry}>
				<div className={classes.exp_head}>
					<div className={classes.role}>
						<h3>Systems Administrator &mdash; Contract/On-call</h3>
					</div>
					<div className={classes.comp}>
						<a href="https://islab.ca">Inertial Sensing Labs</a>
					</div>
					<div className={classes.time}>1/2021 - now</div>
				</div>
				<div className={classes.desc}>
					<ul>
						<li>Responsible for building and maintaining the project website.</li>
						<li>
							The website is a hub for both internal and public communications,
							functioning as a knowledge base, blog, archive, and file repository.
						</li>
						<li>
							I decide and implement from the tech stacks and the UI/UX design to the
							web hosting, networking, security, and identity &amp; access management.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
