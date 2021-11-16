
/* 
const x = 
{
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



const welcomeData = {
  time: '03:00 PM',
  day: 'Wednesday',
  date: '04 April 2021',
  isDay: true,
}


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


const highlightsData = {
  city: 'Pakistan',
  date: '04 April 2021',
  condition: {},
  temp: '29',
  feelsLike: '30',
  wind: '19',
  humidity: '55',
}

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

const solarData = [
  { location: 'Pakistan', sunrise: '06:40', sunset: '07:00' },
  { location: 'India', sunrise: '06:40', sunset: '07:00' },
  { location: 'Bangladesh', sunrise: '06:40', sunset: '07:00' },
  { location: 'England', sunrise: '06:40', sunset: '07:00' },
  { location: 'Africa', sunrise: '06:40', sunset: '07:00' },
]

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