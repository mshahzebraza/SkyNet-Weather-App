/* IMPORTS */

// DEPENDENCIES
import Image from 'next/image';

// LIBRARY FUNCTIONS & STYLES
import styles from './Welcome.module.scss';

// COMPONENTS


/* BODY */
export default function Welcome(params) {
  return (
    <>
      <div className={styles.header}>
        <Image src='/avatars/girl.png' alt='avatar' width={30} height={30} className={styles.avatar} />
      </div>
      <div className={styles.body}>
        <p className={styles.currentTime}>
          03: 00 PM
        </p>
        <p className={styles.currentDate}>
          <span className={styles.currentDay} >Wednesday</span>, 04, April 2021
        </p>
        <p className={styles.greetings}>
          <Image src='/Conditional' alt='Time of Day' width={20} height={20} />
          Good Morning !
        </p>
      </div>
    </>
  )
}
Welcome.displayName = 'Welcome'
/*
// html example
<span>&#176;</span>

// css example
span {
  content: "\00B0";
}
 */
