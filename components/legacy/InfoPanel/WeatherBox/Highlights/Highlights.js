
import styles from './Highlights.module.scss';

export function Highlights(props) {
  return (
    <div className={styles.highlight}>
      <h2 className={styles.location} >{props.weather.location} </h2>
      <p className={styles.country} > {props.weather.country}</p>
    </div>
  )
}