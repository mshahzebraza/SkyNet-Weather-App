import useStore from "../store/StoreContext"

export default async function CurrentWeather(props) {
  const { state } = useStore()
  // const { currentLocation } = state;


  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${currentLocation}&aqi=yes`
  );
  // const data = await response.json()
  // console.log(data);

  return (
    <div className='card'>
      {props.info}
    </div>
  )
}