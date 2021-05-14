import Main from "../components/main";

function MyApp({ Component, pageProps }) {
	return (
		<>
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
