import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { APP_STACK } from '../constants/screens';

import AppStack from './AppStack';

const { Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={APP_STACK} component={AppStack} />
    </Navigator>
  </NavigationContainer>
);

export default Navigation;
