import Controls from 'common/Controls/Controls';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/Image';
import { useState } from 'react';
import styles from 'styles/Home.module.scss';

const Home: NextPage = () => {
  const [heroSearch, setHeroSearch] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Oidemy</title>
        <meta name="description" content="Oidemy Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.heroimage}>
          <div className={styles.heroContent}>
            <h1>Learning that gets you</h1>
            <p>Skills for your present (and your future). Get started with us.</p>
            <Controls.UdInput 
              placeholder='What do you want to learn?'
              value={heroSearch}
              onChange={(value)=> setHeroSearch(value)}
              inputType={Controls.UdInputType.primary}  
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
