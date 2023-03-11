import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Flex, Text } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

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
    <Flex minWidth={'100vw'}
      justifyContent={'center'}
      gap={'2em'}
      margin={'1em 0'}>
      <Link href="/"><Text textDecoration={'underline'}>Home</Text></Link>
      <Link href="/privacy"><Text textDecoration={'underline'}>Privacy</Text></Link>
      <Link href="/terms"><Text textDecoration={'underline'}>Terms</Text></Link>
    </Flex>
  </ChakraProvider>
}
