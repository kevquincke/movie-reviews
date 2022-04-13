import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HOME_SCREEN } from '../constants/screens';
import HomeScreen from '../screens/HomeScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name={HOME_SCREEN} component={HomeScreen} />
  </Navigator>
);

export default AppStack;
