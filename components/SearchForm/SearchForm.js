/* IMPORTS */

// DEPENDENCIES
import { useState } from 'react';
import { useRouter } from 'next/router';

// LIBRARY FUNCTIONS & STYLES
import styles from './SearchForm.module.scss';

// COMPONENTS
import FormInput from './FormInput/FormInput';
import { FormControl } from './FormControl/FormControl';

/* BODY */
export default function SearchForm(props) {

  const router = useRouter();

  const [inputLocation, setInputLocation] = useState('');

  // Submit Handler
  function submitHandler(e) {
    e.preventDefault();

    // dispatch(setIsLoading(true));
    props.fetcher(inputLocation)  // location entered in text input
    // router.push(`/${inputLocation}`)
    // dispatch(setIsLoading(false));

    setInputLocation('');
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
        value={inputLocation}
        setValue={setInputLocation}
      />

      {/* <div className={styles.controlGroup}> */}
      <FormControl></FormControl>
      {/* </div> */}

    </form>
  )
}

SearchForm.displayName = `SearchForm`
