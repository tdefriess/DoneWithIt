import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, Button } from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/colors';

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
            <AppButton style={styles.login}>LOGIN</AppButton>
            <AppButton style={styles.register}>REGISTER</AppButton>
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
        backgroundColor: colors.primary,
    },
    register: {
        height: 70,
        width: "100%",
        backgroundColor: colors.secondary,
    }
})