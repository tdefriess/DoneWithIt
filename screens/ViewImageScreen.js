import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <View style={styles.close}></View>
                <View style={styles.delete}></View>
            </View>
            <Image style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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
        resizeMode: 'contain',
        width: '100%',
        bottom: 200
    },
    close: {
        height: 50,
        width: 50,
        backgroundColor: '#fc5c65',
        left: 20
    },
    delete: {
        height: 50,
        width: 50,
        backgroundColor: '#4ecdc4',
        right: 20
    }
})