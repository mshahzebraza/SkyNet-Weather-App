import { Navigation } from "../Navigation/Navigation"
// import Router from 'next/router';
import Head from 'next/head'

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
            <Head>
                <title>WheatherNet</title>
                <meta name="description" content="Search the state of current weather in your location with the amazingly fast web app powered by NEXT.JS" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <link key='googleFontsConnect' rel="preconnect" href="https://fonts.googleapis.com" />
                <link key='googleFontsCrossOrigin' rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link key='googleFonts'
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
            </Head>

            <Navigation />
            {/* <div className="container"> */}
            {props.children}
            {/* </div> */}
        </>
    )
}