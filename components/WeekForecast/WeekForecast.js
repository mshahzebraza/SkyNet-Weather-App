/* IMPORTS */

// DEPENDENCIES


// LIBRARY FUNCTIONS & STYLES
// import styles from './WeekForecast.module.scss';

// COMPONENTS


/* BODY */
export default function WeekForecast(params) {


  const weekFcData = [
    {
      image: '/',
      day: 'Mon',
      temp: 28
    },
    {
      image: '/',
      day: 'Tue',
      temp: 28
    },
    {
      image: '/',
      day: 'Wed',
      temp: 28
    },
    {
      image: '/',
      day: 'Thurs',
      temp: 28
    },
    {
      image: '/',
      day: 'Fri',
      temp: 28
    },
    {
      image: '/',
      day: 'Sat',
      temp: 28
    },
    {
      image: '/',
      day: 'Sun',
      temp: 28
    },
  ]


  return (
    <>
      WeekForecast
      {/* <span ></span> */}
      {/* 
      <ul className="weekList">
        {weekFcData.map((cur, id) => {
          return (
            <>
              <li className="weekItem card">
                <img className="weekIcon" src={cur.image} alt="weather condition" />
                <span className="weekDay">{cur.day}</span>
                <span className="weekTemp">
                  {cur.temp} &#176;
                </span>
              </li>
            </>
          )
        })}
      </ul>
       */}
    </>
  )
}
WeekForecast.displayName = 'WeekForecast'