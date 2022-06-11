import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Database from '@replit/database'

export default function Home(props) {
  
  return (
    <div className={styles.container}>
      About Us

      <footer className={styles.footer}>
          Powered by Team A/B/C
      </footer>
    </div>
  )
}
