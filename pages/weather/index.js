// Dependency imports
// import Head from 'next/head'
import styles from "../../styles/Weather.module.scss";
import Head from 'next/head';
// Objects & Styles

// Components
import Panel from '../../components/Panel/Panel';
import Welcome from '../../components/Welcome/Welcome';
import Highlights from '../../components/Highlights/Highlights';
import Search from '../../components/Search/Search';
import WeekForecast from '../../components/WeekForecast/WeekForecast';
import AirQuality from '../../components/AirQuality/AirQuality';
import Rainfall from '../../components/Rainfall/Rainfall';
import SolarTime from '../../components/SolarTime/SolarTime';
import useStore from "../../store/StoreContext";
import { useEffect } from "react";
import { segregateProps } from "../../lib/helpers";


// Function
export default function Home(props) {

  const { state } = useStore()
  const segregatedProps = segregateProps(state)
  // console.log(segregatedProps);
  // useEffect(() => {
  // },[])

  return (
    <>
      <Head>
        <link key='googleFontsConnect' rel="preconnect" href="https://fonts.googleapis.com" />
        <link key='googleFontsCrossOrigin' rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link key='googleFonts' href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      {/* TOOLBOX */}
      {/*
        <ul className="toolbox">
          <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
          <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
          <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
          <li className="toolboxItem"><a href="#" className="toolboxIcon">Icon</a></li>
        </ul>
      */}
      <main className={styles.dashboard}>
        {/* <section className={styles.sec1}>
          <Panel />
        </section>
        <section className={styles.sec2}>
          <Welcome />
        </section>
        <section className={styles.sec3}>
          <Highlights {...segregatedProps.highlights} />
        </section>
        <section className={styles.sec4}>
          <Search />
        </section>
        <section className={styles.sec5}>
          <WeekForecast {...segregatedProps.weekly} />
        </section>
        <section className={styles.sec6}>
          <AirQuality {...segregatedProps.airQuality} />
        </section>
        <section className={styles.sec7}>
          <Rainfall {...segregatedProps.rainfall} />
        </section>
        <section className={styles.sec8}>
          <SolarTime {...segregatedProps.solar} />
        </section> */}
      </main>
    </>
  );
}
Home.displayName = `Home`;

export function getServerSideProps(pageContext) {
  // const { state } = useStore()

  return {
    props: {}
  }
}
