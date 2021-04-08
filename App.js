import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput'

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert('You need to enable permission to access the library.')
  }

  useEffect(() => {
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled)
        setImageUri(result.uri);
    } catch (error) {
      console.log('Error reading an image:', error);
    }
  }

  return (
    // <Screen>
    //   <Button title="Select Image" onPress={selectImage} />
    //   <Image source={{ uri: imageUri}} style={{ width: 200, height:}} />
    // </Screen>
    <ImageInput
      imageUri={imageUri}
      onChangeImage={(uri) => setImageUri(uri)}
    />
  );
}