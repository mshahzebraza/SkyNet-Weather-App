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
      temp: 27
    },
    {
      image: '/weather/thunder.png',
      day: 'Tue',
      temp: 28
    },
    {
      image: '/weather/thunder.png',
      day: 'Wed',
      temp: 35
    },
    {
      image: '/weather/thunder.png',
      day: 'Thurs',
      temp: 32
    },
    {
      image: '/weather/thunder.png',
      day: 'Fri',
      temp: 30
    },
    {
      image: '/weather/thunder.png',
      day: 'Sat',
      temp: 29
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
                  {cur.temp}&#176;
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
/*
// html example
<span>&#176;</span>

// css example
span {
  content: "\00B0";
}
 */