export default function WeatherDetail(props) {

  return (
    <>
      <h3>Weather Conditions in {props.weather.location} ({props.weather.country}) is as follow.</h3>
      <ul>
        <li>
          Weather Conditions: {props.weather.condition}
        </li>
        <li>

          Temperature (Actual) : {props.weather.tempAct}
        </li>
        <li>

          Temperature (Feels Like): {props.weather.tempFl}
        </li>
        <li>

          Wind Direction: {props.weather.windDir}
        </li>
        <li>

          Wind Speed: {props.weather.windSpeed}
        </li>
        <li>

          Humidity: {props.weather.humidity}
        </li>
      </ul>
      <pre>Last Updated on {props.weather.lastUpdated}</pre>
      <pre>{props.weather.isDay ? `day` : `night`}</pre>
    </>
  )
}