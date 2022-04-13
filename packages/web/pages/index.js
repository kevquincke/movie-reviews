import Head from 'next/head';

import SearchBar from '../../shared/components/SearchBar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie Reviews</title>
        <meta name="description" content="Movie Reviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchBar />
      </main>
    </div>
  )
}
