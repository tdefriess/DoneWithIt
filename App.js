import React from 'react';
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

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
      headerStyle: { backgroundColor: "dodgerblue"},
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen 
      name="Tweets" 
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato"},
        headerTintColor: 'white',
      }}
    />
    <Stack.Screen
      name="TweetDetails" 
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id})}
    />
  </Stack.Navigator>
);

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

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: 'black'
    }}
  >
    <Tab.Screen
      name="Feed" 
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}