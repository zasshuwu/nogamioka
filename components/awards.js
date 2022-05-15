// react
import { React, useState } from "react";

// ui
import { makeStyles } from "@mui/styles";
import customTheme from "../styles/theme";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const useStyles = makeStyles((customTheme) => ({
	
}));

export default function AwardsContent({ command }) {
	const classes = useStyles();
	function createData(id, role, description) {
		return { id, role, description };
	}

	const awardRows = [
		createData(
			"FRQNT Stipend Recipient",
			"October, 2020",
			"for work in Inertial Sensing Lab under Prof. Larnder"
		),
	];
	return (
		<div style={{ margin: "1rem" }} className={classes.awards}>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>
					root@ANH-WEB-SERVER:
				</span>
				<span style={{ color: "#9f43fa" }}>~#</span>
				{" " + command}
			</p>
			<TableContainer>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>id</TableCell>
							<TableCell>year</TableCell>
							<TableCell>description</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{awardRows.map((awardRow) => (
							<TableRow key={awardRow.name}>
								<TableCell component="th" scope="row">
									{awardRow.id}
								</TableCell>
								<TableCell>{awardRow.role}</TableCell>
								<TableCell>{awardRow.description}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
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
