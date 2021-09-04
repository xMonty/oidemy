import 'styles/globals.scss'
import type { AppProps } from 'next/app'

import AppLayout from 'components/applayout/AppLayout';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
export default MyApp
