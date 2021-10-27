

export default function ListItem(props) {

  return (
    <li >
      {props.children}
      <button onClick={props.click}>Remove</button>
      <button onClick={props.click}>Search</button>
    </li>
  )
}