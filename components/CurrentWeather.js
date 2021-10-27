import { useState, useEffect } from "react";
import useStore from "../store/StoreContext"

export default function CurrentWeather(props) {

  // const [weatherData, setWeatherData] = useState({});

  const fetchHandler = async () => {
    console.log(`i was called`);

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=london&aqi=yes`)
    const data = await response.json();
    console.log(data);

  }



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