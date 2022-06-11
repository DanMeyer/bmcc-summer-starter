import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import subwayPic from "../../../public/subway.jpeg"
import Welcome from "../../../components/welcome"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Components example</title>
        <meta name="description" content="Components example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Components
        </h1>

        <p className={styles.description}>
          Change this page by editing:{' '}
          <code className={styles.code}>pages/examples/ui/index.js</code>
        </p>

        <p>
          This page contains examples of: using custom and library components
        </p>

        <div>
          <p>
            Image component from the Next.JS library (<a href="https://nextjs.org/docs/api-reference/next/image">https://nextjs.org/docs/api-reference/next/image</a>)
          </p>

          <Image
            src={subwayPic}
          />
        </div>
        
        
        <div>
          <p>Super simple custom component:</p>
          <Welcome name="Alice" />
        </div>


      
      </main>

      <footer className={styles.footer}>
          Powered by Team A/B/C
      </footer>
    </div>
  )
}
