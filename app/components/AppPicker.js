import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';

function AppPicker({ icon, placeholder,  ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons size={20} color={defaultStyles.colors.medium} name={icon} style={styles.icon} />}
                    <AppText style={styles.text}>{placeholder}</AppText>
                    <MaterialCommunityIcons size={20} color={defaultStyles.colors.medium} name="chevron-down" />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animated="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                </Screen>
            </Modal>
        </>
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