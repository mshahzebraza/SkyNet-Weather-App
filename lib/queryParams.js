// `https://api.weatherapi.com/v1/forecast.json?key=df0dcf32a9b346308a814745212710&q=${location}&days=10&aqi=yes&alerts=no`
// `http://api.weatherapi.com/v1/search.json?key=df0dcf32a9b346308a814745212710&q=${searchQuery}`
export const queryParams = {
  baseUrl: 'https://api.weatherapi.com/v1/',
  requestType: 'forecast',
  key: '.json?key=df0dcf32a9b346308a814745212710&q=',
}