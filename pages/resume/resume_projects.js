import React from "react";

import { makeStyles } from "@mui/styles";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";

const useStyles = makeStyles((theme) => {});

export default function ResumeProjects() {
	const classes = useStyles();

	return (
		<div className={classes.resume_projects}>
			<Card>
				<CardMedia></CardMedia>
				<CardContent></CardContent>
				<CardActions></CardActions>
			</Card>
		</div>
	);
}
