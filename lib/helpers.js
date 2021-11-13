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
    updatedLocationHistory.unshift(newLocationObject);
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

export function capitalizer(string) {
  return string.toUpperCase()
}

export function roundOff(num, limit = 2) {
  return parseInt(num).toFixed(limit)
}

/* 
const x = 
{
  isLoading: false,
  isValid: false,
  weather: {
    city: '',
    country: '',
    localTime: '',
    updateTime: '',
    isDay: '',
    condition: {
      text,
      icon,
      code
    },
    temp: '',
    feelsLike: '',
    humidity: '',
    windSpeed: '',
    airQuality: {
      traces: {
        co,
        no2,
        o3,
        so2,
        pm2_5,
        pm10,
      }
      aqStatus,
      ukDefraIndex
    },
    extendedForecast: [
      {
        date,
        temp,
        rainChances,
        condition : {
          text,
          icon,
          code
        },
        astro: {
          sunrise,
          sunset
        },
      },
    ]
  }
 */
/* 
  [
    { date: '01', rain: 50 }
  ]
  */

export function segregateProps(state) {

  console.log(`Running segregateProps...`);
  console.log(`Received data is `);
  console.log(state);
  // console.log(state.weather);
  // console.log(state.weather.airQuality);
  // let newState = state;

  // Total transformation
  const newState = {
    highlights: {
      city: state.weather.city,
      date: state.weather.localTime,
      condition: state.weather.condition,
      temp: state.weather.temp,
      feelsLike: state.weather.feelsLike,
      wind: state.weather.windSpeed,
      humidity: state.weather.humidity
    },
    weekly: state.weather.extendedForecast.map((cur, id) => {
      return {
        day: cur.day,
        temp: cur.temp,
        condition: cur.condition
      }
    })
    ,
    airQuality: {
      location: state.weather.city,
      status: state.weather.airQuality.aqStatus,
      comment: 'A perfect day for a walk',
      traces: Object.entries(state.weather.airQuality.traces).map((cur, id) => {
        return {
          type: cur[0],
          amount: `${cur[1]} μg/m3`
        }
      })
    },
    rainfall: state.weather.extendedForecast.map((cur, id) => {
      return { dateFull: cur.date, date: id + 1, rain: cur.rainChances }
    }),
    solar: state.weather.extendedForecast.map((cur, id) => {
      return { location: cur.date, sunrise: cur.astro.sunrise, sunset: cur.astro.sunset }
    })
  }
  console.log(`Returned Data is `);
  console.log(newState);


  return newState

  // Sectional Transformation
  /*   
    const highlightProps = {
      city: state.weather.city,
      date: state.weather.localTime,
      condition: state.weather.condition,
      temp: state.weather.temp,
      feelsLike: state.weather.feelsLike,
      wind: state.weather.windSpeed,
      humidity: state.weather.humidity
    }
  
    const weeklyProps = state.weather.extendedForecast.map((cur, id) => {
      return {
        day: cur.date,
        temp: cur.temp,
        condition: cur.condition
      }
    })
  
    const airQualityProps = {
      location: state.weather.city,
      status: state.weather.airQuality.aqStatus,
      comment: 'A perfect day for a walk',
      traces: Object.entries(state.weather.airQuality.traces).map((cur, id) => {
        return {
          type: cur[0],
          amount: `${cur[1]} μg/m3`
        }
      })
    }
  
    const rainfallProps = state.weather.extendedForecast.map((cur, id) => {
      return { dateFull: cur.date, date: id + 1, rain: cur.rainChances }
    })
  
    const solarProps = state.weather.extendedForecast.map((cur, id) => {
      return { location: cur.date, sunrise: cur.astro.sunrise, sunset: cur.astro.sunset }
    })

    return {
      highlights: highlightProps,
      weekly: weeklyProps,
      airQuality: airQualityProps,
      rainfall: rainfallProps,
      solar: solarProps,
    };
   */

}

