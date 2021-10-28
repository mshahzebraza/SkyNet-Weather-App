import { useState } from 'react';
import useStore from '../store/StoreContext';
import { addLocation } from '../store/StoreDispatchers';

export default function MainForm() {

  const [location, setLocation] = useState('');
  const { dispatch } = useStore();

  const changeLocationHandler = (e) => {
    setLocation(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addLocation(location));

    setLocation('');
  }

  return (
    <>
      <h1>Form</h1>

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
