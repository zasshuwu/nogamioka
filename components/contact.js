import React from "react";
import { makeStyles } from "@mui/styles";
import customTheme from "../styles/theme";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
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
	my_face: {
		borderRadius: "50%",
	},
}));

export default function ContactContent({ command }) {
	const classes = useStyles();
	return (
		<div
			style={{
				margin: "1rem",
				wordBreak: "break-all",
			}}
		>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>
					root@ANH-WEB-SERVER:
				</span>
				<span style={{ color: "#9f43fa" }}>~#</span>
				{" " + command}
			</p>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<p>
					<Image
						src="https://avatars.githubusercontent.com/u/37283437?s=400&u=2a2c5c4c8b8db89ec19da727abba8daf277ba57e&v=4"
						width="100px"
						height="100px"
						className={classes.my_face}
					></Image>
				</p>

				<p>
					E-mail: <a href="mailto:iam@hoanganh.dev">iam@hoanganh.dev</a>
				</p>
				<p>
					Academic E-mail:{" "}
					<a href="mailto:a_en201@encs.concordia.ca">a_en201@encs.concordia.ca</a>
				</p>
				<p>
					LinkedIn:{" "}
					<a href="https://linkedin.com/in/aaanh">https://linkedin.com/in/aaanh</a>
				</p>
				<p>
					Github: <a href="https://github.com/aaanh">https://github.com/aaanh</a>
				</p>
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
