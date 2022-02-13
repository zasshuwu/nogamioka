import React from "react";

import { makeStyles } from "@mui/styles";
import customTheme from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
	resume_others: {
		padding: "1rem",
	},
	h2: {
		color: customTheme.palette.tertiary.main,
	},
}));

export default function ResumeOthers() {
	const classes = useStyles();

	return (
		<div className={classes.resume_others}>
			<h2 className={classes.h2}>Other Interests</h2>
			<ul>
				<li>Music, cultural exchange, travelling.</li>
				<li>
					Messing around with{" "}
					<a href="https://github.com/awesome-selfhosted/awesome-selfhosted">
						Awesome Selfhosted
					</a>
				</li>
				<li>Gaming</li>
			</ul>
			<div className={classes.resume_dev_stacks}>
				<pre>$ DevStack.dump(&quot;all&quot;)</pre>
				<div>
					{" "}
					&#12297; React, nodejs, django, flask, postgreSQL, anaconda, TensorFlow, pandas,
					matplotlib, MERN, oauth, Material-UI, Bootstrap, Tailwind, Nextjs, Redis,
					Postman, git, Jira, Figma, Adobe Suite, Webhooks.{" "}
				</div>
				<pre>$ TechStack.dump(&quot;all&quot;)</pre>
				<div>
					{" "}
					&#12297; Apache, nginx, docker, ansible, vagrant, terraform, GitHub Actions,
					Jenkins, k8s/, grafana, prometheus, HTTP/S, SSL, ssh, port forwarding, Arch |
					Debian | RHEL Linux, unix tools, bash/zsh/csh, kvm/qemu, hyper-v.
				</div>
				<pre>$ InfraStack.dump(&quot;all&quot;)</pre>
				<div>
					{" "}
					&#12297; Linode, Google Cloud, Digital Ocean, Azure, Heroku, Cloudflare
					CDN/Edge/DNS/Access-(Zero-Trust), SMTP, IMAPS, DNS, DHCP, OSI, High
					Availability/Heartbeat, OpenVPN, WireGuard, firewall (ufw).
				</div>
			</div>
			<p
				style={{
					textAlign: "center",
					fontWeight: "lighter",
					marginTop: "4rem",
				}}
			>
				This online classic-style resume is latest and supersedes all other
				versions/mutations on other media and platforms, including but not limited to, hard
				copies, digital copies, LinkedIn, my homepage itself, and etc.
			</p>
		</div>
	);
}
