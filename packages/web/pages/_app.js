import '../styles/globals.css';
import MoviesProvider from '../../shared/context/moviesContext';

function MyApp({ Component, pageProps }) {
  return (
    <MoviesProvider>
      <Component {...pageProps} />
    </MoviesProvider>
  );
}

export default MyApp
