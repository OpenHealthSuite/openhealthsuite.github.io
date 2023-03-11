import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>OpenHealthSuite</title>
        <meta name="description" content="OpenHealthSuite :: Helping you track your physical health, with you in control." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={`${inter.className} ${styles.heading}`}>
          OpenHealthSuite
        </h1>
        <h2 className={`${inter.className} ${styles.heading}`}>
          Helping you track your physical health,<br/>with you in control.
        </h2>
      </main>
    </>
  )
}
