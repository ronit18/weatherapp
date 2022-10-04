import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>WeatherApp</title>
				<meta name="Weatherapp" content="Weather application" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="text-red-500">HelloWorld</h1>
		</div>
	);
}
