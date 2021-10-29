

export default function ListItem(props) {

  return (
    <li >
      {props.children}
      <button onClick={props.remove}>Remove</button>
      <button onClick={props.search}>Search</button>
    </li>
  )
}