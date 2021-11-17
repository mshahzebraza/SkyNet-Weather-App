import { useRouter } from "next/router"
import fetch from 'node-fetch';

export async function getStaticProps(context) {
  const { params: { query } } = context;

  const apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=df0dcf32a9b346308a814745212710&q=${query}&days=10&aqi=yes&alerts=no`)
  const apiJson = await apiResponse.json()

  return {
    props: {
      query,
      result: apiJson
    }
  }
}

export async function getStaticPaths() {
  // cont

  return {
    paths: [
      { params: { query: '1' } },
      { params: { query: '2' } },
      // { params: { query: '3' } },
    ],
    fallback: 'blocking'
  }
}

export default function WeatherPage(props) {
  const router = useRouter();
  console.log(`Query : ${props.query}`);
  console.log(`State :-`);
  console.log(props.result);

  function submitHandler(e) {
    e.preventDefault();

    router.push(e.target[0].value)
    // console.log();
    e.target[0].value = ''
  }

  async function changeHandler(e) {
    const searchQuery = e.target.value;
    console.log(searchQuery);

    if (searchQuery.trim().split("").length > 0) {
      const qryResponse = await fetch(`http://api.weatherapi.com/v1/search.json?key=df0dcf32a9b346308a814745212710&q=${searchQuery}`)
      const qryJson = await qryResponse.json();
      qryJson.length > 0 && qryJson.error === undefined && qryJson.forEach((cur, id) => {
        console.log(cur.name);
      });
    }
  }

  return (
    <>
      <h1>Weather Page</h1>
      <h4>Slug : {props.query}</h4>
      {/* <p>{router.query.query}</p> */}
      <form onSubmit={submitHandler}>
        <input type='text' onChange={changeHandler} />
        <button type='submit' >Submit</button>
      </form>
      <p></p>
    </>
  )
}
WeatherPage.displayName = `WeatherPage`