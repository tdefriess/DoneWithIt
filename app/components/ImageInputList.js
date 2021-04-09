import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ImagePicker from 'expo-image-picker';

import ImageInput from './ImageInput';
import Screen from './Screen';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {

    return (
        <View style={[styles.container, { flex: 1}]}>
            {imageUris.map(uri => (
                <ImageInput 
                    imageUri={uri}
                    key={uri}
                    onChangeImage={() => onRemoveImage(uri) }
                />
            )) }
            <ImageInput onChangeImage={uri => onAddImage(uri)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 20
    }
})

export default ImageInputList;