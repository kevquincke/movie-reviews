import Head from 'next/head';

import styles from '../styles/Home.module.css';
import SearchScreen from '../../shared/screens/SearchScreen';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie Reviews</title>
        <meta name="description" content="Movie Reviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchScreen />
      </main>
    </div>
  )
}
