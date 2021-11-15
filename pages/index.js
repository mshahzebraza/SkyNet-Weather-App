// Dependency imports 
import Head from 'next/head'
import styles from '../styles/Home.module.scss';

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
      <div className={styles.container} >
        <div className={styles.fsLato} >
          <p className={styles.w100} >Lato : 100 Font Weight</p>
          <p className={styles.w200} >Lato : 200 Font Weight</p>
          <p className={styles.w300} >Lato : 300 Font Weight</p>
          <p className={styles.w400} >Lato : 400 Font Weight</p>
          <p className={styles.w500} >Lato : 500 Font Weight</p>
          <p className={styles.w600} >Lato : 600 Font Weight</p>
          <p className={styles.w700} >Lato : 700 Font Weight</p>
          <p className={styles.w800} >Lato : 800 Font Weight</p>
        </div>
        <div className={styles.fsOpenSans} >
          <p className={styles.w100} >Open Sans : 100 Font Weight</p>
          <p className={styles.w200} >Open Sans : 200 Font Weight</p>
          <p className={styles.w300} >Open Sans : 300 Font Weight</p>
          <p className={styles.w400} >Open Sans : 400 Font Weight</p>
          <p className={styles.w500} >Open Sans : 500 Font Weight</p>
          <p className={styles.w600} >Open Sans : 600 Font Weight</p>
          <p className={styles.w700} >Open Sans : 700 Font Weight</p>
          <p className={styles.w800} >Open Sans : 800 Font Weight</p>
        </div>
        {/* <SearchForm /> */}
        {/* The Old reducer doesn't exist now, which means the dispatch functions will be no longer valid */}
        {/* <InfoPanel info='s' /> */}
        {/* <SearchHistory styles={styles.footer} /> */}

      </div>
    </>
  );
}

Home.displayName = `Home`