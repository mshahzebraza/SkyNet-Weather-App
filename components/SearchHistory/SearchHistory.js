import useStore from "../../store/StoreContext"
import ListItem from "./ListItem/ListItem";
import { removeLocation } from '../../store/StoreDispatchers';

import styles from './SearchHistory.module.scss';

export default function SearchHistory(props) {

  const { state, dispatch } = useStore();

  const { recentLocations } = state;

  const removeHandler = (removeItemId) => {
    console.log(`clicked ${removeItemId}`);
    dispatch(removeLocation(removeItemId))
  }

  const searchHandler = (searchItem) => {
    // dispatch()
    console.log(`searching ${searchItem}`);
  }

  return (
    <div className={styles.main} >
      <h2 className={styles.title} >Searches History</h2>

      <ul className={styles.list} >
        {recentLocations.map(locItem => {
          return (
            <ListItem
              key={locItem.locationId}
              remove={() => {
                removeHandler(locItem.locationId)
              }}
              search={() => {
                searchHandler(locItem.locationName)
              }}
            >
              {locItem.locationName}
            </ListItem>
          )
        })}
      </ul>
    </div>
  )
}