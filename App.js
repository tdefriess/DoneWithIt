import React from 'react';
import { Button, MaskedViewBase, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import colors from './app/config/colors';
import MyAccountScreen from './app/screens/MyAccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';

const Link = () => {
  const navigation = useNavigation();

  return (
  <Button
    title="Click"
    onPress={() => navigation.navigate('TweetDetails')} />
)
}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button 
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })} />
    {/* <Link /> */}
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen 
      name="Feed" 
      component={ListingsScreen}
      options={{
        
      }}
    />
    <Stack.Screen
      name="Listing Details" 
      component={ListingDetailsScreen}
      options={{}}
    />
  </Stack.Navigator>
);

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

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
      headerShown: false
    }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{
      headerShown: false
    }} />
    <Stack.Screen name="Register" component={RegisterScreen} options={{
      headerShown: false
    }} />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
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
      name="EditListing"
      component={ListingEditScreen}
      options={{
        // tabBarButton: () => <Icon name="plus" size={50} iconColor={colors.primary} backgroundColor={colors.medium} />,
      }}
    />
    <Tab.Screen name="Account" component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
      }}
    
    />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}