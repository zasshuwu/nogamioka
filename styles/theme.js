import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#30d95d",
		},
		secondary: {
			main: "#f0f0f0",
		},
		black: {
			main: "#000",
		},
		tertiary: {
			main: "#2172ff",
		},
		navButton: "#f53652",
		background: {
			main: "#141414",
		},
	},
});

export default customTheme;
