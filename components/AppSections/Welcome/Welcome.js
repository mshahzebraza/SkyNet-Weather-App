/* IMPORTS */

// DEPENDENCIES
import Image from 'next/image';

// LIBRARY FUNCTIONS & STYLES
import styles from './Welcome.module.scss';

// COMPONENTS
import Loader from '../../ui/Loader';

/* BODY */
export default function Welcome(params) {
  console.log(`Rendering WELCOME`);
  const data = {
    time: '03:00 PM',
    day: 'Wednesday',
    date: '04 April 2021',
    isDay: true,
  }
  console.log(params.segProps);

  return (

    <div className={styles.welcome}>
      {params.segProps === undefined ? <Loader /> : <>

        <div className={styles.time}>
          <Image src={`/icons/${params.segProps.isDay ? 'sun' : 'moon'}.svg`} alt='Time of Day' width={18} height={18} />
          {params.segProps.localTime.hour.toString().length === 1 && '0'}{params.segProps.localTime.hour}:{params.segProps.localTime.min} {params.segProps.localTime.period}
          {/* Good Morning ! */}
        </div>
        <p className={styles.place}>
          <span className={styles.city} >
            {params.segProps.city}
          </span>
          <span className={styles.country} >
            {params.segProps.country}
          </span>
        </p>
        <p className={styles.date}>
          <span className={styles.day} >{params.segProps.localTime.day}</span>,{" "}
          {params.segProps.localTime.date} {params.segProps.localTime.month} {params.segProps.localTime.year}
        </p>
      </>
      }
    </div>





    // <>
    // </>
  )
}
Welcome.displayName = 'Welcome'

