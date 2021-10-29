import { useState } from 'react';
import styles from './MainForm.module.scss';
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

    <form className={styles.form} action="#" onSubmit={submitHandler} >

      <div className={styles.inputGroup}>
        <label htmlFor="location">Search Location</label>
        <input
          id='location'
          onChange={changeHandler}
          value={location}
          type="text"
          placeholder="Search for the location"
          required
        />
      </div>
      {props.errText && <pre className={styles.controlResponse} >{props.errText}</pre>}

      <div className={styles.controlGroup}>
        <button className={styles.btn} type="submit">Submit</button>
        <button className={styles.btn} onClick={props.reload}>Reload / Search Default</button>
      </div>

    </form>
  )
}

MainForm.displayName = `MainForm`
