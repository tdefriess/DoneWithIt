import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import defaultStyles from '../config/styles';

function PickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            {/* {icon && <View style={[styles.iconContainer, {backgroundColor: bgColor} ]}>
                <MaterialCommunityIcons size={60} color={defaultStyles.colors.white} name={icon} />
            </View>} */}
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