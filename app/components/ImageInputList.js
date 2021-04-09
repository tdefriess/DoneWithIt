import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ImagePicker from 'expo-image-picker';

import ImageInput from './ImageInput';
import Screen from './Screen';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
    const [imageUri, setImageUri] = useState();

    // const selectImage = async () => {
    //     try {
    //       const result = await ImagePicker.launchImageLibraryAsync();
    //       if (!result.cancelled)
    //         setImageUri(result.uri);
    //     } catch (error) {
    //       console.log('Error reading an image:', error);
    //     }
    //   }

    return (
        <Screen>
            <View style={[styles.container, { flex: 1}]}>
                {imageUris.map((uri) => {
                    <Image
                        key={uri}
                        source={uri=uri}
                        style={styles.image}
                    />
                }) }
                <ImageInput 
                    imageUri={imageUri}
                    onChangeImage={(uri) => onAddImage(uri) }
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {},
    image: {
        height: 120,
        width: 120,
        borderRadius: 20
    }
})

export default ImageInputList;