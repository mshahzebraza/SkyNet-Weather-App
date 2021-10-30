import styles from './ListItem.module.scss';

export default function ListItem(props) {

  return (
    <li className={styles.locItem} >
      <span className={styles.locName} >{props.children}</span>
      <div className={styles.controls}>
        <button className={`${styles.btn} ${styles.remove}`} onClick={props.remove}>X</button>
        <button className={`${styles.btn} ${styles.search}`} onClick={props.search}>O.</button>

      </div>
    </li>
  )
}