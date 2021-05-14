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
		fontFamily: "Monospace",
		color: "#00ddff",
		"& a": {
			color: "#1691f0 !important",
			"& :visited": {
				color: "#1691f0 !important",
			},
		},
	},
	dialogTitle: {
		background: customTheme.palette.background.main,
		color: "#00ddff",
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
	createData("this website", "very proud", "react/nextjs, vercel, material-ui"),
	createData("do-it (WIP)", "front-end dev", "a job board for vn"),
	createData(
		"graph viz of panama papers",
		"c++",
		"apply graph theory, graph algo, c++ oop methodologies into the visualization task"
	),
	createData("your-nutritionist (defunct)", "front-end dev", "a recipe-sharing social network"),
	createData(
		"maze-navigating vehicle",
		"c++ (arduino)",
		"College engineering project. 3D-printed vehicle navigates by ultrasonic sensors controlled by an Arduino Uno."
	),
	createData(
		"R project in Statistics",
		"R",
		"College project using R in statistical analysis. Simulate Most Recent Common Ancestor (MRCA)."
	),
];

export default function Experience({ showProjects, handleClose }) {
	const classes = useStyles();
	return (
		<div>
			<Dialog
				className={classes.root}
				open={showProjects}
				onClose={handleClose}
				maxWidth={false}
			>
				<div className={classes.dialogContent}>
					<h1 className={classes.dialogTitle}>projects | PID: 58</h1>
					<TableContainer>
						<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>id</TableCell>
									<TableCell>role/tech</TableCell>
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
