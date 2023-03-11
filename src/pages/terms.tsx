import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Box, Button, Text, Flex, Heading, UnorderedList, ListItem, Container } from '@chakra-ui/react'
import Link from 'next/link'
import screenshotImage from './screenshot-web.png'
import logoImage from './logo.png'

export default function Diary() {
    return (
      <>
        <Head>
          <title>Terms of Service :: OpenHealthSuite</title>
        </Head>
       <Container marginTop={'2em'}>
        <Heading as='h1' textAlign={'center'}>Terms of Service</Heading>
        <Text>OpenHealthSuite is provided as-is, privately hosted at the administrator&apos;s discretion. 
          All efforts will be made to ensure reliable service, security and data integrity, however nothing is guarunteed.</Text>
       </Container>
      </>
    )
  }