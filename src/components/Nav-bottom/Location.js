import Countries from './countries.json';
import { useState } from 'react';
import { MdLocationOn } from "react-icons/md";
import LocationCss from "./Location.module.css";

const Location = () => {
    const [country, setCountry] = useState('loaaaading...');

    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        let API_key1 = "ba809da45bb1b9acdbe937e8ceaaf610";

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key1}`)
            .then(res => res.json())
            .then(data => setCountry(Countries[data.sys.country]));
    });

    return (
        <div className={LocationCss.location}>
            <span> <MdLocationOn /> : {country}</span>
        </div>
    )
}

export default Location;