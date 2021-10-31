/* IMPORTS */

// DEPENDENCIES
import { useCallback, useEffect, useState } from 'react';
import useStore from '../../store/StoreContext';
import { setIsLoading, updateCurrent, pushHistory, updateHistory } from '../../store/StoreDispatchers';

// LIBRARY FUNCTIONS & STYLES
import styles from './MainForm.module.scss';

// COMPONENTS
import FormInput from './FormInput/FormInput';
import { scanLocationHistory } from '../../lib/helpers';

/* BODY */

export default function SearchForm(props) {


  // State
  const [locationInput, setLocationInput] = useState('');
  const { state, dispatch } = useStore();
  const {
    currentSearch: {
      location: currentLocation
    },
    recentLocations
    // !NOTE : Try the following to get the last element in an array
    // recentLocations: [...rest, lastLocation]
  } = state;
  console.log(recentLocations);


  // Fetch Handler
  const fetchHandler = useCallback(async (location = 'Washington') => {

    try {
      // API Call
      const apiResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${location}&aqi=yes`)

      // Good Response - fetch data and update the current weather & search history IF valid entry
      if (apiResponse.ok) {
        const apiJson = await apiResponse.json();
        console.log(apiJson);
        // dispatch valid response
        // update history - after checking for existing
        // update current - with data
      }

      // Bad Response - fetch error message and log to console IF invalid entry
      if (!apiResponse.ok) {

        const apiJson = await apiResponse.json()
        const { error: { message: errorMessage } } = apiJson;
        // dispatch invalid response
        // update current - with error message
        throw new Error(errorMessage);
      }

    } catch (error) {
      console.error(error);
    }

  }, [])

  /* 
  const scanResult = scanLocationHistory(apiJson.location.name, recentLocations)

  // WAS SEARCHED EARLIER - Reorder array
  if (scanResult.matchFound) {
    dispatch(updateHistory(scanResult.data))
  }
  // FIRST SEARCH - add it to history
  else {
    dispatch(pushHistory(scanResult.data))
  }

  // !NOTE: Location name should be checked for repetition
  dispatch(updateCurrent({ responseIsValid: apiResponse.ok, responseData: apiJson }))
 */
  /* 
    dispatch(updateCurrent({ responseIsValid: apiResponse.ok, responseData: errorMessage }))
   */

  // UseEffect
  useEffect(() => {
    fetchHandler() // On Startup, Call without specifying location
  }, [fetchHandler])

  // Submit Handler
  function submitHandler(e) {
    e.preventDefault();

    // dispatch(setIsLoading(true));
    console.log(recentLocations);
    fetchHandler(locationInput); // location entered in text input
    // dispatch(setIsLoading(false));

    // setLocationInput('');
  }

  return (

    <form className={styles.form} action="#" onSubmit={submitHandler} >

      < FormInput
        label='Search Location'
        type='text'
        id='location'
        placeholder='Type the Location Name here'
        // errorText={'Invalid Input'} // will be dynamically fetched from the context or props
        isReq={true}
        value={locationInput}
        setValue={setLocationInput}

      />


      <div className={styles.controlGroup}>
        <button className={styles.btn} type="submit">Submit</button>
        {/* <button className={styles.btn} onClick={props.reload}>Search Default</button> */}
      </div>

    </form>
  )
}

SearchForm.displayName = `SearchForm`
