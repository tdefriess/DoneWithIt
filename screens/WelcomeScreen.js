import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, Button } from 'react-native';

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../assets/background.jpg")}
                style={styles.bgImage}
            >
                <Image 
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </ImageBackground>
            <View style={styles.login}></View>
            <View style={styles.register}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        alignSelf: "center",
        top: 100
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        top: 100
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start",
        width: "100%"
    },
    login: {
        height: 60,
        width: '100%',
        backgroundColor: "#fc5c65",
    },
    register: {
        height: 60,
        width: "100%",
        backgroundColor: '#4ecdc4',
    }
})