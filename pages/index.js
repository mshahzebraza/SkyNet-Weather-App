// Page imports
import HistoryList from '../components/HistoryList';
import MainForm from '../components/MainForm';

// Dependency imports 
import Head from 'next/head'

// Page function
export default function HomePage(props) {

  return (
    <>
      <MainForm />
      <HistoryList />
    </>
  );
}
HomePage.displayName = `Homepage`