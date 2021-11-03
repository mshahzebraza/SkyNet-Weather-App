import { Navigation } from "../Navigation/Navigation"
// import Router from 'next/router';

// // you can then hook into there events

// Router.onRouteChangeStart = () => {

// };

// Router.onRouteChangeComplete = () => {
//   window.scroll({
//     top: 0,
//     left: 0,
//   });
// };

// Router.onRouteChangeError = () => {

// };


export default function Layout(props) {
  return (
    <>
      <Navigation />
      <div className="container">
        {props.children}
      </div>
    </>
  )
}