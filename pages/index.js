import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${process.env.API_KEY}`;
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
