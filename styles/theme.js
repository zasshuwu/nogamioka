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
	// grad1: "rgba(137,191,226,1)",
	// grad2: "rgba(112,193,216,1)",
	// grad3: "rgba(161, 132, 171,1)",
	// grad4: "rgba(204, 130, 73,1)",
	// accent: "rgba(255,220,0,1)",
	// accentLight: "rgb(240, 217, 165, 1)",
	// globalShadow: "0px 0px 10px white",
	// localShadow: "0px 0px 10px rgba(161, 132, 171,1)",
	// globalFilter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 1))",
	// accentFilter: "drop-shadow(0px 0px 10px rgba(255,220,0,.8))",
	// solidShadow: "-1px -1px 1px white",
	// whiteBgOpaque: "rgba(255, 255, 255, .5)",
	// darkBgOpaque: "rgba(88,88,88, .5)",
	// primary: "white",
	// secondary: "rgba(33, 33, 33, 1)",
	// rootLinGrad:
	// 	"linear-gradient(0deg, rgba(214, 163, 124,.4) 0%, rgba(137,191,226,1) 20%, rgba(112,193,216,1) 70%, rgba(161, 132, 171,1) 100%)",
	// gold: "rgba(255,220,0,1)",
	// pink: "rgba(247, 153, 172,.8)",
	// plum: "rgb(130, 114, 140)",
	// green: "rgb(113, 227, 165)",
	// blue: "rgb(112, 193, 224)",
	// orange: "rgb(247, 172, 131, .8)",
	palette: {
		primary: {
			main: "#30d95d",
		},
		secondary: {
			main: "#d9305a",
		},
		navButton: "#f53652",
		background: {
			main: "#141414",
		},
	},
});

export default customTheme;
