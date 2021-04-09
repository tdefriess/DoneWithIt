import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import defaultStyles from '../config/styles'
import Icon from './Icon';
import Screen from './Screen';

function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted)
          alert('You need to enable permission to access the library.')
      }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled)
                onChangeImage(result.uri);
        } catch (error) {
            console.log('Error reading an image: ImageInput.js', error)
        }
    }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No'}
        ])
    }

    return (
        <Screen>
            <TouchableWithoutFeedback style={{ flex: 1}} onPress={handlePress}>
                <View style={styles.container}>
                    {/* { imageUri ?
                        <Image 
                            source={{ uri: imageUri }}
                            style={styles.image}
                        />
                        // null
                    :
                        <Icon
                            borderRadius={20}
                            name="camera" 
                            size={120} 
                            backgroundColor={defaultStyles.colors.light}
                            iconColor={defaultStyles.colors.medium}
                        />
                    } */}
                    {!imageUri && <MaterialCommunityIcons color={defaultStyles.colors.medium} name='camera' size={40} />}
                    {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
                </View>
            </TouchableWithoutFeedback>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 100,
    },
    image: {
        height: '100%',
        width: '100%',
    }
})

export default ImageInput;