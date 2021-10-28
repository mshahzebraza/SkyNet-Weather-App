import useStore from "../store/StoreContext"
import ListItem from "./ListItem";
import { removeLocation } from '../store/StoreDispatchers';

export default function HistoryList() {

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
    <>
      <h2>Recent Inputs</h2>
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
    </>
  )
}