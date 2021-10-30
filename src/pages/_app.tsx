import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import '../styles/globals.css'
import { theme } from '../styles/theme'
import { ContextUserProvider } from '@Context/contextUser'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextUserProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextUserProvider>
  )
}
export default MyApp
