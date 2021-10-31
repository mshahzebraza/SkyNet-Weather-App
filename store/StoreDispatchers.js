// dispatchFn({
//   action.type: 'String',
//   action.payload: SOME_OBJECT
// })

// TO

// dispatchFn(
//   functionBelow(payload)
// )

// Now instead of hard coding the value of action type and the payload, user just needs to call the appropriate function, which will automatically  generate the required parameters for the dispatchFn 
// we can further improve it by creating a dispatchHook for each type of action. This will allow us to just perform an action by calling that hook. We don't even need to call the dispatchFn ourselves

// DispatchFn Variables
export const actionCreators = {
  PUSH_HISTORY: `APP/HISTORY/PUSH`,
  UPDATE_HISTORY: `APP/HISTORY/UPDATE`,
  REMOVE_LOCATION: `APP/LOCATION/REMOVE`,
  UPDATE_CURRENT_VALID: `APP/CURRENT/VALID_UPDATE`,
  UPDATE_CURRENT_INVALID: `APP/CURRENT/INVALID_UPDATE`,
  SET_IS_LOADING: `APP/LOADING/SET`,
  // UPDATE_RESPONSE: `APP/RESPONSE/UPDATE`
}


// DispatchFn - to create a suitable object parameter for the dispatchFn
export const updateHistory = (updatedLocations) => ({
  type: actionCreators.UPDATE_HISTORY,
  payload: updatedLocations,
})

export const pushHistory = (newLocationName) => ({
  type: actionCreators.PUSH_HISTORY,
  payload: newLocationName,
})

export const removeLocation = (locationId) => ({
  type: actionCreators.REMOVE_LOCATION,
  payload: locationId,
})

export const updateCurrentValid = (apiResponse) => ({
  type: actionCreators.UPDATE_CURRENT_VALID,
  payload: apiResponse,
})
export const updateCurrentInvalid = (apiResponse) => ({
  type: actionCreators.UPDATE_CURRENT_INVALID,
  payload: apiResponse,
})

export const setIsLoading = (isLoading) => ({
  type: actionCreators.SET_IS_LOADING,
  payload: isLoading,
})