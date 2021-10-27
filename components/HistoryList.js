import useStore from "../store/StoreContext"
import ListItem from "./ListItem";
import { removeLocation } from '../store/StoreDispatchers';

export default function HistoryList() {

  const { state, dispatch } = useStore();

  const { recentLocations } = state;

  const clickHandler = (removeItemId) => {
    console.log(`clicked ${removeItemId}`);
    dispatch(removeLocation(removeItemId))
  }

  return (
    <ul>
      {recentLocations.map(locItem => {
        return (
          <ListItem key={locItem.locationId} click={() => {
            clickHandler(locItem.locationId)
          }}  >
            {locItem.locationName}
          </ListItem>
        )
      })}
    </ul>
  )
}