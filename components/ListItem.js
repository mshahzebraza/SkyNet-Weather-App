

export default function ListItem(props) {

  return (
    <li onClick={props.click} >
      {props.children}
    </li>
  )
}