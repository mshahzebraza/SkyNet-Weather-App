import { useState, useEffect, useCallback } from "react";
import useStore from "../store/StoreContext"
import { searchCurrent } from "../store/StoreDispatchers";
import WeatherDetail from "./WeatherDetail";

export default function CurrentWeather(props) {
  let lastLocationName;
  // const [weatherData, setWeatherData] = useState({});

  const { state, dispatch } = useStore();
  const { current: weatherData, recentLocations } = state;
  console.log(weatherData.location);
  recentLocations.length > 0
    ? lastLocationName = recentLocations[recentLocations.length - 1].locationName
    : null;

  console.log(weatherData);

  const fetchHandler = useCallback(async (location = lastLocationName) => {

    console.log(`default location is : ${location}`);
    console.log(`default location is : ${lastLocationName}`);
    try {

      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${location}&aqi=yes`)

      if (response.ok) {
        const data = await response.json();
        dispatch(searchCurrent(data))

      } else if (!response.ok) {
        const { error:
          {
            // code: errCode,
            message: errMsg
          }
        } = await response.json()

        throw new Error(errMsg);
      }

    } catch (error) {
      console.error(error);
    }

  }, [dispatch, searchCurrent])


  useEffect(() => {
    console.log(`UseEffect Running ...`);
    if (lastLocationName) {
      fetchHandler(lastLocationName)
    }
  }, [fetchHandler, lastLocationName])



  return (

    <div className='card'>
      {lastLocationName && <WeatherDetail weather={weatherData} />}
      <button onClick={fetchHandler} >Click me to reload Data</button>
    </div>

  )
}

CurrentWeather.displayName = `CurrentWeather`;





