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

  console.log('');
  console.log('body');

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
  // console.log(state);

  const fetchHandler = useCallback(async (location = 'Washington') => {
    console.log('fetch Handler');

    try {
      // API Call
      const apiResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${location}&aqi=yes`)

      // Good Response - fetch data and update the current weather & search history IF valid entry
      if (apiResponse.ok) {
        console.log(`good response`);

        const apiJson = await apiResponse.json();
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

        console.log(`Update Current running ...`);
        dispatch(updateCurrent({ responseIsValid: apiResponse.ok, responseData: apiJson }))
        console.log(`Update Current Ran ...`);
      }

      // Bad Response - fetch error message and log to console IF invalid entry
      if (!apiResponse.ok) {
        console.log(`bad response`);
        // setErrorText
        // setResponseIsValid(false)

        const apiJson = await apiResponse.json()
        const { error: { message: errorMessage } } = apiJson;

        dispatch(updateCurrent({ responseIsValid: apiResponse.ok, responseData: errorMessage }))

        throw new Error(errorMessage);
      }

    } catch (error) {
      console.error(error);
    }

  }, [dispatch, updateCurrent])


  useEffect(() => {
    console.log('useEffect');
    fetchHandler() // On Startup, Call without specifying location
  }, [fetchHandler])

  const submitHandler = (e) => {
    console.log(`Start of Submit Handler`);
    e.preventDefault();

    dispatch(setIsLoading(true))
    fetchHandler(locationInput) // location entered in text input
    dispatch(setIsLoading(false))

    setLocationInput('');
    console.log(`End of Submit Handler`);
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
