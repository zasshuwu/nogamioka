import React from "react";
import Main from "../components/main";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Hoang Anh Tech</title>
				<meta property="og:title" content="Hoang Anh Tech" key="title" />
				<meta
					property="og:description"
					content="Hoang Anh's portfolio site, also where web frameworks are experimentally incorporated."
					key="description"
				></meta>
				<meta
					property="og:image"
					content="https://hoanganh.tech/apple-touch-icon.png"
					key="image"
				></meta>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
					rel="stylesheet"
				/>
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
		</>
	);
}
