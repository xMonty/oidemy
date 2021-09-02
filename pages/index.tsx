import Footer from 'components/footer/Footer'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/Header'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oidemy</title>
        <meta name="description" content="Oidemy Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At a sequi suscipit, laboriosam obcaecati dignissimos natus nulla, veniam, iure veritatis debitis officia dicta dolor. Rem, obcaecati unde? Ut aliquam dolorem, aliquid ad explicabo harum vel aspernatur sequi libero expedita voluptatibus eligendi ratione assumenda? Recusandae libero, repellat molestiae ut magnam exercitationem!
      </main>
      <Footer/>
    </div>
  )
}

export default Home
