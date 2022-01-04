import React from "react";
import EditedDate from "./EditedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props){
    return(
        <div className="weatherInfo">
           <h2> {props.data.city} </h2>
            <ul className="weather-description">
                <li><strong>CURRENT WEATHER</strong></li>
                <li>
                    < EditedDate date={props.data.date} /> 
                    </li>
            </ul>   
            <div className="row">
                <div className="col-6">
               <WeatherIcon code={props.data.icon}/>
               <WeatherTemperature celcius={props.data.temperature} />    
                </div>
                <div className="col-6">
                   <ul>
                      <li className="text-capitalize">{props.data.description}</li>  
                      <li>Humidity: {props.data.humidity}%</li>
                      <li>Wind: {props.data.wind} Km/hr</li>
                   </ul>
                   
                </div>
              
            </div> 
        </div>
    );
}