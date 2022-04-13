import React, { useCallback, useContext, useState } from 'react';
import { Text, View } from 'react-native';

import SearchAPI from '../../api/nyTimesSearchAPI';
import SearchInput from '../../components/SearchInput';
import SearchResults from '../../components/SearchResults';
import { MoviesContext } from '../../context/moviesContext';

import styles from './styles';

const SearchScreen = () => {
  const { movies, setMovies } = useContext(MoviesContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const onSearch = useCallback(async (searchTerm) => {
    setLoading(true);
    try {
      const { data: { results } } = await SearchAPI.doSearch(searchTerm);
      setLoading(false);
      setError(null);
      setMovies(results ? results : []);
    } catch(error) {
      setError(error?.message);
      setLoading(false);
    }
  }, [setLoading, setMovies]);

  const onClearQuery = useCallback(() => {
    setMovies(null);
  }, [setMovies]);

  return (
    <View style={styles.container}>
      <SearchInput
        placeholder="Search for movie titles to get reviews"
        onClearQuery={onClearQuery}
        onSearch={onSearch}
      />
      <View style={styles.resultsContainer}>
        {error
          ? <Text style={styles.error}>{`Please try again, there was an error. More info: ${error}`}</Text>
          : <SearchResults results={movies} isLoading={loading} />
        }
      </View>
    </View>
  );
};

export default SearchScreen;
