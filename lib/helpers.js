// HELPER FUNCTIONS

// Convert one strings with comma to an concatenated multiple strings separated with '%2C'
export function parseMultiple(locations) {
  return locations
    .split('')
    .map((letter) => {
      const returnValue = letter === ',' ? '%2C' : letter;
      return returnValue;
    })
    .join('')
}


export function mergeClasses(classes) {
  const allClasses = classes.reduce((acc, cur, arr) => {
    return acc.concat(` ${cur}`);
  }, '');
  console.log(allClasses);
  return allClasses;
}


export function reOrderArray(array, from, to = 0) {
  // Creating an immutable version
  const newArray = JSON.parse(JSON.stringify(array))

  // delete the matched location from the array and store it in temporarily variable
  const tmpEl = newArray.splice(from, 1);
  // insert the temporary variable to the first index of the array
  newArray.splice(to, 0, tmpEl[0])

  return newArray;
}

// Check if an element exists in an array
// TRUE: return a reordered array with the element received as the first element in the array
// FALSE: return a just the element in the array
export function scanLocationHistory(newLocationObject, locationHistory) {

  const matchingIndex = locationHistory.findIndex((lastLocationObj) => {
    return lastLocationObj.locationName === newLocationObject.locationName
    // return lastLocationObj.locationName === `Washington`
  });

  // Return reordered array - [a,b,c,D,e] --->  [D,a,b,c,e]
  if (matchingIndex >= 0) {

    const reOrderedLocations = reOrderArray(locationHistory, matchingIndex, 0)

    return reOrderedLocations;
  }
  // Return Updated array with new
  else {
    const updatedLocationHistory = getCopy(locationHistory);
    updatedLocationHistory.push(newLocationObject);
    return updatedLocationHistory;

  }
}

// Object Deep Copy
export function getCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

// Date string to Date & Time
export function dateSeparator(dateString) {
  const newDateObj = new Date(dateString)

  return {
    newDate: newDateObj.toLocaleTimeString(),
    newTime: newDateObj.toLocaleDateString()
  }
}

// Object Map

// export function objectMap(myObject) {
//   const entries = Object.entries(myObject)
//   const keys = Object.keys(myObject)
//   const values = Object.values(myObject)

//   entries.map((cur,idx) => {
//     cur[0]
//   })

// }
