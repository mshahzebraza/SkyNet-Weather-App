
/* IMPORTS */

// DEPENDENCIES
import { useCallback, useEffect, useState } from 'react';
import useStore from '../../../store/StoreContext';
import { setIsLoading, updateCurrentInvalid, updateCurrentValid } from '../../../store/StoreDispatchers';
import { transformWeather } from '../../../lib/helpers';
import router from 'next/router';

// LIBRARY FUNCTIONS & STYLES
import styles from './Search.module.scss';

// COMPONENTS
import FormInput from './FormInput/FormInput';
import FormControl from './FormControl/FormControl';
import SearchList from './SearchList.js/SearchList';

/* BODY */



export default function Search(params) {
    // console.log(`Rendering SEARCH`);

    // State
    const [searchQuery, setSearchQuery] = useState('');
    // AutoComplete Feature
    const [searchOptions, setSearchOptions] = useState({ valid: false, data: 'No input' });


    useEffect(async () => {

        if (searchQuery.trim().split("").length > 0) {

            const qryResponse = await fetch(`https://api.weatherapi.com/v1/search.json?key=df0dcf32a9b346308a814745212710&q=${searchQuery}`)
            const qryJson = await qryResponse.json();


            qryJson.error !== undefined && setSearchOptions({
                valid: false,
                data: error
            })
            qryJson.length === 0 && setSearchOptions({
                valid: false,
                data: 'No Match found'
            })
            qryJson.length > 0 && setSearchOptions({
                valid: true,
                data: qryJson.map((cur, id) => cur.name)
            })

        }
        else {
            setSearchOptions({ valid: false, data: 'No input' })
        }
    }, [searchQuery])



    // -------------

    // Submit Handler
    function submitHandler(e) {
        e.preventDefault();
        router.push(searchQuery)
        setSearchQuery('');
    }


    return (
        <>
            <form className={`${styles.form}`} action="#" onSubmit={submitHandler} >
                < FormInput
                    // label='Search Location'
                    type='text'
                    id='location'
                    placeholder='Search ...'
                    // errorText={'Invalid Input'} // will be dynamically fetched from the context or props
                    isReq={true}
                    value={searchQuery}
                    setValue={setSearchQuery}
                    isListDataValid={searchOptions.valid}
                    listData={searchOptions.data}
                />

                {/* Form Submit Button */}
                <FormControl />

            </form>
        </>
    )
}
Search.displayName = 'Search'

