import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import customTheme from "../styles/theme";

const useStyles = makeStyles((theme) => ({
	"@global": {
		"*::-webkit-scrollbar": {
			width: "0.4em",
		},
		"*::-webkit-scrollbar-track": {
			"-webkit-box-shadow": "inset 0 0 6px #2172ff00",
		},
		"*::-webkit-scrollbar-thumb": {
			backgroundColor: "#30d95daa",
			outline: "1px solid #00000000",
			borderRadius: ".5em",
		},
	},
	forbidden_wrap: {
		margin: "2rem",
		minHeight: "80vh",
		minWidth: "80vw",
	},
	forbidden_head: {
		margin: "2rem",
	},
	forbidden_body: {
		margin: "2rem",
	},
}));

export default function Forbidden() {
	const classes = useStyles();
	return (
		<div
			style={{
				display: "flex",
				width: "100vw",
				height: "100vh",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Paper className={classes.forbidden_wrap}>
				<div className={classes.forbidden_head}>
					<Typography align="center" variant="h2">
						Access Forbidden
					</Typography>
				</div>
				<div className={classes.forbidden_body}>
					<p>Error code: 403</p>
					<p>Reason: Bad country or IP.</p>
					<p>Edge service: Cloudflare</p>
					<div>
						::CLIENT_IP::
						<br />
						::RAY_ID::
						<br />
						::GEO::
						<br />
					</div>
				</div>
			</Paper>
		</div>
	);
}
