import { useState, useEffect, useCallback } from "react";
import useStore from "../store/StoreContext"

export default function CurrentWeather(props) {

  // const [weatherData, setWeatherData] = useState({});


  const fetchHandler = useCallback(async () => {
    console.log(`i was called`);

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=london&aqi=yes`)
    const data = await response.json();
    console.log(data);

  })


  useEffect(() => {
    fetchHandler()
  }, [fetchHandler])
  // The fetchHandler dependency is a reference object hence the use of useCallback is understandable bcz a new instance of an object is created on every render. 


  return (
    <div className='card'>
      <button onClick={fetchHandler} >Click me</button>
    </div>
  )
}











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