// Dependency imports 
// import Head from 'next/head'
import styles from '../../styles/Weather.module.scss';

// Objects & Styles


// Components
import SearchForm from '../../components/SearchForm/SearchForm';
import InfoPanel from '../../components/InfoPanel/InfoPanel';
import SearchHistory from '../../components/SearchHistory/SearchHistory';



// Function
export default function Home(props) {

  return (
    <div className={styles.container} >
      <SearchForm />
      <InfoPanel info='s' />
      <SearchHistory styles={styles.footer} />

    </div>
  );
}
Home.displayName = `Home`

// export function getServerSideProps(pageContext) {
//   return {
//     props: {}
//   }
// }