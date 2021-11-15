// use of the reducer is just to make fetching data from the context easier. Otherwise, the context is the real store.
import { scanLocationHistory } from '../lib/helpers';
import { actionCreators } from './StoreDispatchers';

// Initial State
export const initialState =
{
  isLoading: false,
  isValid: false,
  weather: {
    // city: '',
    // country: '',
    // localTime: {},
    // updateTime: {},
    // isDay: '',
    // condition: {},
    // temp: '',
    // feelsLike: '',
    // humidity: '',
    // windSpeed: '',
    // airQuality: {
    //  traces: {
    //    co,
    //    no2,
    //    o3,
    //    so2,
    //    pm2_5,
    //    pm10,
    //  },
    //  aqStatus, 
    //  ukDefraIndex
    // },
    // extendedForecast: [
    // {
    //   date,
    //   temp,
    //   rainChances,
    //   condition,
    //   astro,
    // } , 
    // ...
    // ]
  }
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


    case actionCreators.UPDATE_CURRENT_VALID:
      const validWeatherData = action.payload;

      return {
        isLoading: false,
        isValid: true,
        weather: {
          ...validWeatherData
        }
      }
      break;


    case actionCreators.UPDATE_CURRENT_INVALID:

      return {
        // isLoading: false,
        isValid: false,
        errorMessage: action.payload,
        weather: {
          // Default / Initial State weather may be used here with all the keys equal to blank values
        }
      }
      break;


    default:
      break;
  }
}

