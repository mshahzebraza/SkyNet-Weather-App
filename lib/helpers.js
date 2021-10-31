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
export function scanLocationHistory(apiLocation, locationHistory) {

  const matchingIndex = locationHistory.findIndex((lastLocation) => {
    console.log(`lastLocation: ${lastLocation}`);
    return lastLocation.locationName === apiLocation
  });

  // Return reordered array - [a,b,c,D,e] --->  [D,a,b,c,e]
  if (!!matchingIndex) {
    console.log(`Match found at ${matchingIndex}. Returning Reorder Location History...`);
    const reOrderedArray = reOrderArray(locationHistory, matchingIndex, 0)

    return {
      matchFound: true,
      data: reOrderedArray
    }
  }
  // Return the matching location
  else {
    console.log(`Match not Found. Returning searched Location...`);

    return {
      matchFound: false,
      data: apiLocation
    }

  }
}
  /*
months.splice(
1, // start at index 1
0, // Delete "0" elements after "index" (=1)
'Feb' // Insert "Feb" after index (when it is done with deletion)
);
*/