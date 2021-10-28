import { useState, useEffect, useCallback } from "react";
import useStore from "../store/StoreContext"
import { up, updateCurrentdateCurrent } from "../store/StoreDispatchers";
import WeatherDetail from "./WeatherDetail";

export default function CurrentWeather(props) {
  let lastLocationName;

  // Get current weather & recent inputs
  const {
    state: {
      current: weatherData,
      recentLocations
    },
    dispatch
  } = useStore();


  // get the last input IF there is a recent input
  recentLocations.length > 0
    ? lastLocationName = recentLocations[recentLocations.length - 1].locationName
    : null;


  // Called if 
  // 1. Inputs change, parameter: input, 
  // 2. ClickMe btn clicked, parameter: null
  const fetchHandler = useCallback(async (location = lastLocationName) => {
    // !FIXME: The Default parameter doesn't work

    try {
      // API Call
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${location}&aqi=yes`)

      // Good Response - fetch data and update the current weather
      if (response.ok) {
        const data = await response.json();
        dispatch(updateCurrent(data))
      }
      // Bad Response - fetch error message and log to console
      if (!response.ok) {
        const { error:
          {
            message: errMsg
          }
        } = await response.json()

        throw new Error(errMsg);
      }

    } catch (error) {
      console.error(error);
    }

  }, [dispatch, updateCurrent])


  // works only if the inputs change
  useEffect(() => {
    console.log(`UseEffect Running ...`);
    // only if the recent input changes
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





