// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  res.status(200).json({ name: 'John Doe' })

  // const fetchHandler = useCallback(async (location = `Washington`) => {

  try {

    console.log(`fetch Running ...`);
    console.log(`fetch Location: ${location}`);
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=${location}&aqi=yes`)

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      dispatch(searchCurrent(data))
    } else
      if (!response.ok) {
        const errorData = await response.json()
        const { code: errCode, message: errMsg } = errorData.error
        throw new Error(errMsg);
      }

  } catch (error) {
    console.error(error);
  }
}