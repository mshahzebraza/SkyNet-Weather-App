
import styles from './Details.module.scss';
import DetailItem from './DetailItem/DetailItem';

export function Details(props) {

  // Makes it easier to make changes in the list
  const data = {
    [`Weather Conditions`]: props.weather.condition,
    [`Temperature`]: props.weather.tempAct,
    [`Feels Like`]: props.weather.tempFl,
    [`Wind Direction`]: props.weather.windDir,
    [`Wind Speed`]: props.weather.windSpeed,
    [`Humidity`]: props.weather.humidity,
  }

  const dataEntries = Object.entries(data);
  const dataJsx = dataEntries.map((cur, idx) => <DetailItem key={idx} label={cur[0]} value={cur[1]} />)

  return (
    <ul className={styles.detailList} >

      {dataJsx}

    </ul>
  )
}