import 'styles/globals.scss';
import type { AppProps } from 'next/app';

import { store } from 'app/store';
import { Provider } from 'react-redux';

import AppLayout from 'components/applayout/AppLayout';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  )
}
export default MyApp;
