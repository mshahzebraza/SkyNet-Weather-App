
/* IMPORTS */

// DEPENDENCIES
import { useCallback, useEffect, useState } from 'react';
import useStore from '../../../store/StoreContext';
import { setIsLoading, updateCurrentInvalid, updateCurrentValid } from '../../../store/StoreDispatchers';
import { transformWeather } from '../../../lib/helpers';


// LIBRARY FUNCTIONS & STYLES
import styles from './Search.module.scss';

// COMPONENTS
import FormInput from './FormInput/FormInput';
import { FormControl } from './FormControl/FormControl';


/* BODY */
export default function Search(params) {
  // console.log(`Rendering SEARCH`);

  // State
  const [locationInput, setLocationInput] = useState('');
  const { state, dispatch } = useStore();



  // Fetch Handler
  const fetchHandler = useCallback(async (location = 'Washington') => {
    try {
      // API Call
      // const apiResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}&days=${process.env.NEXT_PUBLIC_API_DAYS}&aqi=${process.env.NEXT_PUBLIC_API_AQ}&alerts=${process.env.NEXT_PUBLIC_API_ALERTS}`)
      const apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=df0dcf32a9b346308a814745212710&q=${location}&days=10&aqi=yes&alerts=no`)

      // Good Response - fetch data and update the current weather & search history IF valid entry
      if (apiResponse.ok) {
        const apiJson = await apiResponse.json();

        // dispatch valid response - update current weather AND recent location
        dispatch(updateCurrentValid(transformWeather(apiJson)))
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
    // console.log(`Running UseEffect`);
    fetchHandler() // On Startup, Call without specifying location
  }, [fetchHandler])




  // Submit Handler
  function submitHandler(e) {
    e.preventDefault();

    // console.log(locationInput);
    //  dispatch(setIsLoading(true));
    fetchHandler(locationInput); // location entered in text input
    //  dispatch(setIsLoading(false));

    setLocationInput('');
  }


  return (
    <>
      {/* Search */}


      <form className={`${styles.form}`} action="#" onSubmit={submitHandler} >

        < FormInput
          // label='Search Location'
          type='text'
          id='location'
          placeholder='Search ...'
          // errorText={'Invalid Input'} // will be dynamically fetched from the context or props
          isReq={true}
          value={locationInput}
          setValue={setLocationInput}
        />

        <FormControl />

      </form>
    </>
  )
}
Search.displayName = 'Search'

