import React from 'react';
import { ScrollView, StatusBar, SafeAreaView } from 'react-native';

import Demo from '../shared/components/Demo';

const App = () => (
  <SafeAreaView>
    <StatusBar />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Demo />
    </ScrollView>
  </SafeAreaView>
);

export default App;
