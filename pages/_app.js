import Layout from '../components/Layout/Layout'
import { StoreProvider } from '../store/StoreContext'
import { initialState, StoreReducer } from '../store/StoreReducer'
import '../styles/globals.scss'
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }) {
    return (
        <StoreProvider initialState={initialState} reducer={StoreReducer} >
            <CssBaseline />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StoreProvider>
    )
}

export default MyApp
