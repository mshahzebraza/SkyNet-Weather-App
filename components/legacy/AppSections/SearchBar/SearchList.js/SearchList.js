import styles from './SearchList.module.scss';
import { useRouter } from "next/router";


export default function SearchList(props) {
  const router = useRouter()

  function clickHandler(e) {
    router.push(e.target.innerText.split(',')[0])
    props.querySetter('')
  }

  if (props.showList && props.isListDataValid) {
    return <ul className={styles.list} >
      {props.listData.map((cur, id) => {
        return <li
          className={styles.listItem}
          key={id}
          onClick={clickHandler}
        >
          {cur}
        </li>
      })}
    </ul>
  }
  // else if (!props.showList && props.isListDataValid) {
  //   return <p>Loaded</p>
  // }
  // else {
  //   return <p>{props.data}</p>
  // }
  else {
    return null
  }

}
SearchList.displayName = 'SearchList'