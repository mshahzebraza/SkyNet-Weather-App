// Page imports
import HistoryList from '../components/HistoryList';
// Dependency imports 
import Head from 'next/head'
import CurrentWeather from '../components/CurrentWeather';

// Page function
export default function HomePage(props) {

  return (
    <>
      <CurrentWeather info='s' />

      <HistoryList />
    </>
  );
}
HomePage.displayName = `Homepage`