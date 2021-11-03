import styles from './Navigation.module.scss';
import Link from 'next/link';

export function Navigation(props) {
  return (
    <nav className={styles.nav} >

      <div className={styles.navBrand}>
        <Link href='/' >Weather App</Link>
      </div>

      <ul className={styles.navList} >
        <li className={styles.navItem}>
          <Link href='/about' >About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href='/weather' >Weather</Link>
        </li>
      </ul>

    </nav>
  )
}