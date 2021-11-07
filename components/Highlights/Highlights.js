/* IMPORTS */

// DEPENDENCIES
import Image from 'next/image'

// LIBRARY FUNCTIONS & STYLES
import styles from './Highlights.module.scss';

// COMPONENTS


/* BODY */

function HighlightDetail(props) {
  return (<p className={styles.hlDetail}>
    <span className={styles.hlDetailLabel}>{props.label}</span>
    <span className={styles.hlDetailValue}>{props.value}</span>
  </p>);
}


export default function Highlights(params) {
  return (

    <div className={styles.highlights}>

      {/* Highlight Item */}
      <div className={styles.hlLocation}>
        <Image src="/icons/locationPin.svg" alt="Location Pin" width={25} height={25} className={styles.locationIcon} />
        <p className={styles.locationText}>Pakistan</p>
      </div>

      {/* Highlight Date */}
      <p className={styles.hlDate}>24,April 2021</p>

      {/* Highlight Condition */}
      <Image src="/weather/thunder.png" alt="Weather Condition Image" width={120} height={120} className={styles.hlConditionImage} />
      {/* Highlight Text */}
      <p className={styles.hlCondition}>Sunny</p>

      {/* Highlight Temp */}
      <p className={styles.hlTemp}>29 &#176;</p>

      {/* Highlight Details */}
      <HighlightDetail label='Feels Like' value='19 km/hr' />
      <HighlightDetail label='Wind' value='19 km/hr' />
      <HighlightDetail label='Humidity' value='19 km/hr' />


    </div>
  )
}
Highlights.displayName = 'Highlights'
