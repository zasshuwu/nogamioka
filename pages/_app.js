import Main from "../components/main";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Hoang Anh Tech</title>
				<meta property="og:title" content="Hoang Anh Tech" key="title" />
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
