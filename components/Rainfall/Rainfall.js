/* IMPORTS */

// DEPENDENCIES


// LIBRARY FUNCTIONS & STYLES
// import styles from './Rainfall.module.scss';

// COMPONENTS


/* BODY */
export default function Rainfall(params) {
  return (
    <>
      Rainfall
      {/* Rainfall Header */}
      <div className="rfHeader">
        Header
        {/* Title */}
        {/* Legend Optional */}
      </div>

      {/* Rainfall Body */}
      <div className="rfBody">
        Body
        {/* Rainfall Stat Section */}
        <ul className="rfStats">
          Bi-Weekly Statistics
          {/* Stat Item */}
          <li className="rfStat">
            {/* Stat Bar */}
            {/* <div className="rfStatBar"> */}
            {/* Bar Filler */}
            {/* <div className="rfStatFill"></div> */}
            {/* Bar Value */}
            {/* <div className="rfStatVal"></div> */}
            {/* </div> */}
            {/* Stat Date */}
            {/* <p className="rfStatDate">01</p> */}
          </li>
        </ul>

      </div>
    </>
  )
}
Rainfall.displayName = 'Rainfall'