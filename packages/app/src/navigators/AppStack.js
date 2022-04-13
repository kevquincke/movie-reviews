import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from '../screens/HomeScreen';
import { HOME_SCREEN } from '../constants/screens';

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => (

  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name={HOME_SCREEN} component={Index} />
  </Navigator>
);

export default AppStack;
