import React from 'react'
import Descriptions from "../components/description";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "../weatherService";
import ErrorComponent from "../components/ErrorComponent";
import SubHeading from './SubHeading';
import Button from './Button';
const Main = () => {
    const [city, setCity] = useState("Paris");
    const [weather, setWeather] = useState(null);
    const [units, setUnits] = useState("metric");
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
    checkData ? <div className='sm:bg-slate-400'>
    <div className="app  " >
    <div className="overlay">
      {weather && (
        <div className="container  ">
          <div className="section text-black flex flex-col sm:flex-row gap-4  items-center justify-center   sm:gap-14 section__inputs">
            <input
              onKeyDown={enterKeyPressed}
              type="text"
              className='text-black'
              name="city"
              onChange={(e) => handleInput(e)}
              
              placeholder="Enter City..."
            />
            <button onClick={handleSubmit}>search</button>
            <button onClick={(e) => handleUnitsClick(e)}>°F</button>
            <div>
              <Button className="sm:ml-20 hover:bg-red-700" title="Set Trigger" path="/trigger" />
            </div>
           
          </div>

          <div>
            <SubHeading />
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
