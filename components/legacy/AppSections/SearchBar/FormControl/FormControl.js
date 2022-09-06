import styles from './FormControl.module.scss';
export default function FormControl(props) {
  return (
    <div className={styles.formControl}>
      <button className={styles.btn} type="submit">Submit</button>
      {props.children}
    </div>
  )
}