import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Box, Button, Text, Flex, Heading, UnorderedList, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import screenshotImage from './screenshot-web.png'
import logoImage from './logo.png'

export default function Diary() {
    return (
      <>
        <Head>
          <title>Diary :: OpenHealthSuite</title>
          <meta name="description" content="Diary :: Helping you track the food you eat" />
        </Head>
        <Flex
          marginTop={'2em'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          minHeight={'100vh'}>
            <Flex gap={'2em'}>
                <Image src={screenshotImage} width={300} alt='Image of a Mobile Phone showing the Diary interface'/>
                <Flex flexDirection={'column'}
                    alignItems={'center'}
                    gap={'1em'}>
                    <Image src={logoImage} width={300} alt='Food Diary Logo - A plate with a bite out of it, with a list on it.'/>
                    <Heading as='h1' 
                    size={'xl'}>
                        Diary
                    </Heading>
                    <Heading as='h2' 
                    size={'lg'} >
                        Because Food Should Be Simple
                    </Heading>
                    <Link href={"https://diary.openhealthsuite.com/"}>
                        <Button width={'100%'}>
                        Try It Now
                        </Button>
                    </Link>
                    <Text>* requires google account for login</Text>
                    <UnorderedList maxWidth={'300px'}>
                        <ListItem>Focus on what you eat, when, and for how long</ListItem>

                        <ListItem>Track without any gamification, data mining or notifications</ListItem>
                        <ListItem>Download, upload, or delete your data at any time</ListItem>
                        <ListItem>
                            Total freedom to track the metrics that matter to you - calories or
                            otherwise
                        </ListItem>
                    </UnorderedList>
                </Flex>
            </Flex>
        </Flex>
      </>
    )
  }