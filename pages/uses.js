import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import { Paper, Button, Container } from "@mui/material";
import customTheme from "../styles/theme";
import { ListAlt } from "@mui/icons-material";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
	uses: {
		fontFamily: "Be Vietnam Pro",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh",
		fontSize: "1.25em",
		lineHeight: "2rem",
		marginBottom: "1rem",
		marginTop: "1rem",
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
		padding: "1.5rem",
		minWidth: "40vw",
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
							<li>
								Workstation:{" "}
								<ul>
									<li>Ryzen 9 3900X, GTX 1080 8GB, 24GB DDR4 @ 3000 MT/s</li>
								</ul>
							</li>
							<li>
								Home server:{" "}
								<ul>
									<li>Ryzen 5 3600, 16GB DDR4 @ 3000 MT/s</li>
								</ul>
							</li>
							<li>
								Monitors:{" "}
								<ul>
									<li>LG 32-in UHD (4K) &mdash; Center</li>
									<li>Acer 27-in FHD (1080P) &mdash; Right</li>
								</ul>
							</li>
							<li>
								Peripherals:
								<ul>
									<li>
										Wireless: Logitech MX Keys &mdash; I mostly enjoy the silent
										typing and fast device switching.
									</li>
									<li>
										Mechanical: Drop CTRL, Space Grey, Halo Clear &mdash;
										aesthetic, ergonomic, and try-hard.
									</li>
									<li>
										XY-pointing HID: Logitech G305, White &mdash; best mouse
										ever, I have 3 more for backups.
									</li>
									<li>Controller: Xbox Wireless</li>
									<li>Graphic: Wacom Intuos Pen S</li>
								</ul>
							</li>
							<li>
								Audio:
								<ul>
									<li>Player/Service: foobar2k, Apple Music</li>
									<li>DAC-AMP: FiiO Mk2</li>
									<li>Headphones: Sennheiser HD6XX, AKG K7XX</li>
									<li>Speaker: Bose Sound Bar</li>
								</ul>
							</li>
						</ul>
					</div>
					<div>
						<h3 className={classes.h3}>Laptops/Mobile</h3>
						<ul>
							<li>
								<b>Primary:</b> MacBook Pro 16-in (2021)
								<ul>
									<li>
										<i>
											Specs: M1 Pro (10 CPU, 16 GPU), 16GB memory, 512GB SSD
										</i>
									</li>
									<li>Dual boot with Asahi Linux</li>
								</ul>
							</li>
							<li>
								<b>Tablet:</b> iPad Pro 11-in <br />
								<i>Specs: M1, Wi-Fi only, 128GB</i>
							</li>
							<li>
								<b>Secondaries:</b> Dell Precision 5530 (x2)<br></br>{" "}
								<ul>
									<li>
										<i>Specs: i7-8850H, P1000 4GB, 32GB DDR4</i>
									</li>
									<li>1 for Windows, 1 for Linux</li>
								</ul>
							</li>
							<li>
								<b>Test:</b> ThinkPad P50<br></br>
								<i>Specs: i7-6700HQ, M2000M, 16GB DDR4</i>
							</li>

							<li>
								Phone:
								<ul>
									<li>iPhone 13, Blue, 128GB</li>
									<li>Pixel 4a 5G, Black</li>
								</ul>{" "}
							</li>
							<li>Watch: Apple Watch Series 1, Pink</li>
							<li>Game: Nintendo Switch v2</li>
							<li>
								Peripherals:{" "}
								<ul>
									<li>XY-pointing HID: MX Master</li>
									<li>Apple Pencil 2</li>
									<li>Dongle: Dell USB-C DA310</li>
								</ul>
							</li>
							<li>
								Audio:{" "}
								<ul>
									<li>Mandatory: AirPods 2</li>
									<li>Cans: Sony WH-1000XM4</li>
								</ul>
							</li>
						</ul>
					</div>
					<div>
						<h3 className={classes.h3}>Camera</h3>
						<ul>
							<li>Nikon D700</li>
							<li>Nikon D7000</li>
							<li>Sony RX100 II</li>
							<li>Lenses: 50mm f/1.8, 70-200mm f/4, aaaand etc. that I forgot</li>
						</ul>
					</div>
				</div>
				<div>
					<h2 className={classes.h2}>Software</h2>
					<h3>Development</h3>
					<ul>
						<li>Editor: VSCode (dracula theme) and vim + tmux</li>
						<li>IDE: Visual Studio, (dreaded) Xcode, CLion</li>
						<li>Notebook: VSCode, Jupyter, Colab</li>
						<li>VM: Vagrant + Qemu (Linux), Hyper-V (Windows)</li>
						<li>Terminal: iTerm2 (Mac), Alacritty (Linux), Windows Terminal (duh)</li>
						<li>Shell: zsh with oh-my-zsh (jonathan theme), bash, csh, sh, ps</li>
						<li>API: Insomnia, Postman</li>
						<li>{"Browser: Chrome > Firefox > Safari"}</li>
						<li>SCM: GitHub, GCP Source Repository, private GitLab VPS</li>
						<li>
							Prototype and Planning:{" "}
							<ul>
								<li>Figma</li>
								<li>Storybook</li>
								<li>Draw.io</li>
							</ul>
						</li>
						<li>
							Docs:
							<ul>
								<li>Sphinx Doc</li>
								<li>Confluence</li>
								<li>Trello</li>
							</ul>
						</li>
					</ul>
					<h3>Productivity</h3>
					<ul>
						<li>
							Font (mono): Fira Code &mdash; I slather this beautiful typeface
							everywhere.
						</li>
						<li>
							Font (sans): Be Vietnam Pro &mdash; free, patriotic {"¯\\_(ツ)_/¯"}, and
							gorgeous.
						</li>
						<li>Graphics: Photoshop, Lightroom, Affinity Design </li>
						<li>
							Note-taking: GoodNotes (iPadOS), OneNote (Desktop), Markdown (universal)
						</li>
						<li>Mail: Apple Mail, Outlook, GMail</li>
					</ul>
				</div>
				<div style={{ marginBottom: "2rem" }}>
					<h2 className={classes.h2}>Photos of my Desk Setup throughout the Time</h2>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<h3>January, 2022</h3>
						<img style={{ width: "50%" }} src="/setup/desk_2022.jpeg"></img>
						<h3>2021</h3>
						<img style={{ width: "50%" }} src="/setup/desk_2021.jpeg"></img>
						<h3>Work office, 2021</h3>
						<img style={{ width: "50%" }} src="/setup/desk_work_2021.jpeg"></img>
						<h3>2020</h3>
						<img style={{ width: "50%" }} src="/setup/desk_2020.jpeg"></img>
					</div>
				</div>
				<div>
					<h2 className={classes.h2}>Bonus I: Books</h2>
					<ul>
						<li>
							Designing Data-Intensive Applications by Martin Kleppmann &mdash; in
							progress
						</li>
						<li>
							Site Reliability Engineering by Beyer, Jones, Petoff, Murphy &mdash; in
							progress
						</li>
						<li>DSA Analysis by Clifford A. Shaffer &mdash; in progress</li>
						<li>Pattern Recognition and ML by Christopher M. Bishop &mdash; to read</li>
						<li>Head First Design Patterns by Eric Freeman &mdash; to read</li>
						<li>Linux Kernel Development by Robert Love &mdash; to read</li>
					</ul>
				</div>
				<div>
					<h2 className={classes.h2}>Bonus II: Music</h2>
					<iframe
						allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
						frameBorder="0"
						height="450"
						style={{
							width: "100%",
							maxWidth: "660px",
							overflow: "hidden",
							background: "transparent",
						}}
						sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
						src="https://embed.music.apple.com/ca/playlist/j-music-definitive/pl.u-d2b01VXu4r973R"
					></iframe>
					<iframe
						style={{ borderRadius: "12px", maxWidth: "660px" }}
						src="https://open.spotify.com/embed/playlist/1uMebhsxkH9GONLwIiRBzx?utm_source=generator&theme=0"
						width="100%"
						height="450"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				</div>
			</Paper>
		</Container>
	);
}
