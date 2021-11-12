/* IMPORTS */

// DEPENDENCIES


// LIBRARY FUNCTIONS & STYLES
import styles from './Rainfall.module.scss';

// COMPONENTS


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
    <p className={styles.rfStatDate}>{props.date}</p>
  </li>);
}


export default function Rainfall(params) {
  console.log(`Rendering RAINFALL`);

  const data = (params.segProps != 'notAvailable' && params.segProps !== undefined) ? params.segProps : [
    { date: '01', rain: 50 },
    { date: '02', rain: 18 },
    { date: '03', rain: 75 },
    { date: '04', rain: 25 },
    { date: '05', rain: 66 },
    { date: '06', rain: 32 },
    { date: '07', rain: 88 },
    { date: '08', rain: 10 },
    { date: '09', rain: 18 },
    { date: '10', rain: 75 },
    { date: '11', rain: 25 },
    { date: '12', rain: 66 },
    { date: '13', rain: 32 },
    { date: '14', rain: 88 },
  ]

  return (
    <div className={styles.rainfall}>
      {/* Rainfall */}
      {/* Rainfall Header */}
      <div className={styles.rfHeader}>
        {/* Header */}
        {/* Title */}
        <p className={styles.rfTitle}>Rainfall</p>
        {/* Legend Optional */}
      </div>

      {/* Rainfall Body */}
      <div className={styles.rfBody}>
        {/* Body */}
        {/* Rainfall Stat Section */}
        <ul className={styles.rfStats}>
          {/* Bi-Weekly Statistics */}
          {/* Stat Item */}
          {data.map((cur, id) => {
            return <StatBar date={cur.date} rain={cur.rain} key={`rain-${id}`} />
          })}
        </ul>

      </div>
    </div>
  )
}
Rainfall.displayName = 'Rainfall'