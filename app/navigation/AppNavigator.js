import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from '../screens/ListingEditScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import colors from '../config/colors';
import FeedNavigator from './FeedNavigator';


const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.white,
        activeTintColor: colors.primary,
        inactiveBackgroundColor: colors.white,
        inactiveTintColor: colors.medium
      }}
    >
      <Tab.Screen
        name="Feed" 
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
        }}
      />
      <Tab.Screen 
        name="ListingEdit"
        component={ListingEditScreen}
        options={{
          // tabBarButton: () => <Icon name="plus" size={50} iconColor={colors.primary} backgroundColor={colors.medium} />,
        }}
      />
      <Tab.Screen name="Account" component={MyAccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
        }}
      
      />
    </Tab.Navigator>
  )

  export default AppNavigator;