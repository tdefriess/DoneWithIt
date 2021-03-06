import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import AppCard from '../components/AppCard';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import ActivityIndicator from '../components/ActivityIndicator';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
    const {data: listings, error, loading, request: loadListings} = useApi(listingsApi.getListings);

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <>
            <ActivityIndicator visible={loading} style={{backgroundColor: 'white'}} />
            <Screen style={styles.screen}>
                {error && <>
                    <AppText>Couldn't retrieve the listings.</AppText>
                    <AppButton title="Retry" onPress={loadListings} /> 
                </>}
                <FlatList 
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                        <AppCard
                            title={item.title}
                            subTitle={"$" + item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                }
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;