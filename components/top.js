import React from "react";
import { useRouter } from "next/dist/client/router";

import customTheme from "../styles/theme";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button } from "@mui/material";
import { handleBreakpoints } from "@mui/system";
import { ArrowDownward, Router } from "@mui/icons-material";

export default function Top() {
	const classes = useStyles();
	const router = useRouter();

	return (
		<div className={classes.top}>
			<Button
				variant="outlined"
				className={classes.quicknav}
				onClick={() => {
					window.scrollTo({ top: 0, behavior: "smooth" });
				}}
			>
				<ArrowUpwardIcon></ArrowUpwardIcon>
			</Button>
			<Button
				variant="outlined"
				className={classes.quicknav}
				onClick={() => {
					router.push("#footer");
				}}
			>
				<ArrowDownward></ArrowDownward>
			</Button>
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
	top: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "fixed",
		bottom: "3%",
		right: "3%",
		padding: "0",
		margin: "0",
		boxShadow: customTheme.globalShadow,
		background: customTheme.whiteBgOpaque,
	},
	quicknav: {},
}));
