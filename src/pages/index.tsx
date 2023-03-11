import Head from 'next/head'
import { Inter } from 'next/font/google'
import React from 'react'
import { Button, Container, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

enum ProjectStatus {
  Live,
  InDevelopment,
  Planned
}

const ProjectStatusLabels = {
  [ProjectStatus.Live]: 'Live',
  [ProjectStatus.InDevelopment]: 'In Development',
  [ProjectStatus.Planned]: 'Planned',
}

type ProjectDefinition = {
  name: string;
  summary: string;
  status: ProjectStatus,
  links: {
    App?: string,
    About?: string,
    Github?: string
  }
}

const Projects: ProjectDefinition[] = [
  { 
    name: "Diary",
    summary: "Track your food",
    status: ProjectStatus.Live,
    links: {
      App: "https://diary.openhealthsuite.com",
      About: "https://openfooddiary.com",
      Github: "https://github.com/OpenHealthSuite/diary"
    }
  },
  { 
    name: "Dashboard",
    summary: "See your data",
    status: ProjectStatus.InDevelopment,
    links: {
      App: "https://dashboard.openhealthsuite.com",
      Github: "https://github.com/OpenHealthSuite/dashboard"
    }
  },
  { 
    name: "Planner",
    summary: "Plan your exercize",
    status: ProjectStatus.Planned,
    links: {
    }
  },
  { 
    name: "Tracker",
    summary: "Generate your data",
    status: ProjectStatus.Planned,
    links: {
    }
  }
]

const ProjectButtonKeys: (keyof ProjectDefinition['links'])[] = ["App", "About", "Github"];

const ProjectCard: React.FC<ProjectDefinition> = ({ name, summary, links, status }) => {
  return <Container
      border={'1px solid'} 
      margin={'1em'} 
      padding={'1em'}
      borderRadius={'1em'}
      width={'300px'}
      >
    <Heading as='h3' size={'md'} textAlign={'center'}>{name}</Heading>
    <Heading as='h4' 
      size={'sm'} 
      textAlign={'center'}
      marginBottom={'1em'}>{summary}
    </Heading>
    <Heading as='h5' 
      size={'xs'} 
      textAlign={'center'}
      marginBottom={'1em'}>
      {ProjectStatusLabels[status]}
    </Heading>
      {ProjectButtonKeys.map(key => {
        if (links[key] !== undefined ) {
          return <Link key={key} href={links[key]!}>
            <Button width={'100%'} margin={'0.2em 0'}>
              {key}
            </Button>
          </Link>
        }
        return <Button key={key} 
          width={'100%'}
          margin={'0.2em 0'}
          isDisabled
          >
          {key}
        </Button>
      })}
  </Container>
}


export default function Home() {
  return (
    <>
      <Head>
        <title>OpenHealthSuite</title>
        <meta name="description" content="OpenHealthSuite :: Helping you monitor your physical health, with you in control." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        marginTop={'2em'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        minHeight={'100vh'}>
        <Heading as='h1' 
          size={'xl'} 
          textAlign={'center'}
          marginBottom={'0.5em'}>
          OpenHealthSuite
        </Heading>
        <Heading as='h2' 
          size={'lg'} 
          textAlign={'center'}
          marginBottom={'1em'}>
          Helping you monitor your physical health,<br/>with you in control.
        </Heading>
        <Flex flexDirection={'row'} flexWrap={'wrap'} justifyContent={'center'}>
          {Projects.map(def => <ProjectCard key={def.name} {...def} />)}
        </Flex>
      </Flex>
    </>
  )
}
