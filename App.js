import React from 'react';
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Screen from './app/components/Screen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

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

// const AuthNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
//       headerShown: false
//     }} />
//     <Stack.Screen name="Login" component={LoginScreen} options={{
//       headerShown: false
//     }} />
//     <Stack.Screen name="Register" component={RegisterScreen} options={{
//       headerShown: false
//     }} />
//   </Stack.Navigator>
// )

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}