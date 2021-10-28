import { useState, useEffect, useCallback } from "react";
import useStore from "../store/StoreContext"

export default function CurrentWeather(props) {

  const [weatherData, setWeatherData] = useState({});


  const fetchHandler = useCallback(async () => {
    console.log(`fetchHandler was called`);

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=london&aqi=yes`)
    const data = await response.json();
    console.log(data);
    setWeatherData(data)
    console.log(data);

  }, [setWeatherData])


  useEffect(() => {
    fetchHandler()
    // setWeatherData(fetchHandler())
  }, [fetchHandler])
  // The fetchHandler dependency is a reference object hence the use of useCallback is understandable bcz a new instance of an object is created on every render. 


  return (
    <div className='card'>
      <div>
        Weather Data here
        {/* 
        WeatherConditions in {location.name} ({location.country}) is as follow.

        1. Weather Conditions: {current.condition.text}
        2. Temperature (Actual) : {current.temp_c}
        3. Temperature (Feels Like): {current.feelslike_c}
        4. Wind Direction: {current.wind_dir}
        5. Wind Speed: {current.wind_kph}
        6. Humidity: {current.humidity}

        Daytime/NightTime (can be used to display the graphics accordingly)

        - This data was fetched on [Date] at [time].
       */}
        {/* - {current.is_day ? `Day` : `Night`} */}

      </div>
      <button onClick={fetchHandler} >Click me to reload Data</button>
    </div>
  )
}

CurrentWeather.displayName = `CurrentWeather`;

/*
WeatherConditions in London (United Kingdom) is as follow.
1. Weather Conditions: current.condition.text
2. Temperature (Actual) : current.temp_c
3. Temperature (Feels Like): current.feelslike_c
4. Wind Direction: current.wind_dir
5. Wind Speed: current.wind_kph
6. Humidity: current.humidity

Daytime/NightTime (can be used to display the graphics accordingly)



- This data was fetched on [Date] at [time]
 */







/*

export default function CurrentWeather(props) {
  const apiKey = `df0dcf32a9b346308a814745212710`;

  const { state } = useStore()
  const { currentLocation } = state;

  const weatherConfig = {
    location: currentLocation,
    apiKey,
    aqReq: true
  }

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {

    fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${config.location}&aqi=yes`)
      .then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data);
      });


  }, [weatherConfig.location])



  return (
    <div className='card'>
      {weatherData}
    </div>
  )
}
 */