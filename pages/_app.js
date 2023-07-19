import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@/store/store';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return <>
    <Head >
      <title>Reconsilation</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Provider store={store}>
      <Toaster />
      <Component {...pageProps} />
    </Provider>
  </>
}
