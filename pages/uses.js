import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import { Paper, Button, Container } from "@mui/material";
import customTheme from "../styles/theme";

const useStyles = makeStyles((theme) => ({
	uses: {
		fontFamily: "Be Vietnam Pro",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		[theme.breakpoints.down("sm")]: {
			margin: "0",
			padding: "0",
		},
	},
	title: {
		color: "gold",
	},
	h2: {
		color: "#30d95d",
	},
	h3: {
		color: "",
	},
	button: {
		border: "solid 1px",
	},
	paper: {
		padding: "1rem",
		backgroundColor: customTheme.palette.background.main,
		color: "#ccc",
		[theme.breakpoints.down("sm")]: {
			margin: "0",
		},
	},
}));

export default function Uses({ isOpen, handleClose }) {
	const router = useRouter();
	const classes = useStyles();
	return (
		<Container className={classes.uses}>
			<Paper className={classes.paper}>
				<h1 className={classes.title}>/uses</h1>
				<Button
					className={classes.button}
					onClick={(e) => {
						e.preventDefault();
						router.push("/");
					}}
				>
					Go To Home
				</Button>
				<div>
					<h2 className={classes.h2}>Hardware</h2>
					<div>
						<h3 className={classes.h3}>Desktop</h3>
						<ul>
							<li>Workstation: Ryzen 3900X, GTX 1080, 24GB DDR4 @ 3000 MHz</li>
							<li>Home server: Ryzen 3600, 16GB DDR4 @ 3000 MHz</li>
							<li>Monitors: LG 32-in 4K, acer 27-in 1080P</li>
							<li>Peripherals: MX Keys, Drop CTRL, G305 mouse</li>
							<li>Audio: FiiO Mk2 + Sennheiser HD6XX</li>
						</ul>
					</div>
					<div>
						<h3 className={classes.h3}>Laptops/Mobile</h3>
						<ul>
							<li>
								MacBook Pro 16-in (2021) M1 Pro (10 CPU, 16 GPU), 16GB unified,
								512GB SSD{" "}
							</li>
							<li>iPad Pro 11-in, M1, Wi-Fi only, base storage</li>
							<li>Dell Precision 5530 (x2), i7-8850H, P1000 4GB, 32GB DDR4</li>
							<li>ThinkPad P50, i7-6700HQ, M2000M, 16GB DDR4</li>
							<li>Peripherals: MX Master, Apple Pencil 2</li>
							<li>Audio: AirPods 2, Sony WH-1000XM4</li>
						</ul>
					</div>
					<div>
						<h3 className={classes.h3}>Camera</h3>
						<ul>
							<li>Nikon D700</li>
							<li>Nikon D7000</li>
							<li>Sony RX100 2</li>
							<li>Lenses: 50mm f/1.8, 70-200mm f/4, aaaand etc. that I forgot</li>
						</ul>
					</div>
				</div>
				<div>
					<h2 className={classes.h2}>Software</h2>
					<ul>
						<li>Editor: Visual Studio Code (dracula theme), vim</li>
						<li>Terminal: iTerm2, Windows Terminal</li>
						<li>Shell: zsh with oh-my-zsh (jonathan theme)</li>
						<li>API: Insomnia, Postman</li>
						<li>{"Browser: Chrome > Firefox > Safari"}</li>
						<li>Note-taking: GoodNotes, OneNote</li>
						<li>Mail: Apple Mail, Outlook, GMail</li>
					</ul>
				</div>
			</Paper>
		</Container>
	);
}
