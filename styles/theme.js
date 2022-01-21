import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
	// components: {
	// 	MuiCssBaseline: {
	// 		styleOverrides: {
	// 			body: {
	// 				// fontFamily: "Comfortaa, sans-serif",
	// 				scrollbarColor: "#006b6b6b #002b2b2b",
	// 				"&::-webkit-scrollbar, & *::-webkit-scrollbar": {
	// 					display: "none",
	// 					backgroundColor:
	// 						"linear-gradient(0deg, rgba(214, 163, 124,0) 0%, rgba(137,191,226,0) 20%, rgba(112,193,216,0) 70%, rgba(161, 132, 171,0) 100%)",
	// 				},
	// 				"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
	// 					borderRadius: 8,
	// 					backgroundColor: "rgb(240, 217, 165, 1)",
	// 					minHeight: 24,
	// 					border: "3px solid rgba(137,191,226,0)",
	// 				},
	// 				"&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
	// 					backgroundColor: "rgba(112,193,216,1)",
	// 				},
	// 				"&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
	// 					backgroundColor: "rgba(204, 130, 73,1)",
	// 				},
	// 				"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
	// 					backgroundColor: "rgba(204, 130, 73,1)",
	// 				},
	// 				"&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
	// 					backgroundColor: "#2b2b2b",
	// 				},
	// 			},
	// 		},
	// 	},
	// },
	palette: {
		mode: "dark",
		primary: {
			main: "#30d95d",
		},
		secondary: {
			main: "#f0f0f0",
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
