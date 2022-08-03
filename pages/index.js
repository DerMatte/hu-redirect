import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hustlers Uni</title>
        <meta name="description" content="Hustlers University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href={process.env.AFFLIATE_URL} >Hustlers University 2.0</a>
        </h1>
      </main>
    </div>
  )
}
