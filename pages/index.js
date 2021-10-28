// Page
import HistoryList from '../components/HistoryList';

// Dependency imports 
import styles from '../styles/HomePage.module.scss';
import Head from 'next/head'
import CurrentWeather from '../components/CurrentWeather';

// Page function
export default function HomePage(props) {

  return (
    <>
      <div className='container' >
        <CurrentWeather info='s' />

        <HistoryList />

      </div>
    </>
  );
}
HomePage.displayName = `Homepage`