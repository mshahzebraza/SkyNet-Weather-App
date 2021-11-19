import { useState } from 'react';
import styles from './FormInput.module.scss';

// Component Body
export default function FormInput(props) {

  // console.log(props.listData);

  function changeHandler(event) {
    props.setValue(event.target.value)
  }
  function focusHandler(e) {
    props.showList(true)
    // console.log(`focus`);
  }
  function blurHandler(e) {
    props.showList(false)
    // console.log(`blur`);
  }
  function keyDownHandler(e) {
    e.keyCode === 27 && props.setValue('')
  }


  return (
    <div className={styles.formInput}>


      {props.label &&
        <label htmlFor={props.id} className={styles.label} >
          {props.label}
        </label>}

      <input
        id={props.id}
        // list='none'
        list='autocomplete'
        autoComplete='off'
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onKeyDown={keyDownHandler}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        required={props.isReq}
        className={styles.input}
      />

      {/* Error Text */}
      {
        props.isListDataValid &&
        // !props.isListShown &&
        <p className={`${styles.stay} ${styles.qty}`} >
          {props.listDataQty}
        </p>
      }
      {
        !props.isListDataValid &&
        props.isListShown &&
        <p className={`${styles.stay} ${styles.error}`} >
          No match found
        </p>
      }

      {/* {!props.isListDataValid && props.isListShown && <p className={styles.stay} >{props.listDataQty}</p>} */}
      {/* {
        errorText &&
        <p className={styles.errorText}>
          {errorText}
        </p>
      } */}

    </div >
  )
}