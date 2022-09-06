import useStore from "../../../store/StoreContext"
import ListItem from "./ListItem/ListItem";
import { removeLocation, updateCurrentValid } from '../../../store/StoreDispatchers';

import styles from './SearchHistory.module.scss';

export default function SearchHistory(props) {

    const { state, dispatch } = useStore();

    const { recentLocations } = state;

    const removeHandler = (removeItemId) => {
        dispatch(removeLocation(removeItemId))
    }

    const searchHandler = async (searchItem) => {

        try {
            // API Call
            const apiResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${searchItem}&aqi=yes`)

            // Good Response - fetch data and update the current weather & search history IF valid entry
            if (apiResponse.ok) {
                const apiJson = await apiResponse.json();
                dispatch(updateCurrentValid(apiJson))
            }
            // Bad Response - Cannot be a bad response btw bcz it has already been fetched 
            if (!apiResponse.ok) {

                const apiJson = await apiResponse.json()
                const { error: { message: errorMessage } } = apiJson;
                dispatch(updateCurrentInvalid(errorMessage))
                throw new Error(errorMessage);
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.main} >
            <h2 className={styles.title} >Searches History</h2>

            <ul className={styles.list} >
                {recentLocations.map(listItem => {
                    return (
                        <ListItem
                            key={listItem.locationId}
                            remove={() => {
                                removeHandler(listItem.locationId)
                            }}
                            search={() => {
                                searchHandler(listItem.locationName)
                            }}
                        >
                            {listItem.locationName}
                        </ListItem>
                    )
                })}
            </ul>
        </div>
    )
}