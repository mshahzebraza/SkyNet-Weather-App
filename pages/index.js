// Page imports
import HistoryList from '../components/HistoryList';
import MainForm from '../components/MainForm';
// Dependency imports 
import Head from 'next/head'
import CurrentWeather from '../components/CurrentWeather';

// Page function
export default function HomePage(props) {

  return (
    <>
      <CurrentWeather info='s' />
      <MainForm />
      <HistoryList />
    </>
  );
}
HomePage.displayName = `Homepage`