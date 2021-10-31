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
  console.log(`Received for Reorder`);
  console.log(array);
  console.log(`From: ${from}, To : ${to}`);
  console.log(' ');
  // Creating an immutable version
  const newArray = JSON.parse(JSON.stringify(array))

  // delete the matched location from the array and store it in temporarily variable
  const tmpEl = newArray.splice(from, 1);
  // console.log(`Temp: ${tmpEl[0].locationName}`);
  // insert the temporary variable to the first index of the array
  newArray.splice(to, 0, tmpEl[0])

  console.log(`Returning reordered`);
  console.log(newArray);
  return newArray;
}

// Check if an element exists in an array
// TRUE: return a reordered array with the element received as the first element in the array
// FALSE: return a just the element in the array
export function scanLocationHistory(newLocationObject, locationHistory) {
  console.log(`Received newLocation for scanning`);
  console.log(newLocationObject);
  console.log(' ');

  // console.log(`Received history for scanning`);
  // console.log(locationHistory);

  const matchingIndex = locationHistory.findIndex((lastLocationObj) => {
    return lastLocationObj.locationName === newLocationObject.locationName
    // return lastLocationObj.locationName === `Washington`
  });

  console.log(matchingIndex);
  // Return reordered array - [a,b,c,D,e] --->  [D,a,b,c,e]
  if (matchingIndex >= 0) {
    console.log(`Match found at ${matchingIndex}. Returning Reordered Locations ...`);

    const reOrderedLocations = reOrderArray(locationHistory, matchingIndex, 0)

    return reOrderedLocations;
  }
  // Return Updated array with new
  else {

    console.log(`Match not Found. Returning Updated Locations...`);
    const updatedLocationHistory = getCopy(locationHistory);
    updatedLocationHistory.push(newLocationObject);
    return updatedLocationHistory;

  }
}

export function getCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
  /*
months.splice(
1, // start at index 1
0, // Delete "0" elements after "index" (=1)
'Feb' // Insert "Feb" after index (when it is done with deletion)
);
*/