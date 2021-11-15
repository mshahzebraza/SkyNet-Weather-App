/* IMPORTS */

// DEPENDENCIES
import Image from 'next/image';
import { aqTraceFormat } from '../../../lib/helpers';

// LIBRARY FUNCTIONS & STYLES
import styles from './AirQuality.module.scss';

// COMPONENTS
import Loader from '../../ui/Loader';

/* BODY */
export default function AirQuality(params) {




  return (
    // <div className={styles.airQuality}>
    <div className={'alphaCard'}>

      {params.segProps === undefined ? <Loader /> : <>
        {/* Header */}
        <div className={'alphaHeader'}>
          {/* Title */}
          <p className={'alphaTitle'}>Air Quality</p>
          {/* Legend Optional */}
        </div>


        <div className={styles.aqBody}>
          {/* Brief */}
          <div className={styles.aqBrief}>
            {/* Image */}
            <Image src='/icons/air.svg' alt='Air Icon' width={50} height={50} className={styles.aqImage} />
            {/* Data */}
            <div className={styles.aqText}>
              <p className={styles.aqStatus}>{params.segProps.status}</p>
              <p className={styles.aqComment}>{params.segProps.comment}</p>
            </div>
            {/* Button */}
            <button className={styles.aqRefresh} >Refresh</button>
          </div>

          {/* Detail */}
          <ul className={styles.aqDetail}>
            {
              params.segProps.traces.map((cur, id) => {
                return (
                  <li className={styles.aqDetailItem} key={`aq-${id}`} >
                    {/* Detail Amount */}
                    <div className={styles.aqDetailAmount}>{Math.round(parseInt(cur.amount))}</div>
                    {/* Detail Traces */}
                    <div className={styles.aqDetailTrace}>{aqTraceFormat(cur.type)}</div>
                  </li>
                )
              })
            }
            {/* Detail Item */}


          </ul>
        </div>
      </>}


    </div>
  )
}
AirQuality.displayName = 'AirQuality'