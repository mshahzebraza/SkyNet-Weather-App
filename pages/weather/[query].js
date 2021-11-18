import { useRouter } from "next/router"
import fetch from 'node-fetch';
import { useState } from "react";

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
  const [searchOptions, setSearchOptions] = useState({ valid: false, data: 'No input' });

  function submitHandler(e) {
    e.preventDefault();

    router.push(e.target[0].value)
    // console.log();
    e.target[0].value = ''
  }

  async function changeHandler(e) {
    const searchQuery = e.target.value;

    // console.log(searchQuery);

    if (searchQuery.trim().split("").length > 0) {
      // !NOTE: use SWR hook from NEXT js
      const qryResponse = await fetch(`http://api.weatherapi.com/v1/search.json?key=df0dcf32a9b346308a814745212710&q=${searchQuery}`)

      const qryJson = await qryResponse.json();
      // const options = qryJson.length > 0 && qryJson.error === undefined && qryJson.map((cur, id) => cur.name);

      if (qryJson.error !== undefined) {
        console.log('Input Error');
        // console.log(error);
        setSearchOptions({
          valid: false,
          data: error
        })
      }
      if (qryJson.length === 0) {
        console.log(`No Matching Found`);
        setSearchOptions({
          valid: false,
          data: 'No Match found'
        })
        console.log(qryJson);
      }
      if (qryJson.length > 0) {
        setSearchOptions({
          valid: true,
          data: qryJson.map((cur, id) => cur.name)
        })
      }

      // const options =  && qryJson.map((cur, id) => cur.name);

      // !!options && setSearchOptions(options)
    } else {
      setSearchOptions({ valid: false, data: 'No input' })
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
      {
        !searchOptions.valid && <p>{searchOptions.data}</p>
      }
      {
        searchOptions.valid && searchOptions.data.map((cur, id) => {
          return <p onClick={(e) => router.push(e.target.innerText.split(',')[0])} key={id} > {cur}</p>
        })
      }
    </>
  )
}
WeatherPage.displayName = `WeatherPage`