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

// components
import NavBar from "./navbar";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		background: customTheme.palette.background.main,
		width: "100vw",
		minHeight: "100vh",
		display: "flex",
		margin: "0",
		padding: "0",
		color: customTheme.palette.primary.main,
		justifyContent: "center",
		alignItems: "center",
		"& > *": {
			fontFamily: "Source Code Pro",
			lineHeight: "1.2rem",
		},
		fontSize: "14pt",
	},
	content: {
		minWidth: "50%",
		minHeight: "95%",
		border: "solid 1px grey",
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
}));

export default function Main(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [command, setCommand] = useState("cd ~/home/aaanh");

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<div className={classes.tab}> {">"} HATerm&nbsp;&nbsp;&nbsp;&nbsp;X</div>
				<div className={classes.message}>
					<h2 style={{ color: customTheme.palette.primary.main, fontSize: "12pt" }}>
						Welcome to Nguyen Hoang Anh's Portfolio 4.20 LTS (Yeetus Magus)
					</h2>

					<p> {">"} B.Eng. Computer Engineering Co-op @ Concordia University (2024)</p>
					<p> {">"} Location: Montreal, Quebec. Canada</p>
					<p> {">"} Specialized: software-dev, web-dev, IT, ml-nlp</p>
					<h3 style={{ color: customTheme.palette.primary.main }}>Alma mater</h3>
					<p> {">"} ('17 - '20) Pure &amp; Applied Science @ John Abbott College, QC.</p>
					<p> {">"} ('14 - '17) Phổ thông Năng khiếu. HCMC, Viet Nam</p>
					<h3 style={{ color: customTheme.palette.primary.main }}>Tech stacks</h3>
					<p> {">"} Platforms: (x86) Windows, macOS, Linux (Debian-based, Kali, RHEL)</p>
					<p> {">"} Cloud: AWS S3 + EC2, GCloud AE + CE + Bucket, AzureAD</p>
					<p> {">"} Languages: C++, C, Python, R, Rust, JavaScript/JSX, HTML/CSS/Sass</p>
					<p> {">"} ML: PyTorch, TensorFlow, conda+jupyter</p>
					<p> {">"} Web: Apache2, Nginx, node, Django</p>
					<p>
						{" "}
						{">"} Tools: git, Visual Studio, VS Code, terminal, bash/zsh/fish, MSFT
						Office, RDP, Docker, WSL1/2
					</p>
					<h3 style={{ color: customTheme.palette.primary.main }}>Human Languages</h3>
					<p>
						{" "}
						{">"} Vietnamese (native), English (bilingual), French (CEFR B1), Japanese
						(JLPT N5), German (casual)
					</p>
					<h3 style={{ color: customTheme.palette.primary.main }}>Hobbies</h3>
					<p>
						{" "}
						{">"} Building PCs, J-Pop, read/write light novels, gaming, guitar, dslr
						photography
					</p>
					<p>
						-----------------------------------------------------------------------------------
					</p>
					<p>
						<span style={{ color: customTheme.palette.primary.main }}>
							aaanh@hoanganhtech:
						</span>
						<span style={{ color: "#9f43fa" }}>~$</span>
						{" " + command} <span className={classes.animatedCaret}></span>
					</p>
				</div>
				<NavBar setCommand={setCommand}></NavBar>
			</div>
		</div>
	);
}
