import type { AppProps } from 'next/app'

import '../styles/globals.css'

import { ContextUserProvider } from '@Context/contextUser'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextUserProvider>
      <Component {...pageProps} />
    </ContextUserProvider>
  )
}
export default MyApp
