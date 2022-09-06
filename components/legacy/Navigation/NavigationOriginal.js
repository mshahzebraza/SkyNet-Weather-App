import styles from './Navigation.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';




export function Navigation(props) {
    const [location, setLocation] = useState({});
    useEffect(() => {
        // https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
        navigator.geolocation.getCurrentPosition(function (position) {
            const { coords: { latitude: lat, longitude: long } } = position
            setLocation({ lat, long })
        })
    }, [setLocation])

    return (
        <header className={styles.nav} >

            <div className={styles.navBrand}>
                <Link href='/' >Weather App</Link>
            </div>

            <nav>

                <ul className={styles.navList} >
                    <li className={styles.navItem}>
                        <Link href='/about' >About</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href={`/weather/${location.lat},${location.long}`} >Weather</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}