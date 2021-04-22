import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import AccountNavigator from './AccountNavigator';
import colors from '../config/colors';
import expoPushTokensApi from '../api/expoPushTokens';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import routes from './routes';


const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      // const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      const permission = await Notifications.getPermissionsAsync();
      if (!permission.granted) return;
  
      const token = await Notifications.getExpoPushTokenAsync();
      await expoPushTokensApi.register(token.data);
      console.log(token.data);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  }

  return (
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
          tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
        })}
      />
      <Tab.Screen name="Account" component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
        }}
      
      />
    </Tab.Navigator>
  )}

  export default AppNavigator;