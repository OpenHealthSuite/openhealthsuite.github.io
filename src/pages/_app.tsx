import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Head from 'next/head'

const colors = {
  brand: {},
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
}
