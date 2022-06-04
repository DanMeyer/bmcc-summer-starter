import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About our project</title>
        <meta name="description" content="About our project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          About our project
        </h1>

        <p className={styles.description}>
          Change this page by editing:{' '}
          <code className={styles.code}>pages/about/index.js</code>
        </p>

        <p>
          This page contains examples of: using custom and library components
        </p>
        

      </main>

      <footer className={styles.footer}>
          Powered by Team A/B/C
      </footer>
    </div>
  )
}
