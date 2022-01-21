import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	resume_contact: {},
}));

export default function ResumeContact({}) {
	const classes = useStyles();

	return <div className={classes.resume_contact}></div>;
}
