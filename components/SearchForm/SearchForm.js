// DEPENDENCIES
import { useCallback, useEffect, useState } from 'react';
import useStore from '../../store/StoreContext';
import { setIsLoading, updateCurrent, addLocation } from '../../store/StoreDispatchers';

// LIBRARY FUNCTIONS & STYLES
import styles from './MainForm.module.scss';

// COMPONENTS
import FormInput from './FormInput/FormInput';

// BODY
export default function SearchForm(props) {

  const [locationInput, setLocationInput] = useState('');
  const { state, dispatch } = useStore();

  const fetchHandler = useCallback(async (location = 'Washington') => {

    try {
      // API Call
      const apiResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${location}&aqi=yes`)

      // Good Response - fetch data and update the current weather & search history IF valid entry
      if (apiResponse.ok) {
        console.log(`good response`);

        const apiJson = await apiResponse.json();

        dispatch(addLocation(apiJson.location.name))
        // will be a valid Location Name as it is inside a response.ok block
        // !NOTE: Location name should be checked for repetition
        dispatch(updateCurrent({ responseIsValid: apiResponse.ok, responseData: apiJson }))
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
