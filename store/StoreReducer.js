// use of the reducer is just to make fetching data from the context easier. Otherwise, the context is the real store.
import { actionCreators } from './StoreDispatchers';

// Initial State
export const initialState =
{
  isLoading: false,
  isValid: false,
  weather: {}
}

// Reducer Fn
export const StoreReducer = (state = initialState, action) => { // WHY did i set a default state value equal to initial State

  switch (action.type) {

    /* 
        case actionCreators.SET_IS_LOADING:
    
          return {
            ...state,
            isLoading: action.payload
          }
          break;
     */

    case actionCreators.UPDATE_CURRENT_VALID:
      const validWeatherData = action.payload;
      return {
        isLoading: false,
        isValid: true,
        // clientLocation: '',
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

