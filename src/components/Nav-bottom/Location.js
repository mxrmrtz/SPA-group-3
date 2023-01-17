import Countries from "./countries.json";
import { useState } from "react";
import MdLocationOn from "../../assets/icons/Location-icon.svg";
import LocationCss from "./Location.module.css";

const Location = () => {
	const [country, setCountry] = useState("loading...");

	navigator.geolocation.getCurrentPosition((position) => {
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;
		//console.log("lat", lat, "lon", lon);

		let API_key1 = "ba809da45bb1b9acdbe937e8ceaaf610";

		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key1}`
		)
			.then((res) => res.json())
			.then((data) => setCountry(Countries[data.sys.country]));
	});

	return (
		<div className={LocationCss.location}>
			<img src={MdLocationOn} alt="location" className={LocationCss.icon} /> {country}
		</div>
	);
};

export default Location;
