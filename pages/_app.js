import '../styles/globals.css'
import Layout from '../components/layout'

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8000/api/v1/';
} else {
  baseURL = 'https://hobbyhelper-app.herokuapp.com/';
}

console.log('current base URL:', baseURL)

export default function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}