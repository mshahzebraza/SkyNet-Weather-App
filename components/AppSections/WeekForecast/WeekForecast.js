/* IMPORTS */

// DEPENDENCIES

import Image from 'next/image';
// LIBRARY FUNCTIONS & STYLES
import styles from './WeekForecast.module.scss';

// COMPONENTS
import Loader from '../../ui/Loader';

/* BODY */
export default function WeekForecast(params) {
  console.log(`Rendering WEEK-FORECAST`);


  // const data = [
  //   {
  //     condition: {
  //       icon: '/weather/thunder.png'
  //     },
  //     day: 'Mon',
  //     temp: 27
  //   },
  //   {
  //     condition: {
  //       icon: '/weather/thunder.png'
  //     },
  //     day: 'Tue',
  //     temp: 28
  //   },
  //   {
  //     condition: {
  //       icon: '/weather/thunder.png'
  //     },
  //     day: 'Wed',
  //     temp: 35
  //   },
  // ];

  return (

    <ul className={styles.weekList}>
      {params.segProps === undefined ? <Loader /> : <>
        {params.segProps.map((cur, id) => {
          return (
            <li className={styles.weekItem} key={`fc-${id}`} >
              <Image
                className={styles.weekImage}
                // src={cur.condition.icon}
                src={'/weather/thunder.png'}
                alt="weather condition"
                width={75}
                height={75}
              />
              <span className={styles.weekDay}>{cur.day}</span>
              <span className={styles.weekTemp}>
                {cur.temp}&#176;
              </span>
            </li>
          )
        })}
      </>}

    </ul>

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