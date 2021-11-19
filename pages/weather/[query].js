// Dependency
import styles from "../../styles/Weather.module.scss";
import Head from 'next/head';
import fetch from 'node-fetch';
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import useStore from "../../store/StoreContext";
import { segregateProps, transformWeather } from "../../lib/helpers";
import { setIsLoading, updateCurrentInvalid, updateCurrentValid } from '../../store/StoreDispatchers';
// Components
import Panel from '../../components/AppSections/Panel/Panel';
import Welcome from '../../components/AppSections/Welcome/Welcome';
import Highlights from '../../components/AppSections/Highlights/Highlights';
import Search from '../../components/AppSections/Search/Search';
import WeekForecast from '../../components/AppSections/WeekForecast/WeekForecast';
import AirQuality from '../../components/AppSections/AirQuality/AirQuality';
import Rainfall from '../../components/AppSections/Rainfall/Rainfall';
import SolarTime from '../../components/AppSections/SolarTime/SolarTime';

export async function getStaticProps(context) {
  const { params: { query } } = context;

  const apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=df0dcf32a9b346308a814745212710&q=${query}&days=10&aqi=yes&alerts=no`)
  const apiJson = await apiResponse.json()

  return {
    props: {
      query,
      result: apiJson
    }
  }
}

export async function getStaticPaths() {
  // cont

  return {
    paths: [
      { params: { query: '1' } },
      { params: { query: '2' } },
      // { params: { query: '3' } },
    ],
    fallback: 'blocking'
  }
}

export default function WeatherPage(props) {
  // const router = useRouter();

  const { query: lastQuery, result: lastResponse } = props;
  const { state, dispatch } = useStore()
  const segregatedProps = state.isValid ? segregateProps(state) : {}


  useEffect(() => {
    dispatch(updateCurrentValid(transformWeather(lastResponse)))
  }, [dispatch, updateCurrentValid, lastResponse])

  // const [searchOptions, setSearchOptions] = useState({ valid: false, data: 'No input' });
  // const segregatedProps = state.isValid ? segregateProps(state) : {};

  function submitHandler(e) {
    e.preventDefault();

    router.push(e.target[0].value)
    // console.log();
    e.target[0].value = ''
  }

  /* 
    async function changeHandler(e) {
      const searchQuery = e.target.value;
  
      // console.log(searchQuery);
  
      if (searchQuery.trim().split("").length > 0) {
        // !NOTE: use SWR hook from NEXT js
        const qryResponse = await fetch(`http://api.weatherapi.com/v1/search.json?key=df0dcf32a9b346308a814745212710&q=${searchQuery}`)
  
        const qryJson = await qryResponse.json();
        // const options = qryJson.length > 0 && qryJson.error === undefined && qryJson.map((cur, id) => cur.name);
  
        if (qryJson.error !== undefined) {
          console.log('Input Error');
          // console.log(error);
          setSearchOptions({
            valid: false,
            data: error
          })
        }
        if (qryJson.length === 0) {
          console.log(`No Matching Found`);
          setSearchOptions({
            valid: false,
            data: 'No Match found'
          })
          console.log(qryJson);
        }
        if (qryJson.length > 0) {
          setSearchOptions({
            valid: true,
            data: qryJson.map((cur, id) => cur.name)
          })
        }
  
        // const options =  && qryJson.map((cur, id) => cur.name);
  
        // !!options && setSearchOptions(options)
      } else {
        setSearchOptions({ valid: false, data: 'No input' })
      }
  
    }
   */

  return (
    <>
      <Head>
        <link key='googleFontsConnect' rel="preconnect" href="https://fonts.googleapis.com" />
        <link key='googleFontsCrossOrigin' rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link key='googleFonts' href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>

      <div className={`${styles.page} pageContainer`}>
        <main className={`${styles.dashboard}`}>
          <section className={styles.sec1}>
            <Panel />
          </section>
          <section className={styles.sec2}>
            <Welcome
              segProps={segregatedProps.welcome}
            />
          </section>
          <section className={styles.sec3}>
            <Highlights
              segProps={segregatedProps.highlights}
            />
          </section>
          <section className={styles.sec4}>
            <Search />
          </section>
          <section className={styles.sec5}>
            <WeekForecast
              segProps={segregatedProps.weekly}
            />
          </section>
          <section className={styles.sec6}>
            <AirQuality
              segProps={segregatedProps.airQuality}
            />
          </section>
          <section className={styles.sec7}>
            <Rainfall
              segProps={segregatedProps.rainfall}
            />
          </section>
          <section className={styles.sec8}>
            <SolarTime
              segProps={segregatedProps.solar}
            />
          </section>
        </main>
      </div>

    </>
  )
}
WeatherPage.displayName = `WeatherPage`

/*
Panel
Welcome
Highlights
Search
WeekForecast
AirQuality
Rainfall
SolarTime

welcome
highlights
weekly
airQuality
rainfall
solar
*/