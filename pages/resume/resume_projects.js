import React from "react";

import { makeStyles } from "@mui/styles";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import customTheme from "../../styles/theme";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
	resume_projects: {
		padding: "1rem",
	},
	h2: {
		color: customTheme.palette.tertiary.main,
	},
	project_cards: {
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		flexWrap: "wrap",
	},
	project_actions: {
		display: "flex",
		justifyContent: "space-evenly",
	},
}));

export default function ResumeProjects() {
	const classes = useStyles();

	return (
		<div className={classes.resume_projects}>
			<h2 className={classes.h2}>Notable Projects</h2>
			<div className={classes.project_cards}>
				<Card
					sx={{
						maxWidth: 345,
						minHeight: 360,
						display: "flex",
						flexDirection: "column",
						margin: "1rem",
					}}
				>
					<CardMedia component="img" height="150" image="projects/homepage.png" />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							<a href="https://hoanganh.tech">This Portfolio Site</a>
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Built with Nextjs framework for Reactjs. Custom styled and themed using
							MUI component library.
						</Typography>
					</CardContent>
					<CardActions sx={{ marginTop: "auto" }} className={classes.project_actions}>
						<Button
							onClick={() => {
								window.open("https://hoanganh.tech");
							}}
							size="small"
						>
							see it in action
						</Button>
						<Button
							onClick={() => {
								window.open("https://github.com/aaanh/homepage");
							}}
							size="small"
						>
							GitHub Source
						</Button>
					</CardActions>
				</Card>

				<Card
					sx={{
						maxWidth: 345,
						minHeight: 360,
						display: "flex",
						flexDirection: "column",
						margin: "1rem",
					}}
				>
					<CardMedia
						component="img"
						height="140"
						image="/projects/unix-docs.png"
					></CardMedia>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							<a href="https://unix.hoanganh.tech">Unix Docs</a>
						</Typography>
						<Typography variant="body2" color="text.secondary">
							My opinionated copy-paste unix documentations for tools, environment
							configs, and OOBE setups on Linux/Unix-based distros and operating
							systems.
						</Typography>
					</CardContent>
					<CardActions sx={{ marginTop: "auto" }} className={classes.project_actions}>
						<Button
							onClick={() => {
								window.open("https://unix.hoanganh.tech");
							}}
							size="small"
						>
							see it in action
						</Button>
						<Button
							onClick={() => {
								window.open("https://github.com/aaanh/linux-docs");
							}}
							size="small"
						>
							GitHub Source
						</Button>
					</CardActions>
				</Card>
				<Card
					sx={{
						maxWidth: 345,
						minHeight: 360,
						display: "flex",
						flexDirection: "column",
						margin: "1rem",
					}}
				>
					<CardMedia
						component="img"
						height="140"
						image="/projects/unix-docs.png"
					></CardMedia>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							<a href="https://will-i-pass.aaanh.app">Will I Pass</a>
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Born from my episodes of procrastination. Targeting most popular
							user-space platforms.
						</Typography>
					</CardContent>
					<CardActions sx={{ marginTop: "auto" }} className={classes.project_actions}>
						<Button
							onClick={() => {
								window.open("https://will-i-pass.aaanh.app");
							}}
							size="small"
						>
							see it in action
						</Button>
						<Button
							onClick={() => {
								window.open("https://github.com/aaanh/will-i-pass");
							}}
							size="small"
						>
							GitHub Source
						</Button>
					</CardActions>
				</Card>

				<Card
					sx={{
						maxWidth: 345,
						minHeight: 360,
						display: "flex",
						flexDirection: "column",
						margin: "1rem",
					}}
				>
					<CardMedia
						component="img"
						height="140"
						image="/projects/dev-blog.png"
					></CardMedia>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							<a href="https://dev.hoanganh.tech">Development Blog</a>
						</Typography>
						<Typography variant="body2" color="text.secondary">
							A blog built with Gatsbyjs where I write about new techs, tools, and
							knowledge I come across.
						</Typography>
					</CardContent>
					<CardActions sx={{ marginTop: "auto" }} className={classes.project_actions}>
						<Button
							onClick={() => {
								window.open("https://dev.hoanganh.tech");
							}}
							size="small"
						>
							See it in Action
						</Button>
						<Button
							onClick={() => {
								window.open("https://github.com/aaanh/dev-blog");
							}}
							size="small"
						>
							GitHub Source
						</Button>
					</CardActions>
				</Card>

				<Card
					sx={{
						maxWidth: 345,
						minHeight: 360,
						display: "flex",
						flexDirection: "column",
						margin: "1rem",
					}}
				>
					<CardMedia
						component="img"
						height="140"
						image="/coen244/coen244-demo.gif"
					></CardMedia>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							<a href="https://github.com/aaanh/meaningful-graph-traversal">
								Data Object Parse and Meaningful Traversal
							</a>
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Parse and clean the Panama Papers dataset to present in a graph network,
							then traverse and output connected nodes. Final project for OOP course.
						</Typography>
					</CardContent>
					<CardActions sx={{ marginTop: "auto" }} className={classes.project_actions}>
						<Button
							onClick={() => {
								window.open(
									"https://github.com/aaanh/meaningful-graph-traversal/blob/main/report.pdf"
								);
							}}
							size="small"
						>
							Read Final Report
						</Button>
						<Button
							onClick={() => {
								window.open("https://github.com/aaanh/meaningful-graph-traversal");
							}}
							size="small"
						>
							GitHub Source
						</Button>
					</CardActions>
				</Card>
				<Card
					sx={{
						maxWidth: 345,
						minHeight: 360,
						display: "flex",
						flexDirection: "column",
						margin: "1rem",
					}}
				>
					<CardMedia
						component="img"
						height="140"
						image="/projects/halcyon.png"
					></CardMedia>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							<a href="https://halcyon.hoanganh.dev/">
								Imaginary Homepage for ConUHacks VI
							</a>
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Never saw the light of day due to sudden cancellations. Almost 2 months
							of work and improvements went out the window. The leadership&apos;s
							operations, ideals and vision no longer aligned with mine. I&apos;m no
							longer affiliated with ConUHacks or HackConcordia.
						</Typography>
					</CardContent>
					<CardActions sx={{ marginTop: "auto" }} className={classes.project_actions}>
						<Button
							onClick={() => {
								window.open("https://halcyon.hoanganh.dev");
							}}
							size="small"
						>
							Hide the Pain
						</Button>
					</CardActions>
				</Card>
			</div>
		</div>
	);
}
