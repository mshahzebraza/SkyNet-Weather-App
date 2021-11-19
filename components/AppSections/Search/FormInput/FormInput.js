import router, { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './FormInput.module.scss';
import Link from 'next/link';
// Component Body
export default function FormInput(props) {
  const router = useRouter();
  const [isFocussed, setIsFocussed] = useState(false);

  function changeHandler(e) {
    props.setValue(e.target.value)
  }
  function focusHandler(e) {
    setIsFocussed(true)
    // console.log(`focus`);
  }
  function blurHandler(e) {
    setIsFocussed(false)
    // console.log(`blur`);
  }
  function keyDownHandler(e) {
    e.keyCode === 27 && props.setValue('')
  }

  function clickHandler(e) {
    router.push(e.target.innerText.split(',')[0])
    props.setValue('')
  }


  return (
    <div className={styles.formInput}>

      {/* LABEL */}
      {props.label &&
        <label htmlFor={props.id} className={styles.label} >
          {props.label}
        </label>}

      {/* LABEL */}
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

      {/* Status Icon */}
      {
        isFocussed &&
        <p className={`${styles.status} ${props.isListDataValid ? styles.success : styles.failed}`} >
          {/* {props.isListDataValid ? props.listData.length : 0} */}
        </p>
      }

      {(props.isListDataValid) && (
        <ul className={styles.list} >
          {props.listData.map((cur, id) => {
            return (
              // <Link key={id} href={`/weather/${cur.split(',')[0]}`}>
              <li
                className={styles.listItem}
                key={id}
                onClick={clickHandler} >
                {cur}
                {/* <Link>s</Link> */}
                {/* <Link href={cur.split(',')[0]}>{cur} </Link> */}
              </li>
              // </Link>
            )
          })}
        </ul>
      )}



    </div >
  )
}