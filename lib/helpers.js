// HELPER FUNCTIONS
/**
 * @param  {string} query
 * @param  {string} key=process.env.API_KEY
 * @param  {number} days=3
 * @param  {string} aqi='no'
 * @param  {string} alerts='no'
 */
export const getURL = (
    query,
    key = process.env.NEXT_PUBLIC_API_KEY,
    days = 3,
    aqi = 'no',
    alerts = 'no'
) => (
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${query}&days=${days}&aqi=${aqi}&alerts=${alerts}`
)

export const formatDigits = (num = 0, digits = 2) => {
    const numStr = num.toString();
    const length = numStr.length
    const diff = digits - length;
    return Array(diff).fill('0').concat(numStr).join('')
}

export const formatHours12 = (hours = 24) => {
    if (hours < 12) {
        return [hours, 'AM']
    } else {
        return [hours - 12, 'PM']
    }
}

export const formatDayNum = (dayNum = 1) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
    return days[dayNum];
}

export const formatMonthNum = (monthNum = 1, trim = true, trimLength = 3) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    if (trim && months[monthNum].length > 4) {
        return months[monthNum].substring(0, trimLength)
    }
    return months[monthNum];
}

export const getFromEpoch = (epochTimeInMilliSeconds) => {
    const curTime = new Date(epochTimeInMilliSeconds);
    const date = formatDigits(curTime.getDate(), 2);
    const day = formatDayNum(curTime.getDay());
    const month = formatMonthNum(curTime.getMonth());
    const year = curTime.getFullYear();
    const [hours12, hoursSuffix] = formatHours12(curTime.getHours(), 2);
    const hours = formatDigits(hours12, 2);
    const minutes = formatDigits(curTime.getMinutes(), 2);
    const seconds = formatDigits(curTime.getSeconds(), 2);

    return { date, day, month, year, hours, hoursSuffix, minutes, seconds }
}

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

export function getRequest(requestType, queries) {
    const baseUrl = 'https://api.weatherapi.com/v1/';
    const key = 'df0dcf32a9b346308a814745212710'

    let queriesString = '';
    for (const key in queries) {
        queriesString.concat(`&${key}=${queries.key}`)
    }
    const requestUrl = `${baseUrl}${requestType}.json?key=${key}${queriesString}`

    return requestUrl;

}
export function capitalizer(string) {
    return string.toUpperCase()
}

export function roundOff(num, limit = 2) {
    return parseInt(num).toFixed(limit)
}

export function segregateProps(state) {

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

