// use of the reducer is just to make fetching data from the context easier. Otherwise, the context is the real store.
import { actionCreators } from './StoreDispatchers';

// Initial State
export const initialState = {
  current: {
    location: ``,
    country: ``,
    condition: ``,
    tempAct: ``,
    tempFl: ``,
    windDir: ``,
    windSpeed: ``,
    humidity: ``,
    lastUpdated: ``,
    isDay: ``,
  },
  recentLocations: []
}


// Reducer Fn
export const StoreReducer = (state = initialState, action) => { // WHY did i set a default state value equal to initial State

  switch (action.type) {

    case actionCreators.ADD_LOCATION:

      return {
        ...state,
        // current: {
        //   location: action.payload.locationName
        // },
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

    case actionCreators.SEARCH_CURRENT:

      return {
        ...state,
        current: {
          ...state.current,
          location: action.payload.location.name,
          country: action.payload.location.country,
          condition: action.payload.current.condition.text,
          tempAct: action.payload.current.temp_c,
          tempFl: action.payload.current.temp_feelslike_c,
          windDir: action.payload.current.wind_dir,
          windSpeed: action.payload.current.wind_kph,
          humidity: action.payload.current.humidity,
          lastUpdated: action.payload.current.last_updated,
          isDay: action.payload.current.is_day,
        }
      }
      break;

    default:
      break;
  }
}