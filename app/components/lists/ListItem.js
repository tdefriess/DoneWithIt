import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../../config/styles';
import colors from '../../config/colors';
import AppText from '../AppText';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions, showChevrons = false }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                    {showChevrons && <MaterialCommunityIcons style={{alignSelf: 'center'}} size={20} color={defaultStyles.colors.medium} name="chevron-right" />}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        width: '100%'
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: 'bold'
    }
})

export default ListItem;