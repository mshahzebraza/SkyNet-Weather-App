// HELPER FUNCTIONS

export function parseMultiple(locations) {
  return locations
    .split('')
    .map((letter) => {
      const returnValue = letter === ',' ? '%2C' : letter;
      return returnValue;
    })
    .join('')
}

function createURL(typeOfSearch) {

}

export function mergeClasses(classes) {
  const allClasses = classes.reduce((acc, cur, arr) => {
    return acc.concat(` ${cur}`);
  }, '');
  console.log(allClasses);
  return allClasses;
}