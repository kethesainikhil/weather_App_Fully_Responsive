import React from 'react'
import hotBg from "../assets/hot.jpg";
import coldBg from "../assets/cold.jpg";
import Descriptions from "../components/description";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "../weatherService";
import ErrorComponent from "../components/ErrorComponent";
const Main = () => {
    const [city, setCity] = useState("Paris");
    const [weather, setWeather] = useState(null);
    const [units, setUnits] = useState("metric");
    const [bg, setBg] = useState(hotBg);
    const [checkData,setcheckData] = useState(false);
    const[searchCity,setSearchCity] = useState("paris");
    useEffect(() => {
      const fetchWeatherData = async () => {
        const data = await getFormattedWeatherData(searchCity, units);
        if(data){
          setWeather(data);
          setcheckData(true);
        
  
        // dynamic bg
        const threshold = units === "metric" ? 20 : 60;
  
        if (data?.temp <= threshold && units === "metric") setBg(coldBg);
        else setBg(hotBg);
        }
        else{
          setcheckData(false)
        }
      };
      
  
      fetchWeatherData();
    }, [units, searchCity,checkData]);
    const handleUnitsClick = (e) => {
      const button = e.currentTarget;
      const currentUnit = button.innerText.slice(1);
  
      const isCelsius = currentUnit === "C";
      button.innerText = isCelsius ? "°F" : "°C";
      setUnits(isCelsius ? "metric" : "imperial");
    };
    const enterKeyPressed = (e) => {
        if (e.keyCode === 13) {
          setCity(e.currentTarget.value);
          e.currentTarget.blur();
        }
      };
  
    const handleInput = (e) =>{
      setCity(e.currentTarget.value)
    }
    console.log(city);
    const handleSubmit = () =>{
      setSearchCity(city);
    }
  return (
    checkData ? <div>
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
    <div className="overlay">
      {weather && (
        <div className="container">
          <div className="section section__inputs">
            <input
              onKeyDown={enterKeyPressed}
              type="text"
              name="city"
              onChange={(e) => handleInput(e)}
              
              placeholder="Enter City..."
            />
            <button onClick={handleSubmit}>search</button>
            <button onClick={(e) => handleUnitsClick(e)}>°F</button>
          </div>

          
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconURL} alt="weatherIcon" />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather?.temp.toFixed()} °${
                units === "metric" ? "C" : "F"
              }`}</h1>
            </div>
          </div>

          {/* bottom description */}
          <Descriptions weather={weather} units={units} />
        </div>
      )}
    </div>
  </div>
  </div>:<ErrorComponent />
  )
}

export default Main
