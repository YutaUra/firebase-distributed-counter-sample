import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { VFC } from 'react'
import { theme } from '../lib/theme'

const App: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
