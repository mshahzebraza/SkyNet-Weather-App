// use of the reducer is just to make fetching data from the context easier. Otherwise, the context is the real store.
import { scanLocationHistory } from '../lib/helpers';
import { actionCreators } from './StoreDispatchers';

// Initial State
export const initialState = {
  isLoading: false,
  currentSearch: {
    isValid: false, // dependant on response status OK / not OK
    errorMessage: `Search for a Location`, // initial message, will change dynamically by api response
    location: ``,
    localTimeEpoch: ``,
    localTime: ``,
    country: ``,
    condition: ``,
    tempAct: ``,
    tempFl: ``,
    windDir: ``,
    windSpeed: ``,
    humidity: ``,
    lastUpdatedEpoch: ``,
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


    case actionCreators.UPDATE_HISTORY:

      return {
        ...state,
        recentLocations: action.payload
      }
      break;


    // case actionCreators.PUSH_HISTORY:

    //   return {
    //     ...state,

    //     recentLocations: [
    //       ...state.recentLocations,
    //       {
    //         locationName: action.payload,
    //         locationId: `loc-${action.payload}`
    //       }
    //     ]
    //   }
    //   break;


    case actionCreators.REMOVE_LOCATION:

      return {
        ...state,
        recentLocations: state.recentLocations.filter((locItem) => {
          return locItem.locationId !== action.payload
        })
      }
      break;


    case actionCreators.UPDATE_CURRENT_VALID:
      const newLocation = {
        locationName: action.payload.location.name,
        locationId: `${action.payload.location.name}@${action.payload.current.last_updated_epoch}`
      }
      // Check for duplicate value before updating the recent locations
      const scanResult = scanLocationHistory(newLocation, state.recentLocations)
      // Returns updatedRecentLocations

      return {
        ...state,
        currentSearch: {
          ...state.currentSearch,
          isValid: true,
          errorMessage: null,
          // equals responseData (errorMsg) for Bad Response and equals null for Good Response
          location: action.payload.location.name,
          localTimeEpoch: action.payload.location.localtime_epoch * 1000,
          localTime: action.payload.location.localtime_epoch,
          country: action.payload.location.country,
          condition: action.payload.current.condition.text,
          tempAct: action.payload.current.temp_c,
          tempFl: action.payload.current.feelslike_c,
          windDir: action.payload.current.wind_dir,
          windSpeed: action.payload.current.wind_kph,
          humidity: action.payload.current.humidity,
          lastUpdatedEpoch: action.payload.current.last_updated_epoch * 1000,
          lastUpdated: action.payload.current.last_updated,
          isDay: action.payload.current.is_day,
          // !NOTE: Try to conditionally update the data. E.g use destructuring and conditional statements based on responseIsValid
        },
        // If element already exist then recentLocations must be set to Reordered array otherwise to the same array but with different location
        recentLocations: scanResult
      }

      break;

    case actionCreators.UPDATE_CURRENT_INVALID:

      return {
        ...state,
        currentSearch: {
          ...state.currentSearch,
          isValid: false,
          errorMessage: action.payload,
          // equals responseData (errorMsg) for Bad Response and equals null for Good Response
          location: null,
          localTime: null,
          country: null,
          condition: null,
          tempAct: null,
          tempFl: null,
          windDir: null,
          windSpeed: null,
          humidity: null,
          lastUpdated: null,
          isDay: null,
          // !NOTE: Try to conditionally update the data. E.g use destructuring and conditional statements based on responseIsValid
        }
      }

      break;


    default:
      break;
  }
}



// Initial State
export const iState = {
  isLoading: false,
  currentSearch: {
    isValid: false, // dependant on response status OK / not OK
    errorMessage: `Search for a Location`, // initial message, will change dynamically by api response
    location: ``,
    localTimeEpoch: ``,
    localTime: ``,
    country: ``,
    condition: ``,
    tempAct: ``,
    tempFl: ``,
    windDir: ``,
    windSpeed: ``,
    humidity: ``,
    lastUpdatedEpoch: ``,
    lastUpdated: ``,
    isDay: ``,
  },
  recentLocations: []
}

// Current,
// Air Quality, Highlights,

// Monthly
// Rainfall, Solar Time,


// Highlights
/*
date, condition, temp, tempFL, wind, humidity
 */

// Air Quality
/*
Status, Comment, Traces w/ amount
 */

// Rainfall
/*
Date & Precipitation chances for a month
 */

// Solar Timing
/*
Duration for a week
 */

// Weekly condition
/*
Condition with day, and temperature
 */

