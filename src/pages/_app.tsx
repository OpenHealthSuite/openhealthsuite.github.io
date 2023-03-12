import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

const colors = {
    brand: {},
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
    return <ChakraProvider theme={theme}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
        <Component {...pageProps} />
        <Flex minWidth={"100vw"}
            justifyContent={"center"}
            gap={"2em"}
            margin={"1em 0"}>
            <Link href="/"><Text textDecoration={"underline"}>Home</Text></Link>
            <Link href="/privacy"><Text textDecoration={"underline"}>Privacy</Text></Link>
            <Link href="/terms"><Text textDecoration={"underline"}>Terms</Text></Link>
        </Flex>
    </ChakraProvider>;
}
