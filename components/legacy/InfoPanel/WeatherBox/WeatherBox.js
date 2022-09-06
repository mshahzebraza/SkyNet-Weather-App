import { Details } from './Details/Details';
import { Highlights } from './Highlights/Highlights';

import styles from './WeatherBox.module.scss';

export default function WeatherDetail(props) {

  return (
    <div className={styles.main} >
      <Highlights weather={props.weather} />
      <Details weather={props.weather} />
    </div>
  )
}