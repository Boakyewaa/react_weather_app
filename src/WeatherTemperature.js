import React, { useState} from "react";

export default function WeatherTemperature(props){
    let [unit, setUnit] = useState ("celcius");

    function showFarenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }

    if (unit === "celcius"){
         return(
        <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celcius)}</span>  
       <span className="unit">°C| {" "}
       <a href="/" onClick={showFarenheit}>°F</a></span> 
        </span>
        
    );
    } else {
        let farenheit = (props.celcius * 9)/5 + 32;
         return(
        <span className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit)}</span>  
       <span className="unit"><a href="/" onClick={showCelcius}>°C|</a>{" "}
       °F
       </span> 
        </span>
        
    );
    }
   
}