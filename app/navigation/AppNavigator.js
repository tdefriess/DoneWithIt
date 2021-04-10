import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from '../screens/ListingEditScreen';
import colors from '../config/colors';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';


const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.white,
        activeTintColor: colors.primary,
        inactiveBackgroundColor: colors.white,
        inactiveTintColor: colors.medium,
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
        options={({ navigation }) => ({
          tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />,
        })}
      />
      <Tab.Screen name="Account" component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
        }}
      
      />
    </Tab.Navigator>
  )

  export default AppNavigator;