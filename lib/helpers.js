// HELPER FUNCTIONS

export function mergeClasses(classes) {
  const allClasses = classes.reduce((acc, cur, arr) => {
    return acc.concat(` ${cur}`);
  }, '');
  // console.log(allClasses);
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


// Object Deep Copy
export function getCopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

// // Date string to Date & Time
// export function dateSeparator(dateString) {
//   const newDateObj = new Date(dateString)

//   return {
//     newDate: newDateObj.toLocaleTimeString(),
//     newTime: newDateObj.toLocaleDateString()
//   }
// }

export function capitalizer(string) {
  return string.toUpperCase()
}

export function roundOff(num, limit = 2) {
  return parseInt(num).toFixed(limit)
}

export function segregateProps(state) {

  // console.log(`Running segregateProps...`);

  // Total transformation
  const newState = {
    welcome: {
      city: state.weather.city,
      country: state.weather.country,
      localTime: state.weather.localTime,
      isDay: state.isDay,
    },
    highlights: {
      city: state.weather.city,
      // date: state.weather.localTime.date,
      condition: state.weather.condition,
      temp: state.weather.temp,
      feelsLike: state.weather.feelsLike,
      wind: state.weather.windSpeed,
      humidity: state.weather.humidity
    },
    weekly: state.weather.extendedForecast.map((cur, id) => {
      return {
        time: cur.time,
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
      return { time: cur.time, rain: cur.rainChances }
    }),
    solar: state.weather.extendedForecast.map((cur, id) => {
      return { time: cur.time, sunrise: cur.astro.sunrise, sunset: cur.astro.sunset }
    })
  }


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
  const epochDateObj = new Date(epoch * 1000);

  const fullDate = epochDateObj.toDateString().split(" ");
  const [fullTime, period] = epochDateObj.toLocaleTimeString().split(" ");
  const [day, month, date, year] = fullDate;
  const [hour, min, sec] = fullTime.split(":")

  return {
    epoch,
    hour,
    min,
    sec,
    period,
    day,
    date,
    month,
    year,
  }
}

export function transformExtendedWeather(fcDays) {

  // console.log(`Running transformExtendedWeather`);

  return fcDays.map((curDay, curDayId) => {
    const fullTime = epochToTime(curDay.date_epoch);
    return {
      time: fullTime,
      temp: curDay.day.avgtemp_c,
      rainChances: curDay.day.daily_chance_of_rain,
      condition: curDay.day.condition,
      astro: curDay.astro
    }
  })

}

export function transformWeather(apiData) {
  // console.log(`Running transformWeather`);

  const { name: city, country, localtime_epoch: localTime } = apiData.location;
  const { is_day: isDay, condition, temp_c: temp, feelslike_c: feelsLike, humidity, wind_kph: windSpeed, last_updated_epoch: updateTime,
    // air_quality: airQuality,
    air_quality: {
      ['us-epa-index']: aqStatus,
      ['gb-defra-index']: ukDefraIndex,
      ...rest
    }
  } = apiData.current;


  const extendedForecast = transformExtendedWeather(apiData.forecast.forecastday);

  const transformedWeatherData = {
    city,
    country,
    localTime: epochToTime(localTime),
    updateTime: epochToTime(updateTime),
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

  return transformedWeatherData;

}
export function aqTraceFormat(trace) {
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

