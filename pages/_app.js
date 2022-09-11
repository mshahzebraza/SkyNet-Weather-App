import Layout from '../components/Layout/Layout'
import { StoreProvider } from '../store/StoreContext'
import { initialState, StoreReducer } from '../store/StoreReducer'
import '../styles/globals.scss'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { theme } from '../lib/theme';


function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme} >
            <StoreProvider initialState={initialState} reducer={StoreReducer} >
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </StoreProvider>
        </ThemeProvider>
    )
}

export default MyApp
