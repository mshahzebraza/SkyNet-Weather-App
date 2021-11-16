/* IMPORTS */

// DEPENDENCIES

import Image from 'next/image';
// LIBRARY FUNCTIONS & STYLES
import styles from './WeekForecast.module.scss';

// COMPONENTS
import Loader from '../../ui/Loader';

/* BODY */
export default function WeekForecast(params) {
  // console.log(`Rendering WEEK-FORECAST`);

  return (

    <div className={'alphaCard'} >

      {/* Header */}
      {/* <div className={'alphaHeader'}>
        <p className={'alphaTitle'}>Weekly Forecast</p>
      </div> */}

      {/* Body */}
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
                  width={60}
                  height={60}
                />
                <span className={styles.weekTemp}>
                  {cur.temp}&#176;
                </span>
                <span className={styles.weekDay}>{cur.time.day}</span>
              </li>
            )
          })}
        </>}

      </ul>
    </div >

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