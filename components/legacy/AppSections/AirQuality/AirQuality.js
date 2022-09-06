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
    <div className={'alphaCard'}>

      {params.segProps === undefined ? <Loader /> : <>
        {/* Header */}
        <div className={'alphaHeader'}>
          <p className={'alphaTitle'}>Air Quality</p>
        </div>


        {/* Body */}
        <div className={styles.aqBody}>
          <div className={styles.aqBrief}>
            <Image src='/icons/air.svg' alt='Air Icon' width={50} height={50} className={styles.aqImage} />
            <div className={styles.aqText}>
              <p className={styles.aqStatus}>{params.segProps.status}</p>
              <p className={styles.aqComment}>{params.segProps.comment}</p>
            </div>
            <button className={styles.aqRefresh} >Refresh</button>
          </div>

          <ul className={styles.aqDetail}>
            {
              params.segProps.traces.map((cur, id) => {
                return (
                  <li className={styles.aqDetailItem} key={`aq-${id}`} >
                    <div className={styles.aqDetailAmount}>{Math.round(parseInt(cur.amount))}</div>
                    <div className={styles.aqDetailTrace}>{aqTraceFormat(cur.type)}</div>
                  </li>
                )
              })
            }

          </ul>
        </div>
      </>}


    </div>
  )
}
AirQuality.displayName = 'AirQuality'