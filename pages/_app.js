import Layout from '../components/Layout/Layout'
import { StoreProvider } from '../store/StoreContext'
import { initialState, StoreReducer } from '../store/StoreReducer'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider initialState={initialState} reducer={StoreReducer} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  )
}

export default MyApp
