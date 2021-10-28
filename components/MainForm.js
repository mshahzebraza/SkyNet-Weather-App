import { useState } from 'react';

export default function MainForm(props) {

  const [location, setLocation] = useState('');

  const changeHandler = (e) => {
    setLocation(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    props.submit(location)

    setLocation('');
  }

  return (
    <>
      <h1>Location Search Form</h1>

      <form action="#" onSubmit={submitHandler} >

        <input
          onChange={changeHandler}
          value={location}
          type="text"
          placeholder="Search for the location"
          required
        />
        {props.errText && <pre>{props.errText}</pre>}

        <button type="submit">Submit</button>

      </form>
    </>
  )
}

MainForm.displayName = `MainForm`
