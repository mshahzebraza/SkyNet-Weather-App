/* IMPORTS */

// DEPENDENCIES
import image from 'next/image'

// LIBRARY FUNCTIONS & STYLES
// import styles from './Highlights.module.scss';

// COMPONENTS


const s = ['1', '12'];
console.log(s);
/* BODY */
export default function Highlights(params) {
  // console.log(ss);
  return (

    <>

      {/* Highlight Item */}
      <div className="hlLocation">
        <Image
          // loader={myLoader}
          src="/icons/locationPin.svg"
          alt="Location Pin"
          width={25}
          height={25}
          className='locationIcon'
        />
        <p className="locationText">Pakistan</p>
      </div>

      {/* Highlight Date */}
      <p className="hlDate">24,April 2021</p>

      {/* Highlight Condition */}
      <Image
        // loader={myLoader}
        src="/icons/weatherImage.svg"
        alt="Weather Condition Image"
        width={25}
        height={25}
        className='hlConditionImage'
      />
      {/* Highlight Text */}
      <p className="hlCondition">Sunny</p>

      {/* Highlight Temp */}
      <p className="hlTemp">29 &#176;</p>

      {/* Highlight Details */}
      <p className="hlDetail">
        <span className="hlDetailLabel">Feels Like</span>
        <span className="hlDetailValue">19 km/hr</span>
      </p>
      <p className="hlDetail">
        <span className="hlDetailLabel">Wind</span>
        <span className="hlDetailValue">19 km/hr</span>
      </p>
      <p className="hlDetail">
        <span className="hlDetailLabel">Humidity</span>
        <span className="hlDetailValue">19 km/hr</span>
      </p>


    </>
  )
}
Highlights.displayName = 'Highlights'
