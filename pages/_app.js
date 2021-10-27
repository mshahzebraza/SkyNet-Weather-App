import { StoreProvider } from '../store/StoreContext'
import { initialState, StoreReducer } from '../store/StoreReducer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider initialState={initialState} reducer={StoreReducer} >
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
