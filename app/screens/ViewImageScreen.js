import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.close}></View>
            <View style={styles.delete}></View>
            <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: '100%'
    },
    buttonRow: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        top: 40
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    close: {
        height: 50,
        width: 50,
        backgroundColor: '#fc5c65',
        position: 'absolute',
        left: 30,
        top: 40
    },
    delete: {
        height: 50,
        width: 50,
        backgroundColor: '#4ecdc4',
        position: 'absolute',
        top: 40,
        right: 30
    }
})