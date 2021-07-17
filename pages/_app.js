import Main from "../components/main";
import Head from "next/head";
import "../styles/xterm.css"

function MyApp({ Component, pageProps }) {
	return (<Component {...pageProps} /> );
}

export default MyApp;
