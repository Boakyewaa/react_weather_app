import React, { useState } from "react";
import axios from "axios"
import './Weather.css';

import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ });
    const [city, setCity] = useState (props.defaultCity);
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            icon:response.data.weather[0].icon,
        });
        setReady(true);

    }
    function search(){
        const apiKey = "1504ebb010471d47f96224deb5dd303e";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    if (ready) {
        function handleCityChange(event){
            setCity(event.target.value);
        }
        return(
        <div className="Main-weather">
            <form className="search-button" onSubmit={handleSubmit}>
                 <input type="text" placeholder="Search for a location" className="search-input" onChange={handleCityChange}/>
            <input type="button" className="btn btn-primary" value="Search"/>
            </form>
            
               <div className="Weather">
               <WeatherInfo data={weatherData} /> 
           </div> 
        </div>
    );
    } else{
        search();
        return "Loading..."
    }
    
}