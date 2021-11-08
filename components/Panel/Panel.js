/* IMPORTS */

// DEPENDENCIES
import Image from 'next/image';

// LIBRARY FUNCTIONS & STYLES
import styles from './Panel.module.scss';

// COMPONENTS


/* BODY */
export default function Rainfall(params) {

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <Image src='/avatars/girl.png' alt='avatar' width={40} height={40} className={styles.avatar} />
      </div>
    </div>
  )
}
Rainfall.displayName = 'Rainfall'