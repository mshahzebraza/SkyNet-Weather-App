import Navigation from "../Navigation/Navigation"
// import Router from 'next/router';
import Head from 'next/head'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
// // you can then hook into there events

function LayoutHead() {
    return (<Head>
        <title>SkyNet</title>
        <meta name="description" content="Search the state of current weather in your location with the amazingly fast web app powered by NEXT.JS" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    </Head>);
}



function LayoutBody({ children }) {

    const outerCtnrStyles = ({ palette: { primary, nute } }) => ({
        background: "#b52020",
        // background: "url('./bg/svgPattern.svg')",
        gap: { xs: 2, md: 0 },
        height: "100vh"
    })

    const innerCtnrStyles = ({ palette: { primary, nute } }) => ({
        height: '100%',
        alignItems: 'center',
        // mx: "auto",
        maxWidth: "92vw",

    })
    return (<Grid
        container
        direction='column'
        wrap='nowrap'
        sx={outerCtnrStyles}
    >

        { /* Navigation */}
        <Grid item>
            <Navigation />
        </Grid>

        { /* Container */}
        <Grid item container sx={innerCtnrStyles}>
            <Container maxWidth="xl">
                {children}
            </Container>
        </Grid>

    </Grid>);
}


export default function Layout({ children }) {



    return (
        <>
            <LayoutHead />
            <LayoutBody>{children}</LayoutBody>
        </>
    )
}