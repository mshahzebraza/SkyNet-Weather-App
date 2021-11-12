/* IMPORTS */

// DEPENDENCIES
import Image from 'next/image';

// LIBRARY FUNCTIONS & STYLES
import styles from './AirQuality.module.scss';

// COMPONENTS


/* BODY */
export default function AirQuality(params) {

  const data = (params.segProps != 'notAvailable' && params.segProps !== undefined) ? params.segProps : {
    location: 'England',
    status: 'Good',
    comment: 'A perfect day for a walk',
    traces: [
      {
        type: 'O2',
        amount: '50%'
      },
      {
        type: 'NO2',
        amount: '14%'
      },
      {
        type: 'CO2',
        amount: '4%'
      },
      {
        type: 'CO',
        amount: '1%'
      },
      {
        type: 'H',
        amount: '1%'
      },
    ]
  }


  return (
    <div className={styles.airQuality}>
      <div className={styles.aqHeader}>
        {/* Title */}
        <p className={styles.aqTitle}>Air Quality</p>
        {/* Location */}
        <div className={styles.aqLocation}>
          <Image src="/icons/locationPin.svg" alt="Location Pin" width={20} height={20} className={styles.locationIcon} />
          <p className={styles.locationText}>{data.location}</p>
        </div>
        {/* Location */}
      </div>

      <div className={styles.aqBody}>
        {/* Brief */}
        <div className={styles.aqBrief}>
          {/* Image */}
          <Image src='/icons/air.svg' alt='Air Icon' width={50} height={50} className={styles.aqImage} />
          {/* Data */}
          <div className={styles.aqText}>
            <p className={styles.aqStatus}>{data.status}</p>
            <p className={styles.aqComment}>{data.comment}</p>
          </div>
          {/* Button */}
          <button className={styles.aqRefresh} >Refresh</button>
        </div>

        {/* Detail */}
        <ul className={styles.aqDetail}>
          {
            data.traces.map((cur, id) => {
              return (
                <li className={styles.aqDetailItem} key={`aq-${id}`} >
                  {/* Detail Amount */}
                  <div className={styles.aqDetailAmount}>{cur.amount}</div>
                  {/* Detail Traces */}
                  <div className={styles.aqDetailTrace}>{cur.type}</div>
                </li>
              )
            })
          }
          {/* Detail Item */}


        </ul>
      </div>
    </div>
  )
}
AirQuality.displayName = 'AirQuality'