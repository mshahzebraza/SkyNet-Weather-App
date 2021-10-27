// use of the reducer is just to make fetching data from the context easier. Otherwise, the context is the real store.
import { actionCreators } from './StoreDispatchers';

// Initial State
export const initialState = {
  currentLocation: ' ',
  recentLocations: []
}


// Reducer Fn
export const StoreReducer = (state = initialState, action) => { // WHY did i set a default state value equal to initial State

  switch (action.type) {

    case actionCreators.ADD_LOCATION:

      return {
        ...state,
        currentLocation: action.payload.locationName,
        recentLocations: [
          ...state.recentLocations,
          action.payload
        ]
      }
      break;


    case actionCreators.REMOVE_LOCATION:

      return {
        ...state,
        recentLocations: state.recentLocations.filter((locItem) => {
          return locItem.locationId !== action.payload
        })
      }
      break;

    default:
      break;
  }
}

// recentLocations: [
//   {
//     locationName,
//     locationId
//   }
// ]