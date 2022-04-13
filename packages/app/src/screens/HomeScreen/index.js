import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from '../../../../shared/components/SearchBar';
import styles from './styles';

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <SearchBar placeholder="Search for movie titles to get reviews" />
  </SafeAreaView>
);

export default HomeScreen;
