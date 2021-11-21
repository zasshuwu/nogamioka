import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import customTheme from "../styles/theme";

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
}));

export default function ContactContent({ command }) {
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
				* <span style={{ color: "#fff" }}>iam@hoanganh.dev</span>
			</p>
			<p>* Academic email: </p>
			<p>
				* <span style={{ color: "#fff" }}>a_en201@encs.concordia.ca</span>
			</p>
			<p>* LinkedIn: </p>
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
}
