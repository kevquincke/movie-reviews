import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigator from './navigators';

const App = () => (
  <SafeAreaProvider>
    <Navigator />
  </SafeAreaProvider>
);

export default App;
