import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import Weather from "../components/Weather";

export default function Home() {
	const [city, setCity] = useState("");
	const [weather, setWeather] = useState({});
	const [loading, setLoading] = useState(false);
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=9ddf9dd289b773773108e063e68e0140`;
	const fetchWeather = (e) => {
		e.preventDefault();
		setLoading(true);
		axios.get(url).then((Response) => {
			setWeather(Response.data);
			console.log(Response.data);
		});
		setCity("");
		setLoading(false);
	};
	return (
		<div>
			<Head>
				<title>WeatherApp</title>
				<meta name="Weatherapp" content="Weather application" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="absolute top-0 left-0 bottom-0 bg-black/40 z[1]" />
			<Image
				className="object-cover"
				src="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
				layout="fill"
				alt="weatherBackground"
			/>
			<div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10">
				<form
					onSubmit={fetchWeather}
					className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
				>
					<div>
						<input
							onChange={(e) => setCity(e.target.value)}
							className="bg-transparent border-none text-white focus:outline-none text-2xl"
							type="text"
							placeholder="Search city..."
						/>
					</div>
					<button onClick={fetchWeather}>
						<BsSearch size={20} />
					</button>
				</form>
			</div>

			{weather.main && <Weather data={weather} />}
		</div>
	);
}
