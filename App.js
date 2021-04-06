import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import AppCard from './app/components/AppCard';

export default function App() {
  return (
    // <ViewImageScreen />
    <View 
    style={{
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100
    }}
    >
      <AppCard 
        title="Red jacket for sale!"
        subTitle="$100" 
        image={require("./app/assets/jacket.jpg")}
       ></AppCard>
      {/* <WelcomeScreen /> */}
      {/* <AppButton title="Login" onPress={() => console.log('tapped')} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
