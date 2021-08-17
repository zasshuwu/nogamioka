import { React, useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, Typography } from "@material-ui/core";
import customTheme from "../styles/theme";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiPaper-root": {
			background: customTheme.palette.background.main,
		},
	},
	dialog: {
		background: customTheme.palette.background.main,
	},
	dialogContent: {
		minHeight: "200px",
		minWidth: "300px",
		padding: "1rem",
		fontFamily: "Source Code Pro, monospace",
		color: customTheme.palette.primary.main,
		"& a": {
			color: "#1691f0 !important",
			"& :visited": {
				color: "#1691f0 !important",
			},
		},
	},
	dialogTitle: {
		background: customTheme.palette.background.main,
		color: customTheme.palette.primary.main,
		fontFamily: "Monospace",
	},
}));

export default function Contact({ showContact, handleClose }) {
	const classes = useStyles();
	return (
		<div>
			<Dialog
				className={classes.root}
				open={showContact}
				onClose={handleClose}
				maxWidth={false}
			>
				<div className={classes.dialogContent}>
					<h1 className={classes.dialogTitle}>contact | PID: 2501</h1>
					<p>
						<img
							style={{ height: "100px", borderRadius: "50%" }}
							src="https://avatars.githubusercontent.com/u/37283437?s=400&u=2a2c5c4c8b8db89ec19da727abba8daf277ba57e&v=4"
						></img>
					</p>
					<p>* Official email: iam@hoanganh.tech</p>
					<p>* Academic email: a_en201@encs.concordia.ca</p>
					<p>
						* LinkedIn:{" "}
						<a href="https://linkedin.com/in/aaanh">https://linkedin.com/in/aaanh</a>
					</p>
				</div>
			</Dialog>
		</div>
	);
}
