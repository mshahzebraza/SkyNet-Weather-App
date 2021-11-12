/* IMPORTS */

import Image from "next/image"

// DEPENDENCIES


// LIBRARY FUNCTIONS & STYLES
import styles from './SolarTime.module.scss';

// COMPONENTS


/* BODY */

function Alpha(props) {
  return (<div className={styles.stAlpha}>
    <div className={styles.stLocation}>
      <Image src='/icons/locationPin.svg' alt='location pin' width={15} height={15} className={styles.stLocationPin} />
      <p className={styles.stLocationName}>{props.location}</p>
    </div>
    <div className={styles.stDetail}>
      <div className={styles.stDetailItem}>
        <Image src='/icons/sun.svg' alt='Sun Rise Image' width={35} height={35} className={styles.stSolarImage} />
        <div className={styles.stBrief}>
          <p className={styles.stLabel}>Sunrise</p>
          <p className={styles.stValue}>{props.sunrise} AM</p>
        </div>
      </div>
      <div className={styles.stDetailItem}>
        <Image src='/icons/moon.svg' alt='Sun Set Image' width={35} height={35} className={styles.stLunarImage} />
        <div className={styles.stBrief}>
          <p className={styles.stLabel}>Sunset</p>
          <p className={styles.stValue}>{props.sunset} PM</p>
        </div>
      </div>
    </div>
  </div>);
}



function Bravo(props) {
  return (<div className={styles.stBravo}>
    <div className={styles.stLocation}>
      <Image src='/icons/locationPin.svg' alt='location pin' width={15} height={15} className={styles.stLocationPin} />
      <p className={styles.stLocationName}>{props.location}</p>
    </div>
    <div className={styles.stDetail}>
      <div className={styles.stDetailItem}>
        <Image src='/icons/sun.svg' alt='Sun Rise Image' width={20} height={20} className={styles.stSolarImage} />
        <p className={styles.stValue}>{props.sunrise} AM</p>
      </div>
      <div className={styles.stDetailItem}>
        <Image src='/icons/moon.svg' alt='Sun Set Image' width={20} height={20} className={styles.stLunarImage} />
        <p className={styles.stValue}>{props.sunset} PM</p>
      </div>
    </div>
  </div>);
}


export default function SolarTime(params) {
  console.log(`Rendering SOLAR-TIME`);

  const featureQty = 2;
  const data = (params.segProps != 'notAvailable' && params.segProps !== undefined) ? params.segProps : [
    { location: 'Pakistan', sunrise: '06:40', sunset: '07:00' },
    { location: 'India', sunrise: '06:40', sunset: '07:00' },
    { location: 'Bangladesh', sunrise: '06:40', sunset: '07:00' },
    { location: 'England', sunrise: '06:40', sunset: '07:00' },
    { location: 'Africa', sunrise: '06:40', sunset: '07:00' },
  ]

  return (
    <div className={styles.solarTime} >
      {/* Header */}
      <div className={styles.stHeader}>
        <p className={styles.stTitle}>Sunrise & Sunset</p>
        {/* Location */}
        <div className={styles.stLocation}>
          <Image src="/icons/add.svg" alt="Location Pin" width={20} height={20} className={styles.locationIcon} />
        </div>
      </div>

      {/* Body */}
      <div className={styles.stBody}>
        {
          data.map((cur, id) => {
            return featureQty > id ?
              <Alpha location={cur.location} sunrise={cur.sunrise} sunset={cur.sunset} key={`solar-${id}`} /> :
              <Bravo location={cur.location} sunrise={cur.sunrise} sunset={cur.sunset} key={`solar-${id}`} />;
          })
        }
        {/* Body */}
        {/* Primary Detail */}
        {/* <Alpha /> */}
        {/* Secondary Detail */}
        {/* <Bravo /> */}
      </div>
    </div>
  )
}
SolarTime.displayName = 'SolarTime'