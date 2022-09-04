// IMPORTS
// COMPONENTS
import WeatherBox from "./WeatherBox/WeatherBox";
import { RequestDetail } from "./RequestDetail/RequestDetail";

// LIBRARY FUNCTIONS & STYLES
import styles from './InfoPanel.module.scss';

// DEPENDENCIES
import useStore from "../../store/StoreContext"

// BODY
export default function InfoPanel() {

  // Data Fetching
  const {
    state: {
      isLoading,
      currentSearch: weatherData,
    },
    dispatch
  } = useStore();



  // JSX
  return (

    <div className={`${styles.main}`}>

      {isLoading && <p>Loading ...</p>}
      <h1 className={styles.title} >Information Panel</h1>
      {weatherData.isValid
        ? <>
          <WeatherBox weather={weatherData} />
          <RequestDetail dateString={weatherData.lastUpdated} isDay={weatherData.isDay} />
        </>
        : weatherData.errorMessage // wrap it in an error style component
      }

    </div>

  )
}

InfoPanel.displayName = `InfoPanel`;





