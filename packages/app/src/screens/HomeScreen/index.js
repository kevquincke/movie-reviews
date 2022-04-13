import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchScreen from '../../../../shared/screens/SearchScreen';
import styles from './styles';

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <SearchScreen />
  </SafeAreaView>
);

export default HomeScreen;
