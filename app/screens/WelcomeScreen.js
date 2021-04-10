import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native';

import AppButton from '../components/AppButton';
import routes from '../navigation/routes';


export default function WelcomeScreen({ navigation }) {

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
                <AppButton title='Login' onPress={() => navigation.navigate(routes.LOGIN)} >LOGIN</AppButton>
                <AppButton title='Register' onPress={() => navigation.navigate(routes.REGISTER)} color='secondary'>REGISTER</AppButton>
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