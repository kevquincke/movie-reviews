import React, { useMemo } from 'react';
import { View, Text, FlatList, ActivityIndicator, Platform } from 'react-native';
import { array, bool } from 'prop-types';

import NoResults from '../../assets/icons/noResults.svg';
import ReviewCard from '../ReviewCard';
import styles from './styles';

const SearchResults = ({ results, isLoading }) => {
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (!results) {
    return (
      <Text style={styles.placeholderTitle}>
        Search for any movie to view the reviews. Once you wrote the title press Enter to search
      </Text>
    )
  }

  if (!results.length) {
    return (
      <View style={styles.noResultsContainer}>
        <NoResults width={165} height={140} />
        <Text style={styles.noResultsTitle}>No results found</Text>
        <Text style={styles.noResultsSub}>Please try again with a different movie title.</Text>
      </View>
    )
  }

  const isWeb = useMemo(() => Platform.OS === 'web', [Platform]);

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        numColumns={isWeb ? 3 : 1}
        renderItem={({ item: {
          displayTitle,
          summaryShort,
          byline,
          mpaaRating,
          multimedia,
          publicationDate,
          link,
        } }) =>
          <ReviewCard
            displayTitle={displayTitle}
            summaryShort={summaryShort}
            byline={byline}
            mpaaRating={mpaaRating}
            multimedia={multimedia}
            publicationDate={publicationDate}
            link={link}
          />
        }
        keyExtractor={({ displayTitle }, index) => `${displayTitle}-${index}`}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={isWeb && styles.columnWrapper}
      />
    </View>
  );
}

SearchResults.propTypes = {
  results: array,
  isLoading: bool,
};

export default SearchResults;
