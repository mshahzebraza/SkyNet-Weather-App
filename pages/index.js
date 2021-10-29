// Page
import HistoryList from '../components/HistoryList/HistoryList';

// Dependency imports 
import Head from 'next/head'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import styles from '../styles/Home.module.scss';
// Page function
export default function Home(props) {

  return (
    <div className={styles.container} >
      <CurrentWeather info='s' />

      <HistoryList styles={styles.footer} />

    </div>
  );
}
Home.displayName = `Home`