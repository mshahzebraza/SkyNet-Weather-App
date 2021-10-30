// use of the reducer is just to make fetching data from the context easier. Otherwise, the context is the real store.
import { actionCreators } from './StoreDispatchers';

// Initial State
export const initialState = {
  isLoading: false,
  currentSearch: {
    isValid: false, // dependant on response status OK / not OK
    errorMessage: `Search for a Location`, // initial message, will change dynamically by api response
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

    case actionCreators.SET_IS_LOADING:

      return {
        ...state,
        isLoading: action.payload
      }
      break;


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


    case actionCreators.UPDATE_CURRENT:

      return {
        ...state,
        currentSearch: {
          ...state.currentSearch,
          isValid: action.payload.responseIsValid,
          errorMessage: !action.payload.responseIsValid ? action.payload.responseData : null,
          // equals responseData (errorMsg) for Bad Response and equals null for Good Response
          location: action.payload.responseIsValid ? action.payload.responseData.location.name : null,
          country: action.payload.responseIsValid ? action.payload.responseData.location.country : null,
          condition: action.payload.responseIsValid ? action.payload.responseData.current.condition.text : null,
          tempAct: action.payload.responseIsValid ? action.payload.responseData.current.temp_c : null,
          tempFl: action.payload.responseIsValid ? action.payload.responseData.current.temp_feelslike_c : null,
          windDir: action.payload.responseIsValid ? action.payload.responseData.current.wind_dir : null,
          windSpeed: action.payload.responseIsValid ? action.payload.responseData.current.wind_kph : null,
          humidity: action.payload.responseIsValid ? action.payload.responseData.current.humidity : null,
          lastUpdated: action.payload.responseIsValid ? action.payload.responseData.current.last_updated : null,
          isDay: action.payload.responseIsValid ? action.payload.responseData.current.is_day : null,
          // !NOTE: Try to conditionally update the data. E.g use destructuring and conditional statements based on responseIsValid
        }
      }
      // Expected object
      // {
      //   responseIsValid: response.ok,
      //   responseData: errorMessage
      // }
      break;


    default:
      break;
  }
}
