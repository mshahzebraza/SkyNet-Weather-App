import { dateSeparator } from "../../../lib/helpers"
import styles from './RequestDetail.module.scss';

export function RequestDetail({ isDay, dateString }) {

  const { newDate, newTime } = dateSeparator(dateString)

  return (
    <p className={styles.requestDetail} >
      {'Last Updated on '}
      <span className={styles.requestDate} >{newDate}</span>{' ,at '}
      <span className={styles.requestTime} >{newTime}</span>
    </p>

  )
}