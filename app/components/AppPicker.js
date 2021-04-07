import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';

function AppPicker({ icon, placeholder,  ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons size={20} color={defaultStyles.colors.medium} name={icon} style={styles.icon} />}
            <AppText style={styles.text}>{placeholder}</AppText>
            <MaterialCommunityIcons size={20} color={defaultStyles.colors.medium} name="chevron-down" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 20
    },
    text: {
        flex: 1
    }
})

export default AppPicker;