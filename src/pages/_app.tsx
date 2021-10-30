import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import '../styles/globals.css'
import { theme } from '../styles/theme'
import { ContextUserProvider } from '@Context/contextUser'
import { ContextAppProvider } from '@Context/contextApp'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextAppProvider>
      <ContextUserProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ContextUserProvider>
    </ContextAppProvider>
  )
}
export default MyApp
