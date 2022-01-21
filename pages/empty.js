import Button from "@mui/material/Button";
import Autorenew from "@mui/icons-material/Autorenew";
import Image from "next/image";

export default function Empty() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				height: "100vh",
				backgroundColor: "#1a1a1a",
				color: "#fff",
			}}
		>
			{/* <h1> Wow, such empty </h1> */}
			<Image src="/wow-such-empty.jpg" width="300px" height="300px"></Image>
			<br />
			<Button
				variant="contained"
				color="secondary"
				onClick={(e) => {
					// e.preventDefault();
					window.location.replace("/");
				}}
			>
				Wanna go back?
			</Button>
		</div>
	);
}
