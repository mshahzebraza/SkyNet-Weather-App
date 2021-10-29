import useStore from "../../store/StoreContext"
import ListItem from "./ListItem/ListItem";
import { removeLocation } from '../../store/StoreDispatchers';

import styles from './HistoryList.module.scss';
export default function HistoryList(props) {

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
      <h2>Recent Searches</h2>
      <ul>
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