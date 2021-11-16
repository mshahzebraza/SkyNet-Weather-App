/* IMPORTS */

// DEPENDENCIES


// LIBRARY FUNCTIONS & STYLES
import styles from './Rainfall.module.scss';

// COMPONENTS
import Loader from '../../ui/Loader';

/* BODY */

function StatBar(props) {

  return (<li className={styles.rfStat}>
    {/* Stat Bar */}
    <div className={styles.rfStatBar}>
      {/* Bar Filler */}
      <div className={styles.rfStatFill}></div>
      {/* Bar Value */}
      <div className={styles.rfStatVal} style={{ flexBasis: `${props.rain}%` }} ></div>
    </div>
    {/* Stat Date */}
    <p className={styles.rfStatDate}>{props.date.toString().length === 1 && '0'}{props.date}</p>
  </li>);
}


export default function Rainfall(params) {
  // console.log(`Rendering RAINFALL`);



  return (
    <div className={'alphaCard'}>

      {/* Header */}
      {params.segProps === undefined ? <Loader /> : <>
        <div className={'alphaHeader'}>
          <p className={'alphaTitle'}>Rainfall</p>
        </div>

        {/* Body */}
        <div className={styles.rfBody}>
          <ul className={styles.rfStats}>
            {params.segProps.map((cur, id) => {
              return <StatBar date={cur.time.date} rain={cur.rain} key={`rain-${id}`} />
            })}
          </ul>

        </div>
      </>}


    </div>

  )
}
Rainfall.displayName = 'Rainfall'