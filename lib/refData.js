
//  ------- RAW API DATA - against requestType = 'forecast' 
const rawApiData = {
  location: {
    name: "Minns",
    region: "Fresh Creek",
    country: "Bahamas",
    lat: 24.7,
    lon: -77.77,
    tz_id: "America/Nassau",
    localtime_epoch: 1637236016,
    localtime: "2021-11-18 6:46"
  },
  current: {
    last_updated_epoch: 1637235900,
    last_updated: "2021-11-18 06:45",
    temp_c: 26,
    is_day: 1,
    condition: {
      text: "Light rain",
      icon: "//cdn.weatherapi.com/weather/64x64/day/296.png",
      code: 1183
    },
    wind_kph: 19.1,
    wind_dir: "E",
    humidity: 79,
    cloud: 75,
    feelslike_c: 28.5,
    uv: 1,
    air_quality: {
      co: 227,
      no2: 1.399999976158142,
      o3: 85.80000305175781,
      so2: 1,
      pm2_5: 3.9000000953674316,
      pm10: 7.400000095367432,
      // us- epa - index: 1,
      // gb- defra - index: 1
    }
  },
  forecast: {
    forecastday: [
      {
        date: "2021-11-18",
        date_epoch: 1637193600,
        day: {
          avgtemp_c: 26.2,
          totalprecip_mm: 15.4,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 89,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Moderate rain",
            icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
            code: 1189
          }
        },
        astro: {
          sunrise: "06:29 AM",
          sunset: "05:23 PM"
        },
        hour: [
          {
            condition: {}
          },
          // ...
        ]
      },
      // ... ...
    ]
  }
}

//  ------- TRANSFORMED API DATA

const transformedApiData = {
  isLoading: false,
  isValid: false,
  weather: {
    city: '',
    country: '',
    localTime: {},
    updateTime: {},
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
        condition: {
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
}




//  -------  COMPONENT PROPS

// Weather Props
const welcomeData = {
  time: '03:00 PM',
  day: 'Wednesday',
  date: '04 April 2021',
  isDay: true,
}

// Air Quality Props
const airQualityData = {
  location: 'England',
  status: 'Good',
  comment: 'A perfect day for a walk',
  traces: [
    {
      type: 'O2',
      amount: '50%'
    },
    {
      type: 'NO2',
      amount: '14%'
    },
    {
      type: 'CO2',
      amount: '4%'
    },
    {
      type: 'CO',
      amount: '1%'
    },
    {
      type: 'H',
      amount: '1%'
    },
  ]
}


// Highlights Props
const highlightsData = {
  city: 'Pakistan',
  date: '04 April 2021',
  condition: {},
  temp: '29',
  feelsLike: '30',
  wind: '19',
  humidity: '55',
}

// Rainfall Props
const rainfallData = [
  { date: '01', rain: 50 },
  { date: '02', rain: 18 },
  { date: '03', rain: 75 },
  { date: '04', rain: 25 },
  { date: '05', rain: 66 },
  { date: '06', rain: 32 },
  { date: '07', rain: 88 },
  { date: '08', rain: 10 },
  { date: '09', rain: 18 },
  { date: '10', rain: 75 },
  { date: '11', rain: 25 },
  { date: '12', rain: 66 },
  { date: '13', rain: 32 },
  { date: '14', rain: 88 },
]

// Solar Props
const solarData = [
  { location: 'Pakistan', sunrise: '06:40', sunset: '07:00' },
  { location: 'India', sunrise: '06:40', sunset: '07:00' },
  { location: 'Bangladesh', sunrise: '06:40', sunset: '07:00' },
  { location: 'England', sunrise: '06:40', sunset: '07:00' },
  { location: 'Africa', sunrise: '06:40', sunset: '07:00' },
]

// Week Forecast Props
const weekForecastData = [
  {
    condition: {
      icon: '/weather/thunder.png'
    },
    day: 'Mon',
    temp: 27
  },
  {
    condition: {
      icon: '/weather/thunder.png'
    },
    day: 'Tue',
    temp: 28
  },
  {
    condition: {
      icon: '/weather/thunder.png'
    },
    day: 'Wed',
    temp: 35
  },
];


const keyCodes = {
  escape: 27,
  enter: 13,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  space: 32,
  ctrl: 17,
  backspace: 8,
}

/*
  [
    { date: '01', rain: 50 }
  ]
  */

