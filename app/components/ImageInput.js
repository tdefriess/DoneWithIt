import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import defaultStyles from '../config/styles'
import Icon from './Icon';
import Screen from './Screen';

function ImageInput({ imageUri, onChangeImage }) {
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled)
                onChangeImage(result.uri);
        } catch (error) {
            console.log('Error reading an image', error)
        }
    }

    return (
        <Screen>
            <TouchableWithoutFeedback onPress={selectImage}>
                <View style={styles.container}>
                    { imageUri ?
                        <Image 
                            source={{ uri: imageUri }}
                            style={styles.image}
                        />
                    :
                        <Icon
                            borderRadius={20}
                            name="camera" 
                            size={120} 
                            backgroundColor={defaultStyles.colors.light}
                            iconColor={defaultStyles.colors.medium}
                        />
                    }
                </View>
            </TouchableWithoutFeedback>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        // height: 100,
        // width: 100,
        // backgroundColor: defaultStyles.colors.light,
        // borderRadius: 20
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 20
    }
})

export default ImageInput;