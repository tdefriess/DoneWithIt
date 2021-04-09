import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import AppButton from '../components/AppButton';
import colors from '../config/colors';

export default function WelcomeScreen() {
    const navigation = useNavigation();

    return (
        <ImageBackground
            blurRadius={3}
            source={require("../assets/background.jpg")}
            style={styles.bgImage}
        >
            <View style={styles.container}>
                <Image 
                    style={styles.logo}
                    source={require('../assets/logo-red.png')}
                />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title='Login' onPress={() => navigation.navigate('Login')} >LOGIN</AppButton>
                <AppButton title='Register' onPress={() => navigation.navigate('Register')} color='secondary'>REGISTER</AppButton>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
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
        alignItems: 'center',
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    }
})