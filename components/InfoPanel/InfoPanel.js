// IMPORTS
// COMPONENTS
import WeatherBox from "./WeatherBox/WeatherBox";
import { RequestDetail } from "./RequestDetail/RequestDetail";

// LIBRARY FUNCTIONS & STYLES
import styles from './InfoPanel.module.scss';

// DEPENDENCIES
import useStore from "../../store/StoreContext"

// BODY
export default function InfoPanel(props) {


  return (

    <div className={`${styles.main}`}>

      {/* {props.isLoading && <p>Loading ...</p>} */}
      <h1 className={styles.title} >Information Panel</h1>
      {props.info.isValid
        ? <>
          <WeatherBox weather={props.info} />
          <RequestDetail dateString={props.info.lastUpdated} isDay={props.info.isDay} />
        </>
        : props.info.errorMessage // wrap it in an error style component
      }

    </div>

  )
}

InfoPanel.displayName = `InfoPanel`;





