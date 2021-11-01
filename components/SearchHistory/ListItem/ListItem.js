import styles from './ListItem.module.scss';
import closeSvg from '../../../public/vercel.svg';
import searchSvg from '../../../public/searchSvg.svg';
import Image from 'next/image';

export default function ListItem(props) {

  return (
    <li className={styles.item} >
      <span className={styles.itemName} >{props.children}</span>
      <div className={styles.itemControl}>
        <button className={`${styles.itemBtn} ${styles.itemRemove}`} onClick={props.remove}>
          <Image src='/closeSvg.svg' alt="close icon" width='100%' height='100%' />
        </button>
        <button className={`${styles.itemBtn} ${styles.itemSearch}`} onClick={props.search}>
          <Image src='/searchSvg.svg' alt="close icon" width='100%' height='100%' />
        </button>

      </div>
    </li>
  )
}