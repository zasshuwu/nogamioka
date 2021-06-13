import { React, useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, Typography } from "@material-ui/core";
import customTheme from "../styles/theme";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiPaper-root": {
			background: customTheme.palette.background.main,
		},
		"& .MuiTableCell-root": {
			fontFamily: "monospace",
			color: "#ddd !important",
		},
	},
	dialog: {
		background: customTheme.palette.background.main,
	},
	dialogContent: {
		minHeight: "200px",
		minWidth: "300px",
		padding: "1rem",
		fontFamily: "Roboto Sans, sans-serif",
		color: "#facc00",
		"& a": {
			color: "#1691f0 !important",
			"& :visited": {
				color: "#1691f0 !important",
			},
		},
	},
	dialogTitle: {
		background: customTheme.palette.background.main,
		color: "#facc00",
		fontFamily: "Monospace",
	},
	table: {
		minWidth: 650,
	},
}));

function createData(id, role, description) {
	return { id, role, description };
}

const rows = [
	createData(
		"Applied NLP (university)",
		"Undergrad research student",
		"Assist research progress by running and reporting models performance"
	),
	createData(
		"AITS (university)",
		"Service Desk Operator",
		"Tech support for utilizing university's IT, network, and account resources"
	),
	createData(
		"Inertial Sensing Lab (islab.ca)",
		"Webmaster",
		"machine learning on accelerometric data; build, deploy, maintain wiki"
	),
	createData(
		"Mai Boat Service (maiboatservice.us)",
		"Webmaster",
		"Build and maintain website for a boat repair shop in Orlando, Fl."
	),
];

export default function Experience({ showExperience, handleClose }) {
	const classes = useStyles();
	return (
		<div>
			<Dialog
				className={classes.root}
				open={showExperience}
				onClose={handleClose}
				maxWidth={false}
			>
				<div className={classes.dialogContent}>
					<h1 className={classes.dialogTitle}>experience | PID: 1999</h1>
					<TableContainer>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>id</TableCell>
									<TableCell>role</TableCell>
									<TableCell>description</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.name}>
										<TableCell component="th" scope="row">
											{row.id}
										</TableCell>
										<TableCell>{row.role}</TableCell>
										<TableCell>{row.description}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</Dialog>
		</div>
	);
}
