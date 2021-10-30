import styles from './WeatherDetails.module.scss';
export default function WeatherDetail(props) {

  return (
    <div className={styles.main} >
      <div className={styles.data} >

        <div className={styles.highlight}>
          <h2 className={styles.location} >{props.weather.location} </h2>
          <p className={styles.country} > {props.weather.country}</p>
        </div>

        <div className={styles.details}>
          <ul className={styles.infoList} >

            <li className={styles.infoItem} >
              <span className={styles.infoParam} >
                Weather Conditions:
              </span>
              <span className={styles.infoVal} >
                {props.weather.condition}
              </span>
            </li>


            <li className={styles.infoItem} >
              <span className={styles.infoParam} >
                Temperature (Actual):
              </span>
              <span className={styles.infoVal} >
                {props.weather.tempAct}
              </span>
            </li>

            <li className={styles.infoItem} >
              <span className={styles.infoParam} >
                Temperature (Feels Like):
              </span>
              <span className={styles.infoVal} >
                {props.weather.tempFl}
              </span>
            </li>

            <li className={styles.infoItem} >
              <span className={styles.infoParam} >
                Wind Direction:
              </span>
              <span className={styles.infoVal} >
                {props.weather.windDir}
              </span>

            </li>

            <li className={styles.infoItem} >
              <span className={styles.infoParam} >
                Wind Speed:
              </span>
              <span className={styles.infoVal} >
                {props.weather.windSpeed}
              </span>

            </li>

            <li className={styles.infoItem} >
              <span className={styles.infoParam} >
                Humidity:
              </span>
              <span className={styles.infoVal} >
                {props.weather.humidity}
              </span>

            </li>
          </ul>
        </div>

      </div>
      <div className={styles.requestTime} >

        <span>{props.weather.isDay ? `Day` : `Night`}</span>
        <span>{props.weather.lastUpdated}</span>
      </div>
      {/* <h1 className={styles.title} >Current Weather Details</h1> */}
      {/* {props.weather.isValid && props.resIsValid
        ? 
        : null}
      {props.weather.isValid && props.resIsValid &&
        
      } */}

    </div>
  )
}