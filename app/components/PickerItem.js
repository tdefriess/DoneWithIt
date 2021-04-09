import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import AppText from './AppText';

function PickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        padding: 10,
    }
})

export default PickerItem;