/* IMPORTS */

// DEPENDENCIES

import Image from 'next/image';
// LIBRARY FUNCTIONS & STYLES
import styles from './WeekForecast.module.scss';

// COMPONENTS


/* BODY */
export default function WeekForecast(params) {


  const weekFcData = [
    {
      image: '/weather/thunder.png',
      day: 'Mon',
      temp: 28
    },
    {
      image: '/weather/thunder.png',
      day: 'Tue',
      temp: 28
    },
    {
      image: '/weather/thunder.png',
      day: 'Wed',
      temp: 28
    },
    {
      image: '/weather/thunder.png',
      day: 'Thurs',
      temp: 28
    },
    {
      image: '/weather/thunder.png',
      day: 'Fri',
      temp: 28
    },
    {
      image: '/weather/thunder.png',
      day: 'Sat',
      temp: 28
    },
    {
      image: '/weather/thunder.png',
      day: 'Sun',
      temp: 28
    },
  ]


  return (
    <>

      <ul className={styles.weekList}>
        {weekFcData.map((cur, id) => {
          return (
            <>
              <li className={styles.weekItem}>
                <Image className={styles.weekImage} src={cur.image} alt="weather condition" width={75} height={75} />
                <span className={styles.weekDay}>{cur.day}</span>
                <span className={styles.weekTemp}>
                  {cur.temp} &#176;
                </span>
              </li>
            </>
          )
        })}
      </ul>

    </>
  )
}
WeekForecast.displayName = 'WeekForecast'