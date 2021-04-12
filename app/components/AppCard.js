import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from './AppText';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function AppCard({title, subTitle, imageUrl, onPress, thumbnailUrl}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} preview={{ uri: thumbnailUrl}} tine='light' uri={imageUrl} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        width: '100%',
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,

    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    title: {
        color: colors.black,
        marginBottom: 7
    }
})

export default AppCard;