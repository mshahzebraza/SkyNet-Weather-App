/* IMPORTS */

import Image from "next/image"

// DEPENDENCIES


// LIBRARY FUNCTIONS & STYLES
import styles from './SolarTime.module.scss';

// COMPONENTS
import Loader from '../../ui/Loader';

/* BODY */

export default function SolarTime(params) {
  // console.log(`Rendering SOLAR-TIME`);

  const featureQty = 3;


  return (

    <div className={'alphaCard'}>

      {params.segProps === undefined ? <Loader /> : <>
        {/* Header */}
        <div className={'alphaHeader'}>
          <p className={'alphaTitle'}>Sunrise & Sunset</p>
        </div>

        {/* Body */}
        <div className={styles.stBody}>
          {
            params.segProps.map((cur, id) => {
              return featureQty > id ?
                <Alpha date={`${cur.time.date} ${cur.time.month}`} sunrise={cur.sunrise} sunset={cur.sunset} key={`solar-${id}`} /> :
                <Bravo date={cur.time.date} sunrise={cur.sunrise} sunset={cur.sunset} key={`solar-${id}`} />;
            })
          }
        </div>
      </>}



    </div>
  )
}
SolarTime.displayName = 'SolarTime'


function Alpha(props) {
  return (<div className={styles.stAlpha}>
    <div className={styles.stLocation}>
      {/* <Image src='/icons/locationPin.svg' alt='location pin' width={15} height={15} className={styles.stLocationPin} /> */}
      <p className={styles.stLocationName}>{props.date}</p>
    </div>
    <div className={styles.stDetail}>
      <div className={styles.stDetailItem}>
        <Image src='/icons/sun.svg' alt='Sun Rise Image' width={35} height={35} className={styles.stSolarImage} />
        <div className={styles.stBrief}>
          <p className={styles.stLabel}>Sunrise</p>
          <p className={styles.stValue}>{props.sunrise}</p>
        </div>
      </div>
      <div className={styles.stDetailItem}>
        <Image src='/icons/moon.svg' alt='Sun Set Image' width={35} height={35} className={styles.stLunarImage} />
        <div className={styles.stBrief}>
          <p className={styles.stLabel}>Sunset</p>
          <p className={styles.stValue}>{props.sunset}</p>
        </div>
      </div>
    </div>
  </div>);
}



function Bravo(props) {
  return (<div className={styles.stBravo}>
    <div className={styles.stLocation}>
      {/* <Image src='/icons/locationPin.svg' alt='location pin' width={15} height={15} className={styles.stLocationPin} /> */}
      <p className={styles.stLocationName}>{props.date}</p>
    </div>
    <div className={styles.stDetail}>
      <div className={styles.stDetailItem}>
        <Image src='/icons/sun.svg' alt='Sun Rise Image' width={20} height={20} className={styles.stSolarImage} />
        <p className={styles.stValue}>{props.sunrise}</p>
      </div>
      <div className={styles.stDetailItem}>
        <Image src='/icons/moon.svg' alt='Sun Set Image' width={20} height={20} className={styles.stLunarImage} />
        <p className={styles.stValue}>{props.sunset}</p>
      </div>
    </div>
  </div>);
}

