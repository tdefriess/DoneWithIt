import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {

    return (
        <View style={[styles.container, { flex: 1}]}>
            {imageUris.map(uri => (
                <View key={uri} style={styles.image}>
                    <ImageInput 
                        imageUri={uri}
                        onChangeImage={() => onRemoveImage(uri) }
                    />
                </View>
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
        marginRight: 10,
    }
})

export default ImageInputList;