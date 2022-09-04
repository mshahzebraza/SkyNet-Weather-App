// Dependency imports 
import styles from '../styles/Home.module.scss';

import Image from "next/image"

// Objects & Styles


// Components
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


// Function
export default function Home(props) {
    const router = useRouter();

    const [location, setLocation] = useState({});

    useEffect(() => {
        // https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
        navigator.geolocation.getCurrentPosition(function (position) {
            const { coords: { latitude: lat, longitude: long } } = position
            setLocation({ lat, long })
        })
    }, [setLocation])

    return (
        <>
            <div className={`pageContainer ${styles.page}`} >

                <main className={styles.main}>
                    <div className={styles.intro}>
                        <h1 className={styles.title}>Weather <br />Application</h1>
                        <h5 className={styles.text}>
                            A Weather app using React JS and Sass by <span className={styles.name}>M. Shahzeb Raza</span>
                        </h5>
                        <Link href={{
                            pathname: `/weather/[query]`,
                            query: {
                                query: `${location.lat},${location.long}`
                            }
                        }} className={styles.search}>Search Weather</Link>
                    </div>

                    <div className={styles.graphic}>
                        <Image src='/appScreenshot.png' alt="app screenshot" width={650} height={450} />
                    </div>
                </main>

            </div>
        </>
    );
}

Home.displayName = `Home`