export function epochToTime(epoch) {
  const fullDate = new Date(epoch * 1000).toDateString().split(" ");

  return {
    date: [...fullDate].splice(1, 2).reverse().join(' '),
    day: [...fullDate].splice(0, 1),
    year: [...fullDate].splice(3, 1),
  }
}

export function transformExtendedWeather(fcDays) {

  console.log(`Running transformExtendedWeather`);

  return fcDays.map((curDay, curDayId) => {
    const fullDate = epochToTime(curDay.date_epoch);
    const dateString = fullDate.date
    const dayString = fullDate.day
    return {
      // day: new Date(curDay.date_epoch * 1000).toDateString().split(" ")[0],
      // date: new Date(curDay.date_epoch * 1000).toDateString().split(" ").splice(3, 1),
      day: dayString,
      date: dateString,
      temp: curDay.day.avgtemp_c,
      rainChances: curDay.day.daily_chance_of_rain,
      condition: curDay.day.condition,
      astro: curDay.astro
    }
  })

}

export function transformWeather(apiData) {
  console.log(`Running transformWeather`);

  const { name: city, country, localtime_epoch: localTime } = apiData.location;
  const { is_day: isDay, condition, temp_c: temp, feelslike_c: feelsLike, humidity, wind_kph: windSpeed, last_updated_epoch: updateTime,
    // air_quality: airQuality,
    air_quality: {
      ['us-epa-index']: aqStatus,
      ['gb-defra-index']: ukDefraIndex,
      ...rest
    }
  } = apiData.current;

  const newLocalTime = epochToTime(localTime);

  const extendedForecast = transformExtendedWeather(apiData.forecast.forecastday);
  const transformedWeatherData = {
    city,
    country,
    localTime: `${epochToTime(localTime).day}, ${epochToTime(localTime).date}`,
    updateTime: `${epochToTime(updateTime).day}, ${epochToTime(updateTime).date}`,
    isDay,
    condition,
    temp,
    feelsLike,
    humidity,
    airQuality: {
      aqStatus, ukDefraIndex, traces: { ...rest }
    },
    extendedForecast,
    windSpeed
  }

  console.log(transformedWeatherData);
  return transformedWeatherData;

}
export function aqTraceFormat(trace) {
  console.log(trace);
  switch (trace) {
    case "co":
      return <>CO</>

      break;
    case 'no2':
      return <>NO<sub>2</sub></>

      break;
    case 'o3':
      return <>O<sub>3</sub></>

      break;
    case 'so2':
      return <>SO<sub>2</sub></>

      break;
    case 'pm2_5':
      return <>PM<sub>2.5</sub></>
      break;
    case 'pm10':
      return <>PM<sub>10</sub></>

      break;

    default:
      break;
  }
}



// const stateData = {
//   location: {
//     name: "London",
//     region: "City of London, Greater London",
//     country: "United Kingdom",
//     lat: 51.52,
//     lon: -0.11,
//     tz_id: "Europe/London",
//     localtime_epoch: 1636552149,
//     localtime: "2021-11-10 13:49"
//   },
//   current: {
//     last_updated_epoch: 1636551900,
//     last_updated: "2021-11-10 13:45",
//     temp_c: 13,
//     is_day: 1,
//     condition: {
//       text: "Mist",
//       icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
//       code: 1030
//     },
//     wind_kph: 9,
//     wind_dir: "W",
//     humidity: 100,
//     cloud: 75,
//     feelslike_c: 12.6,
//     uv: 3,
//     air_quality: {
//       co: 273.70001220703125,
//       no2: 37.70000076293945,
//       o3: 25.399999618530273,
//       so2: 15.100000381469727,
//       pm2_5: 5.199999809265137,
//       pm10: 7.099999904632568,
//       ['us-epa-index']: 1,
//       ['gb-defra-index']: 1
//     }
//   },
//   forecast: {
//     forecastday: [
//       // sent to transform Extended
//     ]
//   }
// }