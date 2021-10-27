import { useState } from 'react';
import useStore from '../store/StoreContext';
import { addLocation } from '../store/StoreDispatchers';

export default function MainForm() {

  const [location, setLocation] = useState('');
  const { dispatch } = useStore()



  const changeLocationHandler = (e) => {
    setLocation(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(addLocation(location))

    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=df0dcf32a9b346308a814745212710&q=London&aqi=yes`
    );
    const data = await response.json()
    console.log(data);

    setLocation('')

  }

  return (
    <>
      <h1>HomePage</h1>

      <form action="#" onSubmit={submitHandler} >

        <input
          onChange={changeLocationHandler}
          value={location}
          type="text"
          placeholder="Search for the location"
        />

        <button type="submit">Submit</button>

      </form>
    </>
  )
}

MainForm.displayName = `MainForm`
