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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({}));

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
		<div style={{ margin: "1rem" }}>
			<p>
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
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
				<span style={{ color: customTheme.palette.primary.main }}>aaanh@hoanganhtech:</span>
				<span style={{ color: "#9f43fa" }}>~$</span>
				<span className={classes.animatedCaret}></span>
			</p>
		</div>
	);
}
