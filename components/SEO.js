import Head from "next/head";

export default function SEO({ title, description }) {
	return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
			<meta name="description" content="My kinda cool portfolio/resume site." />
			<meta property="og:title" content="aaanh's Portfolio" />
			<meta property="og:image" content="/favicon.ico" />
		</Head>
	);
}
