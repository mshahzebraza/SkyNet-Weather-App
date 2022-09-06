import styles from './DetailItem.module.scss';

export default function DetailItem({ label, value }) {

  return (
    <li className={styles.detailItem} >
      <span className={styles.detailLabel} >
        {label}
      </span>
      <span className={styles.detailValue} >
        {value}
      </span>
    </li >
  )
}