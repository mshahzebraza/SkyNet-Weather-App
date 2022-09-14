import { useEffect } from 'react';
import Layout from '../components/Layout/Layout'
import '../styles/globals.scss'
import CssBaseline from '@mui/material/CssBaseline';
import { Button, ThemeProvider } from '@mui/material';
import { theme } from '../lib/theme';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function MyApp({ Component, pageProps }) {
    const handle = useFullScreenHandle();


    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Button
                variant='contained'
                onClick={handle.active ? handle.exit : handle.enter}
                sx={{
                    position: 'fixed',
                    bottom: 10,
                    right: 20,
                }}
            >
                {handle.active ? "Exit Full-Screen" : "Enter Full-Screen"}
            </Button>
            <FullScreen handle={handle} >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </FullScreen>
        </ThemeProvider>
    )
}

export default MyApp
