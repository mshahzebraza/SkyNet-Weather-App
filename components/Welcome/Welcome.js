/* IMPORTS */

// DEPENDENCIES
import Image from 'next/image';

// LIBRARY FUNCTIONS & STYLES
import styles from './Welcome.module.scss';

// COMPONENTS


/* BODY */
export default function Welcome(params) {
  const data = {
    time: '03:00 PM',
    day: 'Wednesday',
    date: '04 April 2021',
    isDay: true,
  }
  return (
    <>
      <div className={styles.welcome}>
        <p className={styles.currentTime}>
          {data.time}
        </p>
        <p className={styles.currentDate}>
          <span className={styles.currentDay} >{data.day}</span>, {data.date}
        </p>
        <p className={styles.greetings}>
          <Image src={`/icons/${data.isDay ? 'sun' : 'moon'}.svg`} alt='Time of Day' width={20} height={20} />
          Good Morning !
        </p>
      </div>
    </>
  )
}
Welcome.displayName = 'Welcome'

