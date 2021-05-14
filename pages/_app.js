import Main from "../components/main";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Hoang Anh Tech</title>
				<meta property="og:title" content="Hoang Anh Tech" key="title" />
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet"/>
			</Head>
			<style global jsx>
				{`
					body {
						margin: 0px;
						padding: 0px;
					}
				`}
			</style>
			<Main></Main>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
