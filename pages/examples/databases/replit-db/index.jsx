import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Database from '@replit/database'

/*

Replit's built-in database:
https://docs.replit.com/hosting/database-faq

-----

For complex keys, try naming them via the "Object:id:subobjects" syntax, a la Redis:
https://riptutorial.com/redis/example/13636/key-naming-schemes
https://stackoverflow.com/questions/6965451/redis-key-naming-conventions

For example:
 - user:alice
 - team:a
 - city:nyc:borough:brooklyn:gdp

-----

I assume this db will get replaced with MongoDB, Postgres, etc

*/

async function incrementAndFetchVisitorCount() {
  const db = new Database();
  const currentVisitorCount = await db.get("visitorCount");
  let newVisitorCount;
  if (!currentVisitorCount) {
    await db.set("visitorCount", 1);
    newVisitorCount = 1;
  } else {
    newVisitorCount = currentVisitorCount + 1;
  }
  await db.set("visitorCount", newVisitorCount);
  
  return newVisitorCount;
}


export async function getServerSideProps(context) {
  return {
    props: {visitorCount : await incrementAndFetchVisitorCount()}, // will be passed to the page component as props
  }
}

export default function Home(props) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Database example</title>
        <meta name="description" content="Database Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Database example
        </h1>

        <p className={styles.description}>
          Change this page by editing:{' '}
          <code className={styles.code}>pages/examples/db/index.js</code>
        </p>

        <p>
          This page contains an example of: using the built-in Replit database
        </p>

        Visitor count: {props.visitorCount}
        

      </main>

      <footer className={styles.footer}>
          Powered by Team A/B/C
      </footer>
    </div>
  )
}
