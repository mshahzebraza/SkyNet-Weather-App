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
  ADD_LOCATION: `APP/LOCATION/ADD`,
  REMOVE_LOCATION: `APP/LOCATION/REMOVE`,
  // RESEARCH_LOCATION: `APP/LOCATION/SEARCH`
}


// DispatchFn - to create a suitable object parameter for the dispatchFn
export const addLocation = (locationName) => ({
  type: actionCreators.ADD_LOCATION,
  payload: {
    locationName: locationName,
    locationId: `loc-${locationName}`
  },
})

export const removeLocation = (locationId) => ({
  type: actionCreators.REMOVE_LOCATION,
  payload: locationId,
})

// export const searchLocation = (locationName) => ({
//   type: actionCreators.RESEARCH_LOCATION,
//   payload: locationName,
// })