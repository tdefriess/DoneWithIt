import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';

function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        textAlign: 'center',
        textAlignVertical: 'center',
        color: colors.white,
        fontWeight: 'bold'
    }
})

export default AppText;