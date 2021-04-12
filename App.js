import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ id: 1}))
      const value = await AsyncStorage.getItem('person');
      const person = JSON.parse(value)
      console.log(person);
    } catch (error) {
      console.log(error)
    }
  }

  demo();

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}