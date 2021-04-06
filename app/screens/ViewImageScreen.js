import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.close}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>
            <View style={styles.delete}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
            <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
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
        position: 'absolute',
        left: 30,
        top: 40
    },
    delete: {
        position: 'absolute',
        top: 40,
        right: 30
    }
})