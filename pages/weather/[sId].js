import { useRouter } from "next/router"

export async function getStaticProps(context) {
  // console.log(params);
  // console.log(context);
  // console.log(context.params.sId);

  return {
    props: {
      pNum: context.params.sId,
      detail: "This page contains the details"
    }
  }
}

export async function getStaticPaths() {
  // cont
  return {
    paths: [
      { params: { sId: '1' } },
      { params: { sId: '2' } },
      // { params: { sId: '3' } },
    ],
    fallback: 'blocking'
  }
}

export default function WeatherPage(props) {
  const router = useRouter();

  function submitHandler(e) {
    e.preventDefault();

    router.push(e.target[0].value)
    // console.log();
    e.target[0].value = ''
  }

  return (
    <>
      <h1>Weather Page</h1>
      <h4>Slug : {props.pNum}</h4>
      {/* <p>{router.query.sId}</p> */}
      <form onSubmit={submitHandler}>
        <input type='text' />
        <button type='submit' >Submit</button>
      </form>
      <p></p>
    </>
  )
}
WeatherPage.displayName = `WeatherPage`