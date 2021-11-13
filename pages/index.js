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
      <div className={styles.container} >
        {/* <SearchForm /> */}
        {/* The Old reducer doesn't exist now, which means the dispatch functions will be no longer valid */}
        {/* <InfoPanel info='s' /> */}
        {/* <SearchHistory styles={styles.footer} /> */}

      </div>
    </>
  );
}

Home.displayName = `Home`