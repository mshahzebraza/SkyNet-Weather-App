import { useEffect } from 'react';
import Layout from '../components/Layout/Layout'
import '../styles/globals.scss'
import CssBaseline from '@mui/material/CssBaseline';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from '../lib/theme';
import { FullScreen, useFullScreenHandle } from "react-full-screen";


function FullScreenBtn({ handle: { active, enter, exit } }) {
    return (<Button variant='contained' color='nute' onClick={active ? exit : enter} sx={{
        display: {
            xs: 'none',
            md: "initial"
        },
        position: 'absolute',
        bottom: 10,
        right: 20
    }}>
        {active ? "Exit Full-Screen" : "Enter Full-Screen"}
    </Button>);
}


function MyApp({ Component, pageProps }) {
    const handle = useFullScreenHandle();


    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <FullScreenBtn handle={handle} />
            <FullScreen handle={handle} >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </FullScreen>
        </ThemeProvider>
    )
}

export default MyApp
