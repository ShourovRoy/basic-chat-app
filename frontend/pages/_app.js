import Layout from "../components/layouts/Layout"
import store from '../redux/global/store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
