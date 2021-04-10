import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MessagesScreen from '../screens/MessagesScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Account"
        component={MyAccountScreen}
      />
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
      />
    </Stack.Navigator>
  )

  export default AccountNavigator;