// Dependency imports 
// import Head from 'next/head'
import { useEffect, useCallback } from 'react';
import styles from '../../styles/Weather.module.scss';
import { setIsLoading, updateCurrentInvalid, updateCurrentValid } from '../../store/StoreDispatchers';
import useStore from '../../store/StoreContext';
// import fetch from 'node-fetch';

// Objects & Styles


// Components
import SearchForm from '../../components/SearchForm/SearchForm';
import InfoPanel from '../../components/InfoPanel/InfoPanel';
import SearchHistory from '../../components/SearchHistory/SearchHistory';



// Function
export default function WeatherPage(props) {

  // State
  const { state: {
    isLoading,
    currentSearch: weatherData,
    recentLocations
  }
    , dispatch } = useStore();

  // Fetch Handler
  const fetchHandler = useCallback(async (location = 'Washington') => {

    try {
      // API Call
      const apiResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${location}&aqi=yes`)

      // Good Response - fetch data and update the current weather & search history IF valid entry
      if (apiResponse.ok) {
        const apiJson = await apiResponse.json();

        // dispatch valid response - update current weather AND recent location
        dispatch(updateCurrentValid(apiJson))
      }

      // Bad Response - fetch error message and log to console IF invalid entry
      if (!apiResponse.ok) {

        const apiJson = await apiResponse.json()
        const { error: { message: errorMessage } } = apiJson;
        // dispatch invalid response - update the current weather data
        dispatch(updateCurrentInvalid(errorMessage))
        throw new Error(errorMessage);
      }

    } catch (error) {
      console.error(error);
    }

  }, [])

  // UseEffect
  useEffect(() => {
    fetchHandler() // On Startup, Call without specifying location
  }, [fetchHandler])




  console.log(props.ct);
  return (
    <div className={styles.container} >
      <SearchForm fetcher={fetchHandler} />
      <InfoPanel info={weatherData} isLoading />
      <SearchHistory
        fetcher={fetchHandler}
        historyData={recentLocations}
        removeDispatch={(removeData) => { dispatch(updateCurrentInvalid(removeData)) }}
        // searchDispatch={(searchData) => { dispatch(updateCurrentValid(searchData)) }}
        styles={styles.footer} />

    </div>
  );
}
WeatherPage.displayName = `WeatherPage`




// export async function getServerSideProps(pageContext) {
//   const { params: { location } } = pageContext



//   return {
//     props: {
//       ct: location
//     }
//   }
// }
