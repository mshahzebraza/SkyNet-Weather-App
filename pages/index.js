// Dependency imports 
import Head from 'next/head'
import styles from '../styles/Home.module.scss';

import Image from "next/image"

// Objects & Styles


// Components
import SearchForm from '../components/SearchForm/SearchForm';
import InfoPanel from '../components/InfoPanel/InfoPanel';
import SearchHistory from '../components/SearchHistory/SearchHistory';



// Function
export default function Home(props) {
  return (

    <>
      <Head>
        <link key='googleFontsConnect' rel="preconnect" href="https://fonts.googleapis.com" />
        <link key='googleFontsCrossOrigin' rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link key='googleFonts'
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <div className={`pageContainer ${styles.page}`} >

        <main className={styles.main}>
          <div className={styles.intro}>
            <h1 className={styles.title}>Weather <br />Application</h1>
            <h5 className={styles.text}>
              A Weather app using React JS and Sass by <span className={styles.name}>M. Shahzeb Raza</span>
            </h5>
            <button className={styles.search}>Search Weather</button>
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