// COMPONENTS
import WeatherDetail from "./WeatherDetail";
import MainForm from '../components/MainForm';

// DEPENDENCIES
import { useEffect, useCallback } from "react";
import useStore from "../store/StoreContext"
import { addLocation, updateCurrent } from "../store/StoreDispatchers";


export default function CurrentWeather(props) {
  let lastLocation;

  // Get current weather & recent inputs
  const {
    state: {
      current: weatherData,
      recentLocations
    },
    dispatch
  } = useStore();

  const { isValid: weatherIsValid } = weatherData

  // get the last input IF there is a recent input
  weatherIsValid > 0
    ? lastLocation = weatherData.location
    : null;


  // Called if 
  // 1. Inputs change, parameter: input, 
  // 2. ClickMe btn clicked, parameter: null
  const fetchHandler = useCallback(async (location = 'Washington') => {

    try {
      // API Call
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${location}&aqi=yes`)

      // Good Response - fetch data and update the current weather IF valid entry
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(addLocation(data.location.name))
        dispatch(updateCurrent(data))
      }
      // Bad Response - fetch error message and log to console IF invalid entry
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
    if (lastLocation) {
      fetchHandler(lastLocation)
    }
  }, [fetchHandler, lastLocation])

  const clickHandler = (e) => {
    fetchHandler()
  }

  return (

    <div className='card'>

      {weatherIsValid && <WeatherDetail weather={weatherData} />}
      <MainForm submit={fetchHandler} />
      <button onClick={clickHandler} >Click me to reload Data</button>
    </div>

  )
}

CurrentWeather.displayName = `CurrentWeather`;





