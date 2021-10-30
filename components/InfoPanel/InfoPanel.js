// COMPONENTS
import WeatherDetail from "./WeatherDetail/WeatherDetail";

// LIBRARY FUNCTIONS & STYLES
import styles from './InfoPanel.module.scss';

// DEPENDENCIES
import { useState } from "react";
import useStore from "../../store/StoreContext"

export default function InfoPanel(props) {

  // const [responseIsValid, setResponseIsValid] = useState(true);

  // Get current weather & recent inputs
  const {
    state: {
      isLoading,
      currentSearch: weatherData,
    },
    dispatch
  } = useStore();


  return (

    <div className={`${styles.main}`}>
      {/* <SearchForm submit={fetchHandler} reload={reloadHandler} /> */}
      {isLoading && <p>Loading ...</p>}
      {weatherData.isValid
        ? <WeatherDetail weather={weatherData} />
        : weatherData.errorMessage // wrap it in an error style component
      }
    </div>

  )
}

InfoPanel.displayName = `InfoPanel`;





