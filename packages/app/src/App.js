import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigator from './navigators';
import MoviesProvider from '../../shared/context/moviesContext';

const App = () => (
  <SafeAreaProvider>
    <MoviesProvider>
      <Navigator />
    </MoviesProvider>
  </SafeAreaProvider>
);

export default App;
