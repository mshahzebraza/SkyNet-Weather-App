import useStore from "../../store/StoreContext"
import ListItem from "./ListItem/ListItem";
import { removeLocation, updateCurrentValid } from '../../store/StoreDispatchers';

import styles from './SearchHistory.module.scss';

export default function SearchHistory(props) {

  const removeHandler = (removeItemId) => {
    props.removeDispatch(removeItemId)
  }

  const searchHandler = async (searchItem) => {
    props.fetcher(searchItem)
  }

  return (
    <div className={styles.main} >
      <h2 className={styles.title} >Searches History</h2>

      <ul className={styles.list} >
        {props.historyData.map(listItem => {
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