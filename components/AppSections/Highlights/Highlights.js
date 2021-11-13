/* IMPORTS */

// DEPENDENCIES
import Image from 'next/image'

// LIBRARY FUNCTIONS & STYLES
import styles from './Highlights.module.scss';

// COMPONENTS
import Loader from '../../ui/Loader';

/* BODY */

function HighlightDetail(props) {
  let suffix;
  if (props.type === 'temp') {
    suffix = '\xB0';
  } else if (props.type === 'speed') {
    suffix = 'km/hr'
  } else if (props.type === 'per') {
    suffix = '%';
  }

  return (<p className={styles.hlDetail}>
    <span className={styles.hlDetailLabel}>{props.label}</span>
    <span className={styles.hlDetailValue}>{props.value} {suffix}</span>
  </p>);
}


export default function Highlights(params) {

  // const data = {
  //   city: 'Pakistan',
  //   date: '04 April 2021',
  //   condition: {},
  //   temp: '29',
  //   feelsLike: '30',
  //   wind: '19',
  //   humidity: '55',
  // };

  return (
    <div className={styles.highlights}>

      {params.segProps === undefined ? <Loader /> :

        <>
          <div className={styles.hlLocation}>
            <Image src="/icons/locationPin.svg" alt="Location Pin" width={20} height={20} className={styles.locationIcon} />
            <p className={styles.locationText}>{params.segProps.city}</p>
          </div>

          <p className={styles.hlDate}>{params.segProps.date}</p>

          <Image src="/weather/thunder.png" alt="Weather Condition Image" width={120} height={120} className={styles.hlConditionImage} />
          <p className={styles.hlCondition}>{params.segProps.condition.text}</p>

          <p className={styles.hlTemp}>{params.segProps.temp}&#176;</p>

          <HighlightDetail type='temp' label='Feels Like' value={params.segProps.feelsLike} />
          <HighlightDetail type='speed' label='Wind' value={params.segProps.wind} />
          <HighlightDetail type='per' label='Humidity' value={params.segProps.humidity} />
        </>

      }

    </div>
  )
}
Highlights.displayName = 'Highlights'

/*
<div className={styles.highlights}>

        (
        Highlight Item
          <div className={styles.hlLocation}>
          <Image src="/icons/locationPin.svg" alt="Location Pin" width={20} height={20} className={styles.locationIcon} />
          <p className={styles.locationText}>{data.city}</p>
        </div>

       Highlight Date
        <p className={styles.hlDate}>{data.date}</p>

        Highlight Condition
        <Image src="/weather/thunder.png" alt="Weather Condition Image" width={120} height={120} className={styles.hlConditionImage} />
        Highlight Text
        <p className={styles.hlCondition}>{data.condition.text}</p>

        Highlight Temp
        <p className={styles.hlTemp}>{data.temp}&#176;</p>

        Highlight Details
        <HighlightDetail type='temp' label='Feels Like' value={data.feelsLike} />
        <HighlightDetail type='speed' label='Wind' value={data.wind} />
        <HighlightDetail type='per' label='Humidity' value={data.humidity} />)


      </div>
 */

/*
// html example
<span>&#176;</span>

// css example
span {
  content: "\00B0";
}
// js example
  symbol = '\xB0';
 */