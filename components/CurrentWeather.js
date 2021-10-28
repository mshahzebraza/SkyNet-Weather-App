// COMPONENTS
import WeatherDetail from "./WeatherDetail";
import MainForm from '../components/MainForm';

// OBJECTS & STYLES
import { addLocation, updateCurrent } from "../store/StoreDispatchers";
import styles from '../styles/CurrentWeather.module.scss';

// DEPENDENCIES
import { useState, useEffect, useCallback } from "react";
import useStore from "../store/StoreContext"


export default function CurrentWeather(props) {

  const [formError, setFormError] = useState('');
  const [responseIsValid, setResponseIsValid] = useState(true);

  // Get current weather & recent inputs
  const {
    state: {
      current: weatherData,
      recentLocations
    },
    dispatch
  } = useStore();

  const lastLocation = weatherData.location


  // Called if 
  // 1. Inputs change, parameter: input, 
  // 2. ClickMe btn clicked, parameter: null
  const fetchHandler = useCallback(async (location = 'Washington') => {

    try {
      // API Call
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${location}&aqi=yes`)

      // Good Response - fetch data and update the current weather & search history IF valid entry
      if (response.ok) {
        setFormError(null)
        setResponseIsValid(true)
        console.log(`good response`);
        const data = await response.json();
        console.log(data);
        dispatch(addLocation(data.location.name))
        dispatch(updateCurrent(data))
      }

      // Bad Response - fetch error message and log to console IF invalid entry
      if (!response.ok) {
        setResponseIsValid(false)
        console.log(`bad response`);
        const { error:
          {
            message: errMsg
          }
        } = await response.json()

        setFormError(errMsg)
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
  }, [fetchHandler])

  const clickHandler = (e) => {
    fetchHandler()
  }

  return (

    <div className={styles.container}>
      <div className={styles.card}>
        <MainForm submit={fetchHandler} errText={formError} />
        <button onClick={clickHandler} >Reload / Default Search</button>
      </div>

      <div className={styles.card}>
        {<WeatherDetail weather={weatherData} resIsValid={responseIsValid} />}
      </div>
    </div>

  )
}

CurrentWeather.displayName = `CurrentWeather`;





