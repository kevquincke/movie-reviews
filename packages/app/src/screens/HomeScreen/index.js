import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from '../../../../shared/components/SearchBar';
import styles from './styles';

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <SearchBar />
  </SafeAreaView>
);

export default HomeScreen;
