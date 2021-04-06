import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, Button } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.bgImage}
        >
            <View style={styles.container}>
                <Image 
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.login}></View>
            <View style={styles.register}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    text: {
    },
    logo: {
        width: 100,
        height: 100,
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        width: "100%",
        alignItems: 'center'
    },
    login: {
        height: 70,
        width: '100%',
        backgroundColor: "#fc5c65",
    },
    register: {
        height: 70,
        width: "100%",
        backgroundColor: '#4ecdc4',
    }
})