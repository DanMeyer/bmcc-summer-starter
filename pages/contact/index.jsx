import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact us</title>
        <meta name="description" content="Contact us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact
        </h1>

        <p className={styles.description}>
          Change this page by editing:{' '}
          <code className={styles.code}>pages/contact/index.js</code>
        </p>

        <p>
          This page contains an example of: using the built-in Replit database
        </p>
        

      </main>

      <footer className={styles.footer}>
          Powered by Team A/B/C
      </footer>
    </div>
  )
}
